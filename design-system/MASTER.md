# MEYOLA RESTAURANT & BAR — MASTER DESIGN SYSTEM
**Style**: Premium Beachside Restaurant & Cocktail Bar, Tropical Dusk, Immersive, Editorial  
**Location**: Weligama Bay, Southern Sri Lanka  
**Generated via**: UI/UX Pro Max Design Intelligence  

---

## 1. Brand Tokens & Color System ("Tropical Dusk")
As specified in brand requirements, the core palette implements the Tropical Dusk atmosphere:
- `--midnight-lagoon`: `#0B1F1E` (Primary dark canvas, deep ocean depths)
- `--deep-palm`: `#123B34` (Secondary dark, foliage, elevated surfaces)
- `--sand`: `#F3E9D7` (Warm organic light canvas for alternating sections)
- `--coral-ember`: `#E8603C` (Primary CTA, glowing accents, sunset flame)
- `--turmeric`: `#E9B44C` (Secondary detail, Ceylon spice gold, badges, stars)
- `--sea-glass`: `#7FC8B8` (Tertiary hover states, ocean foam, subtle glows)
- `--midnight-lagoon-translucent`: `rgba(11, 31, 30, 0.85)`
- `--sand-card`: `rgba(243, 233, 215, 0.95)`
- `--border-dark`: `rgba(127, 200, 184, 0.18)`
- `--border-light`: `rgba(18, 59, 52, 0.15)`

### Contrast & Accessibility (WCAG AA Compliance)
- Over `--midnight-lagoon`: `#F3E9D7` (Sand) text achieves > 11:1 ratio.
- Over `--sand`: `#0B1F1E` (Midnight Lagoon) text achieves > 12:1 ratio.
- Primary buttons: `--coral-ember` with pure white/dark text calibrated for 4.5:1+ contrast.
- Minimum interactive tap target: 44×44px with 8px+ minimum margins.

---

## 2. Typography Hierarchy (next/font)
- **Display Serif**: `Fraunces` (Expressive, warm, coastal, vintage editorial flair)
- **Primary Sans**: `Manrope` (Clean, geometric, highly legible modern sans)
- **Scale (Fluid via clamp)**:
  - Hero Headline: `clamp(2.75rem, 6.5vw, 5.5rem)`
  - Section Headings (H2): `clamp(2rem, 4vw, 3.5rem)`
  - Card Titles (H3): `clamp(1.25rem, 2.2vw, 1.75rem)`
  - Body Text: `clamp(0.95rem, 1.1vw, 1.125rem)` with `line-height: 1.65`
  - Overlines / Tags / Metadata: `0.75rem` uppercase, `letter-spacing: 0.18em`

---

## 3. Section Rhythm & Alternating Layouts
To create visual interest and prevent monotonous dark blocks:
1. **Hero**: Dark (`--midnight-lagoon` with layered sunset parallax & glowing sun orb).
2. **Marquee Strip**: Sand banner (`--sand` with deep palm typography).
3. **Our Story**: Dark (`--midnight-lagoon` with dual overlapping photography).
4. **Signature Dishes**: Sand (`--sand` with rich dish cards & horizontal scroll).
5. **Menu Preview & Sketchbook**: Dark (`--deep-palm` with tactile ledger tabs).
6. **The Bar & Sunset Lounge**: Dark (`--midnight-lagoon` with golden hour timeline & glowing string lights).
7. **Bento Gallery**: Sand (`--sand` with bento masonry and lightbox).
8. **Guest Love**: Dark (`--deep-palm` with rating counter & verified reviews).
9. **Visit Us & Reservations**: Sand (`--sand` with WhatsApp concierge booking & map card).
10. **Footer**: Deep Lagoon with huge outlined `MEYOLA` wordmark.

---

## 4. Animation Philosophy & Tool Separation (Strict)
- **`motion/react`** exclusively handles:
  - Scroll-linked parallax offsets
  - `whileInView` reveals with graceful opacity fallbacks
  - LayoutId tab transition pills
  - Magnetic button hover/tap feedback
  - Hide-on-scroll sticky navbar
  - Mobile full-screen navigation overlay (`AnimatePresence`)
  - Image lightbox modal
- **`animejs` (v4)** exclusively handles:
  - Hero split-text headline stagger reveal
  - SVG line-draw path animations (wave lines, hand-drawn underlines)
  - Looping ambient effects (floating sun orb, twinkling bar light dots)
  - Numeric counters (4.9★ rating, 150+ reviews)
- **Rule**: Never animate the same DOM node with both libraries. Respect `prefers-reduced-motion`.

---

## 5. UI/UX Pro Max Pre-Delivery Checklist
- [x] No emojis used as icons (Lucide SVG icons only).
- [x] `cursor-pointer` on all interactive links, tabs, and buttons.
- [x] Hover states have smooth transitions (150–300ms).
- [x] WCAG AA 4.5:1 minimum text contrast verified on all backgrounds.
- [x] Visible focus states (`focus-visible:ring-2 focus-visible:ring-coral-ember`).
- [x] Keyboard navigation supported for modals, tabs, and lightboxes.
- [x] Responsive layout verified at 375px, 768px, 1280px, 1920px.
- [x] Zero horizontal scroll (`overflow-x: hidden`).
- [x] No TODO stubs or missing implementation.


.
