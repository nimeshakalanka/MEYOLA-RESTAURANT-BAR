"use client";

import React from "react";
import { BookPage } from "@/data/menuBook";
import { SvgWave } from "@/components/motion/SvgWave";
import { Sparkles, Utensils, HeartHandshake } from "lucide-react";

export function BookPageFacing({ page }: { page: BookPage }) {
  const content = page.facingContent;

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-6 sm:p-10 text-deep-palm select-none relative overflow-hidden"
      aria-hidden="true"
    >
      {/* Decorative inner frame */}
      <div className="absolute inset-4 border border-deep-palm/15 rounded-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-xs font-sans uppercase font-bold tracking-[0.2em] text-deep-palm/60">
        <span className="flex items-center gap-1.5 text-turmeric">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{content?.overline || "Meyola Kitchen Journal"}</span>
        </span>
        <span className="text-[0.68rem] opacity-50 font-mono">Weligama, Matara</span>
      </div>

      {/* Main Narrative / Ingredients Spotlight */}
      <div className="relative z-10 my-auto flex flex-col items-start max-w-md">
        <span className="text-[0.68rem] font-sans uppercase font-extrabold tracking-[0.25em] text-coral-ember mb-2">
          Culinary Provenance
        </span>

        <h3 className="font-display text-2xl sm:text-3xl font-medium text-deep-palm mb-3 leading-snug">
          {content?.headline || page.title}
        </h3>

        <div className="w-24 my-2">
          <SvgWave color="#123B34" animateLoop={false} />
        </div>

        <p className="font-sans text-xs sm:text-sm text-deep-palm/80 leading-relaxed font-light mt-2 mb-6">
          {content?.body || page.description}
        </p>

        {/* Highlights List */}
        {content?.highlights && content.highlights.length > 0 && (
          <div className="w-full pt-4 border-t border-deep-palm/10">
            <span className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-deep-palm/60 font-bold block mb-2">
              Key Ingredients &amp; Character:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {content.highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-[0.68rem] font-sans px-2.5 py-1 rounded-full bg-deep-palm/10 text-deep-palm/90 font-medium"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Chef Note */}
        {content?.note && (
          <div className="mt-5 p-3 rounded-xl bg-deep-palm/5 border border-deep-palm/10 text-xs font-sans text-deep-palm/75 italic">
            &ldquo;{content.note}&rdquo;
          </div>
        )}
      </div>

      {/* Bottom Footer Note */}
      <div className="relative z-10 flex items-center justify-between text-[0.68rem] font-sans text-deep-palm/50 uppercase tracking-[0.2em]">
        <span>South Coast Cuisine</span>
        <span>Meyola Restaurant &amp; Bar</span>
      </div>
    </div>
  );
}
