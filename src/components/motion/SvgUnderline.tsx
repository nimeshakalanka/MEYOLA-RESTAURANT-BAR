"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export interface SvgUnderlineProps {
  className?: string;
  color?: string;
  delay?: number;
}

export function SvgUnderline({
  className = "",
  color = "#E9B44C",
  delay = 200,
}: SvgUnderlineProps) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const anim = animate(path, {
      strokeDashoffset: [length, 0],
      duration: 1100,
      delay,
      ease: "outCubic",
    });

    return () => {
      anim.revert();
    };
  }, [delay]);

  return (
    <svg
      viewBox="0 0 240 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block w-full h-auto overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M2 10.5C45 4.5 140 3 238 12.5C185 10 90 9 40 14"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
