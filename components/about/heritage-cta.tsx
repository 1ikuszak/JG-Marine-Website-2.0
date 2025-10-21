// components/about/heritage-cta.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";

export default function HeritageCtaSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/about/cta-heritage.jpg" // Use a meaningful heritage image
          alt="Three generations of maritime expertise"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/90 to-foreground/80" />

        {/* Premium gradient accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
        </div>
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 sm:px-6 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            {/* Overline */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent" />
              <p className="font-mono text-[10px] sm:text-xs font-bold text-accent tracking-[0.3em] uppercase">
                64 YEARS OF HERITAGE
              </p>
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent" />
            </div>

            {/* Main Headline - Emotional Hook */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
              Three Generations Trusted Us.
              <br />
              <span className="text-accent">Now It's Your Turn.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
              You've learned our story. Now let our family's maritime expertise
              protect your assets with the same independence and precision
              trusted since 1968.
            </p>

            {/* Trust Signals - Quick Scan */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto py-6 sm:py-8">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="bg-primary/20 p-3 sm:p-4 rounded-lg">
                  <Users
                    className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    3rd
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60">
                    Generation
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="bg-primary/20 p-3 sm:p-4 rounded-lg">
                  <Shield
                    className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    DNV
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60">
                    Certified
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="bg-primary/20 p-3 sm:p-4 rounded-lg">
                  <Clock
                    className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    24h
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60">
                    Response
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="bg-primary/20 p-3 sm:p-4 rounded-lg">
                  <Shield
                    className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-white">
                    100%
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60">
                    Independent
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Dual Path */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  Request Survey Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+48XXXXXXXXX" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 24/7 Hotline
                </a>
              </Button>
            </div>

            {/* Final Trust Statement */}
            <p className="text-xs sm:text-sm text-white/50 pt-4 sm:pt-6">
              <Shield className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Surveyor assigned within 2 hours • On-site within 24h Baltic
              region
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
