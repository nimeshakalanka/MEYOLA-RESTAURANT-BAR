/**
 * MEYOLA RESTAURANT & BAR — CENTRAL SITE CONFIGURATION
 * 
 * ⚠️ VERIFY WITH OWNER:
 * - Opening hours, exact pricing, social media handles, and press quotes are placeholders
 * - Address and phone number are verified brand facts from owner
 * - NEVER invent fake awards, press quotes, or verified reviews without owner consent
 */

export const siteConfig = {
  name: "Meyola Restaurant & Bar",
  tagline: "Where the island meets the evening.",
  description:
    "Relaxed beachside restaurant & bar in Weligama, southern Sri Lanka. Generational Ceylon rice & curry, dawn ocean catches, hand-rolled pastas, and sunset arrack cocktails under the palms.",
  url: "https://meyolarestaurant.com", // VERIFY WITH OWNER: domain
  address: {
    street: "28 First Cross Road, Palana",
    locality: "Weligama",
    region: "Southern Province",
    postalCode: "81700",
    country: "Sri Lanka",
    full: "28 First Cross Road, Palana, Weligama, Matara 81700, Sri Lanka",
    proximity: "250 meters from Weligama main surf beach",
    coordinates: {
      lat: 5.9723,
      lng: 80.4285,
    },
  },
  contact: {
    phone: "+94 76 557 4616", // VERIFY WITH OWNER: primary line
    whatsapp: "94765574616",
    email: "hello@meyolarestaurant.com", // VERIFY WITH OWNER: placeholder
    instagram: "https://instagram.com/meyola.weligama", // VERIFY WITH OWNER: placeholder
    facebook: "https://facebook.com/meyola.weligama", // VERIFY WITH OWNER: placeholder
    googleMaps: "https://maps.google.com/?q=Meyola+Restaurant+Weligama",
  },
  hours: {
    // VERIFY WITH OWNER: placeholder operating schedule
    weekday: "10:00 AM – 11:00 PM",
    weekend: "10:00 AM – 11:30 PM",
    kitchenCloses: "10:15 PM",
    barCloses: "11:30 PM",
    goldenHour: "05:00 PM – 07:30 PM",
  },
  priceRange: "$$ - $$$",
  currency: "LKR",
  highlights: [
    "Generational Ceylon Rice & Curry (Daily Standout)",
    "Dawn Catamaran Wild Ocean Catches",
    "Handmade Coastal Prawn Fettuccine",
    "Artisan Ceylon Coconut Arrack Sours",
    "Surf-Town Wooden Courtyard Atmosphere",
  ],
} as const;
