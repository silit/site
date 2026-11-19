// Small business catalogue: everything sold on Etsy outside the clinic kits. English only, because these
// products sell to the US, UK and other English speaking markets (Square, Acuity and Airbnb hosts).
// Pages: /booking-site-templates/, /beauty-business-templates/, /airbnb-host-templates/, /cleaning-business-templates/.
// Prices are the regular Etsy prices; Etsy sales lower them for a few days. Images: public/images/shop/,
// made by /home/claude/site-shop/make_images.py from the Etsy listing images.

export const etsy = (id) => `https://www.etsy.com/listing/${id}`;
const B = '/images/shop/booking';

// Booking site templates: every design has a Square version and an Acuity version (separate Etsy listings).
export const BOOKING_GROUPS = [
  { id: 'hair', name: 'Hair stylists' },
  { id: 'lash-brow-makeup', name: 'Lashes, brows and makeup' },
  { id: 'nails', name: 'Nails' },
  { id: 'skin-body', name: 'Skin, body and spa' },
  { id: 'barber-braids-tattoo', name: 'Barbers, braids and tattoo' },
  { id: 'christmas', name: 'Christmas' }
];

const d = (key, name, group, look, sq, sqPrice, ac, acPrice) => ({
  key, name, group, look,
  img: `${B}/${key.toLowerCase()}.webp`,
  square: { url: etsy(sq), price: sqPrice },
  acuity: { url: etsy(ac), price: acPrice }
});

export const designs = [
  d('Hair-Stylist', 'Hair Stylist', 'hair', 'Cream, taupe and espresso', '4613482699', 4.5, '4613128759', 4),
  d('Hair-Pink', 'Pink Hair Stylist', 'hair', 'Pink, cream and rose', '4613486181', 4.5, '4613225146', 4),
  d('Hair-Coffee', 'Coffee Hair Stylist', 'hair', 'Coffee brown and cream', '4613503362', 4.5, '4613225874', 4),
  d('Hair-Mono', 'Minimal Hair Stylist', 'hair', 'Black and white', '4613487363', 4.5, '4613226668', 4),
  d('Hair-Zebra', 'Zebra Hair Stylist', 'hair', 'Pink with a zebra print', '4613504540', 4.5, '4613211147', 4),
  d('Hair-Gold', 'Black Gold Hair Stylist', 'hair', 'Black and gold', '4620815246', 4.5, '4620822276', 4.5),
  d('Hair-Boho', 'Boho Hair Stylist', 'hair', 'Sand, sage and terracotta', '4620816322', 4.5, '4620816775', 4.5),
  d('Lash-Tech', 'Lash Tech', 'lash-brow-makeup', 'Black, white and soft grey', '4613483847', 4.5, '4613145260', 4),
  d('Lash-Brow', 'Lash and Brow', 'lash-brow-makeup', 'Cream, powder blue and chocolate', '4619306413', 4.5, '4619808950', 4.5),
  d('Brow-Artist', 'Brow Artist', 'lash-brow-makeup', 'Nude and plum', '4619293679', 4.5, '4619798101', 4.5),
  d('Lash-Luxe', 'Luxury Lash Artist', 'lash-brow-makeup', 'Black and champagne', '4620817808', 4.5, '4620823442', 4.5),
  d('PMU-Artist', 'PMU Artist', 'lash-brow-makeup', 'Nude, rose and cocoa', '4620819734', 4.5, '4620825232', 4.5),
  d('Makeup-Artist', 'Makeup Artist', 'lash-brow-makeup', 'Blush, wine and gold', '4619310204', 4.5, '4619806416', 4.5),
  d('Bridal-MUA', 'Bridal Makeup Artist', 'lash-brow-makeup', 'Ivory, champagne and taupe', '4620813237', 4.5, '4620824644', 4.5),
  d('Nail-Tech', 'Nail Tech', 'nails', 'Blush, cream and rose', '4613484399', 4.5, '4613130095', 4),
  d('Nail-Chrome', 'Chrome Nail Tech', 'nails', 'Lavender and black chrome', '4619305729', 4.5, '4619800647', 4.5),
  d('Nail-Cherry', 'Cherry Nail Tech', 'nails', 'Cherry red and blush pink', '4620812649', 4.5, '4620824030', 4.5),
  d('Esthetician', 'Esthetician', 'skin-body', 'Sage, cream and forest green', '4613501614', 4.5, '4613130781', 4),
  d('Med-Spa', 'Med Spa', 'skin-body', 'Teal, mist and champagne', '4619311982', 4.5, '4619800189', 4.5),
  d('Wax-Specialist', 'Wax Specialist', 'skin-body', 'Cream, apricot and honey drip', '4619311396', 4.5, '4619807444', 4.5),
  d('Massage-Therapist', 'Massage Therapist', 'skin-body', 'Sand, clay and olive', '4619310806', 4.5, '4619799245', 4.5),
  d('Lymphatic', 'Lymphatic Drainage', 'skin-body', 'Navy and powder blue', '4620821596', 4.5, '4620820963', 4.5),
  d('Spray-Tan', 'Spray Tan Artist', 'skin-body', 'Sand, bronze and sunlit gold', '4620815059', 4.5, '4620826404', 4.5),
  d('Barber', 'Barber', 'barber-braids-tattoo', 'Black, bone and barber pole red', '4619292767', 4.5, '4619797465', 4.5),
  d('Braider', 'Braider', 'barber-braids-tattoo', 'Black, gold and cream', '4613485595', 4.5, '4613147094', 4),
  d('Tattoo-Artist', 'Tattoo Artist', 'barber-braids-tattoo', 'Black, bone, teal and brass', '4620820422', 4.5, '4620819781', 4.5),
  d('Holiday-Beauty', 'Holiday Beauty', 'christmas', 'Pine green, cherry red and gold', '4619287513', 4.5, '4619809718', 4.5)
];

