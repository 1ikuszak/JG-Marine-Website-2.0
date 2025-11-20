"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[61.8%_38.2%]">
        {/* LEFT: Heritage Image - Golden Ratio Width */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-full order-2 lg:order-1">
          <Image
            src="/about/C.jpg"
            alt="JG Marine heritage - Three generations of Master Mariners"
            fill
            className="object-cover grayscale"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 lg:to-background/40" />
        </div>

        {/* RIGHT: Text Content */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-full bg-background order-1 lg:order-2 flex items-center justify-center py-12 sm:py-16 lg:py-0">
          <div className="w-full max-w-xl px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Overline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-8 sm:mb-12"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="h-px w-8 sm:w-12 bg-accent/30" />
                  <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.4em] text-foreground/60 uppercase font-light">
                    Est. 1961
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-6 sm:mb-8"
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-primary leading-[0.95] mb-2 sm:mb-3">
                  Three
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-primary leading-[0.95]">
                  Generations
                </span>
              </motion.h1>

              {/* Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-[1px] w-16 sm:w-20 bg-secondary mb-8 sm:mb-10 origin-left"
              />

              {/* Subtitle & Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-4 sm:space-y-6"
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 tracking-wide">
                  Master Mariners
                </p>
                <p className="text-xs sm:text-sm md:text-base text-foreground/60 leading-relaxed">
                  60+ years of Baltic maritime surveying. DNV-GL certified. Flag
                  state authority for five nations.
                </p>
              </motion.div>

              {/* Scroll hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-8 sm:mt-12 flex items-center gap-4"
              >
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] sm:text-xs tracking-[0.3em] text-foreground/40 uppercase">
                  Our Story
                </span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-foreground/40"
                >
                  →
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative corner details */}
          <div className="hidden sm:block absolute top-4 sm:top-8 right-4 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r border-t border-foreground/10" />
          <div className="hidden sm:block absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r border-b border-foreground/10" />
        </div>
      </div>

      {/* Golden ratio indicator line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute left-[61.8%] top-1/2 -translate-y-1/2 w-[1px] h-16 sm:h-24 bg-gradient-to-b from-transparent via-secondary to-transparent origin-center"
      />
    </section>
  );
}
