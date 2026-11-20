// Submits silitlabs.com pages to IndexNow, which shares them with Bing, Yandex, Naver, Seznam, Yep
// and the other participating search engines. Run by .github/workflows/indexnow.yml after each
// production deploy.
//
// IndexNow asks for new, changed and removed URLs only, never unchanged ones. So the script keeps a
// fingerprint of every page's HTML in .indexnow/pages.json (kept between runs in the Actions cache)
// and submits only what differs. With no fingerprints yet, it submits every page in the sitemap.
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const SITE = 'https://silitlabs.com';
const HOST = 'silitlabs.com';
// Public by design: IndexNow checks that the same key is served at /<key>.txt (public/<key>.txt).
const KEY = '2a0f480c411a530423ba08e4a4bbdcfc';
const STATE_DIR = '.indexnow';
const STATE = `${STATE_DIR}/pages.json`;

async function get(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'silitlabs-indexnow (+https://silitlabs.com)' } });
  if (!res.ok) throw new Error(`GET ${url} returned ${res.status}`);
  return res.text();
}

const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);

// Every page listed in the sitemap.
const urls = [];
for (const sitemap of locs(await get(`${SITE}/sitemap-index.xml`))) urls.push(...locs(await get(sitemap)));
if (urls.length === 0) throw new Error('The sitemap lists no pages.');

// IndexNow rejects the submission if the key file is missing or different.
if ((await get(`${SITE}/${KEY}.txt`)).trim() !== KEY) throw new Error('The IndexNow key file does not match the key.');

let previous = {};
try {
  previous = JSON.parse(await readFile(STATE, 'utf8'));
} catch {
  console.log('No fingerprints from an earlier run, so every page is submitted.');
}

const current = {};
const changed = [];
for (const url of urls) {
  const hash = createHash('sha256').update(await get(url)).digest('hex');
  current[url] = hash;
  if (previous[url] !== hash) changed.push(url);
}
const removed = Object.keys(previous).filter((url) => !(url in current));
const urlList = [...changed, ...removed];

if (urlList.length === 0) {
  console.log(`IndexNow: no page changed (${urls.length} checked).`);
} else {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
  });
  console.log(`IndexNow: HTTP ${res.status} for ${changed.length} new or changed and ${removed.length} removed pages (${urls.length} in the sitemap).`);
  for (const url of urlList) console.log(`  ${url}`);
  if (res.status !== 200 && res.status !== 202) {
    console.log(await res.text());
    // Keep the old fingerprints, so the next run submits these pages again.
    process.exit(1);
  }
}

await mkdir(STATE_DIR, { recursive: true });
await writeFile(STATE, JSON.stringify(current, null, 1));
