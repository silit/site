// What the llms.txt checker concludes from the three files it reads. No network here, so it can be tested as is.
// The format rules follow the proposal at llmstxt.org (v2): a title is the only required part; a summary in a
// blockquote, free text, and "## " sections holding lists of links are optional.

const EXAMPLE = 'yourbusiness.com';

// What a visitor typed -> the host to check. { host } or { error }.
export function normalizeSite(input) {
  let s = String(input || '').trim().toLowerCase();
  if (!s) return { error: `Type a website address, like ${EXAMPLE}.` };
  if (s.length > 200) return { error: `That address is too long. Try the home page, like ${EXAMPLE}.` };
  if (!/^[a-z][a-z0-9+.-]*:\/\//.test(s)) s = 'https://' + s;
  let u;
  try { u = new URL(s); } catch (e) { return { error: `That does not look like a website address. Try ${EXAMPLE}.` }; }
  if (!/^https?:$/.test(u.protocol)) return { error: `Type a website address, like ${EXAMPLE}.` };
  if (u.port) return { error: 'Addresses with a port number cannot be checked.' };
  const host = u.hostname;
  // public names only: no IP addresses, no single-label names such as localhost
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(host) || /^[0-9.]+$/.test(host)) return { error: `Type a public website address, like ${EXAMPLE}.` };
  return { host };
}

const kb = (n) => (n < 1024 ? `${n} bytes` : `${Math.round(n / 102.4) / 10} KB`);
const short = (s, n = 70) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
const looksHtml = (text, type) => /^\s*<(!doctype\s+html|html|head|body)\b/i.test(text) || (/text\/html/i.test(type || '') && /<[a-z!][^>]*>/i.test(text.slice(0, 600)));
const reason = (res) => (res.error ? res.error : `the server answered ${res.status}`);

