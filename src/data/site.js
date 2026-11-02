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
  ogDefault: '/images/og/default.jpg'
};

export const NAV = {
  en: [
    { href: '/clinic-kits/', label: 'Clinic kits' },
    { href: '/webflow-apps/', label: 'Webflow apps' },
    { href: '/guides/', label: 'Guides' },
    { href: '/about/', label: 'About' }
  ],
  tr: [
    { href: '/tr/klinik-kitleri/', label: 'Klinik kitleri' },
    { href: '/tr/kurulum-hizmeti/', label: 'Kurulum hizmeti' },
    { href: '/webflow-apps/flowdeck/', label: 'Flowdeck', hreflang: 'en' }
  ]
};

// Pages that exist in both languages. Used for hreflang tags and the language switch.
export const PAIRS = [
  ['/', '/tr/'],
  ['/clinic-kits/', '/tr/klinik-kitleri/'],
  ['/clinic-kits/dental-patient-kit/', '/tr/klinik-kitleri/dis-klinigi-hasta-kiti/'],
  ['/clinic-kits/aesthetic-clinic-kit/', '/tr/klinik-kitleri/estetik-klinik-kiti/'],
  ['/clinic-kits/hair-transplant-clinic-kit/', '/tr/klinik-kitleri/sac-ekimi-klinik-kiti/']
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
    id: 'webflow-apps',
    href: '/webflow-apps/',
    name: 'Webflow apps',
    line: 'Tools for agencies and freelancers who look after Webflow sites.',
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
