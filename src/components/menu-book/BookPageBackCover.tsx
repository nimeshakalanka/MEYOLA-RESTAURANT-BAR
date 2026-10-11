"use client";

import React from "react";
import { MessageSquare, Calendar, Phone, MapPin, Clock, ArrowDown } from "lucide-react";
import { BookPage } from "@/data/menuBook";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function BookPageBackCover({ page }: { page: BookPage }) {
  return (
    <article
      className="w-full h-full flex flex-col justify-between p-6 sm:p-10 text-deep-palm select-none relative overflow-hidden"
      aria-label="Menu Book Back Cover"
    >
      {/* Decorative inner frame */}
      <div className="absolute inset-3 sm:inset-4 border border-deep-palm/20 rounded-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-xs font-sans uppercase font-bold tracking-[0.24em] text-deep-palm/70">
        <span className="text-coral-ember">Table Reservations</span>
        <span className="text-[0.68rem] opacity-60">Weligama, Sri Lanka</span>
      </div>

      {/* Center Call To Action */}
      <div className="relative z-10 text-center my-auto flex flex-col items-center max-w-sm mx-auto">
        <span className="text-xs font-sans uppercase font-extrabold tracking-[0.3em] text-turmeric mb-2">
          Experience Meyola
        </span>

        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-deep-palm mb-3 leading-tight">
          Join Us at the Table
        </h2>

        <p className="font-sans text-xs sm:text-sm text-deep-palm/80 leading-relaxed font-light mb-6">
          Slow-simmered claypot curries, catamaran catches brought in at sunrise, and artisan arrack cocktail shakers under the palms.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mb-6">
          <Button
            href="/#visit"
            variant="coral"
            size="md"
            className="flex-1 justify-center text-xs"
          >
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>Reserve Table</span>
          </Button>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Meyola,%20I%20would%20like%20to%20reserve%20a%20table`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#25D366] text-white text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-colors shadow-md"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Direct Contact Details */}
        <div className="p-3.5 rounded-xl bg-deep-palm/5 border border-deep-palm/10 text-xs font-sans text-deep-palm/75 w-full flex flex-col gap-1.5 text-left">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-coral-ember shrink-0" />
            <span>{siteConfig.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-turmeric shrink-0" />
            <span className="truncate">{siteConfig.address.street}, Weligama</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-deep-palm/60 shrink-0" />
            <span>Daily: {siteConfig.hours.weekday}</span>
          </div>
        </div>
      </div>

      {/* Bottom Hint: Scroll past to view footer */}
      <div className="relative z-10 text-center flex items-center justify-center gap-1.5 text-[0.68rem] font-sans uppercase tracking-[0.2em] text-deep-palm/50">
        <span>Scroll down to continue to footer</span>
        <ArrowDown className="w-3.5 h-3.5 text-coral-ember" />
      </div>
    </article>
  );
}
