import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft, UtensilsCrossed } from "lucide-react";
import { SvgWave } from "@/components/motion/SvgWave";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-midnight-lagoon text-sand flex flex-col items-center justify-center p-6 text-center relative overflow-hidden select-none">
      {/* Ambient sunset glow */}
      <div className="sunset-glow glow-coral w-[450px] h-[450px] top-1/4 left-1/2 -translate-x-1/2 opacity-25" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-deep-palm border border-sea-glass/25 text-turmeric flex items-center justify-center mb-6 shadow-xl">
          <Compass className="w-8 h-8 text-coral-ember" />
        </div>

        <span className="text-xs font-sans uppercase font-bold tracking-[0.25em] text-turmeric block mb-2">
          404 · Drifting Beyond the Bay
        </span>

        <h1 className="font-display text-4xl sm:text-6xl font-medium text-sand tracking-tight mb-4">
          Lost in the Palms?
        </h1>

        <div className="w-28 my-3">
          <SvgWave color="#E8603C" />
        </div>

        <p className="text-sm sm:text-base font-sans text-sand/80 max-w-md mx-auto leading-relaxed mb-8">
          The page you are looking for has drifted off with the southern tide. Let us guide you back to our beachside courtyard in Weligama.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button href="/" variant="coral" size="md">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Return to Home</span>
          </Button>

          <Button href="/menu" variant="sandOutline" size="md">
            <UtensilsCrossed className="w-4 h-4 mr-1 text-sea-glass" />
            <span>View Food Menu</span>
          </Button>
        </div>

        <p className="mt-12 text-xs font-sans text-sand/40">
          28 First Cross Road, Palana, Weligama · Phone: +94 76 557 4616
        </p>
      </div>
    </main>
  );
}
