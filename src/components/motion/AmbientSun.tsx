"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export interface AmbientSunProps {
  className?: string;
}

export function AmbientSun({ className = "" }: AmbientSunProps) {
  const orbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Gentle tropical sunset floating loop via Anime.js v4
    const floatAnim = animate(orb, {
      translateY: [-14, 14],
      translateX: [-8, 8],
      scale: [0.98, 1.03],
      duration: 6500,
      alternate: true,
      loop: true,
      ease: "inOutSine",
    });

    return () => {
      floatAnim.revert();
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className={`pointer-events-none select-none absolute rounded-full ${className}`}
      aria-hidden="true"
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-coral-ember/30 via-turmeric/35 to-transparent blur-[75px] scale-150" />
      {/* Inner glowing sun disk */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#FFA25B] via-[#E8603C] to-[#B33925] opacity-85 shadow-[0_0_80px_rgba(232,96,60,0.6)]" />
    </div>
  );
}
