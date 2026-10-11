"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, UtensilsCrossed, Wine, Flame, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { menuCategories, menuItems, MenuItem } from "@/data/menu";

export function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("mains");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="menu-preview"
      className="section-deep-palm py-24 sm:py-32 relative overflow-hidden"
      aria-label="Menu Preview"
    >
      {/* Ambient background glows */}
      <div className="sunset-glow glow-turmeric w-[450px] h-[450px] top-10 -right-20 opacity-15" />
      <div className="sunset-glow glow-sea-glass w-[400px] h-[400px] bottom-10 -left-20 opacity-15" />

      <div className="container-meyola relative z-10">
        <SectionHeading
          overline="Curated Dining & Pouring"
          title="The Meyola Ledger"
          subtitle="Explore a taste of what our claypots and shakers are crafting tonight. Daily catches and seasonal specials are handwritten on the wooden slate."
          withUnderline
          theme="dark"
        />

        {/* Category Tabs with motion layoutId Pill */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 mb-14 pb-2">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-sans uppercase font-bold tracking-[0.16em] transition-colors whitespace-nowrap cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-ember ${
                  isActive ? "text-white" : "text-sand/70 hover:text-sand"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="menuTabPill"
                    className="absolute inset-0 bg-coral-ember rounded-full shadow-[0_4px_20px_rgba(232,96,60,0.4)] z-[-1]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* AnimatePresence Dishes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="group relative flex flex-col sm:flex-row gap-5 p-5 rounded-2xl bg-midnight-lagoon/60 border border-sea-glass/15 hover:border-sea-glass/40 transition-all duration-300 hover:bg-midnight-lagoon/90 shadow-lg"
              >
                {/* Dish Thumb Photo */}
                <div className="relative w-full sm:w-28 sm:h-28 h-44 rounded-xl overflow-hidden shrink-0 bg-deep-palm">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 120px"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  {item.standout && (
                    <div className="absolute top-1.5 left-1.5 bg-coral-ember text-white p-1 rounded-full shadow">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-display text-lg sm:text-xl font-medium text-sand group-hover:text-sea-glass transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-sans font-bold text-sm text-turmeric">
                          LKR {item.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-[0.82rem] font-sans text-sand/70 leading-relaxed line-clamp-2 mb-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[0.7rem] font-sans text-sand/55 pt-2 border-t border-sand/10">
                    <span className="truncate pr-2">
                      {item.ingredients.slice(0, 3).join(" · ")}
                    </span>
                    {item.spice && item.spice > 0 && (
                      <div className="flex items-center gap-0.5 shrink-0" title={`Spice: ${item.spice}/3`}>
                        {Array.from({ length: item.spice }).map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-coral-ember fill-coral-ember" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <Button
            href="/menu"
            variant="sandOutline"
            size="lg"
            className="group"
          >
            <span>View Complete Digital Menu</span>
            <ArrowUpRight className="w-4 h-4 text-turmeric group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
          <p className="mt-3 text-xs font-sans text-sand/50">
            * All prices in LKR. Check daily board for seasonal seafood catches &amp; specials.
          </p>
        </div>
      </div>
    </section>
  );
}
