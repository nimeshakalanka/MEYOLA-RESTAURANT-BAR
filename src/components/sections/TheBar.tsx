"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { Sparkles, Clock, Wine, Moon, Sun, GlassWater } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { brandImages } from "@/data/images";

const timelineEvents = [
  {
    time: "10:00 AM",
    phase: "Morning Dawn",
    title: "Post-Surf Thambili & Cold Brews",
    desc: "Walk in fresh from the bay. Slice open a cold king coconut or enjoy single-origin Ceylon tea under the shade.",
    icon: Sun,
    color: "#E9B44C",
  },
  {
    time: "05:00 PM",
    phase: "Golden Hour",
    title: "Sunset Over Weligama Bay",
    desc: "The sun softens into coral gold. The bar shakers start rattling with Halmilla-aged Ceylon Arrack sours.",
    icon: Sparkles,
    color: "#E8603C",
  },
  {
    time: "07:30 PM",
    phase: "Dinner & Flame",
    title: "Harbor Catches on the Coals",
    desc: "Whole wild fish and garlic butter tiger prawns grilled over coconut embers. Ambient music drifts through the courtyard.",
    icon: Wine,
    color: "#7FC8B8",
  },
  {
    time: "10:00 PM",
    phase: "Late Night",
    title: "Under the Palms & Stars",
    desc: "Unrushed surf-town conversations, ice-cold Lion Stout, and curated cocktail nightcaps until midnight closing.",
    icon: Moon,
    color: "#F3E9D7",
  },
];