export const bookingBundles = [
  {
    name: 'Square Booking Site Template Bundle',
    platform: 'For Square Online and Square Appointments',
    price: 9.99,
    url: etsy('4616617708'),
    img: `${B}/bundle-square.webp`,
    alt: 'Square template bundle with all 27 booking website designs on laptops and phones',
    items: ['All 27 designs, each with 8 Square banners, 2500 px wide', '540 Instagram posts and 270 stories', 'One PDF with all 81 Canva links and a setup guide per design']
  },
  {
    name: 'Acuity Scheduling Template Bundle',
    platform: 'For Acuity Scheduling (Squarespace Scheduling)',
    price: 9.99,
    url: etsy('4616615866'),
    img: `${B}/bundle-acuity.webp`,
    alt: 'Acuity Scheduling template bundle with all 27 booking website designs on laptops and phones',
    items: ['All 27 designs, each with 8 Acuity banners, 1200 x 900 px', '540 Instagram posts and 270 stories', 'One PDF with all 81 Canva links and a setup guide per design']
  }
];

// Beauty business templates
const Y = '/images/shop/beauty';
export const beautyBundles = [
  {
    name: 'Lash Tech Business Bundle', who: 'For lash techs and lash artists', price: 24.99, url: etsy('4620457546'), img: `${Y}/bundle-lash.webp`,
    alt: 'Lash tech business bundle: booking website, Instagram posts, booking policies and bookkeeping tracker',
    items: ['2 booking site designs for Square and Acuity: Lash Tech, Lash and Brow', '148 Instagram posts, 32 stories and 60 highlight covers', 'Booking policies kit and a bookkeeping spreadsheet']
  },
  {
    name: 'Esthetician Business Bundle', who: 'For estheticians, skin therapists and med spas', price: 27.99, url: etsy('4620452491'), img: `${Y}/bundle-esthetician.webp`,
    alt: 'Esthetician business bundle: booking website, Instagram posts, booking policies and bookkeeping tracker',
    items: ['3 booking site designs for Square and Acuity: Esthetician, Med Spa, Wax Specialist', '128 Instagram posts and 30 stories', 'Booking policies kit and a bookkeeping spreadsheet']
  },
  {
    name: 'Nail Tech Business Bundle', who: 'For nail techs and nail artists', price: 17.99, url: etsy('4620454361'), img: `${Y}/bundle-nail.webp`,
    alt: 'Nail tech business bundle: booking website, Instagram posts, booking policies and bookkeeping tracker',
    items: ['2 booking site designs for Square and Acuity: Nail Tech, Chrome Nail Tech', '48 Instagram posts and 20 stories', 'Booking policies kit and a bookkeeping spreadsheet']
  },
  {
    name: 'Hair Stylist Business Bundle', who: 'For hair stylists, salon owners and booth renters', price: 24.99, url: etsy('4620455931'), img: `${Y}/bundle-hair.webp`,
    alt: 'Hair stylist business bundle: booking website, Instagram posts, booking policies and bookkeeping tracker',
    items: ['5 booking site designs for Square and Acuity: Hair Stylist, Pink, Coffee, Minimal and Zebra', '108 Instagram posts and 50 stories', 'Booking policies kit and a bookkeeping spreadsheet']
  }
];

