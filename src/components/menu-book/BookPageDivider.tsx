"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import { BookPage } from "@/data/menuBook";
import { Sparkles, Utensils } from "lucide-react";

export function BookPageDivider({ page, totalPages }: { page: BookPage; totalPages: number }) {
  const lineRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = lineRef.current;
    if (!path) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Anime.js v4 line-draw animation
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    const anim = animate(path, {
      strokeDashoffset: [len, 0],
      duration: 1200,
      ease: "outSine",
    });

    return () => {
      anim.revert();
    };
  }, [page.id]);

  return (
    <article
      className="w-full h-full flex flex-col justify-between p-6 sm:p-10 text-deep-palm select-none relative overflow-hidden"
      aria-label={`Category Divider: ${page.title}`}
    >
      {/* Decorative inner frame */}
      <div className="absolute inset-3 sm:inset-4 border border-deep-palm/15 rounded-2xl pointer-events-none" />

      {/* Top chapter tag & page number */}
      <div className="relative z-10 flex items-center justify-between text-xs font-sans uppercase font-bold tracking-[0.2em] text-deep-palm/60">
        <span className="flex items-center gap-1.5 text-turmeric">
          <Utensils className="w-3.5 h-3.5" />
          <span>Section Division</span>
        </span>
        <span className="text-[0.72rem] font-mono">
          Page {String(page.pageNumber).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
        </span>
      </div>

      {/* Center Category Showcase */}
      <div className="relative z-10 text-center my-auto flex flex-col items-center">
        <span className="text-xs font-sans uppercase font-extrabold tracking-[0.3em] text-coral-ember mb-3">
          Curated Offerings
        </span>

        <h2 className="font-display text-3xl sm:text-5xl font-semibold text-deep-palm mb-3 leading-tight">
          {page.title}
        </h2>

        {/* Hand-drawn SVG wave underline animated with Anime.js */}
        <div className="w-40 sm:w-52 my-3 overflow-visible">
          <svg viewBox="0 0 160 14" fill="none" className="w-full h-auto overflow-visible" aria-hidden="true">
            <path
              ref={lineRef}
              d="M2 7C22 1 42 13 62 7C82 1 102 13 122 7C142 1 152 7 158 7"
              stroke="#E8603C"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="font-sans text-xs sm:text-sm text-deep-palm/80 max-w-sm mt-3 leading-relaxed font-light">
          {page.subtitle}
        </p>

        <p className="font-sans text-[0.72rem] text-deep-palm/60 max-w-xs mt-3 italic">
          {page.description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.2em] text-deep-palm/70">
          <Sparkles className="w-3.5 h-3.5 text-turmeric" />
          <span>Turn page to begin</span>
        </div>
      </div>

      {/* Bottom label */}
      <div className="relative z-10 text-center text-[0.68rem] font-sans uppercase tracking-[0.25em] text-deep-palm/50">
        Meyola Restaurant &amp; Bar · Weligama
      </div>
    </article>
  );
}
