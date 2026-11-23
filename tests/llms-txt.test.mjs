// Tests for the llms.txt checker's reader (api/llms-txt.js). Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { normalizeSite, checkLlms, checkFull, checkRobots, robotsRule, BOTS } from '../api/_lib/llms.js';
import { getText, privateIp } from '../api/_lib/fetch-safe.js';
import handler, { inspect } from '../api/llms-txt.js';

const ok = (text, contentType = 'text/plain; charset=utf-8', extra = {}) => Object.assign({ ok: true, status: 200, url: 'https://example.com/llms.txt', contentType, text }, extra);
const miss = (status = 404) => ({ ok: false, status, url: 'https://example.com/llms.txt', contentType: 'text/html', text: '<html>not found</html>' });
const levels = (r) => r.items.map((i) => i.level).join(',');
const says = (r, re) => r.items.some((i) => re.test(i.text));

const GOOD = `# Harbor Books

> An independent bookshop in Leith that sells new and second-hand books and ships across the UK.

Opening hours and events change weekly; the pages below are kept up to date.

## Shop

- [Opening hours and address](https://harborbooks.example/visit): where we are and when we are open
- [Delivery and returns](https://harborbooks.example/delivery)

## Optional

- [Our story](https://harborbooks.example/about): how the shop started
`;

test('normalizeSite accepts what people type and refuses what is not a public site', () => {
  assert.equal(normalizeSite('example.com').host, 'example.com');
  assert.equal(normalizeSite('  HTTPS://Www.Example.com/shop?x=1 ').host, 'www.example.com');
  assert.equal(normalizeSite('http://sub.example.co.uk').host, 'sub.example.co.uk');
  for (const bad of ['', 'localhost', '127.0.0.1', 'http://[::1]/', 'example.com:8080', 'ftp://example.com', 'exa mple', 'x'.repeat(250) + '.com', 'http://10.0.0.1'])
    assert.ok(normalizeSite(bad).error, 'refused: ' + bad.slice(0, 30));
});

test('a well-formed file is valid, with its title, sections and links counted', () => {
  const r = checkLlms(ok(GOOD));
  assert.equal(r.state, 'valid');
  assert.equal(r.title, 'Harbor Books');
  assert.equal(r.sections, 2);
  assert.equal(r.links, 3);
  assert.ok(says(r, /Optional/));
  assert.ok(!/warn|bad/.test(levels(r)));
});

test('text/markdown and a byte-order mark are fine', () => {
  assert.equal(checkLlms(ok('﻿' + GOOD, 'text/markdown')).state, 'valid');
});

test('a missing file, an unreadable one and a web page in its place are told apart', () => {
  assert.equal(checkLlms(miss(404)).state, 'missing');
  assert.equal(checkLlms(miss(410)).state, 'missing');
  assert.equal(checkLlms({ ok: false, status: 0, url: 'u', error: 'timed out' }).state, 'unreadable');
  assert.equal(checkLlms({ ok: false, status: 403, url: 'u' }).state, 'unreadable');
  assert.ok(says(checkLlms({ ok: false, status: 403, url: 'u' }), /answered 403/));
  assert.equal(checkLlms(ok('<!DOCTYPE html><html><head><title>Home</title></head></html>', 'text/html')).state, 'html');
  assert.equal(checkLlms(ok('  <html lang="en"><body>app</body></html>', 'text/plain')).state, 'html');
  assert.equal(checkLlms(ok('   \n ')).state, 'invalid');
});

