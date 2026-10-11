"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { MessageSquare, Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileFloatingBar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past 350px (hero section)
    setVisible(latest > 350);
  });

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 left-4 right-4 z-40 md:hidden select-none"
    >
      <div className="bg-midnight-lagoon/95 backdrop-blur-xl border border-sea-glass/25 rounded-full p-2 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Meyola,%20I%20would%20like%20to%20reserve%20a%20table`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#25D366] text-white text-[0.72rem] font-sans font-bold uppercase tracking-wider shadow"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href="/#visit"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-coral-ember text-white text-[0.72rem] font-sans font-bold uppercase tracking-wider shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Table</span>
        </a>

        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
          className="w-11 h-11 rounded-full bg-deep-palm border border-sea-glass/20 text-turmeric flex items-center justify-center shrink-0"
          aria-label="Call restaurant directly"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
