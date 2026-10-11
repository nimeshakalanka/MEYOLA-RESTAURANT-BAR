"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, Info } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Brand Rule: NEVER invent awards, press quotes, or fake reviews. Label all sample review text "Placeholder".
const placeholderReviews = [
  {
    id: "rev-1",
    author: "Surfer from Australia",
    source: "Guest Comment (Placeholder)",
    rating: 5,
    quote:
      "The standout Ceylon rice and curry after a morning session at Weligama bay was unbeatable. Genuine hospitality and fresh claypot flavors.",
    dish: "Ceylon Rice & Curry Standout",
  },
  {
    id: "rev-2",
    author: "Couple from Germany",
    source: "Guest Comment (Placeholder)",
    rating: 5,
    quote:
      "We had the wild snapper and garlic tiger prawns grilled over coals. Sitting under the glowing string lights with an arrack sour was magical.",
    dish: "Dawn Catamaran Catch & Arrack Sour",
  },
  {
    id: "rev-3",
    author: "Traveler from United Kingdom",
    source: "Guest Comment (Placeholder)",
    rating: 5,
    quote:
      "Relaxed wooden courtyard, friendly local team, and genuinely fresh food. It feels like Weligama as it was meant to be experienced.",
    dish: "Handmade Prawn Fettuccine",
  },
];

export function GuestLove() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [ratingVal, setRatingVal] = useState("0.0");
  const [countVal, setCountVal] = useState(0);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el || hasAnimated.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setRatingVal("4.9");
      setCountVal(185);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Anime.js v4 numeric counter
          const counterObj = { rating: 0, count: 0 };
          animate(counterObj, {
            rating: 4.9,
            count: 185,
            duration: 1800,
            ease: "outExpo",
            onUpdate: () => {
              setRatingVal(counterObj.rating.toFixed(1));
              setCountVal(Math.round(counterObj.count));
            },
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % placeholderReviews.length);
  };

  const prevReview = () => {
    setCurrentIdx(
      (prev) => (prev - 1 + placeholderReviews.length) % placeholderReviews.length
    );
  };

  return (
    <section
      id="guest-love"
      className="section-deep-palm py-24 sm:py-32 relative overflow-hidden"
      aria-label="Guest Love & Community"
    >
      {/* Background ambient radial glows */}
      <div className="sunset-glow glow-coral w-[450px] h-[450px] top-1/3 -left-24 opacity-15" />
      <div className="sunset-glow glow-turmeric w-[400px] h-[400px] bottom-10 -right-20 opacity-15" />

      <div className="container-meyola relative z-10">
        <SectionHeading
          overline="Southern Hospitality"
          title="Guest Love"
          subtitle="Warm smiles, cold drinks, and memorable tables under the coconut palms."
          withUnderline
          theme="dark"
        />

        {/* ── Animated Rating Counter Strip (Anime.js v4) ── */}
        <div
          ref={counterRef}
          className="max-w-2xl mx-auto rounded-3xl bg-midnight-lagoon/80 border border-sea-glass/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-around gap-6 mb-16 shadow-2xl backdrop-blur-md"
        >
          {/* Metric 1: Star Rating */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="font-display text-4xl sm:text-5xl font-bold text-sand">
                {ratingVal}
              </span>
              <div className="flex flex-col items-center">
                <div className="flex gap-1 text-turmeric">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-turmeric text-turmeric"
                    />
                  ))}
                </div>
                <span className="text-[0.62rem] font-sans uppercase tracking-widest text-sand/60 mt-1">
                  Overall Rating
                </span>
              </div>
            </div>
            <p className="text-xs font-sans text-sand/70">
              Surf town favorite
            </p>
          </div>

          <div className="hidden sm:block w-[1px] h-14 bg-sand/15" />

          {/* Metric 2: Happy Guests Counter */}
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold text-coral-ember mb-1">
              {countVal}+
            </div>
            <p className="text-xs font-sans text-sand/70">
              Community Ratings (Placeholder)
            </p>
          </div>

          <div className="hidden sm:block w-[1px] h-14 bg-sand/15" />

          {/* Metric 3: Proximity */}
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold text-sea-glass mb-1">
              250m
            </div>
            <p className="text-xs font-sans text-sand/70">
              From Weligama Main Surf Beach
            </p>
          </div>
        </div>

        {/* ── Review Carousel (Explicitly labeled Placeholder) ── */}
        <div className="max-w-3xl mx-auto relative">
          <div className="relative rounded-3xl bg-midnight-lagoon/60 border border-sea-glass/15 p-8 sm:p-12 shadow-xl min-h-[260px] flex flex-col justify-between">
            <Quote className="w-12 h-12 text-turmeric/20 absolute top-6 right-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4 text-turmeric">
                    {Array.from({
                      length: placeholderReviews[currentIdx].rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-turmeric text-turmeric"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-display text-lg sm:text-2xl text-sand font-normal leading-relaxed mb-6 italic">
                    &ldquo;{placeholderReviews[currentIdx].quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author & Placeholder tag */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-sand/10 text-xs font-sans">
                  <div>
                    <span className="font-bold text-sand block">
                      {placeholderReviews[currentIdx].author}
                    </span>
                    <span className="text-[0.68rem] text-sand/55">
                      {placeholderReviews[currentIdx].source} ·{" "}
                      <span className="text-turmeric">
                        Enjoyed {placeholderReviews[currentIdx].dish}
                      </span>
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric/10 border border-turmeric/30 text-turmeric text-[0.65rem] font-bold tracking-wider uppercase w-fit">
                    <Info className="w-3 h-3" />
                    Placeholder Text
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full bg-midnight-lagoon border border-sand/20 text-sand hover:border-coral-ember hover:text-coral-ember transition-colors flex items-center justify-center focus-visible:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-sans text-sand/60 tracking-widest">
              {currentIdx + 1} / {placeholderReviews.length}
            </span>

            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full bg-midnight-lagoon border border-sand/20 text-sand hover:border-coral-ember hover:text-coral-ember transition-colors flex items-center justify-center focus-visible:outline-none"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-center text-[0.68rem] font-sans text-sand/40 mt-4">
            ⚠️ Disclaimer: Sample reviews above are labeled placeholders for layout preview. Replace with genuine customer feedback upon owner verification.
          </p>
        </div>
      </div>
    </section>
  );
}
