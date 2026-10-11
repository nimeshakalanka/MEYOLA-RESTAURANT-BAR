/**
 * MEYOLA RESTAURANT & BAR — MENU DATA
 * ⚠️ VERIFY WITH OWNER: All prices are placeholder estimates in LKR.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: "mains" | "seafood" | "comfort" | "cocktails" | "drinks";
  categoryLabel: string;
  price: number; // Placeholder LKR
  description: string;
  standout?: boolean;
  tag?: string;
  spice?: 1 | 2 | 3;
  image: string;
  localImage?: string;
  ingredients: string[];
  pairing: string;
  notes: string;
}

export const menuCategories = [
  { id: "mains", label: "Ceylon Mains", description: "Woodfire curries, claypots & heirloom staples" },
  { id: "seafood", label: "Fresh Catch", description: "Netted dawn fish, jumbo prawns & calamari" },
  { id: "comfort", label: "Burgers & Pasta", description: "Handmade fettuccine, smash burgers & beach tacos" },
  { id: "cocktails", label: "Sunset Cocktails", description: "Artisan coconut arrack sours & tropical spritzes" },
  { id: "drinks", label: "Cold Drinks", description: "Ice cold Lion Lager, fresh thambili & juices" },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "rice-curry",
    name: "Ceylon Rice & Curry Feast",
    category: "mains",
    categoryLabel: "Ceylon Mains",
    price: 1200,
    description:
      "Fragrant samba rice served with daily claypot curries — creamy coconut dhal, pol sambol, beetroot curry, vegetable curry, and crisp papadum. Our standout dish.",
    standout: true,
    tag: "The House Standout",
    spice: 2,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000&q=85",
    localImage: "/menu/rice-curry.jpg",
    ingredients: ["Samba Rice", "Coconut Dhal", "Fresh Pol Sambol", "Claypot Curry", "Papadum"],
    pairing: "Ice Cold Lion Lager or Fresh King Coconut",
    notes: "Slow-simmered daily from 07:00 AM using roasted southern spices and fresh coconut cream.",
  },
  {
    id: "chicken-kottu",
    name: "Street Style Kottu Roti",
    category: "mains",
    categoryLabel: "Ceylon Mains",
    price: 1100,
    description:
      "Chopped flatbread stir-fried on the sizzling iron plate with chicken, egg, garden leeks, carrots, and aromatic curry reduction.",
    standout: false,
    tag: "Late Night Classic",
    spice: 2,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1000&q=85",
    localImage: "/menu/kottu.jpg",
    ingredients: ["Godamba Roti", "Free-Range Egg", "Garden Vegetables", "Curry Sauce"],
    pairing: "Chilled Lion Lager",
    notes: "Chopped rhythmically on iron plates. A Sri Lankan surf-town essential.",
  },
  {
    id: "catch-of-day",
    name: "Wild Ocean Catch of the Day",
    category: "seafood",
    categoryLabel: "Fresh Catch",
    price: 2200,
    description:
      "Hand-selected daily from Weligama Harbor catamarans. Whole grilled red snapper or seer fish with lemongrass, sea salt crystals, and garlic butter.",
    standout: true,
    tag: "Dawn Catamaran Catch",
    spice: 1,
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=1000&q=85",
    localImage: "/menu/catch-of-day.jpg",
    ingredients: ["Whole Fresh Snapper", "Garlic Butter", "Lemongrass", "Sea Salt", "Herb Wedges"],
    pairing: "Chilled Sauvignon Blanc or Lime Spritz",
    notes: "Netted by local fishermen off the Weligama Bay reef at dawn.",
  },
  {
    id: "garlic-prawns",
    name: "Garlic Butter Tiger Prawns",
    category: "seafood",
    categoryLabel: "Fresh Catch",
    price: 2500,
    description:
      "Jumbo wild tiger prawns sautéed in dairy butter, crushed garlic, white wine splash, and coriander. Served with crusty wood-oven bread.",
    standout: true,
    tag: "Chef Signature",
    spice: 1,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1000&q=85",
    localImage: "/menu/garlic-prawns.jpg",
    ingredients: ["Wild Jumbo Tiger Prawns", "Sweet Cream Butter", "Crushed Garlic", "Crusty Bread"],
    pairing: "Ice Cold Lion Stout",
    notes: "Sweet, juicy prawns with an unctuous garlic butter skillet for bread dipping.",
  },
  {
    id: "calamari",
    name: "Grilled Lemongrass Calamari",
    category: "seafood",
    categoryLabel: "Fresh Catch",
    price: 1600,
    description:
      "Tender calamari grilled on blazing coals with lime, garlic, and fresh herbs. Accompanied by homemade spicy chili aioli.",
    standout: false,
    tag: "Wood-Fired",
    spice: 2,
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1000&q=85",
    localImage: "/menu/calamari.jpg",
    ingredients: ["Fresh Calamari", "Weligama Lime", "Garlic Emulsion", "Spiced Aioli"],
    pairing: "Passionfruit Fizz",
    notes: "Charred quickly over high heat to keep the rings incredibly tender.",
  },
  {
    id: "prawn-fettuccine",
    name: "Handmade Prawn Fettuccine",
    category: "comfort",
    categoryLabel: "Burgers & Pasta",
    price: 2100,
    description:
      "Silky handmade egg ribbons tossed with wild ocean prawns, cherry tomatoes, extra virgin olive oil, and crushed bird's eye chili.",
    standout: true,
    tag: "Guest Favorite",
    spice: 2,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1000&q=85",
    localImage: "/menu/pasta.jpg",
    ingredients: ["Fresh Fettuccine", "Ocean Prawns", "Cherry Tomatoes", "Bird's Eye Chili", "Aged Parmesan"],
    pairing: "Pinot Grigio or Passionfruit Spritz",
    notes: "Cooked al dente to revive surfers after sunset sessions.",
  },
  {
    id: "fish-tacos",
    name: "Crispy Mahi-Mahi Fish Tacos",
    category: "comfort",
    categoryLabel: "Burgers & Pasta",
    price: 1850,
    description:
      "Locally caught mahi-mahi on warm corn tortillas with charred mango salsa, lime crema, shredded cabbage slaw, and cilantro.",
    standout: false,
    tag: "Surf Classic",
    spice: 1,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1000&q=85",
    localImage: "/menu/tacos.jpg",
    ingredients: ["Crisp Mahi-Mahi", "Warm Tortillas", "Mango Salsa", "Lime Crema", "Cabbage Slaw"],
    pairing: "Chilled Lion Lager",
    notes: "Bright, zesty, and easy to share on the garden terrace.",
  },
  {
    id: "burger",
    name: "The Meyola Beach Burger",
    category: "comfort",
    categoryLabel: "Burgers & Pasta",
    price: 1400,
    description:
      "Juicy seared patty on a toasted brioche bun with caramelized red shallots, smoked gouda, crisp greens, and spiced garlic aioli with fries.",
    standout: false,
    tag: "Hearty Comfort",
    spice: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=85",
    localImage: "/menu/burger.jpg",
    ingredients: ["Prime Patty", "Brioche Bun", "Caramelized Shallots", "Smoked Gouda", "Hand-Cut Fries"],
    pairing: "Draft Lion Lager",
    notes: "Hand-pressed on cast iron for a caramelized crust.",
  },
  {
    id: "arrack-sour",
    name: "Artisan Ceylon Arrack Sour",
    category: "cocktails",
    categoryLabel: "Sunset Cocktails",
    price: 1100,
    description:
      "Halmilla-aged coconut flower spirit shaken with fresh lime, cinnamon-bark cane syrup, and silky cocktail foam.",
    standout: true,
    tag: "Signature Drink",
    spice: 1,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1000&q=85",
    localImage: "/menu/cocktail.jpg",
    ingredients: ["Coconut Arrack", "Weligama Lime", "Cinnamon Syrup", "Aquafaba Foam"],
    pairing: "Sunset Hour (05:30 PM)",
    notes: "Sri Lanka's heritage coconut palm spirit with citrus and warm spice aromatics.",
  },
  {
    id: "passionfruit-spritz",
    name: "Weligama Passionfruit Spritz",
    category: "cocktails",
    categoryLabel: "Sunset Cocktails",
    price: 1200,
    description:
      "Freshly crushed Weligama passionfruit, dry prosecco, garden mint, and soda water served over crushed ice.",
    standout: false,
    tag: "Golden Hour Sip",
    spice: 1,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1000&q=85",
    localImage: "/menu/spritz.jpg",
    ingredients: ["Fresh Passionfruit", "Sparkling Wine", "Garden Mint", "Soda"],
    pairing: "Calamari or Fish Tacos",
    notes: "Crisp, tropical, and wonderfully refreshing after a day in the sun.",
  },
  {
    id: "lion-lager",
    name: "Ice Cold Lion Lager",
    category: "drinks",
    categoryLabel: "Cold Drinks",
    price: 750,
    description: "The classic Ceylon golden lager, poured ice cold directly from our chilled tap.",
    standout: false,
    tag: "Island Staple",
    spice: 1,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=85",
    localImage: "/menu/beer.jpg",
    ingredients: ["Ceylon Malt", "Hops", "Pure Water"],
    pairing: "Rice & Curry or Kottu",
    notes: "Served in chilled heavy glassware.",
  },
  {
    id: "king-coconut",
    name: "Fresh King Coconut (Thambili)",
    category: "drinks",
    categoryLabel: "Cold Drinks",
    price: 450,
    description: "Naturally sweet electrolyte-rich golden king coconut, sliced open fresh to order.",
    standout: false,
    tag: "Naturally Hydrating",
    spice: 1,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&q=85",
    localImage: "/menu/thambili.jpg",
    ingredients: ["100% Raw King Coconut Water"],
    pairing: "Any spicy curry",
    notes: "Harvested fresh from southern palms.",
  },
];
