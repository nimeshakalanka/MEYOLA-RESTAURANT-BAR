import React from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Preloader } from "@/components/ui/Preloader";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { TheBar } from "@/components/sections/TheBar";
import { Gallery } from "@/components/sections/Gallery";
import { GuestLove } from "@/components/sections/GuestLove";
import { VisitUs } from "@/components/sections/VisitUs";
import { Footer } from "@/components/sections/Footer";
import { MobileFloatingBar } from "@/components/ui/MobileFloatingBar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-midnight-lagoon text-sand">
      {/* 1. Skippable Interactive Preloader (< 1.5s) */}
      <Preloader />

      {/* 2. Hide-on-scroll Sticky Navbar */}
      <Navbar />

      {/* 3. Immersive Hero with layered parallax & split-text */}
      <Hero />

      {/* 4. Marquee Transition Banner on Warm Sand Canvas */}
      <div className="section-sand border-y border-midnight-lagoon/15 shadow-inner">
        <Marquee
          items={[
            "Ceylon Rice & Curry Standout",
            "Dawn Weligama Catamaran Fish",
            "Garlic Butter Tiger Prawns",
            "Halmilla Coconut Arrack Sours",
            "Handmade Prawn Fettuccine",
            "Surf-Town Teak Courtyard",
            "Chilled Lion Lager on Tap",
          ]}
          speed={32}
        />
      </div>



      {/* 7. Menu Ledger & Preview Section (Deep Palm Dark) */}
      <MenuPreview />

      {/* 8. The Sunset Cocktail Bar & Timeline (Midnight Lagoon Dark) */}
      <TheBar />

      {/* 9. Atmosphere & Dish Gallery (Warm Sand Canvas) */}
      <Gallery />

      {/* 10. Guest Love & Community (Deep Palm Dark) */}
      <GuestLove />

      {/* 11. Visit Us & Table Reservations (Warm Sand Canvas) */}
      <VisitUs />

      {/* 12. Majestic Footer with Huge Outlined Wordmark */}
      <Footer />

      {/* 13. Mobile-only Floating Reserve Bar */}
      <MobileFloatingBar />
    </main>
  );
}
