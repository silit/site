// Site-wide settings: brand, links, navigation and the product catalogue shown on the home page.
// A new project = a new entry in `categories` (and its own pages under src/pages).

export const SITE = {
  name: 'Silit Labs',
  url: 'https://silitlabs.com',
  email: 'info@silitlabs.com',
  city: 'Antalya',
  country: 'TR',
  etsy: 'https://www.etsy.com/shop/SilitLabs',
  pinterest: 'https://www.pinterest.com/silitlabs/',
  instagram: 'https://www.instagram.com/silitlabs/',
  flowdeck: 'https://flowdeck.silitlabs.com',
  aiseodeck: 'https://aiseodeck.silitlabs.com',
  ogDefault: '/images/og/default.jpg'
};

export const NAV = {
  en: [
    { href: '/booking-site-templates/', label: 'Booking sites' },
    { href: '/templates/', label: 'Templates' },
    { href: '/clinic-kits/', label: 'Clinic kits' },
    { href: '/webflow-apps/', label: 'Webflow apps' },
    { href: '/guides/', label: 'Guides' },
    { href: '/about/', label: 'About' }
  ],
  tr: [
    { href: '/tr/klinik-kitleri/', label: 'Klinik kitleri' },
    { href: '/tr/sablonlar/', label: 'Şablonlar' },
    { href: '/tr/kurulum-hizmeti/', label: 'Kurulum hizmeti' },
    { href: '/webflow-apps/', label: 'Webflow uygulamaları', hreflang: 'en' }
  ]
};

// Pages that exist in both languages. Used for hreflang tags and the language switch.
export const PAIRS = [
  ['/', '/tr/'],
  ['/clinic-kits/', '/tr/klinik-kitleri/'],
  ['/clinic-kits/dental-patient-kit/', '/tr/klinik-kitleri/dis-klinigi-hasta-kiti/'],
  ['/clinic-kits/aesthetic-clinic-kit/', '/tr/klinik-kitleri/estetik-klinik-kiti/'],
  ['/clinic-kits/hair-transplant-clinic-kit/', '/tr/klinik-kitleri/sac-ekimi-klinik-kiti/'],
  ['/templates/', '/tr/sablonlar/'],
  ['/templates/clinic-lead-tracker/', '/tr/sablonlar/klinik-lead-takip-tablosu/'],
  ['/templates/curavia/', '/tr/sablonlar/curavia/'],
  ['/templates/sessa/', '/tr/sablonlar/sessa/']
];

export const alternateOf = (path) => {
  for (const [en, tr] of PAIRS) {
    if (path === en) return { en, tr };
    if (path === tr) return { en, tr };
  }
  return null;
};

// Product lines on the home page and in the footer. status: live | beta | soon
export const categories = [
  {
    id: 'clinic-kits',
    href: '/clinic-kits/',
    name: 'Clinic kits',
    line: 'Patient document kits for dental, aesthetic and hair transplant clinics.',
    status: 'live'
  },
  {
    id: 'booking-site-templates',
    href: '/booking-site-templates/',
    name: 'Booking site templates',
    line: '27 booking site designs for Square and Acuity, with Instagram posts and stories.',
    status: 'live'
  },
  {
    id: 'templates',
    href: '/templates/',
    name: 'Templates',
    line: 'Templates for beauty pros, Airbnb hosts and cleaning businesses, a clinic lead tracker and Webflow sites.',
    status: 'live'
  },
  {
    id: 'webflow-apps',
    href: '/webflow-apps/',
    name: 'Webflow apps',
    line: 'Flowdeck for site monitoring and AI SEO Deck for AI search visibility.',
    status: 'live'
  },
  {
    id: 'lab',
    href: '/lab/',
    name: 'In the lab',
    line: 'What we are building next.',
    status: 'soon'
  }
];

// Webflow apps that guides can link to (guide frontmatter `product: <id>`).
export const apps = [
  {
    id: 'ai-seo-deck',
    name: 'AI SEO Deck',
    lead: 'See whether ChatGPT, Google AI Overviews, AI Mode, Gemini, Claude and Grok recommend you for the keywords you track, then fix your Webflow pages in one click. Free for one site.',
    href: '/webflow-apps/ai-seo-deck/',
    img: '/images/ai-seo-deck/overview.webp',
    og: '/images/og/ai-seo-deck.jpg',
    cta: 'See AI SEO Deck'
  },
  {
    id: 'flowdeck',
    name: 'Flowdeck',
    lead: 'One screen for every Webflow site you manage: uptime, SSL, unpublished changes, quiet forms, CMS limits and SEO gaps. Free for one site.',
    href: '/webflow-apps/flowdeck/',
    img: '/images/flowdeck/dashboard.webp',
    og: '/images/og/flowdeck.jpg',
    cta: 'See Flowdeck'
  }
];
