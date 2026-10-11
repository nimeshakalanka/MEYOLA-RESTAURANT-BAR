"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Flame, Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menuItems, MenuItem } from "@/data/menu";

// Filter only the signature / standout dishes
const signatureDishes = menuItems.filter(
  (item) => item.standout || item.id === "burger"
);

function TiltCard({ item }: { item: MenuItem }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt physics using Motion springs
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative shrink-0 w-[300px] sm:w-[360px] md:w-[390px] rounded-3xl bg-white/80 backdrop-blur-md border border-midnight-lagoon/15 shadow-xl p-5 flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl hover:border-coral-ember/40 select-none group"
    >
      <div>
        {/* Dish Image */}
        <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden mb-5 bg-sand/40">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 320px, 400px"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

          {/* Badge / Tag */}
          {item.tag && (
            <div className="absolute top-3 left-3 bg-midnight-lagoon/85 backdrop-blur-md text-sand border border-turmeric/40 px-3 py-1 rounded-full text-[0.65rem] font-sans font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-turmeric" />
              <span>{item.tag}</span>
            </div>
          )}

          {/* Price Tag (Placeholder LKR) */}
          <div className="absolute bottom-3 right-3 bg-coral-ember text-white px-3.5 py-1 rounded-full text-xs font-sans font-extrabold tracking-wide shadow-md">
            LKR {item.price.toLocaleString()}
          </div>
        </div>

        {/* Category & Spice indicator */}
        <div className="flex items-center justify-between text-xs font-sans text-midnight-lagoon/70 mb-2">
          <span className="uppercase tracking-[0.18em] font-bold text-coral-ember text-[0.68rem]">
            {item.categoryLabel}
          </span>
          {item.spice && item.spice > 0 && (
            <div className="flex items-center gap-0.5" title={`Spice Level: ${item.spice}/3`}>
              {Array.from({ length: item.spice }).map((_, i) => (
                <Flame key={i} className="w-3.5 h-3.5 text-coral-ember fill-coral-ember" />
              ))}
            </div>
          )}
        </div>

        {/* Dish Title */}
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-midnight-lagoon leading-tight mb-2.5">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm font-sans text-midnight-lagoon/75 leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Ingredients Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.ingredients.map((ing, idx) => (
            <span
              key={idx}
              className="text-[0.65rem] font-sans px-2.5 py-0.5 rounded-full bg-sand/70 border border-midnight-lagoon/10 text-midnight-lagoon/85"
            >
              {ing}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Pairing info */}
      <div className="pt-3 border-t border-midnight-lagoon/10 flex items-center justify-between text-xs font-sans text-midnight-lagoon/70">
        <span className="italic truncate pr-2">
          Pair with: <strong className="text-midnight-lagoon">{item.pairing}</strong>
        </span>
        <ChevronRight className="w-4 h-4 text-coral-ember shrink-0 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

export function SignatureDishes() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section
      id="signatures"
      className="section-sand py-24 sm:py-32 relative overflow-hidden"
      aria-label="Signature Dishes"
    >
      <div className="container-meyola">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            overline="Ocean Fire & Claypot Hearth"
            title="Signature Dishes"
            subtitle="Prepared using generational spice recipes and fresh ocean catches landed each morning in Weligama Bay."
            align="left"
            theme="sand"
            className="mb-0 max-w-2xl"
          />

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-xs font-sans uppercase font-bold tracking-[0.16em] text-midnight-lagoon hover:text-coral-ember transition-colors py-2 px-4 rounded-full border border-midnight-lagoon/20 hover:border-coral-ember"
            >
              <span>Explore All Dishes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={scrollRight}
              className="hidden lg:flex items-center justify-center w-11 h-11 rounded-full bg-midnight-lagoon text-sand hover:bg-coral-ember transition-colors shadow-md focus-visible:outline-none"
              aria-label="Scroll next dish"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {signatureDishes.map((dish) => (
            <div key={dish.id} className="snap-start shrink-0">
              <TiltCard item={dish} />
            </div>
          ))}
        </div>

        {/* Note on prices */}
        <p className="mt-6 text-center text-xs font-sans text-midnight-lagoon/60">
          * Note: Prices shown in LKR are placeholder menu estimates. Daily catch prices adjust with harbor catamaran haul.
        </p>
      </div>
    </section>
  );
}
