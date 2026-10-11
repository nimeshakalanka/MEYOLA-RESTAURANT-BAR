export interface MenuItem {
  id: string;
  name: string;
  category: "mains" | "seafood" | "comfort" | "cocktails" | "dessert";
  categoryName: string;
  price: number; // in LKR
  description: string;
  story: string;
  provenance: string;
  ingredients: string[];
  pairing: string;
  tag?: string;
  spiceLevel?: 1 | 2 | 3;
  image: string;
  localImage?: string;
  chefNote: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "rice-curry",
    name: "Generational Ceylon Rice & Curry",
    category: "mains",
    categoryName: "Claypot Curries",
    price: 1200,
    description:
      "Fragrant samba rice served with traditional slow-simmered curries: creamy coconut dhal, pol sambol, beetroot curry, vegetable curry, and crisp papadum.",
    story:
      "Crushed with stone grinders daily at 07:00 AM using roasted cumin, black coriander, and cinnamon bark from the Weligama hills.",
    provenance: "Generational Family Recipe • Weligama Spice Hills",
    ingredients: ["Ceylon Samba Rice", "Woodfire Dhal", "Coconut Pol Sambol", "Seeni Sambol", "Crisp Papadum"],
    pairing: "Lion Lager or Fresh King Coconut",
    tag: "Most Celebrated",
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000&q=85",
    localImage: "/menu/rice-curry.jpg",
    chefNote: "Mix the coconut sambol directly into the warm rice with a squeeze of garden lime for the true local flavor.",
  },
  {
    id: "catch-of-day",
    name: "Wild Indian Ocean Catch of the Day",
    category: "seafood",
    categoryName: "Wild Ocean Seafood",
    price: 2200,
    description:
      "Hand-selected daily from Weligama catamaran harbor. Grilled over wood embers with crushed sea salt, lemon butter, garlic, and fresh herb salad.",
    story:
      "Bought directly from local catamaran fishermen who cast nets across the Weligama Bay reef at dawn.",
    provenance: "Weligama Catamaran Harbor • Dawn Catch",
    ingredients: ["Fresh Red Snapper / Seer Fish", "Sea Salt Crystals", "Crushed Lemongrass", "Garlic Butter", "Herb Wedges"],
    pairing: "Chilled Sauvignon Blanc or Lime Arrack",
    tag: "Wild Harbor Fresh",
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=1000&q=85",
    localImage: "/menu/catch-of-day.jpg",
    chefNote: "Ask your host what came in on the boats today — we only grill fish netted within the past 12 hours.",
  },
  {
    id: "garlic-prawns",
    name: "Jumbo Garlic Butter Tiger Prawns",
    category: "seafood",
    categoryName: "Wild Ocean Seafood",
    price: 2500,
    description:
      "Succulent wild ocean tiger prawns sautéed in French butter, minced garlic, a splash of white wine, and hand-plucked coriander. Served with crusty village bread.",
    story:
      "Sweet, plump, and bursting with buttery oceanic moisture. Accompanied by toasted crusty Sri Lankan village bread to dip into the garlic butter skillet.",
    provenance: "Mirissa & Weligama Deep Reefs",
    ingredients: ["Wild Jumbo Tiger Prawns", "Sweet Cream Butter", "Slow-Browned Garlic", "White Wine Glaze", "Village Crusty Bread"],
    pairing: "Ice Cold Lion Stout or Fresh Pineapple Mint Juice",
    tag: "Chef Signature",
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1000&q=85",
    localImage: "/menu/garlic-prawns.jpg",
    chefNote: "The garlic-butter pool at the base of the cast iron pan is made for dipping your warm bread.",
  },
  {
    id: "prawn-pasta",
    name: "Handmade Coastal Prawn Fettuccine",
    category: "comfort",
    categoryName: "Comfort Plates",
    price: 2100,
    description:
      "Silky handmade egg pasta ribbons tossed with ocean prawns, cherry tomatoes, extra virgin olive oil, sweet basil, and crushed red bird's eye chili.",
    story:
      "The undisputed traveler favorite after long hours in the Weligama surf break. Mediterranean technique elevated with fresh island herbs.",
    provenance: "Handmade in Small Batches • Weligama Bay",
    ingredients: ["Handmade Fettuccine", "Ocean Tiger Prawns", "Cherry Tomatoes", "Bird's Eye Chili", "Aged Parmesan"],
    pairing: "Pinot Grigio or Passionfruit Spritz",
    tag: "Guest Favorite",
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1000&q=85",
    localImage: "/menu/pasta.jpg",
    chefNote: "Cooked strictly al dente with a lively kick of chili to revive your energy after the waves.",
  },
  {
    id: "beach-burger",
    name: "The Meyola Beachside Smash Burger",
    category: "comfort",
    categoryName: "Comfort Plates",
    price: 1400,
    description:
      "Juicy seared patty on a toasted golden brioche bun with caramelized red onions, melted smoked gouda cheese, crisp lettuce, and spiced garlic aioli. Served with hand-cut wedges.",
    story:
      "Crafted for hungry sunset watchers and travelers seeking world-class comfort food between surfs.",
    provenance: "House Cast Iron Specialty • Weligama Kitchen",
    ingredients: ["Seared Prime Patty", "Toasted Brioche Bun", "Caramelized Shallots", "Melted Smoked Gouda", "Hand-Cut Cassava Wedges"],
    pairing: "Draft Lion Lager or Fresh Mango Smoothie",
    tag: "Hearty Classic",
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=85",
    localImage: "/menu/burger.jpg",
    chefNote: "Pair with our homemade chili-garlic aioli for the ultimate beach comfort bite.",
  },
  {
    id: "fish-tacos",
    name: "Crispy Mahi-Mahi Coastal Tacos",
    category: "comfort",
    categoryName: "Comfort Plates",
    price: 1850,
    description:
      "Freshly caught mahi-mahi on warm soft tortillas with charred mango salsa, crisp cabbage slaw, lime-cilantro crema, and pickled jalapeños.",
    story:
      "Light, zesty, and deeply satisfying. Perfect for sharing on the garden terrace as the tropical sun dips below the horizon.",
    provenance: "Wild Mahi-Mahi • Weligama Coast",
    ingredients: ["Crisp Wild Mahi-Mahi", "Warm Corn Tortillas", "Charred Mango Salsa", "Lime-Cilantro Crema", "Garden Slaw"],
    pairing: "Fresh Lime Soda or Chilled Lion Lager",
    tag: "Surf Classic",
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1000&q=85",
    localImage: "/menu/tacos.jpg",
    chefNote: "Drizzle with our fresh charred mango salsa for the perfect balance of sweet and tangy heat.",
  },
  {
    id: "arrack-sour",
    name: "Artisan Ceylon Arrack Sour",
    category: "cocktails",
    categoryName: "Botanical Spirits",
    price: 1100,
    description:
      "Coconut palm flower spirit aged in Halmilla vats, shaken with fresh lime, cinnamon-bark cane syrup, and silky foam. Garnished with dehydrated citrus.",
    story:
      "Pure coconut arrack is Sri Lanka’s greatest distilling heritage, tapped by hand from towering coconut palms along the southern coast.",
    provenance: "Aged Halmilla Vats • Southern Ceylon",
    ingredients: ["Pure Coconut Arrack", "Weligama Garden Lime", "Spiced Cane Syrup", "Ceylon Cinnamon Bark", "Silky Foam"],
    pairing: "Enjoy during golden hour (05:30 PM – 07:30 PM)",
    tag: "Signature Cocktail",
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1000&q=85",
    localImage: "/menu/cocktail.jpg",
    chefNote: "Smooth caramel, toasted coconut, and citrus aromatics with a clean, refreshing finish.",
  },
  {
    id: "coconut-hopper",
    name: "Caramelized Sweet Coconut Delight",
    category: "dessert",
    categoryName: "Tropical Sweets",
    price: 950,
    description:
      "Warm central rainforest kithul treacle drizzled over velvety coconut cream curd, roasted southern cashew nut crumble, and fresh mint.",
    story:
      "Sweet kithul sap has been harvested by indigenous canopy tappers for centuries. Paired with rich island coconut cream.",
    provenance: "Highland Kithul Palm Treacle • Weligama Dairy",
    ingredients: ["Pure Kithul Treacle", "Velvety Coconut Cream", "Roasted Cashew Crumble", "Vanilla Bean Pod", "Fresh Mint"],
    pairing: "Hot Ceylon Black Tea with Cardamom",
    tag: "Sweet Ending",
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1000&q=85",
    localImage: "/menu/dessert.jpg",
    chefNote: "The perfect sweet harmony to conclude an evening of seafood and claypot spices.",
  },
];
