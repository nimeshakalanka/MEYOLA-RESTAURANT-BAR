/**
 * MEYOLA RESTAURANT & BAR — IMAGE REPOSITORY
 * 
 * Instructions for Owner / Content Manager:
 * - All online images are licensed for commercial use via Unsplash.
 * - To replace any image with your own custom photograph, drop the file into `/public/menu/` 
 *   or `/public/gallery/` and update the `src` attribute below, or simply override the local fallback path.
 */

export interface BrandImage {
  id: string;
  title: string;
  src: string;
  localFallback?: string;
  alt: string;
  caption?: string;
  category: "hero" | "story" | "dishes" | "bar" | "gallery" | "ambience";
  width: number;
  height: number;
}

export const brandImages = {
  hero: {
    duskOcean: {
      id: "hero-dusk",
      title: "Weligama Bay Sunset Dusk",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
      localFallback: "/menu/hero-dusk.jpg",
      alt: "Golden hour sunset over calm ocean waves in Weligama Bay, Sri Lanka",
      caption: "Where the island meets the evening",
      category: "hero",
      width: 1920,
      height: 1080,
    },
    surfVibe: {
      id: "hero-surf",
      title: "Southern Sri Lanka Coastline",
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=85",
      localFallback: "/menu/hero-surf.jpg",
      alt: "Tropical coconut palms framing the turquoise waters of Weligama",
      caption: "Natural surf-town sanctuary",
      category: "hero",
      width: 1920,
      height: 1080,
    },
  },
  story: {
    courtyard: {
      id: "story-courtyard",
      title: "Wooden Courtyard & Dining Deck",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/courtyard.jpg",
      alt: "Open-air wooden dining terrace with tropical plants and warm ambient lanterns",
      caption: "Crafted from reclaimed teak and coastal palm timber",
      category: "story",
      width: 1200,
      height: 900,
    },
    localHarbor: {
      id: "story-harbor",
      title: "Weligama Harbor Fishing Catamarans",
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/harbor.jpg",
      alt: "Traditional Sri Lankan outrigger boats resting on Weligama beach at sunrise",
      caption: "Dawn ocean harvest landed daily just 300m away",
      category: "story",
      width: 1200,
      height: 900,
    },
  },
  dishes: {
    riceCurry: {
      id: "dish-rice-curry",
      title: "Ceylon Rice & Curry Feast",
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/rice-curry.jpg",
      alt: "Heirloom claypot curries with samba rice, creamy coconut dhal, and crisp papadum",
      caption: "The Standout: Roasted southern spices & freshly pressed coconut milk",
      category: "dishes",
      width: 1200,
      height: 900,
    },
    catchOfDay: {
      id: "dish-catch-day",
      title: "Wild Catch of the Day",
      src: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/catch-of-day.jpg",
      alt: "Whole grilled wild snapper with crushed garlic butter, sea salt, and lemongrass",
      caption: "Netted dawn fish grilled over coconut charcoal",
      category: "dishes",
      width: 1200,
      height: 900,
    },
    garlicPrawns: {
      id: "dish-garlic-prawns",
      title: "Garlic Butter Tiger Prawns",
      src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/garlic-prawns.jpg",
      alt: "Sizzling jumbo wild tiger prawns in sweet butter and fresh herbs",
      caption: "Sweet jumbo prawns served with crusty wood-fired bread",
      category: "dishes",
      width: 1200,
      height: 900,
    },
    pasta: {
      id: "dish-pasta",
      title: "Coastal Prawn Fettuccine",
      src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/pasta.jpg",
      alt: "Handmade ribbons tossed with ocean prawns, cherry tomatoes, and bird's eye chili",
      caption: "Post-surf comfort rolled fresh daily",
      category: "dishes",
      width: 1200,
      height: 900,
    },
    burger: {
      id: "dish-burger",
      title: "The Meyola Beach Burger",
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/burger.jpg",
      alt: "Seared burger on brioche with caramelized shallots and hand-cut fries",
      caption: "Hearty, unpretentious beachside dining",
      category: "dishes",
      width: 1200,
      height: 900,
    },
  },
  bar: {
    arrackSour: {
      id: "bar-arrack-sour",
      title: "Artisan Ceylon Arrack Sour",
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/cocktail.jpg",
      alt: "Coconut flower spirit cocktail shaken with Weligama lime and cinnamon cane syrup",
      caption: "Sri Lankan heritage spirit infused with island botanicals",
      category: "bar",
      width: 1200,
      height: 900,
    },
    spritz: {
      id: "bar-spritz",
      title: "Weligama Passionfruit Spritz",
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/spritz.jpg",
      alt: "Sparkling tropical cocktail garnished with fresh passionfruit and crushed mint",
      caption: "Golden hour refresher served ice cold",
      category: "bar",
      width: 1200,
      height: 900,
    },
    counter: {
      id: "bar-counter",
      title: "The Sunset Cocktail Bar",
      src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/bar.jpg",
      alt: "Rustic wooden bar under string lights with curated spirits and tropical fruits",
      caption: "Music drifts through the palms from 5:00 PM until late",
      category: "bar",
      width: 1200,
      height: 900,
    },
  },
  gallery: [
    {
      id: "gal-1",
      title: "Generational Rice & Curry",
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/rice-curry.jpg",
      alt: "Slow-simmered Sri Lankan claypot curries served at Meyola",
      caption: "The Standout: Daily claypot curries & coconut sambol",
      category: "gallery" as const,
      width: 1200,
      height: 900,
    },
    {
      id: "gal-2",
      title: "Golden Hour Arrack Cocktails",
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/cocktail.jpg",
      alt: "Craft cocktail shaken with local Ceylon coconut arrack",
      caption: "Island botanicals & cinnamon cane syrup",
      category: "gallery" as const,
      width: 1200,
      height: 900,
    },
    {
      id: "gal-3",
      title: "Wild Weligama Ocean Catch",
      src: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/catch-of-day.jpg",
      alt: "Whole grilled snapper seasoned with fresh lime and garlic",
      caption: "Dawn catamaran catch prepared on open coals",
      category: "gallery" as const,
      width: 1200,
      height: 900,
    },
    {
      id: "gal-4",
      title: "Open Wooden Terrace",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/courtyard.jpg",
      alt: "Ambient outdoor wooden restaurant seating under glowing lights",
      caption: "Relaxed surf-town seating under the night sky",
      category: "gallery" as const,
      width: 1200,
      height: 900,
    },
    {
      id: "gal-5",
      title: "Handmade Prawn Fettuccine",
      src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/pasta.jpg",
      alt: "Fresh pasta ribbons tossed with wild prawns and herbs",
      caption: "Handmade ribbons tossed with ocean prawns",
      category: "gallery" as const,
      width: 1200,
      height: 900,
    },
    {
      id: "gal-6",
      title: "Weligama Sunset Sky",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      localFallback: "/menu/sunset.jpg",
      alt: "Vibrant tropical sunset across the bay in southern Sri Lanka",
      caption: "250 meters from the bay surf break",
      category: "gallery" as const,
      width: 1200,
      height: 900,
    },
  ],
};
