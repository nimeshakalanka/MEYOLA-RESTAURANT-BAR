# MEYOLA RESTAURANT & BAR (Weligama, Sri Lanka)
> An award-level, immersive digital experience designed for **Meyola Restaurant & Bar**, located along First Cross Road, Palana, Weligama, southern Sri Lanka.

---

## 🌴 Visual Atmosphere: "Tropical Dusk"

- **Midnight Lagoon (`#0B1F1E`)**: Deep ocean dark canvas grounding the late-night cocktail energy.
- **Deep Palm (`#123B34`)**: Elevated foliage tone for secondary sections and card surfaces.
- **Warm Sand (`#F3E9D7`)**: Sun-drenched coastal light canvas for rhythmic section alternation.
- **Coral Ember (`#E8603C`)**: Glowing sunset flame for primary CTAs and action triggers.
- **Ceylon Turmeric (`#E9B44C`)**: Spice gold for badges, highlight accents, and star ratings.
- **Sea Glass (`#7FC8B8`)**: Subtle ocean foam hover glows and line accents.
- **Typography Pairing**: Expressive Display Serif (**Fraunces**) + Clean Modern Sans (**Manrope**) with fluid `clamp()` sizing.
- **Textures & Lighting**: SVG fractal film-grain overlay and radial sunset glows.

---

## 🛠️ Technology Stack & Architecture

- **Framework**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.
- **Motion (`motion/react`)**: Scroll-linked parallax, `whileInView` entrance reveals, layoutId tab pill indicator, magnetic button hover physics, hide-on-scroll sticky navbar, mobile fullscreen overlay with `AnimatePresence`, image lightbox.
- **Anime.js (v4)**: Hero split-text headline stagger reveal, SVG line-draw path animations (wave lines, hand-drawn underlines), ambient floating sunset orb, festoon string-light twinkling loops, numeric rating counters.
- **Strict Separation**: No element is animated by both libraries simultaneously; zero layout shift; respect for `prefers-reduced-motion`.
- **SEO & Schema**: JSON-LD Restaurant schema (`FoodEstablishment`), dynamic Open Graph metadata, sitemap.xml, robots.txt.

---

## 🚀 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Type check & validation
npm run lint

# 4. Production build
npm run build

# 5. Run production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the live site.

---

## ✍️ Content Customization Guide

All brand data is modularized and organized for immediate owner customization:

### 1. Brand Identity & Operating Hours: `/lib/site.ts`
Edit contact numbers, verified address, opening times, and social links:
- `siteConfig.contact.phone`: Primary reservation line (+94 76 557 4616).
- `siteConfig.contact.whatsapp`: WhatsApp number for one-tap guest reservations.
- `siteConfig.hours`: Operating hours for weekdays, weekends, and kitchen cutoff.

### 2. Menu Items & Pricing: `/data/menu.ts`
Edit or add dishes, prices, spice levels, ingredients, and pairings:
- Categories: Ceylon Mains, Fresh Catch, Burgers & Pasta, Sunset Cocktails, Cold Drinks.
- Tag standout dishes with `standout: true`.
- Update LKR prices (currently marked with owner placeholder notices).

### 3. Photography & Assets: `/data/images.ts` and `/public/menu/`
- Drop your high-resolution food and atmosphere photography directly into `/public/menu/` with names matching the dish IDs:
  - `rice-curry.jpg`
  - `catch-of-day.jpg`
  - `garlic-prawns.jpg`
  - `cocktail.jpg`
  - `burger.jpg`
  - `pasta.jpg`
- The application automatically handles local and remote fallback logic.

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**. The site will build statically in seconds with 100% route optimization.

---

## 📋 Owner Verification & Placeholder Checklist

| Item | Current Status | Action Needed Before Official Launch |
| :--- | :--- | :--- |
| **Address** | `28 First Cross Road, Palana, Weligama` | Verified brand fact ✅ |
| **Phone** | `+94 76 557 4616` | Verified brand fact ✅ |
| **Standout Dish** | `Ceylon Rice & Curry` | Verified brand fact ✅ |
| **Price Range** | `$$ - $$$` | Verified brand fact ✅ |
| **Menu Item Prices** | Estimated LKR values | Verify exact dish prices with owner |
| **Operating Hours** | `10:00 AM – 11:30 PM` | Verify weekday/weekend opening hours |
| **Social Links** | Instagram / Facebook placeholders | Update handles with official restaurant accounts |
| **Customer Reviews** | Sample reviews labeled `Placeholder` | Replace with verified guest reviews & quotes |
| **Photographs** | Curated Unsplash tropical culinary photography | Drop official restaurant photos into `/public/menu/` |

---

## 📜 Credits & Licenses
See [`/docs/CREDITS.md`](./docs/CREDITS.md) for full licensing details on all assets, libraries, and design tokens used.
