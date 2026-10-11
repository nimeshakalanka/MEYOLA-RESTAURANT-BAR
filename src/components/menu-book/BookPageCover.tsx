"use client";

import React from "react";
import { Sparkles, Compass, ChevronDown } from "lucide-react";
import { BookPage } from "@/data/menuBook";
import { SvgWave } from "@/components/motion/SvgWave";

export function BookPageCover({ page }: { page: BookPage }) {
  return (
    <article
      className="w-full h-full flex flex-col justify-between p-6 sm:p-10 text-deep-palm select-none relative overflow-hidden"
      aria-label="Menu Book Cover"
    >
      {/* Decorative inner border for leather/editorial book feel */}
      <div className="absolute inset-3 sm:inset-4 border border-deep-palm/20 rounded-2xl pointer-events-none" />
      <div className="absolute inset-4 sm:inset-5 border border-deep-palm/10 rounded-xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-xs font-sans uppercase font-bold tracking-[0.24em] text-deep-palm/70">
        <span className="flex items-center gap-1.5 text-turmeric">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Weligama Bay</span>
        </span>
        <span className="text-[0.68rem] opacity-60">Southern Sri Lanka</span>
      </div>

      {/* Center Wordmark & Title */}
      <div className="relative z-10 text-center my-auto flex flex-col items-center">
        {/* Palm / Compass Medallion */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-turmeric/60 bg-sand/80 flex items-center justify-center mb-6 shadow-md">
          <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-coral-ember" />
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-[0.16em] uppercase text-deep-palm leading-tight mb-2">
          MEYOLA
        </h1>

        <div className="w-24 sm:w-32 my-2">
          <SvgWave color="#E8603C" />
        </div>

        <span className="text-xs sm:text-sm font-sans uppercase font-bold tracking-[0.28em] text-coral-ember mt-2 block">
          Menu &amp; Cellar
        </span>

        <p className="font-sans text-xs sm:text-sm text-deep-palm/80 max-w-xs sm:max-w-sm mt-4 leading-relaxed font-light">
          {page.description}
        </p>

        {/* Vintage Seal badge */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-deep-palm/10 border border-deep-palm/15 text-[0.68rem] font-sans uppercase tracking-[0.2em] font-semibold text-deep-palm/80">
          <span>Heirloom Curries &amp; Ocean Catches</span>
        </div>
      </div>

      {/* Bottom hint to scroll */}
      <div className="relative z-10 text-center flex flex-col items-center gap-1.5 text-xs font-sans uppercase tracking-[0.22em] text-deep-palm/60 animate-bounce">
        <span>Scroll to open book</span>
        <ChevronDown className="w-4 h-4 text-coral-ember" />
      </div>
    </article>
  );
}
