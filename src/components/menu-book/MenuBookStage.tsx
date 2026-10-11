"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  List,
  Sparkles,
  UtensilsCrossed,
  Flame,
  Bookmark,
} from "lucide-react";
import { bookPages, BookPage } from "@/data/menuBook";
import { menuCategories, menuItems } from "@/data/menu";
import { BookPageCover } from "./BookPageCover";
import { BookPageDivider } from "./BookPageDivider";
import { BookPageItem } from "./BookPageItem";
import { BookPageFacing } from "./BookPageFacing";
import { BookPageBackCover } from "./BookPageBackCover";

export function MenuBookStage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [viewMode, setViewMode] = useState<"book" | "list">("book");
  const [pageFloat, setPageFloat] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const totalPages = bookPages.length;

  // Responsive breakpoint check
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Track overall scroll progress inside the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fluid, responsive spring physics for effortless page turns without sluggish drag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 135,
    damping: 24,
    mass: 0.1,
  });

  // Calculate continuous pageFloat on scroll
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      const val = Math.max(0, Math.min(latest * (totalPages - 1), totalPages - 1));
      setPageFloat(val);
    });
  }, [smoothProgress, totalPages]);

  // Derived integer and fraction for the 3D turn
  const baseIndex = Math.min(Math.floor(pageFloat), totalPages - 2);
  const turnFraction = pageFloat - baseIndex; // 0.0 to 1.0
  const activePageIndex = Math.min(Math.round(pageFloat), totalPages - 1);

  // Jump to specific page index by scrolling the page container smoothly
  const scrollToPage = useCallback((index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerTop = container.getBoundingClientRect().top + window.pageYOffset;
    const scrollableDistance = container.offsetHeight - window.innerHeight;
    const targetScrollY = containerTop + (index / (totalPages - 1)) * scrollableDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }, [totalPages]);

  // Jump to category's divider page
  const jumpToCategory = (catId: string) => {
    const targetIndex = bookPages.findIndex(
      (p) => p.type === "divider" && p.categoryId === catId
    );
    if (targetIndex !== -1) {
      scrollToPage(targetIndex);
    }
  };

  // Keyboard Navigation: Left/Right, PageUp/PageDown, Home/End
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "book") return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        if (activePageIndex < totalPages - 1) {
          e.preventDefault();
          scrollToPage(activePageIndex + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        if (activePageIndex > 0) {
          e.preventDefault();
          scrollToPage(activePageIndex - 1);
        }
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToPage(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToPage(totalPages - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePageIndex, totalPages, scrollToPage, viewMode]);

  // Active category derived from active page
  const currentCategory = useMemo(() => {
    const currentPage = bookPages[activePageIndex];
    return currentPage?.categoryId || "mains";
  }, [activePageIndex]);

  // Helper to render page content
  const renderPageComponent = (page: BookPage, isActive: boolean) => {
    switch (page.type) {
      case "cover":
        return <BookPageCover page={page} />;
      case "divider":
        return <BookPageDivider page={page} totalPages={totalPages} />;
      case "item":
        return <BookPageItem page={page} totalPages={totalPages} isActive={isActive} />;
      case "back-cover":
        return <BookPageBackCover page={page} />;
      default:
        return null;
    }
  };

  // Rotation angle for the active leaf: 0deg to -180deg
  const leafAngle = -180 * turnFraction;

  // Dynamic paper curl and shadow opacities (peaks at -90deg / turnFraction = 0.5)
  const arcIntensity = Math.sin(turnFraction * Math.PI);
  const paperCurlOpacity = Math.max(0, Math.min(arcIntensity * 0.75, 0.75));
  const castShadowUnderneath = Math.max(0, Math.min((1 - turnFraction) * arcIntensity * 0.85, 0.85));
  const castShadowLeftStack = Math.max(0, Math.min(turnFraction * arcIntensity * 0.85, 0.85));

  return (
    <>
      {/* ── Top Floating Navigation & Control Bar ── */}
      <header className="sticky top-0 z-50 bg-midnight-lagoon/95 backdrop-blur-xl border-b border-sea-glass/20 py-2.5 shadow-xl select-none">
        <div className="container-meyola flex items-center justify-between gap-4">
          {/* Left: Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-sans uppercase font-bold tracking-[0.16em] text-sand/80 hover:text-coral-ember transition-colors shrink-0"
            aria-label="Back to home page"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          {/* Center: Category Jump Pills (layoutId indicator) */}
          <nav className="flex items-center justify-center overflow-x-auto no-scrollbar gap-1.5 sm:gap-2">
            {menuCategories.map((cat) => {
              const isCatActive = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => jumpToCategory(cat.id)}
                  className={`relative px-3 sm:px-4 py-1.5 rounded-full text-[0.68rem] sm:text-xs font-sans uppercase font-bold tracking-[0.14em] whitespace-nowrap cursor-pointer transition-colors focus-visible:outline-none ${
                    isCatActive ? "text-white" : "text-sand/70 hover:text-sand hover:bg-white/5"
                  }`}
                >
                  {isCatActive && (
                    <motion.div
                      layoutId="bookCategoryPill"
                      className="absolute inset-0 bg-coral-ember rounded-full shadow-md z-[-1]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: View Mode Toggle (Book vs List) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setViewMode(viewMode === "book" ? "list" : "book")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-deep-palm border border-sea-glass/20 text-sand hover:text-sea-glass hover:border-sea-glass transition-colors text-[0.68rem] sm:text-xs font-sans font-bold uppercase tracking-wider shadow-sm cursor-pointer"
              aria-label={`Switch to ${viewMode === "book" ? "list" : "book"} view`}
            >
              {viewMode === "book" ? (
                <>
                  <List className="w-3.5 h-3.5 text-turmeric" />
                  <span className="hidden md:inline">List View</span>
                </>
              ) : (
                <>
                  <BookOpen className="w-3.5 h-3.5 text-sea-glass" />
                  <span className="hidden md:inline">Book Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── VIEW MODE: ACCESSIBLE LIST VIEW ── */}
      {viewMode === "list" ? (
        <section className="container-meyola py-14 max-w-5xl" aria-label="Menu Items List">
          <div className="text-center mb-10">
            <span className="text-xs font-sans uppercase font-bold tracking-[0.22em] text-turmeric block mb-2">
              Accessible Ledger View
            </span>
            <h1 className="font-display text-4xl font-medium text-sand">
              Complete Menu Offerings
            </h1>
          </div>

          {menuCategories.map((cat) => {
            const itemsInCat = menuItems.filter((i) => i.category === cat.id);
            return (
              <div key={cat.id} className="mb-16">
                <div className="border-b border-sand/15 pb-3 mb-6 flex items-end justify-between">
                  <div>
                    <h2 className="font-display text-2xl text-sand font-medium">
                      {cat.label}
                    </h2>
                    <p className="text-xs font-sans text-turmeric mt-0.5">{cat.description}</p>
                  </div>
                  <span className="text-xs font-sans text-sand/50">{itemsInCat.length} Items</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {itemsInCat.map((item) => (
                    <article
                      key={item.id}
                      className="p-5 rounded-2xl bg-deep-palm/40 border border-sea-glass/15 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h3 className="font-display text-xl text-sand font-medium">
                            {item.name}
                          </h3>
                          <span className="font-sans font-bold text-sm text-turmeric">
                            LKR {item.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs font-sans text-sand/75 leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {item.ingredients.map((ing, i) => (
                            <span key={i} className="text-[0.65rem] px-2 py-0.5 rounded bg-sand/10 text-sand/80">
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-sand/10 text-[0.7rem] font-sans text-sand/60 italic">
                        Pairing: {item.pairing}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        /* ── VIEW MODE: IMMERSIVE 3D BOOK STAGE ── */
        <div
          ref={containerRef}
          style={{ height: `${(totalPages - 1) * 75 + 100}vh` }}
          className="relative w-full bg-midnight-lagoon select-none"
        >
          {/* Pinned Book Stage */}
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-3 sm:px-6 py-6 md:py-10">
            {/* Ambient Background Radial Glows */}
            <div className="sunset-glow glow-coral w-[500px] h-[500px] top-1/4 -left-20 opacity-20 pointer-events-none" />
            <div className="sunset-glow glow-sea-glass w-[450px] h-[450px] bottom-10 -right-20 opacity-15 pointer-events-none" />

            {/* ── Hardcover Dining Table Shadow & Stage Platform ── */}
            <div
              className="relative w-full max-w-5xl h-[78vh] sm:h-[82vh] md:h-[85vh] max-h-[760px] flex items-center justify-center"
              style={{
                perspective: "2400px",
                perspectiveOrigin: "50% 50%",
              }}
            >
              {/* DESKTOP OPEN-BOOK TWO-PAGE SPREAD (>= 1024px) */}
              <div className="hidden lg:flex w-full h-full relative">
                {/* 1. OUTER HARDCOVER BINDING BASE (Leather casing + metallic corner brackets) */}
                <div
                  className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-[#081817] via-[#10322c] to-[#081817] border-2 border-[#123B34] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.9),0_20px_45px_rgba(0,0,0,0.7)] p-2 pointer-events-none"
                  style={{
                    boxShadow:
                      "-14px 0 0 #DCCEB6, -10px 0 0 #E5D7C2, -6px 0 0 #ECE1CE, 6px 0 0 #ECE1CE, 10px 0 0 #E5D7C2, 14px 0 0 #DCCEB6, 0 35px 85px rgba(0,0,0,0.85)",
                  }}
                >
                  {/* Stitched leather perimeter */}
                  <div className="absolute inset-2 border border-dashed border-[#E9B44C]/30 rounded-[22px] pointer-events-none" />

                  {/* Brass Corner Brackets */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-turmeric rounded-tl-xl pointer-events-none opacity-80" />
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-turmeric rounded-tr-xl pointer-events-none opacity-80" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-turmeric rounded-bl-xl pointer-events-none opacity-80" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-turmeric rounded-br-xl pointer-events-none opacity-80" />
                </div>

                {/* 2. THE INNER BOOK LEAF CANVAS (Left page + Right page + 3D turning leaf) */}
                <div className="relative w-full h-full rounded-[24px] overflow-hidden flex z-10 m-2">
                  {/* ── LEFT HALF: Facing Spread Stack ── */}
                  <div
                    onClick={() => activePageIndex > 0 && scrollToPage(activePageIndex - 1)}
                    className="w-1/2 h-full bg-[#F3E9D7] relative overflow-hidden cursor-pointer select-none group"
                    title="Click to turn to previous page"
                  >
                    {/* Background page content on left */}
                    <BookPageFacing
                      page={
                        turnFraction >= 0.5
                          ? bookPages[baseIndex + 1]
                          : bookPages[baseIndex]
                      }
                    />

                    {/* Paper grain overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#123B34_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-[0.04] pointer-events-none" />

                    {/* Dynamic cast shadow from descending turning leaf */}
                    <div
                      className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent pointer-events-none transition-opacity duration-75"
                      style={{ opacity: castShadowLeftStack }}
                    />

                    {/* Left Spine Crease Shadow */}
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/40 via-black/15 to-transparent pointer-events-none z-30" />
                  </div>

                  {/* ── CENTER SPINE DIVIDER & SILK BOOKMARK ── */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 z-40 bg-gradient-to-b from-[#123B34] via-[#0B1F1E] to-[#123B34] shadow-[0_0_12px_rgba(0,0,0,0.8)] pointer-events-none">
                    {/* Hanging Silk Ribbon Bookmark */}
                    <div className="absolute top-0 -left-2 w-4 h-24 bg-gradient-to-b from-coral-ember to-turmeric shadow-lg rounded-b-md flex items-end justify-center pb-1">
                      <div className="w-2 h-2 rotate-45 bg-[#F3E9D7] -mb-1" />
                    </div>
                  </div>

                  {/* ── RIGHT HALF: Underlying Page (Layer 0 on right) ── */}
                  <div
                    onClick={() => activePageIndex < totalPages - 1 && scrollToPage(activePageIndex + 1)}
                    className="w-1/2 h-full bg-[#F3E9D7] relative overflow-hidden cursor-pointer select-none group"
                    title="Click to turn to next page"
                  >
                    {/* Content of page that sits directly beneath the turning leaf */}
                    {baseIndex + 1 < totalPages && (
                      <div className="w-full h-full relative">
                        {renderPageComponent(bookPages[baseIndex + 1], false)}
                      </div>
                    )}

                    {/* Paper grain overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#123B34_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-[0.04] pointer-events-none" />

                    {/* Dynamic cast shadow as leaf lifts off right stack */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none transition-opacity duration-75"
                      style={{ opacity: castShadowUnderneath }}
                    />

                    {/* Right Spine Crease Shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none z-30" />
                  </div>

                  {/* ── THE 3D ACTIVE TURNING LEAF (Layer 1) ── */}
                  {!shouldReduceMotion && (
                    <div
                      className="absolute top-0 left-1/2 w-1/2 h-full z-30 pointer-events-none will-change-transform"
                      style={{
                        transformOrigin: "left center",
                        transformStyle: "preserve-3d",
                        transform: `rotateY(${leafAngle}deg)`,
                      }}
                    >
                      {/* 1. FRONT FACE OF TURNING LEAF (Visible 0deg to -90deg) */}
                      <div
                        className="absolute inset-0 bg-[#F3E9D7] overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(0deg)",
                        }}
                      >
                        {renderPageComponent(bookPages[baseIndex], true)}

                        {/* Moving Paper-Curl Reflection & Highlight */}
                        <div
                          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 via-white/30 to-black/30 transition-opacity duration-75"
                          style={{ opacity: paperCurlOpacity }}
                        />

                        {/* Spine Crease on front face */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
                      </div>

                      {/* 2. BACK FACE OF TURNING LEAF (Visible -90deg to -180deg) */}
                      <div
                        className="absolute inset-0 bg-[#F3E9D7] overflow-hidden"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        {/* Back face displays facing spread for next page */}
                        {baseIndex + 1 < totalPages && (
                          <BookPageFacing page={bookPages[baseIndex + 1]} />
                        )}

                        {/* Moving Paper-Curl Reflection on back face */}
                        <div
                          className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/40 via-white/30 to-black/30 transition-opacity duration-75"
                          style={{ opacity: paperCurlOpacity }}
                        />

                        {/* Spine Crease on back face */}
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ── MOBILE & TABLET SINGLE PAGE EXPERIENCE (< 1024px) ── */}
              <div className="flex lg:hidden w-full max-w-md sm:max-w-lg h-full relative">
                {/* Mobile Leather Casing */}
                <div
                  className="absolute inset-0 rounded-[24px] bg-[#10322c] border-2 border-turmeric/40 shadow-2xl p-1 pointer-events-none"
                  style={{
                    boxShadow:
                      "0 25px 60px rgba(0,0,0,0.8), 4px 0 0 #DCCEB6, 8px 0 0 #E5D7C2",
                  }}
                />

                {/* Mobile Inner Page Canvas */}
                <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#F3E9D7] z-10 m-1 flex flex-col justify-between">
                  {/* Left Spine cue */}
                  <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/35 to-transparent z-30 pointer-events-none" />

                  {/* Underneath Next Page */}
                  <div className="absolute inset-0 z-10">
                    {baseIndex + 1 < totalPages &&
                      renderPageComponent(bookPages[baseIndex + 1], false)}
                  </div>

                  {/* Turning Mobile Leaf */}
                  <div
                    className="absolute inset-0 z-20 will-change-transform bg-[#F3E9D7]"
                    style={{
                      transformOrigin: "left center",
                      transformStyle: "preserve-3d",
                      transform: shouldReduceMotion ? "none" : `rotateY(${leafAngle}deg)`,
                      opacity: shouldReduceMotion
                        ? 1 - turnFraction
                        : 1,
                    }}
                  >
                    {renderPageComponent(bookPages[baseIndex], true)}

                    {/* Paper curl shadow */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-black/50 via-white/20 to-black/30 pointer-events-none"
                      style={{ opacity: paperCurlOpacity }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Floating Interactive Controls & Reading Progress Bar ── */}
            <div className="mt-4 sm:mt-5 flex items-center justify-between w-full max-w-5xl px-3 sm:px-6 z-40 select-none text-xs font-sans">
              {/* Prev Page Button */}
              <button
                onClick={() => activePageIndex > 0 && scrollToPage(activePageIndex - 1)}
                disabled={activePageIndex === 0}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2.5 rounded-full bg-deep-palm/90 border border-sea-glass/25 text-sand hover:text-coral-ember hover:border-coral-ember transition-colors disabled:opacity-30 disabled:pointer-events-none shadow-lg cursor-pointer focus-visible:outline-none"
                aria-label="Turn to previous page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline font-bold uppercase tracking-wider text-[0.72rem]">
                  Prev
                </span>
              </button>

              {/* Center Page Progress Indicator & Smooth Scrub Bar */}
              <div className="flex flex-col items-center gap-1.5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-midnight-lagoon/90 border border-sea-glass/25 backdrop-blur-md shadow-md">
                  <span className="text-[0.7rem] font-mono text-turmeric font-extrabold tracking-wider">
                    Page {String(activePageIndex + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
                  </span>
                  <span className="text-sand/30">·</span>
                  <span className="text-[0.7rem] text-sand font-bold tracking-wide truncate max-w-[130px] sm:max-w-[220px]">
                    {bookPages[activePageIndex].title}
                  </span>
                </div>

                {/* Reading Progress Line */}
                <div className="w-36 sm:w-56 h-1.5 rounded-full bg-deep-palm/80 overflow-hidden border border-sea-glass/10">
                  <div
                    className="h-full bg-gradient-to-r from-turmeric to-coral-ember transition-all duration-150"
                    style={{
                      width: `${((activePageIndex + 1) / totalPages) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Next Page Button */}
              <button
                onClick={() => activePageIndex < totalPages - 1 && scrollToPage(activePageIndex + 1)}
                disabled={activePageIndex === totalPages - 1}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2.5 rounded-full bg-deep-palm/90 border border-sea-glass/25 text-sand hover:text-coral-ember hover:border-coral-ember transition-colors disabled:opacity-30 disabled:pointer-events-none shadow-lg cursor-pointer focus-visible:outline-none"
                aria-label="Turn to next page"
              >
                <span className="hidden sm:inline font-bold uppercase tracking-wider text-[0.72rem]">
                  Next
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
