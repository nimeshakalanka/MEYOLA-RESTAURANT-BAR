"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { BookPage } from "@/data/menuBook";
import { Flame, Sparkles, UtensilsCrossed } from "lucide-react";

export function BookPageItem({
  page,
  totalPages,
  isActive = false,
}: {
  page: BookPage;
  totalPages: number;
  isActive?: boolean;
}) {
  const item = page.item;
  const pillsRef = useRef<HTMLDivElement | null>(null);

  // Stagger tag pills via Anime.js v4 when page becomes active
  useEffect(() => {
    if (!isActive) return;
    const pills = pillsRef.current?.querySelectorAll(".tag-pill");
    if (!pills || !pills.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const anim = animate(pills, {
      translateY: [8, 0],
      opacity: [0, 1],
      duration: 600,
      delay: stagger(60, { start: 100 }),
      ease: "outCubic",
    });

    return () => {
      anim.revert();
    };
  }, [isActive]);

  if (!item) return null;

  return (
    <article
      className="w-full h-full flex flex-col justify-between p-4 sm:p-7 md:p-8 text-deep-palm select-none relative overflow-hidden"
      aria-label={`Menu Item: ${item.name}`}
    >
      {/* Top Header: Category Tag & Page Number */}
      <div className="flex items-center justify-between text-[0.68rem] sm:text-xs font-sans uppercase font-bold tracking-[0.2em] text-deep-palm/70 pb-2 border-b border-deep-palm/10 shrink-0">
        <span className="flex items-center gap-1.5 text-coral-ember">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>{page.categoryLabel || item.categoryLabel}</span>
        </span>
        <span className="font-mono text-deep-palm/60 text-[0.7rem]">
          Page {String(page.pageNumber).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
        </span>
      </div>

      {/* TOP: Large Rounded Dish Image (~50% of available height) */}
      <div className="relative w-full h-[46%] sm:h-[50%] rounded-2xl overflow-hidden shadow-md bg-deep-palm/10 my-2 shrink-0 border border-deep-palm/10 group">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority={page.pageNumber <= 4}
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-palm/50 via-transparent to-transparent opacity-60" />

        {/* Standout Badge */}
        {item.standout && (
          <div className="absolute top-2.5 left-2.5 bg-sand/90 backdrop-blur-md text-coral-ember border border-coral-ember/40 px-2.5 py-0.5 rounded-full text-[0.62rem] sm:text-[0.68rem] font-sans font-bold uppercase tracking-wider flex items-center gap-1 shadow">
            <Sparkles className="w-3 h-3 text-turmeric" />
            <span>Standout</span>
          </div>
        )}

        {/* Price Tag Pill */}
        <div className="absolute bottom-2.5 right-2.5 bg-coral-ember text-white px-3 py-1 rounded-full text-xs sm:text-sm font-sans font-extrabold shadow-md">
          LKR {item.price.toLocaleString()}
        </div>
      </div>

      {/* BELOW IMAGE: Content Details */}
      <div className="flex-1 flex flex-col justify-between pt-1 overflow-hidden">
        <div>
          {/* Item Name */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display text-lg sm:text-2xl font-semibold text-deep-palm leading-tight">
              {item.name}
            </h3>
            {item.spice && item.spice > 0 && (
              <div className="flex items-center gap-0.5 shrink-0 pt-0.5" title={`Spice level: ${item.spice}/3`}>
                {Array.from({ length: item.spice }).map((_, i) => (
                  <Flame key={i} className="w-3.5 h-3.5 text-coral-ember fill-coral-ember" />
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-[0.75rem] sm:text-[0.85rem] font-sans text-deep-palm/80 leading-relaxed font-light line-clamp-2 sm:line-clamp-3 mb-2.5">
            {item.description}
          </p>

          {/* Tag Pills (Anime.js staggered) */}
          <div ref={pillsRef} className="flex flex-wrap gap-1.5 mb-2">
            {item.ingredients.slice(0, 4).map((ing, i) => (
              <span
                key={i}
                className="tag-pill text-[0.62rem] sm:text-[0.68rem] font-sans px-2.5 py-0.5 rounded-full bg-deep-palm/10 border border-deep-palm/15 text-deep-palm/90 font-medium"
              >
                {ing}
              </span>
            ))}
            {item.tag && (
              <span className="tag-pill text-[0.62rem] sm:text-[0.68rem] font-sans px-2.5 py-0.5 rounded-full bg-coral-ember/15 border border-coral-ember/30 text-coral-ember font-bold">
                {item.tag}
              </span>
            )}
          </div>
        </div>

        {/* Pairing / Chef Note strip at bottom of card */}
        <div className="pt-2 border-t border-deep-palm/10 flex items-center justify-between text-[0.68rem] sm:text-[0.72rem] font-sans text-deep-palm/70 shrink-0">
          <span className="italic truncate pr-2">
            Pair with: <strong className="font-semibold text-deep-palm">{item.pairing}</strong>
          </span>
          <span className="text-[0.65rem] uppercase tracking-widest text-turmeric font-bold shrink-0">
            Fresh Today
          </span>
        </div>
      </div>
    </article>
  );
}