test('format problems are named one by one', () => {
  let r = checkLlms(ok('Harbor Books\n\n## Shop\n- [Hours](https://x.example/visit)\n'));
  assert.equal(r.state, 'invalid');
  assert.ok(says(r, /No title on the first line/));

  r = checkLlms(ok('# Harbor Books\n\n## Shop\n- [Hours](https://x.example/visit)\n'));
  assert.equal(r.state, 'notes');
  assert.ok(says(r, /No summary/));

  r = checkLlms(ok('# Harbor Books\n> A bookshop.\n'));
  assert.ok(says(r, /No sections/));

  r = checkLlms(ok('# Harbor Books\n> A bookshop.\n## Shop\n- Opening hours: https://x.example/visit\n- [Delivery](/delivery)\n- [Old](http://x.example/old)\n'));
  assert.equal(r.links, 2);
  assert.ok(says(r, /1 list line is not written as a link/));
  assert.ok(says(r, /1 link is not a full address/));
  assert.ok(says(r, /1 link uses http:/));

  r = checkLlms(ok('# A\n> s\n# B\n## Shop\n### Deep\n- [x](https://x.example/)\n'));
  assert.ok(says(r, /2 lines that begin with one #/));
  assert.ok(says(r, /1 heading below ##/));

  r = checkLlms(ok(GOOD, 'application/octet-stream'));
  assert.equal(r.state, 'notes');
  assert.ok(says(r, /Served as application\/octet-stream/));

  r = checkLlms(ok(GOOD + '\n' + 'x'.repeat(120 * 1024)));
  assert.ok(says(r, /meant to be a short index/));
  r = checkLlms(ok(GOOD, 'text/plain', { truncated: true }));
  assert.ok(says(r, /larger than 500 KB/));
});

test('what is inside a code fence is not read as headings or links', () => {
  const r = checkLlms(ok('# Tool\n> A tool.\n\n```\n# not a title\n## not a section\n- [x](/relative)\n```\n\n## Docs\n- [Start](https://tool.example/start)\n'));
  assert.equal(r.state, 'valid');
  assert.equal(r.sections, 1);
  assert.equal(r.links, 1);
});

test('llms-full.txt is only reported when it is really there', () => {
  assert.equal(checkFull(ok('# Everything\n' + 'a'.repeat(3000))).found, true);
  assert.equal(checkFull(ok('<!doctype html><html></html>', 'text/html')).found, false);
  assert.equal(checkFull(miss()).found, false);
});

test('robots.txt: the group that names a crawler wins over the group for all', () => {
  const robots = 'User-agent: *\nDisallow: /\n\nUser-agent: OAI-SearchBot\nUser-agent: Googlebot # search\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /\n';
  assert.deepEqual(robotsRule(robots, 'OAI-SearchBot'), { blocked: false, by: 'named' });
  assert.deepEqual(robotsRule(robots, 'Googlebot'), { blocked: false, by: 'named' });
  assert.deepEqual(robotsRule(robots, 'GPTBot'), { blocked: true, by: 'named' });
  assert.deepEqual(robotsRule(robots, 'PerplexityBot'), { blocked: true, by: 'all' });
  assert.deepEqual(robotsRule('User-agent: *\nDisallow: /admin\n', 'ClaudeBot'), { blocked: false, by: 'all' });
  assert.deepEqual(robotsRule('User-agent: *\nDisallow: /\nAllow: /\n', 'ClaudeBot'), { blocked: false, by: 'all' });
  assert.deepEqual(robotsRule('Sitemap: https://x.example/sitemap.xml\n', 'ClaudeBot'), { blocked: false, by: '' });
  assert.deepEqual(robotsRule('User-agent: *\nDisallow:\n', 'ClaudeBot'), { blocked: false, by: 'all' });
});

test('checkRobots counts the search and the training crawlers that are shut out', () => {
  const r = checkRobots(ok('User-agent: GPTBot\nUser-agent: CCBot\nDisallow: /\n\nUser-agent: Claude-SearchBot\nDisallow: /\n'));
  assert.equal(r.state, 'read');
  assert.equal(r.bots.length, BOTS.length);
  assert.equal(r.searchBlocked, 1);
  assert.equal(r.trainingBlocked, 2);
  assert.equal(r.bots.find((b) => b.name === 'Claude-SearchBot').blocked, true);

  const none = checkRobots(miss());
  assert.equal(none.state, 'missing');
  assert.equal(none.bots.every((b) => !b.blocked), true);

  const page = checkRobots(ok('<!doctype html><html></html>', 'text/html'));
  assert.equal(page.state, 'html');
  assert.equal(page.searchBlocked, 0);

  const down = checkRobots({ ok: false, status: 503, url: 'u' });
  assert.equal(down.state, 'unreadable');
  assert.equal(down.bots.length, 0);
});

test('inspect puts the three files together, and says so when the site does not answer at all', async () => {
  const files = { '/llms.txt': ok(GOOD), '/llms-full.txt': miss(), '/robots.txt': ok('User-agent: *\nDisallow:\n') };
  const r = await inspect('harborbooks.example', async (p) => files[p]);
  assert.equal(r.host, 'harborbooks.example');
  assert.equal(r.llms.state, 'valid');
  assert.equal(r.full.found, false);
  assert.equal(r.robots.state, 'read');

  const gone = await inspect('nosuch.example', async () => ({ ok: false, status: 0, url: 'u', error: 'no such site' }));
  assert.match(gone.error, /could not find nosuch\.example/);
  const slow = await inspect('slow.example', async () => ({ ok: false, status: 0, url: 'u', error: 'timed out' }));
  assert.match(slow.error, /could not reach slow\.example \(timed out\)/);
});

// a stand-in for a request and its answer
function call(method, headers, body) {
  return new Promise((resolve) => {
    const req = { method, headers: Object.assign({ host: 'silitlabs.com' }, headers), body };
    const res = { headers: {}, setHeader(k, v) { this.headers[k.toLowerCase()] = v; }, end(text) { resolve({ status: this.statusCode, headers: this.headers, json: JSON.parse(text) }); } };
    handler(req, res);
  });
}

test('the function only answers a POST that comes from a page of this site', async () => {
  assert.equal((await call('GET', { origin: 'https://silitlabs.com' })).status, 405);
  assert.equal((await call('POST', {}, { site: 'example.com' })).status, 403);
  assert.equal((await call('POST', { origin: 'https://evil.example' }, { site: 'example.com' })).status, 403);
  const bad = await call('POST', { origin: 'https://silitlabs.com', 'x-forwarded-for': '198.51.100.7' }, { site: 'localhost' });
  assert.equal(bad.status, 400);
  assert.match(bad.json.error, /public website address/);
  assert.equal(bad.headers['cache-control'], 'no-store');
  // a preview address counts as this site when the page and the function are on the same host
  const preview = await call('POST', { host: 'site-abc.vercel.app', referer: 'https://site-abc.vercel.app/tools/llms-txt-checker/', 'x-forwarded-for': '198.51.100.8' }, '{"site":""}');
  assert.equal(preview.status, 400);
});

test('one visitor is slowed down after twenty checks in ten minutes', async () => {
  const h = { origin: 'https://silitlabs.com', 'x-forwarded-for': '203.0.113.9, 10.0.0.1' };
  for (let i = 0; i < 20; i++) assert.equal((await call('POST', h, { site: '' })).status, 400);
  assert.equal((await call('POST', h, { site: '' })).status, 429);
  assert.equal((await call('POST', Object.assign({}, h, { 'x-forwarded-for': '203.0.113.10' }), { site: '' })).status, 400);
});

test('private and special addresses are recognised', () => {
  for (const ip of ['127.0.0.1', '10.1.2.3', '172.16.0.1', '192.168.1.1', '169.254.169.254', '100.64.0.1', '0.0.0.0', '::1', 'fd00::1', 'fe80::1', '::ffff:10.0.0.1']) assert.equal(privateIp(ip), true, ip);
  for (const ip of ['8.8.8.8', '93.184.216.34', '2606:4700::1111']) assert.equal(privateIp(ip), false, ip);
});

test('the reader follows redirects only on the site itself, caps the size and keeps its deadline', async () => {
  const server = http.createServer((req, res) => {
    if (req.url === '/llms.txt') { res.writeHead(200, { 'Content-Type': 'text/plain' }); return res.end(GOOD); }
    if (req.url === '/moved') { res.writeHead(301, { Location: '/llms.txt' }); return res.end(); }
    if (req.url === '/away') { res.writeHead(302, { Location: 'http://other.example/llms.txt' }); return res.end(); }
    if (req.url === '/big') { res.writeHead(200, { 'Content-Type': 'text/plain' }); return res.end('x'.repeat(5000)); }
    if (req.url === '/slow') return; // never answers
    res.writeHead(404, { 'Content-Type': 'text/html' }); res.end('<html>nope</html>');
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${server.address().port}`;
  const opts = { allowedHosts: [`127.0.0.1:${server.address().port}`], timeoutMs: 1500, maxBytes: 2000 };
  try {
    // without the test switch the reader refuses a private address and any port
    assert.equal((await getText(base + '/llms.txt', opts)).ok, false);
    process.env.ALLOW_PRIVATE_FETCH = '1';
    const got = await getText(base + '/llms.txt', opts);
    assert.equal(got.ok, true);
    assert.equal(got.text, GOOD);
    assert.equal((await getText(base + '/moved', opts)).text, GOOD);
    const away = await getText(base + '/away', opts);
    assert.equal(away.ok, false);
    assert.equal(away.error, 'redirects to another site');
    const big = await getText(base + '/big', opts);
    assert.equal(big.truncated, true);
    assert.equal(big.text.length, 2000);
    const slow = await getText(base + '/slow', Object.assign({}, opts, { timeoutMs: 300 }));
    assert.equal(slow.error, 'timed out');
    assert.equal((await getText(base + '/none', opts)).status, 404);
  } finally {
    delete process.env.ALLOW_PRIVATE_FETCH;
    server.closeAllConnections();
    server.close();
  }
});
