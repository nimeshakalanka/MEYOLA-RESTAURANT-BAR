"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Compass, Waves, SunDim } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { brandImages } from "@/data/images";
import { siteConfig } from "@/lib/site";

export function Story() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const img2Y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      id="story"
      ref={containerRef}
      className="section-dark py-24 sm:py-32 relative overflow-hidden"
      aria-label="Our Story"
    >
      {/* Background ambient radial glow */}
      <div className="sunset-glow glow-sea-glass w-[400px] h-[400px] top-1/4 -left-32 opacity-30" />
      <div className="sunset-glow glow-coral w-[450px] h-[450px] bottom-10 -right-20 opacity-20" />

      <div className="container-meyola">
        <SectionHeading
          overline="Rooted in Weligama Bay"
          title="Where Surf Town Warmth Meets Coastal Fire"
          subtitle="Built from salvaged timber and coastal palm shade, Meyola was created as a sanctuary where ocean souls gather from first surf to the late-night pour."
          withUnderline
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">
          {/* Left Column: Overlapping Parallax Images */}
          <div className="lg:col-span-6 relative min-h-[460px] sm:min-h-[560px] w-full flex items-center justify-center">
            {/* Primary Image: Wooden Courtyard & Dining Deck */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : img1Y }}
              className="relative w-[78%] h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-sea-glass/20 z-10"
            >
              <Image
                src={brandImages.story.courtyard.src}
                alt={brandImages.story.courtyard.alt}
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-lagoon/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-sans text-sand/80 bg-midnight-lagoon/70 backdrop-blur-md p-3 rounded-lg border border-sea-glass/15">
                <span className="font-bold text-turmeric block uppercase text-[0.68rem] tracking-wider">
                  Open-Air Courtyard
                </span>
                Reclaimed teak tables under the palms
              </div>
            </motion.div>

            {/* Secondary Overlapping Image: Harbor Catamarans */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : img2Y }}
              className="absolute -bottom-4 -right-2 sm:right-4 w-[54%] h-[240px] sm:h-[300px] rounded-2xl overflow-hidden shadow-2xl border-2 border-midnight-lagoon z-20"
            >
              <Image
                src={brandImages.story.localHarbor.src}
                alt={brandImages.story.localHarbor.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-lagoon/70 via-transparent to-transparent" />
            </motion.div>

            {/* Proximity Floating Stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-2 sm:left-2 z-30 bg-deep-palm border border-turmeric/40 text-sand px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-turmeric" />
              <span className="text-[0.7rem] font-sans font-bold uppercase tracking-wider">
                {siteConfig.address.proximity}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Line-by-Line Story Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-sand/85 font-sans">
            <Reveal variant="fade-up" delay={0.1}>
              <div className="flex items-center gap-2 text-coral-ember font-bold text-xs uppercase tracking-[0.2em]">
                <Waves className="w-4 h-4" />
                <span>The Story of Meyola</span>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <h3 className="font-display text-2xl sm:text-3xl text-sand font-medium leading-snug">
                Born on the south coast, shaped by the rhythm of the waves.
              </h3>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <p className="text-fluid-body leading-relaxed text-sand/80">
                Weligama is known across the world for its sweeping crescent bay and gentle surf breaks. Tucked along First Cross Road in Palana, Meyola was built to celebrate the true soul of this coast: generational cooking, communal warmth, and unhurried evenings.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.4}>
              <p className="text-fluid-body leading-relaxed text-sand/80">
                At the heart of our kitchen is our <span className="text-turmeric font-semibold">Ceylon Rice &amp; Curry Feast</span> — slow-simmered daily in heirloom claypots with fresh coconut milk and hand-roasted southern spices. Each morning, our chefs walk down to the catamaran beach landing to choose wild snappers, calamari, and prawns straight from local fishermen.
              </p>
            </Reveal>

            {/* Three Pillar Cards */}
            <Reveal variant="fade-up" delay={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-sand/15">
                <div className="p-4 rounded-xl bg-deep-palm/40 border border-sea-glass/15">
                  <SunDim className="w-5 h-5 text-turmeric mb-2" />
                  <h4 className="font-display text-sm font-semibold text-sand">Golden Hour</h4>
                  <p className="text-xs text-sand/70 mt-1">Sun sets at 5:30 PM over the bay with ambient jazz &amp; chilled arrack.</p>
                </div>

                <div className="p-4 rounded-xl bg-deep-palm/40 border border-sea-glass/15">
                  <Waves className="w-5 h-5 text-sea-glass mb-2" />
                  <h4 className="font-display text-sm font-semibold text-sand">Dawn Ocean Catch</h4>
                  <p className="text-xs text-sand/70 mt-1">Netted fish landed daily by local catamarans in Weligama Bay.</p>
                </div>

                <div className="p-4 rounded-xl bg-deep-palm/40 border border-sea-glass/15">
                  <Compass className="w-5 h-5 text-coral-ember mb-2" />
                  <h4 className="font-display text-sm font-semibold text-sand">Authentic Roots</h4>
                  <p className="text-xs text-sand/70 mt-1">No artificial shortcuts. Only stone ground curries and whole spices.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
