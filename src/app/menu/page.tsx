import React from "react";
import type { Metadata } from "next";
import { MenuBookStage } from "@/components/menu-book/MenuBookStage";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Modern Menu Book | Meyola Restaurant & Bar Weligama",
  description:
    "Turn the pages of the Meyola digital menu book. Generational Ceylon rice & curry, catamaran seafood caught at dawn, handmade pasta, and artisan arrack cocktails.",
  openGraph: {
    title: "Menu & Cellar | Meyola Restaurant & Bar Weligama",
    description:
      "Explore our interactive menu book featuring heirloom claypot curries, wild ocean catches, and craft coconut arrack sours.",
    url: `${siteConfig.url}/menu`,
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-midnight-lagoon text-sand">
      {/* ── Immersive Scroll-Driven Menu Book Stage ── */}
      <MenuBookStage />

      {/* ── Global Footer (Seamlessly reached after scrolling past the back cover) ── */}
      <Footer />
    </main>
  );
}
