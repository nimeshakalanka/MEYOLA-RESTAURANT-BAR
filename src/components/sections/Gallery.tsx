"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandImages } from "@/data/images";

export function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const photos = brandImages.gallery;

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % photos.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + photos.length) % photos.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, photos.length]);

  return (
    <section
      id="gallery"
      className="section-sand py-24 sm:py-32 relative overflow-hidden"
      aria-label="Atmosphere & Dish Gallery"
    >
      <div className="container-meyola">
        <SectionHeading
          overline="Coastal Living & Living Memory"
          title="Moments at Weligama Bay"
          subtitle="Glimpses of daily life at Meyola — where fresh coastal catches, open courtyard dining, and glowing sunsets meet."
          align="center"
          theme="sand"
          withUnderline
        />

        {/* ── Bento Grid Layout ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 mt-10">
          {photos.map((item, idx) => {
            // Bento sizing classes
            const bentoClasses = [
              "lg:col-span-7 lg:row-span-2 min-h-[360px] sm:min-h-[420px]", // Item 1: Large Rice & Curry
              "lg:col-span-5 min-h-[260px]",                               // Item 2: Cocktail
              "lg:col-span-5 min-h-[260px]",                               // Item 3: Ocean Catch
              "lg:col-span-4 min-h-[280px]",                               // Item 4: Terrace
              "lg:col-span-4 min-h-[280px]",                               // Item 5: Pasta
              "lg:col-span-4 min-h-[280px]",                               // Item 6: Sunset Sky
            ][idx] || "lg:col-span-4 min-h-[260px]";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-sand/30 border border-midnight-lagoon/10 ${bentoClasses}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveImageIndex(idx);
                  }
                }}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-lagoon/85 via-midnight-lagoon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Caption info appearing on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[0.68rem] font-sans font-bold uppercase tracking-[0.2em] text-turmeric mb-1">
                    {item.title}
                  </span>
                  <p className="text-xs font-sans text-sand/90">
                    {item.caption}
                  </p>
                </div>

                {/* Corner Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-midnight-lagoon/75 backdrop-blur-md text-sand flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4 text-sea-glass" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Motion Lightbox Modal ── */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-midnight-lagoon/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-sand/15 text-sand hover:bg-coral-ember hover:text-white transition-colors flex items-center justify-center focus-visible:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) =>
                  prev !== null ? (prev - 1 + photos.length) % photos.length : null
                );
              }}
              className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-sand/15 text-sand hover:bg-coral-ember hover:text-white transition-colors flex items-center justify-center focus-visible:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) =>
                  prev !== null ? (prev + 1) % photos.length : null
                );
              }}
              className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-sand/15 text-sand hover:bg-coral-ember hover:text-white transition-colors flex items-center justify-center focus-visible:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Container */}
            <motion.div
              key={activeImageIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-sea-glass/20 bg-deep-palm">
                <Image
                  src={photos[activeImageIndex].src}
                  alt={photos[activeImageIndex].alt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 90vw, 1200px"
                  className="object-contain"
                />
              </div>

              {/* Lightbox caption */}
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl text-sand font-medium">
                  {photos[activeImageIndex].title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-sand/75 mt-1">
                  {photos[activeImageIndex].caption}
                </p>
                <span className="text-[0.68rem] font-sans text-sand/40 uppercase tracking-widest mt-2 block">
                  {activeImageIndex + 1} / {photos.length} · Press [Esc] to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