// res: what getText returned for /llms.txt.
// -> { state, url, status, type, bytes, title, sections, links, items: [{ level, text }] }
// state: valid | notes | invalid | html | missing | unreadable. level: ok | warn | bad | info.
export function checkLlms(res) {
  const out = { state: 'missing', url: res.url || '', status: res.status || 0, type: '', bytes: 0, title: '', sections: 0, links: 0, items: [] };
  const add = (level, text) => out.items.push({ level, text });
  if (!res.ok) {
    if (res.status === 404 || res.status === 410) { add('info', `There is no file at /llms.txt (the server answered ${res.status}).`); return out; }
    out.state = 'unreadable';
    add('warn', `We could not read /llms.txt: ${reason(res)}.`);
    return out;
  }
  const type = String(res.contentType || '').split(';')[0].trim().toLowerCase();
  const text = String(res.text || '').replace(/^﻿/, '');
  out.type = type;
  out.bytes = Buffer.byteLength(text, 'utf8');
  if (looksHtml(text, type)) {
    out.state = 'html';
    add('bad', 'The address /llms.txt answers with a web page, not a text file. Many sites send their home page or a "not found" page for any address. To a crawler that means there is no llms.txt.');
    return out;
  }
  if (!text.trim()) { out.state = 'invalid'; add('bad', 'The file is empty.'); return out; }

  // read line by line, skipping what is inside code fences
  const lines = [];
  let fenced = false;
  for (const raw of text.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(raw)) { fenced = !fenced; continue; }
    if (!fenced) lines.push(raw);
  }
  const first = lines.findIndex((l) => l.trim());
  const h1 = (l) => /^#\s+\S/.test(l);
  const h2 = (l) => /^##\s+\S/.test(l);
  const firstH2 = lines.findIndex(h2);

  if (first >= 0 && h1(lines[first])) {
    out.title = lines[first].replace(/^#\s+/, '').trim();
    add('ok', `Starts with a title: "${short(out.title, 60)}".`);
  } else {
    add('bad', 'No title on the first line. The file has to start with a line that begins with one # and names the site, like "# Your Business".');
  }
  const titles = lines.filter(h1).length;
  if (titles > 1) add('warn', `Has ${titles} lines that begin with one #. Only the title should; sections begin with ##.`);

  const head = lines.slice(first + 1, firstH2 < 0 ? lines.length : firstH2);
  if (head.some((l) => /^>\s*\S/.test(l))) add('ok', 'Has a summary under the title.');
  else add('warn', 'No summary. A line that begins with > under the title should say in a sentence or two what the site is.');

  // sections and their link lists
  const names = [];
  let inSection = false;
  let valid = 0;
  const loose = [];
  const urls = [];
  for (const l of lines) {
    if (h2(l)) { names.push(l.replace(/^##\s+/, '').trim()); inSection = true; continue; }
    if (!inSection || !/^\s*[-*+]\s+\S/.test(l)) continue;
    const m = l.match(/^\s*[-*+]\s+\[[^\]]+\]\(\s*([^)\s]+)[^)]*\)/);
    if (m) { valid += 1; urls.push(m[1]); } else loose.push(l.trim());
  }
  out.sections = names.length;
  out.links = valid;
  if (!names.length) add('warn', 'No sections. Without "## " sections that list links, the file gives a reader nothing to open.');
  else if (!valid) add('warn', `Has ${names.length} ${names.length === 1 ? 'section' : 'sections'} but no links in them. A link is written "- [Title](https://address): a short note".`);
  else add('ok', `Lists ${valid} ${valid === 1 ? 'link' : 'links'} in ${names.length} ${names.length === 1 ? 'section' : 'sections'}.`);
  if (loose.length) add('warn', `${loose.length} list ${loose.length === 1 ? 'line is' : 'lines are'} not written as a link, for example "${short(loose[0])}". Use "- [Title](https://address): a short note".`);

  const relative = urls.filter((u) => !/^https?:\/\//i.test(u));
  if (relative.length) add('warn', `${relative.length} ${relative.length === 1 ? 'link is' : 'links are'} not a full address, for example "${short(relative[0])}". Write links with https:// and the domain.`);
  const plain = urls.filter((u) => /^http:\/\//i.test(u)).length;
  if (plain) add('info', `${plain} ${plain === 1 ? 'link uses' : 'links use'} http:// where https:// is expected.`);

  const deep = lines.filter((l) => /^#{3,6}\s+\S/.test(l)).length;
  if (deep) add('warn', `Uses ${deep} ${deep === 1 ? 'heading' : 'headings'} below ##. The format only defines the title (#) and sections (##).`);
  if (names.some((n) => n.toLowerCase() === 'optional')) add('info', 'Has an "Optional" section: links a reader may skip when it needs a shorter version.');

  if (!/^text\/(plain|markdown|x-markdown)$/.test(type)) add('warn', type ? `Served as ${type}. Plain text (text/plain) or Markdown (text/markdown) is what readers expect.` : 'Served without a content type. Plain text (text/plain) or Markdown (text/markdown) is what readers expect.');
  if (res.truncated) add('warn', 'The file is larger than 500 KB, so we read only the start of it. It is meant to be a short index.');
  else if (out.bytes > 100 * 1024) add('warn', `The file is ${kb(out.bytes)}. It is meant to be a short index; long content belongs on the pages it links to.`);

  out.state = out.items.some((i) => i.level === 'bad') ? 'invalid' : out.items.some((i) => i.level === 'warn') ? 'notes' : 'valid';
  return out;
}

// /llms-full.txt is not part of the proposal, but documentation tools publish it. We only say whether it is there.
export function checkFull(res) {
  const text = String(res.text || '');
  const found = !!res.ok && !!text.trim() && !looksHtml(text, res.contentType);
  return { found, bytes: found ? Buffer.byteLength(text, 'utf8') : 0, size: found ? kb(Buffer.byteLength(text, 'utf8')) : '' };
}

// The crawlers the AI Visibility Report looks at, in the same order (BOTS in the app's audit.js).
export const BOTS = [
  { name: 'OAI-SearchBot', job: 'ChatGPT search', kind: 'search' },
  { name: 'ChatGPT-User', job: 'ChatGPT opening a page for a user', kind: 'search' },
  { name: 'PerplexityBot', job: 'Perplexity', kind: 'search' },
  { name: 'Claude-SearchBot', job: 'Claude search', kind: 'search' },
  { name: 'Googlebot', job: 'Google Search, AI Overviews and AI Mode', kind: 'search' },
  { name: 'Bingbot', job: 'Bing and Copilot', kind: 'search' },
  { name: 'GPTBot', job: 'OpenAI model training', kind: 'training' },
  { name: 'ClaudeBot', job: 'Anthropic model training', kind: 'training' },
  { name: 'Google-Extended', job: 'Gemini training and grounding', kind: 'training' },
  { name: 'CCBot', job: 'Common Crawl, used to train many models', kind: 'training' }
];

// Is the home page ("/") disallowed for this user agent? Uses the group that names it, else the "*" group.
// -> { blocked, by }: by is 'named' when a group names the crawler, 'all' for the "*" group, '' when no group applies.
export function robotsRule(robots, ua) {
  const groups = [];
  let cur = null;
  let lastWasAgent = false;
  for (const raw of String(robots || '').split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, '').trim();
    const i = line.indexOf(':');
    if (i < 0) continue;
    const k = line.slice(0, i).trim().toLowerCase();
    const v = line.slice(i + 1).trim();
    if (k === 'user-agent') {
      if (!lastWasAgent || !cur) { cur = { agents: [], rules: [] }; groups.push(cur); }
      cur.agents.push(v.toLowerCase());
      lastWasAgent = true;
    } else if (cur && (k === 'disallow' || k === 'allow')) {
      cur.rules.push({ allow: k === 'allow', path: v });
      lastWasAgent = false;
    } else lastWasAgent = false;
  }
  const name = ua.toLowerCase();
  let group = groups.find((g) => g.agents.some((a) => a !== '*' && (name.includes(a) || a === name)));
  const by = group ? 'named' : 'all';
  if (!group) group = groups.find((g) => g.agents.includes('*'));
  if (!group) return { blocked: false, by: '' };
  const disallowRoot = group.rules.some((r) => !r.allow && r.path === '/');
  const allowRoot = group.rules.some((r) => r.allow && (r.path === '/' || r.path === '/*' || r.path === ''));
  return { blocked: disallowRoot && !allowRoot, by };
}

// res: what getText returned for /robots.txt.
// -> { state, note, bots: [{ name, job, kind, blocked, by }], searchBlocked, trainingBlocked }
// state: read | missing | html | unreadable (then bots is empty: we cannot tell).
export function checkRobots(res) {
  const out = { state: 'read', note: '', bots: [], searchBlocked: 0, trainingBlocked: 0 };
  let rules = '';
  if (!res.ok) {
    if (res.status === 404 || res.status === 410) { out.state = 'missing'; out.note = 'There is no robots.txt, so no crawler is shut out.'; } else {
      out.state = 'unreadable';
      out.note = `We could not read robots.txt: ${reason(res)}.`;
      return out;
    }
  } else if (looksHtml(String(res.text || ''), res.contentType)) {
    out.state = 'html';
    out.note = 'The address /robots.txt answers with a web page, not a rules file. Crawlers treat that as no rules.';
  } else rules = String(res.text || '');
  out.bots = BOTS.map((b) => Object.assign({}, b, robotsRule(rules, b.name)));
  out.searchBlocked = out.bots.filter((b) => b.kind === 'search' && b.blocked).length;
  out.trainingBlocked = out.bots.filter((b) => b.kind === 'training' && b.blocked).length;
  return out;
}
