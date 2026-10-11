"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export interface SplitTextProps {
  text: string;
  type?: "words" | "chars";
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
}

export function SplitText({
  text,
  type = "words",
  tag: Tag = "h1",
  delay = 100,
  staggerDelay = 45,
  duration = 900,
  className = "",
  wordClassName = "",
  charClassName = "",
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const targets = el.querySelectorAll<HTMLElement>(".split-item");
      targets.forEach((target) => {
        target.style.opacity = "1";
        target.style.transform = "none";
      });
      return;
    }

    const targets = el.querySelectorAll<HTMLElement>(".split-item");
    if (!targets.length) return;

    // Anime.js v4 staggered reveal animation
    const anim = animate(targets, {
      translateY: ["110%", "0%"],
      opacity: [0, 1],
      duration,
      delay: stagger(staggerDelay, { start: delay }),
      ease: "outCubic",
    });

    return () => {
      anim.revert();
    };
  }, [text, type, delay, staggerDelay, duration]);

  if (type === "chars") {
    const words = text.split(" ");
    return (
      <Tag
        ref={containerRef as React.RefObject<HTMLHeadingElement>}
        className={`inline-block overflow-hidden ${className}`}
      >
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className={`inline-block whitespace-nowrap ${wordClassName}`}>
            {word.split("").map((char, charIdx) => (
              <span
                key={charIdx}
                className={`split-item inline-block will-change-transform will-change-opacity ${charClassName}`}
                style={{ opacity: 0 }}
              >
                {char}
              </span>
            ))}
            {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </Tag>
    );
  }

  // Words split
  const words = text.split(" ");
  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-top mr-[0.26em] last:mr-0"
        >
          <span
            className={`split-item inline-block will-change-transform will-change-opacity ${wordClassName}`}
            style={{ opacity: 0 }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
