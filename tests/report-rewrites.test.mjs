// The AI Visibility Report is read at silitlabs.com and served by its own Vercel project. This site passes three
// addresses on to it. They must lead there, and never to the AI SEO Deck app, which no longer holds the report.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const REPORT = 'https://ai-visibility-report-wheat.vercel.app/_vr';
const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
const to = (source) => (vercel.rewrites.find((r) => r.source === source) || {}).destination;

test('the three addresses of the report are passed on to the report\'s own project', () => {
  assert.equal(to('/ai-visibility-report'), REPORT + '/ai-visibility-report');
  assert.equal(to('/ai-visibility-report/:path*'), REPORT + '/ai-visibility-report/:path*');
  assert.equal(to('/check/:path*'), REPORT + '/check/:path*');
});

test('nothing on this site is passed on to the AI SEO Deck app', () => {
  const all = JSON.stringify([vercel.rewrites, vercel.redirects]);
  assert.ok(!all.includes('aiseodeck.silitlabs.com'), 'a rewrite or redirect still names the app');
});
