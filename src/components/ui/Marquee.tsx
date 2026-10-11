"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export interface MarqueeProps {
  items?: string[];
  separator?: string;
  speed?: number; // duration in seconds
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}

const defaultItems = [
  "Ceylon Rice & Curry",
  "Dawn Harbor Catch",
  "Artisan Arrack Sours",
  "Handmade Prawn Pasta",
  "Weligama Bay Sunset",
  "Surf-Town Courtyard",
  "Cold Lion Lager",
];

export function Marquee({
  items = defaultItems,
  separator = "✦",
  speed = 28,
  reverse = false,
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items 4 times to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-x-auto py-3 whitespace-nowrap ${className}`}>
        <div className="flex gap-8 items-center px-4">
          {items.map((item, idx) => (
            <span key={idx} className={`inline-flex items-center gap-6 ${itemClassName}`}>
              <span>{item}</span>
              <span className="text-turmeric text-xs opacity-75">{separator}</span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden w-full select-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="flex w-max will-change-transform py-3.5"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-6 px-4 shrink-0 font-sans uppercase font-bold tracking-[0.2em] text-xs sm:text-sm ${itemClassName}`}
          >
            <span>{item}</span>
            <span className="text-coral-ember text-[0.65rem] opacity-80">{separator}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
