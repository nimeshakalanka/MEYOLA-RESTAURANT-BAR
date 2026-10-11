"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, MapPin, Clock } from "lucide-react";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { name: "Menu", href: "/menu" },
  { name: "The Bar", href: "/#bar" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Visit & Hours", href: "/#visit" },
];

export function Navbar({ isStatic = false }: { isStatic?: boolean }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide on scroll down, show on scroll up (only when not static)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isStatic) return;
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 40);
  });

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        variants={
          isStatic
            ? undefined
            : {
                visible: { y: 0 },
                hidden: { y: "-100%" },
              }
        }
        animate={isStatic ? undefined : (hidden ? "hidden" : "visible")}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`${
          isStatic
            ? "relative z-40 bg-midnight-lagoon/95 border-b border-sea-glass/15 shadow-md"
            : `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                scrolled
                  ? "bg-midnight-lagoon/90 backdrop-blur-md border-b border-sea-glass/15 shadow-xl"
                  : "bg-gradient-to-b from-midnight-lagoon/80 to-transparent"
              }`
        }`}
      >
        <div className="container-meyola flex items-center justify-between h-20 md:h-24">
          {/* Logo Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-ember rounded-sm"
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-[0.12em] text-sand group-hover:text-sea-glass transition-colors">
                MEYOLA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-coral-ember" />
            </div>
            <span className="text-[0.62rem] font-sans uppercase tracking-[0.24em] text-sand/60 -mt-0.5">
              Restaurant & Bar · Weligama
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-sans uppercase font-bold tracking-[0.16em]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sand/80 hover:text-sand transition-colors py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-ember rounded"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-coral-ember transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              href="/#visit"
              variant="coral"
              size="sm"
              className="text-xs tracking-[0.14em]"
            >
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full text-sand hover:text-sea-glass hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-ember"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-midnight-lagoon/98 backdrop-blur-xl flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden"
          >
            {/* Nav list */}
            <nav className="flex flex-col gap-6 items-start">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-3xl font-light text-sand hover:text-coral-ember transition-colors flex items-center gap-4"
                  >
                    <span className="text-xs font-sans text-turmeric font-bold">
                      0{idx + 1}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom info strip in mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.45 }}
              className="border-t border-sand/15 pt-8 flex flex-col gap-5 text-sm font-sans"
            >
              <div className="flex items-center gap-3 text-sand/80">
                <MapPin className="w-4 h-4 text-coral-ember shrink-0" />
                <span className="text-xs">{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-sand/80">
                <Clock className="w-4 h-4 text-turmeric shrink-0" />
                <span className="text-xs">Daily: 10:00 AM – 11:30 PM (Kitchen 10:15 PM)</span>
              </div>


              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/#visit"
                  onClick={() => setMobileMenuOpen(false)}
                  variant="coral"
                  size="md"
                  className="w-full text-center justify-center"
                >
                  Reserve a Table
                </Button>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Meyola,%20I%20would%20like%20to%20reserve%20a%20table`}
                  isExternal
                  variant="sandOutline"
                  size="md"
                  className="w-full text-center justify-center text-xs"
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
