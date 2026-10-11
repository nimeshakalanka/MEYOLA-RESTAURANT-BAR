"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { animate, stagger } from "animejs";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const waveRef = useRef<SVGPathElement | null>(null);
  const lettersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if user already saw the intro this session
    const seen = sessionStorage.getItem("meyola_preloader_seen");
    if (seen === "true") {
      setLoading(false);
      return;
    }

    const path = waveRef.current;
    const letters = lettersRef.current?.querySelectorAll(".preload-letter");

    if (path && letters) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      // 1. Draw wave line (anime.js v4)
      const waveAnim = animate(path, {
        strokeDashoffset: [length, 0],
        duration: 800,
        ease: "inOutSine",
      });

      // 2. Stagger letters M E Y O L A
      const letterAnim = animate(letters, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 700,
        delay: stagger(65, { start: 250 }),
        ease: "outCubic",
      });

      // Auto dismiss after 1.3 seconds (< 1.5s total)
      const timer = setTimeout(() => {
        sessionStorage.setItem("meyola_preloader_seen", "true");
        setLoading(false);
      }, 1350);

      return () => {
        clearTimeout(timer);
        waveAnim.revert();
        letterAnim.revert();
      };
    } else {
      const fallbackTimer = setTimeout(() => setLoading(false), 900);
      return () => clearTimeout(fallbackTimer);
    }
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem("meyola_preloader_seen", "true");
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-midnight-lagoon flex flex-col items-center justify-center p-6 select-none cursor-pointer"
          onClick={handleSkip}
          aria-label="Loading Meyola Restaurant & Bar"
        >
          {/* Subtle background glow */}
          <div className="absolute w-80 h-80 rounded-full bg-coral-ember/15 blur-[90px] pointer-events-none" />

          {/* Staggered M E Y O L A letters */}
          <div
            ref={lettersRef}
            className="flex items-center gap-2 sm:gap-3 text-4xl sm:text-5xl font-display font-medium tracking-[0.25em] text-sand"
          >
            {["M", "E", "Y", "O", "L", "A"].map((letter, idx) => (
              <span
                key={idx}
                className="preload-letter inline-block will-change-transform will-change-opacity"
                style={{ opacity: 0 }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* SVG Wave Line Draw */}
          <div className="w-36 sm:w-44 mt-4 overflow-visible">
            <svg
              viewBox="0 0 160 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto overflow-visible"
            >
              <path
                ref={waveRef}
                d="M2 8C18 1 34 15 50 8C66 1 82 15 98 8C114 1 130 15 146 8C152 5 158 8 160 8"
                stroke="#E8603C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Subtitle */}
          <p className="mt-4 text-[0.65rem] font-sans uppercase tracking-[0.28em] text-sand/60">
            Weligama · Southern Sri Lanka
          </p>

          {/* Skip Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="absolute bottom-8 right-8 text-[0.68rem] font-sans tracking-[0.16em] uppercase text-sand/40 hover:text-sand/90 transition-colors py-2 px-3 border border-sand/15 rounded-full"
          >
            Skip Intro [Esc]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
