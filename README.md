# silitlabs.com

The Silit Labs website: one home for every Silit Labs product. Built with [Astro](https://astro.build) as a static site and deployed on Vercel. Every push to `main` goes live.

## Structure

```
src/
  data/site.js          brand, links, navigation, EN/TR page pairs (hreflang)
  data/kits.js          clinic kit catalogue, EN and TR side by side
  content/guides/       SEO guides in Markdown (one file per guide)
  components/           Bench (home hero animation), Intro, KitPage, KitsHub, KitFaq, Mark
  layouts/Base.astro    <head> SEO, header, footer, JSON-LD
  pages/                one file per URL
public/                 images, videos, favicon, robots.txt
```

| URL | What it is |
| --- | --- |
| `/` and `/tr/` | Home, with the first-visit intro and the product bench |
| `/clinic-kits/` and `/tr/klinik-kitleri/` | Clinic kits hub |
| `/clinic-kits/<kit>/` and `/tr/klinik-kitleri/<kit>/` | One page per kit, generated from `data/kits.js` |
| `/tr/kurulum-hizmeti/` | Setup service for clinics in Turkey |
| `/webflow-apps/` and `/webflow-apps/flowdeck/` | Webflow apps and Flowdeck |
| `/lab/` | What is being built next |
| `/guides/` and `/guides/<slug>/` | SEO guides from `content/guides` |
| `/about/`, `/contact/`, `/privacy/`, `/terms/` | Company pages |

## Common changes

**Add a guide.** Create `src/content/guides/<slug>.md` with `title`, `description`, `date`, `category`, `readMinutes` and optionally `product` (a kit id). It appears on `/guides/`, on the home page and in the sitemap.

**Add a clinic kit.** Add a record to `src/data/kits.js`, put its images in `public/images/kits/<id>/` and videos in `public/video/`, then add its EN/TR pair to `PAIRS` in `src/data/site.js`. Both language pages are generated.

**Add a new product line.** Add a folder under `src/pages/` (for example `src/pages/framer-plugins/`), link it from `NAV` and the home page shelf, and add a card to `src/pages/lab.astro` while it is in progress.

**Change prices or Etsy links.** Everything lives in `src/data/kits.js`.

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
