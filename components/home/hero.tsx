"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlarmClock, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";

type Slide = { src: string; alt: string };

interface HeroProps {
  slides: Slide[];
  emergencyTel: string;
}

export function Hero({ slides, emergencyTel }: HeroProps) {
  const [index, setIndex] = React.useState(0);
  const [reduced, setReduced] = React.useState(false);
  const timer = React.useRef<NodeJS.Timeout | null>(null);

  // Detect reduced motion preference
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const onChange = () => setReduced(m.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);

  // Carousel auto-advance
  React.useEffect(() => {
    if (reduced) {
      return;
    }

    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      8000
    );

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [slides.length, reduced]);

  // Smooth scroll handler
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative isolate overflow-hidden border-b"
      aria-label="Hero section showcasing JG Marine's independent survey services"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          {slides.map((s, i) =>
            i === index ? (
              <motion.div
                key={s.src}
                initial={{
                  opacity: 0,
                  scale: i % 2 === 0 ? 1 : 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: i % 2 === 0 ? 1.05 : 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 8, ease: "linear" },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        {/* Static fallback for reduced motion */}
        {reduced && (
          <div className="absolute inset-0">
            <Image
              src={slides[0]?.src || "/hero/inspection-bridge.jpg"}
              alt={slides[0]?.alt || "JG-Marine surveyor during an inspection"}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="min-h-[68vh] md:min-h-[100vh] flex items-center py-12 md:py-20">
          <div className="max-w-2xl text-white">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              Protect Maritime Assets from Million-Euro Losses with Independent
              DNV Marine Surveys
            </h1>

            {/* Subheadline */}
            <p className="mt-3 text-base md:text-lg text-white/90 max-w-prose">
              Independent hull, cargo, and offshore project surveys for
              insurers, shipowners, and logistics operators across the Baltic
              Sea and Central Europe
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                variant="default"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="/contact" aria-label="Request an urgent survey">
                  Request Survey
                </a>
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-white/20">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                {/* High-Impact Metrics */}
                <div className="grid grid-cols-3 gap-6 text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-semibold">120+</span>
                    <span className="text-xs font-light text-white/70 tracking-wider">
                      PROJECTS
                    </span>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-semibold">64</span>
                    <span className="text-xs font-light text-white/70 tracking-wider">
                      YEARS
                    </span>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-semibold">11+</span>
                    <span className="text-xs font-light text-white/70 tracking-wider">
                      COUNTRIES
                    </span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-xs font-light text-white/70 tracking-wider mb-2">
                    CERTIFICATIONS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-none text-xs"
                    >
                      DNV
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-none text-xs"
                    >
                      IIMS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-none text-xs"
                    >
                      CESAM
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            {!reduced && (
              <div className="absolute bottom-6 left-4 md:left-6">
                <div className="container mx-auto max-w-screen-xl px-0">
                  <div className="flex items-center gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          i === index
                            ? "w-6 bg-white"
                            : "w-3 bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        aria-label="Scroll down to explore"
      >
        {/* Text Label */}
        <span className="text-xs text-white/60 tracking-[0.2em] uppercase font-medium group-hover:text-white/80 transition-colors">
          Scroll
        </span>

        {/* Animated Icon Container */}
        <div className="relative w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors">
          {/* Animated Scroll Indicator */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/70 rounded-full"
          />
        </div>

        {/* Chevron Animation */}
        <motion.div
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            className="h-4 w-4 text-white/50 group-hover:text-white/70 transition-colors"
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.button>

      {/* Reassurance Ribbon (Desktop Only) */}
      <div className="hidden md:block absolute bottom-6 right-4 md:right-6">
        <div className="container mx-auto max-w-screen-xl px-0">
          <div className="inline-flex items-center gap-3 rounded-full bg-success/10 px-4 py-2 text-white backdrop-blur border border-success/20">
            <ShieldCheck className="h-4 w-4 text-success" />
            <span className="text-sm">Guaranteed report independence</span>
            <span className="text-white/40">•</span>
            <span className="text-sm">Surveyor assigned in &lt;2 hours</span>
            <ArrowRight className="h-4 w-4 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
