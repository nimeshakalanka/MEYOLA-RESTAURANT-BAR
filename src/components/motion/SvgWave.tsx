"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export interface SvgWaveProps {
  className?: string;
  color?: string;
  animateLoop?: boolean;
}

export function SvgWave({
  className = "",
  color = "#7FC8B8",
  animateLoop = true,
}: SvgWaveProps) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Line drawing animation using strokeDashoffset
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const drawAnim = animate(path, {
      strokeDashoffset: [length, 0],
      duration: 1600,
      ease: "outSine",
    });

    let loopAnim: ReturnType<typeof animate> | null = null;
    if (animateLoop) {
      loopAnim = animate(path, {
        translateY: [-3, 3],
        duration: 3200,
        alternate: true,
        loop: true,
        ease: "inOutSine",
      });
    }

    return () => {
      drawAnim.revert();
      if (loopAnim) loopAnim.revert();
    };
  }, [animateLoop]);

  return (
    <svg
      viewBox="0 0 120 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M2 9C12 3 22 15 32 9C42 3 52 15 62 9C72 3 82 15 92 9C102 3 112 15 118 9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
