// The llms.txt checker's reader: POST { site } -> what /llms.txt, /llms-full.txt and /robots.txt of that site say.
// A Vercel function next to the static site (the folder api/ is deployed as functions; _lib is not a route).
// It only reads those three public files, from the site's own host, through the guard in _lib/fetch-safe.js.
// Requests have to come from a page of this site, and one visitor gets a limited number per ten minutes.
import { getText } from './_lib/fetch-safe.js';
import { normalizeSite, checkLlms, checkFull, checkRobots, movedTo } from './_lib/llms.js';

const LIMIT = 20; // checks per visitor ...
const WINDOW = 10 * 60 * 1000; // ... in ten minutes (per running copy of the function: a brake, not a meter)
const KEEP = 5 * 60 * 1000; // one site's result is reused for five minutes
const hits = new Map();
const cache = new Map();

const bare = (h) => String(h || '').toLowerCase().replace(/^www\./, '').replace(/:\d+$/, '');
const hostOf = (url) => { try { return bare(new URL(url).host); } catch (e) { return ''; } };

function fromThisSite(req) {
  const from = hostOf(req.headers.origin || req.headers.referer || '');
  return !!from && (from === bare(req.headers.host) || from === 'silitlabs.com');
}

function allowed(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  if (list.length >= LIMIT) { hits.set(ip, list); return false; }
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW)) hits.delete(k);
  return true;
}

async function readBody(req) {
  if (req.body !== undefined) { // Vercel has parsed it already
    if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch (e) { return {}; } }
    return req.body || {};
  }
  let raw = '';
  for await (const chunk of req) { raw += chunk; if (raw.length > 4096) return {}; }
  try { return JSON.parse(raw || '{}'); } catch (e) { return {}; }
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.end(JSON.stringify(body));
}

// Reads the three files with `get(path)` and says what they mean. -> the result, or { error } when the site did
// not answer at all (then the site itself is the problem, not its files).
export async function inspect(host, get) {
  const started = Date.now();
  const [llms, full, robots] = await Promise.all([get('/llms.txt'), get('/llms-full.txt'), get('/robots.txt')]);
  if ([llms, full, robots].every((r) => !r.status)) {
    const to = movedTo(llms) || movedTo(robots);
    if (to) return { error: `${host} sends its visitors to ${to}. Check that address instead.` };
    return { error: llms.error === 'no such site' ? `We could not find ${host}. Check the spelling, or try again in a minute.` : `We could not reach ${host} (${llms.error || 'no answer'}). Try again in a minute.` };
  }
  return { host, llms: checkLlms(llms), full: checkFull(full), robots: checkRobots(robots), ms: Date.now() - started };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return send(res, 405, { error: 'Use the form on the page.' }); }
  if (!fromThisSite(req)) return send(res, 403, { error: 'This check only runs from silitlabs.com.' });
  const ip = String(req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '').split(',')[0].trim() || 'unknown';
  if (!allowed(ip)) return send(res, 429, { error: 'That is a lot of checks in a short time. Try again in a few minutes.' });

  const body = await readBody(req);
  const site = normalizeSite(body && body.site);
  if (site.error) return send(res, 400, { error: site.error });
  const host = site.host;

  const kept = cache.get(host);
  if (kept && Date.now() - kept.at < KEEP) return send(res, 200, kept.data);

  const hosts = [host, host.startsWith('www.') ? host.slice(4) : 'www.' + host];
  const data = await inspect(host, (path) => getText(`https://${host}${path}`, { allowedHosts: hosts, timeoutMs: 6000, maxBytes: 512000 }));
  if (data.error) return send(res, 200, data);
  cache.set(host, { at: Date.now(), data });
  if (cache.size > 300) cache.delete(cache.keys().next().value);
  return send(res, 200, data);
}
