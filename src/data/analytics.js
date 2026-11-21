// Google Analytics 4 is switched on by one public variable, PUBLIC_GA_ID: the Measurement ID of the GA4
// web stream (it looks like G-AB12CD34EF). The ID is public, every page prints it.
//
// It lives in .env.production at the root of the repository, which `astro build` reads and `astro dev`
// does not. A PUBLIC_GA_ID set in the build environment (for example in Vercel) wins over the file.
//
// Empty, missing or "off" means off. Nothing about analytics is built into the pages then: no cookie
// notice, no script, no "Cookie settings" link, and the privacy page keeps its "no analytics" wording.
// How consent and the tracked clicks work: src/components/Consent.astro and the README.

const raw = String(import.meta.env.PUBLIC_GA_ID ?? '').trim().replace(/^["']+|["']+$/g, '').toUpperCase();
const id = raw === 'OFF' ? '' : raw;

// A typo here would switch analytics on with an ID that collects nothing, so the build stops instead.
if (id && !/^G-[A-Z0-9]{4,}$/.test(id)) {
  throw new Error(`PUBLIC_GA_ID is "${id}", which is not a GA4 Measurement ID. It should look like G-AB12CD34EF. Correct it, or leave it empty to keep analytics off.`);
}

export const GA_ID = id;

// How long a visitor's choice is remembered before the notice asks again, and how long the Analytics
// cookies live. The privacy page states this period, so change both together.
export const CONSENT_DAYS = 180;

// Where the choice is kept in the visitor's browser (localStorage).
export const CONSENT_KEY = 'sl-consent';
