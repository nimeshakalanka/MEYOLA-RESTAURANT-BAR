"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ChevronDown, Sparkles, UtensilsCrossed } from "lucide-react";
import { SplitText } from "@/components/motion/SplitText";
import { AmbientSun } from "@/components/motion/AmbientSun";
import { SvgWave } from "@/components/motion/SvgWave";
import { Button } from "@/components/ui/Button";
import { brandImages } from "@/data/images";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Motion parallax linked to scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-midnight-lagoon select-none pt-24 pb-16"
      aria-label="Welcome to Meyola Restaurant & Bar"
    >
      {/* ── Layer 1: Parallax Deep Ocean Sunset Background ── */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : bgY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        <Image
          src={brandImages.hero.duskOcean.src}
          alt={brandImages.hero.duskOcean.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 filter brightness-75 contrast-110"
        />
        {/* Dusk vignette & tropical depth gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-lagoon via-midnight-lagoon/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-lagoon/80 via-transparent to-midnight-lagoon/80" />
      </motion.div>

      {/* ── Layer 2: Floating Glowing Sun Orb (Anime.js loop) ── */}
      <div className="absolute top-[18%] sm:top-[22%] left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <AmbientSun className="w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96" />
      </div>

      {/* ── Layer 3: Ambient Radial Color Glows ── */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-coral-ember/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-sea-glass/10 blur-[100px] pointer-events-none" />

      {/* ── Layer 4: Hero Content Container ── */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : textY,
          opacity: shouldReduceMotion ? 1 : opacity,
        }}
        className="container-meyola relative z-10 text-center flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6"
      >
        {/* Overline Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-deep-palm/70 border border-sea-glass/25 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-turmeric" />
          <span className="text-[0.68rem] sm:text-xs font-sans uppercase font-bold tracking-[0.24em] text-sand">
            Weligama Bay · Southern Sri Lanka
          </span>
        </motion.div>

        {/* Giant Split-Text Headline (Anime.js v4) */}
        <h1 className="text-fluid-hero font-display font-medium text-sand tracking-tight text-balance max-w-4xl mx-auto mb-6">
          <SplitText
            tag="span"
            text="Where the island meets the evening."
            type="words"
            delay={200}
            staggerDelay={65}
            duration={850}
            wordClassName="text-sand"
          />
        </h1>

        {/* Coastal Wave Line Accent */}
        <div className="w-28 sm:w-36 my-2">
          <SvgWave color="#E8603C" />
        </div>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-fluid-body max-w-2xl text-sand/85 font-light font-sans mt-4 mb-8 text-balance"
        >
          Generational Ceylon rice &amp; curry, wild ocean catches landed at dawn, hand-rolled pastas, and artisan arrack cocktails under the Weligama palms.
        </motion.p>

        {/* CTAs: Two Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            href="#visit"
            variant="coral"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            Reserve a Table
          </Button>

          <Button
            href="/menu"
            variant="sandOutline"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            <UtensilsCrossed className="w-4 h-4 mr-1 text-sea-glass" />
            View Full Menu
          </Button>
        </motion.div>

        {/* Standout food chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mt-12 hidden md:flex items-center gap-6 text-[0.7rem] uppercase tracking-[0.18em] text-sand/60 font-sans"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-turmeric" />
            Claypot Rice &amp; Curry Standout
          </span>
          <span className="opacity-40">/</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sea-glass" />
            Dawn Catamaran Fish
          </span>
          <span className="opacity-40">/</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-coral-ember" />
            Halmilla Arrack Sours
          </span>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-sand/60 hover:text-sand transition-colors cursor-pointer"
        onClick={() => {
          const el = document.getElementById("story");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[0.62rem] font-sans uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-turmeric" />
        </motion.div>
      </motion.div>
    </section>
  );
}
