"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, type HTMLMotionProps } from "motion/react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "coral" | "sandOutline" | "darkOutline" | "ghost" | "turmeric";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  magnetic?: boolean;
  magneticStrength?: number;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "coral",
  size = "md",
  href,
  isExternal = false,
  magnetic = true,
  magneticStrength = 0.35,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch devices to disable magnetic drag for accessibility & performance
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch || !magnetic || disabled) return;
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * magneticStrength;
    const distanceY = (e.clientY - centerY) * magneticStrength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Base styles
  const baseStyles =
    "relative inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-ember focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none text-center";

  // Size styles
  const sizeStyles = {
    sm: "text-[0.7rem] px-4 py-2 gap-1.5 min-h-[38px]",
    md: "text-[0.8rem] px-7 py-3 gap-2 min-h-[46px]",
    lg: "text-[0.875rem] px-9 py-4 gap-2.5 min-h-[54px]",
  }[size];

  // Variant styles matching Tropical Dusk palette
  const variantStyles = {
    coral:
      "bg-coral-ember text-white border border-coral-ember shadow-[0_4px_20px_rgba(232,96,60,0.35)] hover:bg-[#F06C47] hover:shadow-[0_8px_30px_rgba(232,96,60,0.55)]",
    sandOutline:
      "bg-transparent text-sand border border-sand/30 hover:border-sea-glass hover:text-sea-glass hover:bg-sea-glass/10",
    darkOutline:
      "bg-transparent text-midnight-lagoon border-2 border-midnight-lagoon hover:bg-midnight-lagoon hover:text-sand",
    ghost:
      "bg-transparent text-sand/80 hover:text-sand hover:bg-white/5",
    turmeric:
      "bg-turmeric text-midnight-lagoon border border-turmeric shadow-[0_4px_18px_rgba(233,180,76,0.3)] hover:bg-[#F2C05E] hover:shadow-[0_8px_25px_rgba(233,180,76,0.45)]",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <motion.a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ x, y }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileTap={{ scale: 0.96 }}
          className={combinedClasses}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div
        style={{ x, y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <Link
          href={href}
          className={combinedClasses}
          ref={ref as React.RefObject<HTMLAnchorElement>}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={combinedClasses}
      disabled={disabled}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
}
