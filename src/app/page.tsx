import React from "react";
import Image from "next/image";
import { Waves, Sparkles } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { Gallery } from "@/components/sections/Gallery";
import { VisitUs } from "@/components/sections/VisitUs";
import { Footer } from "@/components/sections/Footer";
import { MobileFloatingBar } from "@/components/ui/MobileFloatingBar";
import { brandImages } from "@/data/images";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-midnight-lagoon text-sand">
      {/* 1. Hide-on-scroll Sticky Navbar */}
      <Navbar />

      {/* 2. Immersive Hero with layered parallax & split-text */}
      <Hero />

      {/* 3. Nomad-Style Minimalist Editorial Introduction with Glassmorphism Cards */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-midnight-lagoon via-[#0a2320] to-midnight-lagoon border-y border-sea-glass/10">
        <div className="container-meyola max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sea-glass/20 bg-white/5 mb-6 text-[0.7rem] font-sans uppercase font-bold tracking-[0.24em] text-coral-ember">
            <Waves className="w-3.5 h-3.5 text-coral-ember" />
            <span>Palana · Weligama Bay</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-sand leading-tight sm:leading-snug text-balance max-w-4xl mx-auto">
            Honest coastal food, morning ocean catches &amp; craft sunset drinks under the palms.
          </h2>

          <p className="mt-5 text-sm sm:text-base font-sans font-light text-sand/75 max-w-2xl mx-auto leading-relaxed text-balance">
            Tucked 250m from Weligama surf break. Open daily from 10:00 AM to 11:30 PM for relaxed post-surf lunches, heirloom claypot curries, fresh pastas, and evening cocktails.
          </p>

          {/* Clean Editorial Feature Badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-[0.7rem] sm:text-xs font-sans text-sand/80">
            <span className="px-3.5 py-1.5 rounded-full border border-sand/15 bg-white/5 backdrop-blur-sm">
              Dawn Catches Daily
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-sand/15 bg-white/5 backdrop-blur-sm">
              Heirloom Claypots
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-sand/15 bg-white/5 backdrop-blur-sm">
              Craft Arrack Bar
            </span>
            <span className="px-3.5 py-1.5 rounded-full border border-sand/15 bg-white/5 backdrop-blur-sm">
              Open-Air Dining
            </span>
          </div>

          {/* ── 2 Minimal Little Cards with Glass Effect ── */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto text-left">
            {/* Card 1: Claypot Feast & Ocean Catch */}
            <div className="group relative rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.45)] hover:border-coral-ember/50 hover:bg-white/[0.1] transition-all duration-300">
              <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden bg-deep-palm">
                <Image
                  src={brandImages.dishes.riceCurry.src}
                  alt={brandImages.dishes.riceCurry.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[0.65rem] font-sans uppercase font-bold tracking-wider bg-midnight-lagoon/80 backdrop-blur-md text-coral-ember border border-coral-ember/30">
                  Morning Harvest
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-display text-base sm:text-lg font-medium text-sand drop-shadow">
                    Ceylon Rice &amp; Curry Feast
                  </h3>
                  <p className="text-[0.72rem] font-sans text-sand/80 line-clamp-1 mt-0.5">
                    Fresh coconut milk, roasted spices &amp; daily catches
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Sunset Cocktail Bar */}
            <div className="group relative rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.45)] hover:border-turmeric/50 hover:bg-white/[0.1] transition-all duration-300">
              <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden bg-deep-palm">
                <Image
                  src={brandImages.bar.arrackSour.src}
                  alt={brandImages.bar.arrackSour.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[0.65rem] font-sans uppercase font-bold tracking-wider bg-midnight-lagoon/80 backdrop-blur-md text-turmeric border border-turmeric/30">
                  Golden Hour
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-display text-base sm:text-lg font-medium text-sand drop-shadow">
                    Artisan Ceylon Arrack Sours
                  </h3>
                  <p className="text-[0.72rem] font-sans text-sand/80 line-clamp-1 mt-0.5">
                    Infused with Weligama lime &amp; southern botanicals
                  </p>
                </div>
              </div>
            </div>
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
