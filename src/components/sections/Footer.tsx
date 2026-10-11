"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="section-dark bg-midnight-lagoon border-t border-sea-glass/15 pt-20 pb-12 overflow-hidden relative"
      aria-label="Footer"
    >
      {/* Ambient background glow */}
      <div className="sunset-glow glow-sea-glass w-[400px] h-[400px] -bottom-20 left-1/4 opacity-15" />

      <div className="container-meyola relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-sand/15">
          {/* Col 1: Brand Info & Bio */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-display text-3xl font-bold tracking-[0.14em] text-sand">
                  MEYOLA
                </span>
                <span className="w-2 h-2 rounded-full bg-coral-ember" />
              </div>
              <p className="text-xs font-sans uppercase tracking-[0.22em] text-turmeric mb-4">
                Restaurant &amp; Bar · Weligama, Sri Lanka
              </p>
              <p className="text-xs sm:text-sm font-sans text-sand/75 leading-relaxed max-w-sm">
                Generational Ceylon rice &amp; curry, dawn ocean catches from Weligama bay, hand-rolled pastas, and artisan coconut arrack sours under southern palms.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-deep-palm border border-sea-glass/20 text-sand hover:text-coral-ember hover:border-coral-ember transition-colors flex items-center justify-center"
                aria-label="Instagram (Placeholder)"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-deep-palm border border-sea-glass/20 text-sand hover:text-coral-ember hover:border-coral-ember transition-colors flex items-center justify-center"
                aria-label="Facebook (Placeholder)"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <span className="text-[0.68rem] font-sans text-sand/40">
                (Social links: verify with owner)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <span className="text-xs font-sans uppercase font-bold tracking-[0.2em] text-turmeric block mb-4">
              Explore
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-sans text-sand/75">

              <li>
                <Link href="/menu" className="hover:text-sea-glass transition-colors">
                  Complete Food &amp; Bar Menu
                </Link>
              </li>
              <li>
                <Link href="/#bar" className="hover:text-sea-glass transition-colors">
                  The Sunset Cocktail Bar
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-sea-glass transition-colors">
                  Atmosphere Gallery
                </Link>
              </li>
              <li>
                <Link href="/#visit" className="hover:text-sea-glass transition-colors">
                  Table Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Address */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans uppercase font-bold tracking-[0.2em] text-turmeric block mb-4">
                Visit &amp; Contact
              </span>
              <div className="flex flex-col gap-3 text-xs sm:text-sm font-sans text-sand/75">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-coral-ember shrink-0 mt-0.5" />
                  <span>{siteConfig.address.full}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sea-glass shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="hover:text-sand">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-turmeric shrink-0 mt-0.5" />
                  <span>Daily 10:00 AM – 11:30 PM (Kitchen closes 10:15 PM)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sand/10">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] font-semibold text-sand/70 hover:text-coral-ember transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Giant Outlined MEYOLA Wordmark with Hover Fill ── */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden group cursor-default">
          <svg
            viewBox="0 0 1000 180"
            className="w-full max-w-5xl mx-auto h-auto overflow-visible"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="58%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-display font-black tracking-[0.16em] uppercase fill-transparent stroke-sand/30 hover:stroke-sand hover:fill-sand transition-all duration-700 ease-out cursor-pointer"
              style={{
                strokeWidth: "2px",
                fontSize: "155px",
              }}
            >
              MEYOLA
            </text>
          </svg>
          <span className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-sand/40 -mt-2 block group-hover:text-turmeric transition-colors">
            Weligama · Southern Sri Lanka
          </span>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-6 border-t border-sand/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] font-sans text-sand/50">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>
              Built by{" "}
              <span className="text-sand/90 font-medium tracking-wide text-coral-ember">
                kerydex
              </span>
            </span>
            <span>·</span>
            <span>Price Range: {siteConfig.priceRange}</span>
            <span>·</span>
            <span>Weligama Bay, Matara</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