export const instagramKits = [
  { name: 'Lash Tech Instagram Kit', who: 'For lash studios', price: 15, url: etsy('4616463289'), img: `${Y}/ig-lash.webp`, alt: 'Lash tech Instagram kit with posts, stories and highlight covers in warm neutrals', line: '100 posts, 12 stories and 60 highlight covers in cream, sand, blush and espresso, with ready to post wording.' },
  { name: 'Med Spa Social Media Kit', who: 'For med spas and aesthetic clinics', price: 15, url: etsy('4613075596'), img: `${Y}/ig-medspa.webp`, alt: 'Med spa social media kit with 60 Instagram posts in ivory, blush and plum', line: '60 posts: brand and trust, anti-wrinkle and filler, facials and skincare, Christmas and New Year.' },
  { name: 'Nurse Injector Instagram Templates', who: 'For aesthetic nurses and injectors', price: 4, url: etsy('4613076086'), img: `${Y}/ig-injector.webp`, alt: 'Nurse injector Instagram templates about anti-wrinkle injections and dermal filler', line: '15 posts about anti-wrinkle injections, dermal and lip filler, skin boosters and consultations.' },
  { name: 'Esthetician Instagram Templates', who: 'For facialists and skin therapists', price: 4, url: etsy('4613060085'), img: `${Y}/ig-esthetician.webp`, alt: 'Esthetician Instagram templates about facials, peels and skincare', line: '15 posts about facials, chemical peels, microneedling, skincare routines and laser or IPL.' },
  { name: 'Med Spa Christmas Instagram Templates', who: 'For the holiday season', price: 4, url: etsy('4613060501'), img: `${Y}/ig-christmas.webp`, alt: 'Med spa Christmas Instagram templates in ivory, blush and champagne', line: '12 holiday and New Year posts with soft sparkle details instead of loud red and green.' }
];

export const beautyExtras = [
  { name: 'Booking Policies Kit', who: 'For every beauty pro', price: 1.99, url: etsy('4613244988'), img: `${Y}/policies.webp`, alt: 'Booking policies kit for beauty pros with deposit and cancellation policy wording', line: '40 policy wordings in 10 topics, from deposits and cancellations to late arrivals, plus 8 matching Instagram posts. PDF and Word.' },
  { name: 'Hair Stylist Bookkeeping Spreadsheet (US)', who: 'For booth renters and salon owners', price: 12, url: etsy('4612823121'), img: `${Y}/books-us.webp`, alt: 'Hair stylist bookkeeping spreadsheet with income, expenses and tax summary', line: 'Income and expense tracker with a tax summary, price calculator and monthly view. Google Sheets and Excel.' },
  { name: 'Hairdresser Bookkeeping Spreadsheet (UK)', who: 'For self employed hairdressers', price: 12, url: etsy('4612841650'), img: `${Y}/books-uk.webp`, alt: 'Self employed hairdresser bookkeeping spreadsheet for the UK with income and expense totals', line: 'Income and expenses in pounds, with the totals laid out for your Self Assessment. Google Sheets and Excel.' }
];

// Airbnb host templates
const A = '/images/shop/airbnb';
export const airbnbStyles = [
  { name: 'Neutral Modern', look: 'Calm beige and taupe', price: 8.99, url: etsy('4616466405'), img: `${A}/neutral.webp`, alt: 'Airbnb welcome book in a neutral modern style with house rules and WiFi signs' },
  { name: 'Mountain Cabin', look: 'Forest green and warm wood', price: 8.99, url: etsy('4620411100'), img: `${A}/cabin.webp`, alt: 'Airbnb welcome book in a mountain cabin style with house rules and WiFi signs' },
  { name: 'Coastal Beach House', look: 'Navy, sea blue and sand', price: 8.99, url: etsy('4620412744'), img: `${A}/coastal.webp`, alt: 'Airbnb welcome book in a coastal beach house style with house rules and WiFi signs' }
];
export const welcomeBookPages = ['Cover', 'A note from your hosts', 'Contents', 'Your stay at a glance', 'Arriving', 'WiFi and entertainment', 'House rules', 'Around the home', 'Kitchen guide', 'Safety', 'Trash and recycling', 'Eat and drink', 'Coffee and breakfast', 'Things to do', 'Outdoors', 'Shopping and essentials', 'Getting around', 'Local map', 'Good to know', 'Check-out', 'Guest book', 'Leave a review', 'Thank you', 'Back cover'];
export const welcomeSigns = ['Welcome', 'WiFi', 'House rules', 'Check-out', 'Trash and recycling', 'Please do not flush', 'Leave a review', 'Quiet hours'];

