"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SvgUnderline } from "@/components/motion/SvgUnderline";

export interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
  theme?: "dark" | "sand";
  withUnderline?: boolean;
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  withUnderline = false,
  className = "",
}: SectionHeadingProps) {
  const alignmentClasses = {
    center: "text-center mx-auto items-center",
    left: "text-left items-start",
    right: "text-right ml-auto items-end",
  }[align];

  const isDark = theme === "dark";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses} ${className}`}>
      {overline && (
        <Reveal variant="fade-down" delay={0.05}>
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className={`text-[0.72rem] font-bold tracking-[0.22em] uppercase font-sans ${
                isDark ? "text-turmeric" : "text-coral-ember"
              }`}
            >
              {overline}
            </span>
            <span
              className={`w-8 h-[1px] ${
                isDark ? "bg-turmeric/50" : "bg-coral-ember/50"
              }`}
            />
          </div>
        </Reveal>
      )}

      <Reveal variant="fade-up" delay={0.12}>
        <div className="relative inline-block">
          <h2
            className={`font-display text-fluid-h2 font-normal tracking-tight ${
              isDark ? "text-sand" : "text-midnight-lagoon"
            }`}
          >
            {title}
          </h2>
          {withUnderline && (
            <div className="mt-1.5 w-3/4 max-w-[220px] mx-auto">
              <SvgUnderline color={isDark ? "#E9B44C" : "#E8603C"} delay={350} />
            </div>
          )}
        </div>
      </Reveal>

      {subtitle && (
        <Reveal variant="fade-up" delay={0.22}>
          <p
            className={`mt-4 text-fluid-body max-w-2xl font-light ${
              isDark ? "text-sand/75" : "text-midnight-lagoon/80"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