export function TheBar() {
  const lightsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lights = lightsRef.current?.querySelectorAll(".festoon-dot");
    if (!lights || !lights.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Twinkling string-light dots loop via Anime.js v4
    const lightsAnim = animate(lights, {
      opacity: [0.35, 1],
      scale: [0.85, 1.25],
      duration: 1800,
      delay: stagger(150, { from: "random" }),
      alternate: true,
      loop: true,
      ease: "easeInOutQuad",
    });

    return () => {
      lightsAnim.revert();
    };
  }, []);

  return (
    <section
      id="bar"
      className="section-dark py-24 sm:py-32 relative overflow-hidden bg-midnight-lagoon"
      aria-label="The Bar and Sunset Lounge"
    >
      {/* ── Twinkling Festoon String-Lights (Anime.js loop) ── */}
      <div
        ref={lightsRef}
        className="absolute top-8 left-0 right-0 w-full overflow-hidden flex justify-around pointer-events-none z-10 px-4"
        aria-hidden="true"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Hanging wire */}
            <div
              className="w-[1px] bg-sand/20"
              style={{ height: `${14 + (Math.sin(i * 0.5) + 1) * 16}px` }}
            />
            {/* Glowing bulb */}
            <div className="festoon-dot w-2.5 h-2.5 rounded-full bg-turmeric shadow-[0_0_12px_#E9B44C] will-change-transform will-change-opacity" />
          </div>
        ))}
      </div>

      {/* Ambient glowing pools */}
      <div className="sunset-glow glow-coral w-[500px] h-[500px] -top-20 -left-20 opacity-20" />
      <div className="sunset-glow glow-turmeric w-[450px] h-[450px] bottom-10 right-0 opacity-15" />

      <div className="container-meyola relative z-20 pt-8">
        <SectionHeading
          overline="Artisan Spirits & Tropical Sunset"
          title="The Sunset Cocktail Bar"
          subtitle="Honoring Sri Lanka's historic coconut palm arrack tradition, paired with freshly plucked botanicals, pressed passionfruit, and island citrus."
          withUnderline
          theme="dark"
        />

        {/* Featured Cocktails Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Arrack Sour */}
          <Reveal variant="fade-up" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden bg-deep-palm/40 border border-sea-glass/20 p-6 flex flex-col justify-between group hover:border-coral-ember/40 transition-all duration-300 hover:shadow-2xl h-full">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 bg-midnight-lagoon">
                <Image
                  src={brandImages.bar.arrackSour.src}
                  alt={brandImages.bar.arrackSour.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-midnight-lagoon/85 border border-coral-ember text-coral-ember px-3 py-1 rounded-full text-[0.65rem] font-sans font-bold uppercase tracking-wider">
                  Heritage Signature
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl text-sand font-medium">
                    Artisan Ceylon Arrack Sour
                  </h3>
                  <span className="font-sans font-bold text-turmeric text-sm">
                    LKR 1,100
                  </span>
                </div>
                <p className="text-xs font-sans text-sand/75 leading-relaxed mb-4">
                  Halmilla-cask coconut palm spirit shaken vigorously with freshly squeezed Weligama lime, organic cinnamon-bark syrup, and silky aquafaba foam.
                </p>
              </div>

              <div className="pt-3 border-t border-sand/15 text-[0.7rem] font-sans text-turmeric flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Best enjoyed during golden hour (05:30 PM)</span>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Passionfruit Spritz */}
          <Reveal variant="fade-up" delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden bg-deep-palm/40 border border-sea-glass/20 p-6 flex flex-col justify-between group hover:border-sea-glass/50 transition-all duration-300 hover:shadow-2xl h-full">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 bg-midnight-lagoon">
                <Image
                  src={brandImages.bar.spritz.src}
                  alt={brandImages.bar.spritz.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-midnight-lagoon/85 border border-sea-glass text-sea-glass px-3 py-1 rounded-full text-[0.65rem] font-sans font-bold uppercase tracking-wider">
                  Tropical Refresher
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl text-sand font-medium">
                    Weligama Passionfruit Spritz
                  </h3>
                  <span className="font-sans font-bold text-turmeric text-sm">
                    LKR 1,200
                  </span>
                </div>
                <p className="text-xs font-sans text-sand/75 leading-relaxed mb-4">
                  Southern Sri Lankan passionfruit scooped fresh into prosecco, crushed garden mint, splash of elderflower, and bubbling soda over cracked ice.
                </p>
              </div>

              <div className="pt-3 border-t border-sand/15 text-[0.7rem] font-sans text-sea-glass flex items-center gap-2">
                <GlassWater className="w-3.5 h-3.5" />
                <span>Light, effervescent &amp; crisp</span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: The Bar Ambience & Cold Beer */}
          <Reveal variant="fade-up" delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden bg-deep-palm/40 border border-sea-glass/20 p-6 flex flex-col justify-between group hover:border-turmeric/50 transition-all duration-300 hover:shadow-2xl h-full">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 bg-midnight-lagoon">
                <Image
                  src={brandImages.bar.counter.src}
                  alt={brandImages.bar.counter.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-midnight-lagoon/85 border border-turmeric text-turmeric px-3 py-1 rounded-full text-[0.65rem] font-sans font-bold uppercase tracking-wider">
                  On Tap &amp; Cellar
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl text-sand font-medium">
                    Chilled Lion Lager &amp; Cellar
                  </h3>
                  <span className="font-sans font-bold text-turmeric text-sm">
                    From LKR 750
                  </span>
                </div>
                <p className="text-xs font-sans text-sand/75 leading-relaxed mb-4">
                  Ice-cold Ceylon lager poured fresh, deep Lion Stout, chilled white wines from coastal regions, and international premium spirits.
                </p>
              </div>

              <div className="pt-3 border-t border-sand/15 text-[0.7rem] font-sans text-sand/70 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-turmeric" />
                <span>Bar pouring until 11:30 PM daily</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── "Golden Hour → Late Night" Timeline ── */}
        <div className="mt-12 bg-deep-palm/50 border border-sea-glass/20 rounded-3xl p-8 sm:p-12 relative">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[0.72rem] font-sans uppercase font-bold tracking-[0.24em] text-turmeric block mb-2">
              The Daily Rhythm
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-sand">
              Golden Hour → Late Night
            </h3>
            <p className="text-xs sm:text-sm font-sans text-sand/70 mt-2">
              From the morning tide to midnight laughter under the southern stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-[2px] bg-gradient-to-r from-turmeric via-coral-ember to-sea-glass opacity-30 z-0" />

            {timelineEvents.map((evt, idx) => {
              const Icon = evt.icon;
              return (
                <Reveal key={idx} variant="fade-up" delay={idx * 0.12} className="relative z-10 flex flex-col">
                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border-2 shadow-lg bg-midnight-lagoon transition-transform hover:scale-110"
                    style={{ borderColor: evt.color }}
                  >
                    <Icon className="w-6 h-6" style={{ color: evt.color }} />
                  </div>

                  <span
                    className="text-xs font-sans font-extrabold uppercase tracking-widest block mb-1"
                    style={{ color: evt.color }}
                  >
                    {evt.time}
                  </span>
                  <span className="text-[0.68rem] font-sans uppercase tracking-[0.18em] text-sand/50 block mb-2">
                    {evt.phase}
                  </span>

                  <h4 className="font-display text-lg text-sand font-semibold mb-2">
                    {evt.title}
                  </h4>

                  <p className="text-xs font-sans text-sand/75 leading-relaxed">
                    {evt.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
