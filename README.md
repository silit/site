# silitlabs.com

The Silit Labs website: one home for every Silit Labs product. Built with [Astro](https://astro.build) as a static site and deployed on Vercel. Every push to `main` goes live.

## Structure

```
src/
  data/site.js          brand, links, navigation, EN/TR page pairs (hreflang)
  data/analytics.js     reads the Google Analytics ID (PUBLIC_GA_ID) and says how long a cookie choice is kept
  data/kits.js          clinic kit catalogue, EN and TR side by side
  data/templates.js     template catalogue (spreadsheet and Webflow templates), EN and TR side by side
  data/shop.js          small business catalogue sold on Etsy (booking site templates, beauty, Airbnb, cleaning), EN only
  data/report.js        facts about the AI Visibility Report (price, engines, limits) and the list of free tools
  content/guides/       SEO guides in Markdown (one file per guide)
  components/           Bench (home hero animation), Intro, KitPage, KitsHub, KitFaq, Mark, TemplatePage, TemplatesHub,
                        CheckForm (starts a free AI visibility check), AnswerDemo (sample answers with their marks),
                        ReportOffer (what the paid report adds, on tool pages)
  layouts/Base.astro    <head> SEO, header, footer, JSON-LD
  pages/                one file per URL
public/                 images, videos, favicon, robots.txt
.env.production         the Google Analytics Measurement ID, read by `astro build`
```

| URL | What it is |
| --- | --- |
| `/` and `/tr/` | Home, with the first-visit intro and the product bench |
| `/clinic-kits/` and `/tr/klinik-kitleri/` | Clinic kits hub |
| `/clinic-kits/<kit>/` and `/tr/klinik-kitleri/<kit>/` | One page per kit, generated from `data/kits.js` |
| `/templates/` and `/tr/sablonlar/` | Templates hub, grouped by kind (spreadsheet, Webflow) |
| `/booking-site-templates/` | 27 Square and Acuity booking site designs and the two bundles, from `data/shop.js` |
| `/beauty-business-templates/`, `/airbnb-host-templates/`, `/cleaning-business-templates/` | The other Etsy product lines, from `data/shop.js` |
| `/templates/<template>/` and `/tr/sablonlar/<template>/` | One page per template, generated from `data/templates.js` |
| `/tr/kurulum-hizmeti/` | Setup service for clinics in Turkey |
| `/webflow-apps/` and `/webflow-apps/flowdeck/` | Webflow apps and Flowdeck |
| `/tools/` and `/tools/<tool>/` | Free tools for AI search. Each tool page starts a free check of the AI Visibility Report |
| `/api/llms-txt` | The reader behind `/tools/llms-txt-checker/`: a Vercel function (folder `api/`), POST only |
| `/lab/` | What is being built next |
| `/guides/` and `/guides/<slug>/` | SEO guides from `content/guides` |
| `/about/`, `/contact/`, `/privacy/`, `/terms/` | Company pages |

## Common changes

**Add a guide.** Create `src/content/guides/<slug>.md` with `title`, `description`, `date`, `category`, `readMinutes` and optionally `product` (a kit id) or `tool` (a tool id from `src/data/report.js`: the guide then ends with that tool's check form, or, for the llms.txt checker, with `LlmsStart`, a small form that hands the website to the checker through the tab's session storage so that it never appears in an address). It appears on `/guides/`, on the home page and in the sitemap. Code blocks in a guide are plain text with a Copy button (no syntax colours; see `markdown` in `astro.config.mjs` and `.article pre` in `global.css`); keep their lines under 78 characters so they fit the column. `npm test` also checks that the llms.txt template in the Webflow guide and the site's own `public/llms.txt` pass our checker.

**Add a clinic kit.** Add a record to `src/data/kits.js`, put its images in `public/images/kits/<id>/` and videos in `public/video/`, then add its EN/TR pair to `PAIRS` in `src/data/site.js`. Both language pages are generated.

**Add a template.** Add a record to `src/data/templates.js` with its `kind` (`sheets` or `webflow`; add a kind to `KINDS` for a new type), put its images in `public/images/templates/<id>/` and a 1200x630 share image in `public/images/og/`, then add its EN/TR pair to `PAIRS` in `src/data/site.js`. Both language pages, the hub, the home shelf and the footer update. A template with `price` and `etsy` shows a buy button and Product schema; one with `preview` and `statusNote` shows the live preview and CreativeWork schema without a price.

**Add a free tool.** Add a record to `TOOLS` in `src/data/report.js` and a page under `src/pages/tools/`. A tool that starts the report's free check uses `<CheckForm tool="<id>" />`: it posts the website to `/check/start`, which `vercel.json` passes on to the report's engine, and opens `/check/<id>`. The engine only accepts that request from silitlabs.com, so on a Vercel preview address the form answers "Cross-site request blocked"; it can be tried for real only on the live site. `AnswerDemo` shows the sample answers; give each page a different `open` answer so two pages do not show the same picture (so far: the LLM checker opens on AI Overviews, the ChatGPT checker on ChatGPT, the AEO checker on Gemini). `ReportOffer` is the section about the paid report; pass it a heading and an intro in the page's own words. `OtherTools` lists the other tools at the foot of a tool page, and the home page lists all of them under the shelf, both from `TOOLS`. A record in `TOOLS` can carry three optional fields: `tag` (the word beside the tool in those lists, "Free" when left out), `cta` (the button on the hub card) and `form: 'llms'` for a tool with a form of its own. The AI search audit page shows no sample answers: its pictures are the first page and the grid of the sample report, drawn from `src/data/sample-audit.js`, which copies the numbers of the report's own sample in the app (`node /home/claude/site-tools/sample-sync.mjs` compares the two). A new tool also belongs in `public/llms.txt`, the site's own file (kept valid by our own checker's rules). Shared styles for these pages are at the end of `src/styles/global.css`. Draw the share image with `/home/claude/site-tools/og.js` (it photographs the built page's own sample; serve `dist` on port 4330 first) and save it in `public/images/og/`. `flow.js` in the same folder checks the form and the sample tabs against a stand-in for the engine. When the report's price, engines or limits change in the app, change `src/data/report.js` too, and search the site for the old price: it is also written out in the home page, the AI SEO Deck page and the GEO audit guide.

**The llms.txt checker's reader.** `api/llms-txt.js` is the one piece of this site that runs on a server: a Vercel function that reads `/llms.txt`, `/llms-full.txt` and `/robots.txt` of the website a visitor typed and says what they mean (`api/_lib/llms.js`, no network, tested). It reads through `api/_lib/fetch-safe.js`: only the site's own host, no private or special addresses, no ports, capped size, one deadline. It answers only a POST from a page of this site, slows one visitor down after 20 checks in ten minutes and keeps a result in memory for five minutes; nothing is stored. `npm test` runs its tests. The page itself is tried with `/home/claude/site-tools/llms-flow.mjs`, against answers the real logic produced from stub files.

**Add a new product line.** Add a folder under `src/pages/` (for example `src/pages/framer-plugins/`), link it from `NAV` and the home page shelf, and add a card to `src/pages/lab.astro` while it is in progress.

**Add an Etsy product for small businesses.** Add it to `src/data/shop.js` (Etsy id, price, image) and put its image in `public/images/shop/<line>/`. The images are made from the Etsy listing images by `/home/claude/site-shop/make_images.py`.

**Change prices or Etsy links.** Kits live in `src/data/kits.js`, templates in `src/data/templates.js`. Never put the Google Sheets copy link for the lead tracker on the site; it is for buyers only.

## Search engines

- **Google:** the URL-prefix property `https://silitlabs.com/` in Search Console (info@silitlabs.com). The sitemap is `/sitemap-index.xml`.
- **IndexNow** (Bing, Yandex, Naver, Seznam, Yep and the other IndexNow engines; Google does not use it): after every production deploy (when the Vercel commit status on `main` turns to success), `.github/workflows/indexnow.yml` runs `scripts/indexnow.mjs`. It submits only the pages whose HTML changed since the last run, plus removed pages, because IndexNow asks not to resubmit unchanged ones. The key file is `public/2a0f480c411a530423ba08e4a4bbdcfc.txt`; keep it. To submit by hand, open the IndexNow workflow in the Actions tab and choose "Run workflow".

## Analytics

Google Analytics 4 runs on the live site, and only for visitors who accept it. One public variable switches it on: `PUBLIC_GA_ID`, the Measurement ID of the GA4 web stream. The ID is not a secret, every page prints it.

- **Where the ID lives.** In `.env.production` at the root of the repository. `astro build` reads that file, so every deploy has analytics. `astro dev` does not read it, so analytics stays off while developing.
- **Changing it.** Edit `.env.production`, or set `PUBLIC_GA_ID` in the build environment (in Vercel: the project, then Settings, Environment Variables). A value from the environment wins over the file. The value is read when the site is built, so redeploy after a change. A value that is not a GA4 ID stops the build with a clear message.
- **Turning it off.** Leave the value empty or write `off`, in the file or in the build environment (`PUBLIC_GA_ID=off`), and redeploy. Nothing about analytics is built into the pages then: no notice, no script, no "Cookie settings" link, and the privacy page goes back to its "no analytics" wording.
- **Consent.** `src/components/Consent.astro` asks before anything is loaded from Google. On a first visit the notice is a strip at the top of the page, and "Cookie settings" in the footer opens it again. Accept and Decline look the same on purpose. Declining, or a browser that sends Global Privacy Control, means no request to Google and no cookie. The choice is kept in localStorage for 180 days (`CONSENT_DAYS` in `src/data/analytics.js`), then asked again.
- **What is sent.** Page views, with Consent Mode v2 set for analytics only: the three advertising signals stay denied, Google signals and ad personalisation are off, and the cookies stay on silitlabs.com (not the app subdomains) for 180 days. These settings are given with `gtag('set', ...)` before the tag loads, because Google's tag sets itself up on load and ignores settings passed to `gtag('config', ...)`. Plus five click events, named by where the link goes, so a new product page needs no extra code:

  | Event | A click on a link to | Parameters |
  | --- | --- | --- |
  | `buy_click` | an Etsy listing, a Webflow or Framer Marketplace listing, a Polar checkout | `store`, `product_name`, `product_id` (Etsy listing number), `link_url`, `link_domain`, `link_text` |
  | `shop_click` | the Etsy shop front | `store`, `link_url`, `link_domain`, `link_text` |
  | `app_click` | Flowdeck or AI SEO Deck ("Start free") | `product_name`, `link_url`, `link_domain`, `link_text` |
  | `demo_click` | a live preview (`*.webflow.io`, Framer preview sites) | `product_name`, `link_url`, `link_domain`, `link_text` |
  | `contact_click` | an email address | `method`, `subject`, `link_text` |

  `product_name` is the heading of the card the link sits in, or else the main heading of the page, so it follows the page language. Add `data-ga-product="Name"` to a link to name it by hand. A new app host or store goes in the click script at the end of `Consent.astro`.
- **Changing your mind.** When a visitor declines after accepting, analytics stops on the spot and the two Analytics cookies are removed. Google sends events in batches every few seconds, so an event recorded just before the decline can still be sent.
- **Privacy page.** `src/pages/privacy.astro` shows its Analytics section and the newer "Last updated" date only while analytics is on. If analytics goes live on a later day than the date written there, change the date.
- **Content-Security-Policy.** The site sends none. If one is added, it has to allow the inline scripts, `script-src https://www.googletagmanager.com`, and `connect-src` plus `img-src` for `https://*.google-analytics.com`, `https://*.analytics.google.com` and `https://*.googletagmanager.com`.

## House rules for copy

- Never write a capital dotted I (the Turkish capital of i). Rephrase or start the word in lowercase.
- No em or en dashes.
- Never "porcelain veneers"; use emax laminate veneers, emax crowns or zirconium crowns.
- Avoid trademarked treatment names such as Botox in English copy; use "anti-wrinkle injections".

## Local development

```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```