// Cleaning business templates
const C = '/images/shop/cleaning';
export const cleaningProducts = [
  { name: 'Cleaning Business Forms Kit', who: 'The starter kit', price: 12, url: etsy('4613085508'), img: `${C}/kit.webp`, alt: 'Cleaning business forms kit with checklists, estimate form, invoice and service agreement', line: '10 matching forms on 17 pages, from the first walkthrough to the invoice, plus the bookkeeping spreadsheet.' },
  { name: 'Cleaning Business Bookkeeping Spreadsheet', who: 'For house cleaners and maid services', price: 5, url: etsy('4613068305'), img: `${C}/bookkeeping.webp`, alt: 'Cleaning business bookkeeping spreadsheet with a dashboard, jobs, expenses and quote calculator', line: 'Jobs, expenses on Schedule C lines, mileage, tax set-aside and a quote calculator. Google Sheets and Excel.' },
  { name: 'House Cleaning Checklist', who: 'For cleaners and tidy homes', price: 3, url: etsy('4613069471'), img: `${C}/checklist.webp`, alt: 'Room by room house cleaning checklist and deep clean checklist', line: 'A room by room checklist and a deep clean, move in and move out checklist. Edit in Canva or print as is.' }
];
export const cleaningForms = [
  ['Residential cleaning checklist', 'Room by room, with add-ons, a final walkthrough and sign-off. 2 pages.'],
  ['Deep clean and move-in / move-out checklist', 'Deep tasks by room, move extras and a condition log. 2 pages.'],
  ['Walkthrough and estimate form', 'Home details, effort by room, add-ons, totals and signature. 2 pages.'],
  ['Cleaning service agreement', 'Access and keys, cancellations, pets, exclusions, breakage and guarantee. 2 pages.'],
  ['New client intake and home info sheet', 'Access codes, pets, priorities, products to avoid and special surfaces. 2 pages.'],
  ['Invoice', 'One page.'],
  ['Service menu and price list', 'Prices by home size, recurring plans and add-ons. One page.'],
  ['Client feedback card', 'Ratings, comments, a referral offer and a spot for your review QR code.'],
  ['Supply and equipment inventory', 'Par levels, weekly counts, equipment log and reorder list. 2 pages.'],
  ['Cleaner job sheet and daily schedule', 'Six jobs a day with access notes, times, status and payment. One page.']
];

// The four lines, for the templates hub, the home page and the footer.
const minPrice = (xs) => Math.min(...xs);
export const SHOP_LINES = [
  {
    id: 'booking', href: '/booking-site-templates/', name: 'Booking site templates', img: '/images/shop/lines/booking.webp',
    alt: 'Nine booking website designs for beauty pros on laptops and phones',
    count: '27 designs, Square and Acuity', from: minPrice(designs.map((x) => x.acuity.price)),
    line: 'Turn a Square or Acuity booking page into a polished mini site, with matching Instagram posts and stories.'
  },
  {
    id: 'beauty', href: '/beauty-business-templates/', name: 'Beauty business templates', img: '/images/shop/lines/beauty.webp',
    alt: 'Sixty med spa Instagram post templates in ivory, blush and plum',
    count: '12 products', from: minPrice([...instagramKits, ...beautyExtras].map((x) => x.price)),
    line: 'Business bundles, Instagram kits, booking policies and bookkeeping spreadsheets for beauty pros.'
  },
  {
    id: 'airbnb', href: '/airbnb-host-templates/', name: 'Airbnb host templates', img: '/images/shop/lines/airbnb.webp',
    alt: 'House information pages from a coastal Airbnb welcome book',
    count: '3 welcome book styles', from: minPrice(airbnbStyles.map((x) => x.price)),
    line: 'A 24 page welcome book and 8 signs that answer guest questions before they ask.'
  },
  {
    id: 'cleaning', href: '/cleaning-business-templates/', name: 'Cleaning business templates', img: '/images/shop/lines/cleaning.webp',
    alt: 'Residential cleaning checklists from the cleaning business forms kit',
    count: '3 products', from: minPrice(cleaningProducts.map((x) => x.price)),
    line: 'Checklists, estimate and intake forms, an invoice and a bookkeeping spreadsheet for house cleaners.'
  }
];

export const money = (n) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;
