// Decides which pages scripts/indexnow.mjs sends to IndexNow. Kept apart from the sending so it can be
// tested without the network (tests/indexnow.test.mjs).
import { createHash } from 'node:crypto';

// The format of the fingerprints kept between runs. Raise it when `content` changes what it reads.
export const VERSION = 2;

const attr = (tag, name) => (tag.match(new RegExp(`\\b${name}=(["'])([\\s\\S]*?)\\1`, 'i')) || [])[2] || '';
const tagWith = (html, tag, key, value) =>
  (html.match(new RegExp(`<${tag}\\b[^>]*\\b${key}=["']${value}["'][^>]*>`, 'i')) || [''])[0];

// The part of a page that is its own: the title, the description, the canonical address, the robots rule
// and what is inside <main>. The header, the footer, scripts, styles and the names of the built CSS and JS
// files are left out. They change on most deploys (a new link in the footer, a new hash in a file name)
// while the page says what it said before, and IndexNow asks not to be told about unchanged pages.
export function content(html) {
  const title = ((html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').trim();
  const description = attr(tagWith(html, 'meta', 'name', 'description'), 'content');
  const canonical = attr(tagWith(html, 'link', 'rel', 'canonical'), 'href');
  const robots = attr(tagWith(html, 'meta', 'name', 'robots'), 'content');
  const inner = (html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i) || html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i) || [null, html])[1];
  const body = inner
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '')
    .replace(/\sdata-astro-cid-[\w-]+(="[^"]*")?/g, '')
    .replace(/\/_astro\/[^"'\s)>]+/g, '/_astro/file')
    .replace(/\s+/g, ' ')
    .trim();
  return [title, description, canonical, robots, body].join('\n');
}

export const fingerprint = (html) => createHash('sha256').update(content(html)).digest('hex');

// What to send, given the fingerprints kept from the last run (`previous`, or null when there are none)
// and the ones just taken (`current`: address -> fingerprint).
//   changed  new pages and pages whose content differs
//   removed  pages that were there last time and are gone
//   rebased  true when the kept fingerprints are in an older format and cannot be compared: then only
//            pages that are new are sent, and the rest starts from the fingerprints taken now
export function plan(previous, current) {
  const urls = Object.keys(current);
  if (!previous || typeof previous !== 'object') return { changed: urls, removed: [], rebased: false };
  const kept = previous.pages && typeof previous.pages === 'object';
  const sameFormat = kept && previous.v === VERSION;
  // The first format was a plain list of address -> hash of the whole HTML, with no version.
  const before = kept ? previous.pages : Object.fromEntries(Object.entries(previous).filter(([key]) => /^https?:\/\//.test(key)));
  const changed = urls.filter((url) => (sameFormat ? before[url] !== current[url] : !(url in before)));
  const removed = Object.keys(before).filter((url) => !(url in current));
  return { changed, removed, rebased: !sameFormat };
}

export const state = (current) => ({ v: VERSION, pages: current });
