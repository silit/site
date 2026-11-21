// The offer in a product page's structured data. Everything sold from these pages is a digital download:
// the files arrive right after payment and delivery costs nothing. Google's Merchant listings report asks
// every offer to say how it is delivered and whether it can be returned, so both are stated here once.
import { SITE } from './site.js';

// Countries the delivery and return details are stated for (ISO 3166-1 alpha-2): where the buyers are.
// Google shows these details only to searchers in a listed country. At most 50.
export const MARKETS = ['US', 'GB', 'CA', 'AU', 'IE', 'NZ', 'DE', 'FR', 'NL', 'ES', 'IT', 'SE', 'TR'];

const NO_WAIT = { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' };

// Instant, free delivery in every listed country.
const delivery = {
  '@type': 'OfferShippingDetails',
  shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'USD' },
  shippingDestination: MARKETS.map((country) => ({ '@type': 'DefinedRegion', addressCountry: country })),
  deliveryTime: { '@type': 'ShippingDeliveryTime', handlingTime: NO_WAIT, transitTime: NO_WAIT }
};

// A downloaded file cannot be sent back. This is Etsy's rule for digital items, and /terms/ says refunds
// follow the rules of the platform the product was bought on.
const noReturns = {
  '@type': 'MerchantReturnPolicy',
  applicableCountry: MARKETS,
  returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted'
};

// `returns: false` states that the product cannot be returned. Leave it out for a store whose refund rule
// is not confirmed yet: the offer then says nothing about returns.
export const digitalOffer = ({ price, url, returns }) => ({
  '@type': 'Offer',
  price: String(price),
  priceCurrency: 'USD',
  availability: 'https://schema.org/InStock',
  url,
  seller: { '@id': `${SITE.url}/#org` },
  shippingDetails: delivery,
  ...(returns === false ? { hasMerchantReturnPolicy: noReturns } : {})
});
