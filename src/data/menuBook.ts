/**
 * MEYOLA RESTAURANT & BAR — MENU BOOK DATA STRUCTURE
 * Sequential book pages: Front Cover -> Category Dividers -> Item Pages -> Back Cover
 */

import { menuCategories, menuItems, MenuItem } from "@/data/menu";

export type BookPageType = "cover" | "divider" | "item" | "back-cover";

export interface BookPage {
  id: string;
  pageNumber: number; // 1-indexed for display
  type: BookPageType;
  categoryId?: string;
  categoryLabel?: string;
  // Item specific
  item?: MenuItem;
  // Divider / Cover / BackCover specific
  title: string;
  subtitle?: string;
  description?: string;
  quote?: string;
  facingContent?: {
    overline?: string;
    headline: string;
    body: string;
    highlights?: string[];
    note?: string;
  };
}

export function generateBookPages(): BookPage[] {
  const pages: BookPage[] = [];
  let pageCounter = 1;

  // 1. FRONT COVER
  pages.push({
    id: "cover",
    pageNumber: pageCounter++,
    type: "cover",
    title: "MEYOLA",
    subtitle: "The Digital Menu Book · Weligama Bay",
    description: "Generational Ceylon rice & curry, dawn ocean catches, handmade pasta & artisan sunset cocktails under southern palms.",
    facingContent: {
      overline: "Welcome to Weligama",
      headline: "Where the island meets the evening.",
      body: "Turn the pages to explore our claypot curries, catamaran catches brought in at sunrise, and curated evening cellar.",
      highlights: ["Open Daily from 10:00 AM", "250m from Weligama Surf Break", "Woodfire & Fresh Ocean Catches"],
    },
  });

  // 2. CATEGORIES + ITEMS
  menuCategories.forEach((cat) => {
    const itemsInCat = menuItems.filter((i) => i.category === cat.id);

    // Category Divider Page
    pages.push({
      id: `divider-${cat.id}`,
      pageNumber: pageCounter++,
      type: "divider",
      categoryId: cat.id,
      categoryLabel: cat.label,
      title: cat.label,
      subtitle: cat.description,
      description: `Featuring ${itemsInCat.length} dishes and pours prepared fresh daily using local southern ingredients.`,
      facingContent: {
        overline: "Provenance & Kitchen Notes",
        headline: cat.label === "Ceylon Mains"
          ? "Claypot Hearth & Roasted Spices"
          : cat.label === "Fresh Catch"
          ? "Landed at Dawn in Weligama Bay"
          : cat.label === "Burgers & Pasta"
          ? "Post-Surf Island Comfort"
          : cat.label === "Sunset Cocktails"
          ? "Heritage Coconut Palm Arrack"
          : "Chilled Refreshers & Pure Coconut Water",
        body: cat.description,
        highlights: itemsInCat.map((i) => i.name),
        note: "Daily catches and seasonal specials are adjusted based on morning boat landings.",
      },
    });

    // Individual Item Pages
    itemsInCat.forEach((item) => {
      pages.push({
        id: `item-${item.id}`,
        pageNumber: pageCounter++,
        type: "item",
        categoryId: cat.id,
        categoryLabel: cat.label,
        item,
        title: item.name,
        subtitle: item.tag || cat.label,
        description: item.description,
        facingContent: {
          overline: `${cat.label} · Dish Spotlight`,
          headline: item.name,
          body: item.notes || item.description,
          highlights: item.ingredients,
          note: item.pairing ? `Recommended Pairing: ${item.pairing}` : undefined,
        },
      });
    });
  });

  // 3. BACK COVER
  pages.push({
    id: "back-cover",
    pageNumber: pageCounter++,
    type: "back-cover",
    title: "Join Us at the Table",
    subtitle: "Reserve an Open-Air Evening in Palana",
    description: "Tables fill quickly during golden hour (05:00 PM – 07:30 PM). Connect with our team to secure a courtyard seat.",
    facingContent: {
      overline: "Table Reservations & Concierge",
      headline: "We Look Forward to Welcoming You",
      body: "Located 28 First Cross Road, Palana, Weligama. Walk in from the surf or reserve ahead directly over WhatsApp.",
      highlights: [
        "Direct Line: +94 76 557 4616",
        "Daily: 10:00 AM – 11:30 PM",
        "Kitchen Closes: 10:15 PM",
      ],
      note: "All listed menu prices in LKR are placeholder estimates. Confirm daily board prices upon arrival.",
    },
  });

  return pages;
}

export const bookPages = generateBookPages();
