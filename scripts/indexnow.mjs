// Submits silitlabs.com pages to IndexNow, which shares them with Bing, Yandex, Naver, Seznam, Yep
// and the other participating search engines. Run by .github/workflows/indexnow.yml after each
// production deploy.
//
// IndexNow asks for new, changed and removed URLs only, never unchanged ones. So the script keeps a
// fingerprint of every page's own content in .indexnow/pages.json (the workflow keeps that file between
// runs as an artifact) and submits only what differs. What counts as a page's own content is in
// indexnow-pages.mjs. With no fingerprints yet, it submits every page in the sitemap.
//
// A trial run against a local build reads the pages from another address and sends nothing:
//   INDEXNOW_ORIGIN=http://localhost:4330 INDEXNOW_DRY_RUN=1 node scripts/indexnow.mjs
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fingerprint, plan, state } from './indexnow-pages.mjs';

const SITE = 'https://silitlabs.com';
const HOST = 'silitlabs.com';
// Public by design: IndexNow checks that the same key is served at /<key>.txt (public/<key>.txt).
const KEY = '2a0f480c411a530423ba08e4a4bbdcfc';
const STATE_DIR = '.indexnow';
const STATE = `${STATE_DIR}/pages.json`;
const ORIGIN = (process.env.INDEXNOW_ORIGIN || SITE).replace(/\/$/, '');
const DRY_RUN = Boolean(process.env.INDEXNOW_DRY_RUN);
const LOCAL = ORIGIN !== SITE;
if (LOCAL && !DRY_RUN) throw new Error('INDEXNOW_ORIGIN is for trial runs: set INDEXNOW_DRY_RUN=1 with it.');

// Where to read a page of the site from: the live site, or the local build in a trial run.
const at = (url) => (url.startsWith(SITE) ? ORIGIN + url.slice(SITE.length) : url);

async function get(url) {
  const res = await fetch(at(url), { headers: { 'user-agent': 'silitlabs-indexnow (+https://silitlabs.com)' } });
  if (!res.ok) throw new Error(`GET ${at(url)} returned ${res.status}`);
  return res.text();
}

const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);

// Every page listed in the sitemap.
const urls = [];
for (const sitemap of locs(await get(`${SITE}/sitemap-index.xml`))) urls.push(...locs(await get(sitemap)));
if (urls.length === 0) throw new Error('The sitemap lists no pages.');

// IndexNow rejects the submission if the key file is missing or different.
if ((await get(`${SITE}/${KEY}.txt`)).trim() !== KEY) throw new Error('The IndexNow key file does not match the key.');

let previous = null;
try {
  previous = JSON.parse(await readFile(STATE, 'utf8'));
} catch {
  console.log('No fingerprints from an earlier run, so every page is submitted.');
}

const current = {};
for (const url of urls) {
  let html;
  try {
    html = await get(url);
  } catch (err) {
    // Pages served by another project (the report pages) are not in a local build.
    if (!LOCAL) throw err;
    console.log(`  not in the local build, left out: ${url}`);
    continue;
  }
  current[url] = fingerprint(html);
}

const { changed, removed, rebased } = plan(previous, current);
const urlList = [...changed, ...removed];
if (rebased) console.log('The fingerprints from the last run are in an older format: only pages that are new are submitted this time.');

if (urlList.length === 0) {
  console.log(`IndexNow: no page changed (${urls.length} checked).`);
} else if (DRY_RUN) {
  console.log(`IndexNow trial run, nothing sent: ${changed.length} new or changed and ${removed.length} removed pages (${urls.length} in the sitemap).`);
  for (const url of urlList) console.log(`  ${url}`);
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
await writeFile(STATE, JSON.stringify(state(current), null, 1));
