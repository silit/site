// Tests for what scripts/indexnow.mjs sends to IndexNow (scripts/indexnow-pages.mjs). Run: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import { content, fingerprint, plan, state, VERSION } from '../scripts/indexnow-pages.mjs';

const page = ({
  css = '_slug_.BIqDwvZQ.css',
  title = 'Gemini visibility checker',
  description = 'A free check for any website.',
  canonical = 'https://silitlabs.com/tools/gemini-visibility-checker/',
  robots = '',
  footer = '<a href="/tools/">Tools</a>',
  main = '<h1 data-astro-cid-abc123>Gemini visibility checker</h1><p>Asked twice.</p>',
} = {}) => `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>${title}</title>
<meta name="description" content="${description}"><link rel="canonical" href="${canonical}">
${robots ? `<meta name="robots" content="${robots}">` : ''}<link rel="stylesheet" href="/_astro/${css}"></head>
<body><header><a href="/">Silit Labs</a></header><main id="main">${main}</main><footer>${footer}</footer>
<script type="module" src="/_astro/page.D4kq9.js"></script></body></html>`;

test('a new name for the built CSS file is not a change', () => {
  assert.equal(fingerprint(page()), fingerprint(page({ css: '_slug_.C9xYz012.css' })));
});

test('a change in the header or the footer is not a change', () => {
  assert.equal(fingerprint(page()), fingerprint(page({ footer: '<a href="/tools/">Tools</a><a href="/guides/">Guides</a>' })));
});

test('a new scope name on the same markup is not a change', () => {
  const again = page({ main: '<h1 data-astro-cid-zzz999>Gemini visibility checker</h1><p>Asked twice.</p>' });
  assert.equal(fingerprint(page()), fingerprint(again));
});

test('a built file named inside the page is read without its hash', () => {
  const a = page({ main: '<img src="/_astro/card.A1b2C3.webp" alt="Card"><p>Asked twice.</p>' });
  const b = page({ main: '<img src="/_astro/card.Z9y8X7.webp" alt="Card"><p>Asked twice.</p>' });
  assert.equal(fingerprint(a), fingerprint(b));
});

test('scripts, styles and comments inside the page are left out', () => {
  const a = page({ main: '<p>Asked twice.</p><script>const build = "a1";</script><style>.x{color:red}</style><!-- built 10:01 -->' });
  const b = page({ main: '<p>Asked twice.</p><script>const build = "b2";</script><style>.x{color:blue}</style><!-- built 10:07 -->' });
  assert.equal(fingerprint(a), fingerprint(b));
});

test('new words in the page are a change', () => {
  assert.notEqual(fingerprint(page()), fingerprint(page({ main: '<h1>Gemini visibility checker</h1><p>Asked three times.</p>' })));
});

test('a new link in the page is a change', () => {
  const a = page({ main: '<p>Read <a href="/guides/geo-audit/">the guide</a>.</p>' });
  const b = page({ main: '<p>Read <a href="/guides/llm-visibility/">the guide</a>.</p>' });
  assert.notEqual(fingerprint(a), fingerprint(b));
});

test('a new title, description, canonical address or robots rule is a change', () => {
  const base = fingerprint(page());
  assert.notEqual(base, fingerprint(page({ title: 'Gemini checker' })));
  assert.notEqual(base, fingerprint(page({ description: 'A free Gemini check for any website.' })));
  assert.notEqual(base, fingerprint(page({ canonical: 'https://silitlabs.com/tools/gemini-checker/' })));
  assert.notEqual(base, fingerprint(page({ robots: 'noindex' })));
});

test('the description is found whatever the order of its attributes', () => {
  const html = '<html><head><title>T</title><meta content="Said first." name="description"></head><body><main><p>x</p></main></body></html>';
  assert.equal(content(html).split('\n')[1], 'Said first.');
});

test('a page without <main> is read from its body', () => {
  const a = '<html><head><title>Report</title></head><body><div><p>Named in 15 of 49 answers.</p></div><script>var t = 1;</script></body></html>';
  const b = '<html><head><title>Report</title></head><body><div><p>Named in 15 of 49 answers.</p></div><script>var t = 2;</script></body></html>';
  const c = '<html><head><title>Report</title></head><body><div><p>Named in 16 of 49 answers.</p></div></body></html>';
  assert.equal(fingerprint(a), fingerprint(b));
  assert.notEqual(fingerprint(a), fingerprint(c));
});

test('with no fingerprints kept, every page is sent', () => {
  assert.deepEqual(plan(null, { 'https://silitlabs.com/': 'a', 'https://silitlabs.com/tools/': 'b' }), {
    changed: ['https://silitlabs.com/', 'https://silitlabs.com/tools/'],
    removed: [],
    rebased: false,
  });
});

test('only new, changed and removed pages are sent', () => {
  const previous = state({ 'https://silitlabs.com/': 'a', 'https://silitlabs.com/tools/': 'b', 'https://silitlabs.com/old/': 'c' });
  const current = { 'https://silitlabs.com/': 'a', 'https://silitlabs.com/tools/': 'b2', 'https://silitlabs.com/new/': 'd' };
  assert.deepEqual(plan(previous, current), {
    changed: ['https://silitlabs.com/tools/', 'https://silitlabs.com/new/'],
    removed: ['https://silitlabs.com/old/'],
    rebased: false,
  });
});

test('nothing is sent when nothing changed', () => {
  const current = { 'https://silitlabs.com/': 'a', 'https://silitlabs.com/tools/': 'b' };
  assert.deepEqual(plan(state(current), current), { changed: [], removed: [], rebased: false });
});

test('fingerprints kept in the older format are not compared: only new pages are sent', () => {
  // The older format was a plain list of address -> hash of the whole HTML.
  const previous = { 'https://silitlabs.com/': 'whole-html-hash', 'https://silitlabs.com/old/': 'whole-html-hash' };
  const current = { 'https://silitlabs.com/': 'a', 'https://silitlabs.com/new/': 'd' };
  assert.deepEqual(plan(previous, current), {
    changed: ['https://silitlabs.com/new/'],
    removed: ['https://silitlabs.com/old/'],
    rebased: true,
  });
});

test('fingerprints kept by another version of the format are treated as older', () => {
  const previous = { v: VERSION + 1, pages: { 'https://silitlabs.com/': 'other-format', 'https://silitlabs.com/old/': 'other-format' } };
  const current = { 'https://silitlabs.com/': 'a', 'https://silitlabs.com/new/': 'd' };
  assert.deepEqual(plan(previous, current), {
    changed: ['https://silitlabs.com/new/'],
    removed: ['https://silitlabs.com/old/'],
    rebased: true,
  });
});
