import React from "react";
import { Waves } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { Gallery } from "@/components/sections/Gallery";
import { VisitUs } from "@/components/sections/VisitUs";
import { Footer } from "@/components/sections/Footer";
import { MobileFloatingBar } from "@/components/ui/MobileFloatingBar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-midnight-lagoon text-sand">
      {/* 1. Hide-on-scroll Sticky Navbar */}
      <Navbar />

      {/* 2. Immersive Hero with layered parallax & split-text */}
      <Hero />

      {/* 3. Nomad-Style Minimalist Editorial Introduction */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-midnight-lagoon via-[#0a2320] to-midnight-lagoon border-y border-sea-glass/10">
        <div className="container-meyola max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sea-glass/20 bg-white/5 mb-6 text-[0.7rem] font-sans uppercase font-bold tracking-[0.24em] text-coral-ember">
            <Waves className="w-3.5 h-3.5 text-coral-ember" />
            <span>Palana · Weligama Bay</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-sand leading-tight sm:leading-snug text-balance">
            Honest coastal food, morning ocean catches &amp; craft sunset drinks under the palms.
          </h2>

          <p className="mt-6 text-sm sm:text-base font-sans font-light text-sand/75 max-w-2xl mx-auto leading-relaxed text-balance">
            Tucked 250m from Weligama surf break. Open daily from 10:00 AM to 11:30 PM for relaxed post-surf lunches, heirloom claypot curries, fresh pastas, and evening arrack cocktails.
          </p>

          {/* Clean Editorial Feature Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-sans text-sand/80">
            <span className="px-4 py-2 rounded-full border border-sand/15 bg-white/5 backdrop-blur-sm">
              Dawn Catches Daily
            </span>
            <span className="px-4 py-2 rounded-full border border-sand/15 bg-white/5 backdrop-blur-sm">
              Heirloom Claypots
            </span>
            <span className="px-4 py-2 rounded-full border border-sand/15 bg-white/5 backdrop-blur-sm">
              Craft Arrack Bar
            </span>
            <span className="px-4 py-2 rounded-full border border-sand/15 bg-white/5 backdrop-blur-sm">
              Open-Air Dining
            </span>
          </div>
        </div>
      </section>

      {/* 4. Menu Ledger & Preview Section (Direct link to 3D Menu Book) */}
      <MenuPreview />

      {/* 5. Atmosphere & Food Photography Gallery */}
      <Gallery />

      {/* 6. Visit Us & Table Reservations (Streamlined Form) */}
      <VisitUs />

      {/* 7. Footer */}
      <Footer />

      {/* 8. Mobile-only Floating Reserve Bar */}
      <MobileFloatingBar />
    </main>
  );
}
