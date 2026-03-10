"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { CONTACTS } from "@/config";

type Slide = { src: string; alt: string };

interface HeroProps {
  slides: Slide[];
}

export function Hero({ slides }: HeroProps) {
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
    if (reduced) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      8000
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slides.length, reduced]);

  const goTo = (i: number) => {
    setIndex(i);
    if (timer.current) clearInterval(timer.current);
    if (!reduced) {
      timer.current = setInterval(
        () => setIndex((prev) => (prev + 1) % slides.length),
        8000
      );
    }
  };

  const goPrev = () => goTo((index - 1 + slides.length) % slides.length);
  const goNext = () => goTo((index + 1) % slides.length);

  return (
    <section
      className="relative isolate overflow-hidden border-b"
      aria-label="Hero section showcasing JG Marine's independent survey services"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">

        {/* ── LEFT: Content on light background ─────────────────────────── */}
        <div className="bg-background order-2 lg:order-1 flex items-center lg:pt-[92px]">
          <div className="w-full px-6 sm:px-10 xl:px-16 py-12 lg:py-0 pt-8 lg:pt-20 lg:pb-20">
            <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg xl:max-w-xl">

              {/* Authority badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span className="label-caps text-foreground/70">
                  Independent Marine Surveyors
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-display-sm md:text-display font-semibold leading-tight tracking-tight text-foreground"
              >
                Independent Marine Surveys for Baltic Maritime Operations
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 text-body-sm md:text-body-lg text-foreground/65 max-w-prose leading-relaxed"
              >
                Independent surveys for hull and machinery, cargo damage
                assessment, and offshore projects. Serving insurers, shipowners,
                and logistics operators across Poland and Europe.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
              >
                {/* Primary: phone — captures urgent/emergency clients */}
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-16 rounded-xl group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 w-full sm:w-auto cursor-pointer"
                  asChild
                >
                  <a
                    href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-3"
                    aria-label="Call now — available 24/7"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 group-hover:animate-pulse" />
                    </div>
                    <div className="text-left">
                      <div className="label-caps opacity-70 leading-none mb-0.5">
                        Call Now — Available 24/7
                      </div>
                      <div>{CONTACTS.main.phone}</div>
                    </div>
                  </a>
                </Button>

                {/* Secondary: scroll to services — lower commitment */}
                <Button
                  size="lg"
                  className="border border-secondary/25 bg-transparent hover:bg-secondary/5 text-secondary font-semibold text-base h-14 rounded-xl transition-all duration-200 w-full sm:w-auto cursor-pointer"
                  asChild
                >
                  <a href="#services" aria-label="Explore our services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>

              {/* Divider + Metrics + Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-10 pt-8 border-t border-border"
              >
                {/* High-Impact Metrics */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="stat-number text-foreground">
                      900+
                    </span>
                    <span className="label-caps text-foreground/55 mt-1">
                      ANNUAL CASES
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="stat-number text-foreground">
                      120+
                    </span>
                    <span className="label-caps text-foreground/55 mt-1">
                      YEARS EXPERIENCE
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="stat-number text-foreground">
                      3
                    </span>
                    <span className="label-caps text-foreground/55 mt-1">
                      OFFICES IN POLAND
                    </span>
                  </div>
                </div>

                {/* Certifications + Reassurance */}
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Cert badges */}
                  <div className="flex items-center gap-2">
                    <span className="label-caps text-foreground/50">
                      Certified:
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-secondary/8 text-secondary border border-secondary/20 text-xs font-medium"
                    >
                      IIMS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-secondary/8 text-secondary border border-secondary/20 text-xs font-medium"
                    >
                      CESAM
                    </Badge>
                  </div>

                  {/* Divider (desktop) */}
                  <div className="hidden sm:block h-4 w-px bg-border" />

                  {/* Reassurance */}
                  <div className="flex items-center gap-1.5 text-foreground/55 text-xs">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span>Guaranteed report independence</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ── RIGHT: Full-bleed image carousel ──────────────────────────── */}
        <div className="relative order-1 lg:order-2 h-[52vw] min-h-[260px] sm:min-h-[340px] lg:h-auto overflow-hidden">

          {/* Slides */}
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
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
                src={slides[0]?.src || "/hero/h1.png"}
                alt={slides[0]?.alt || "JG-Marine surveyor during an inspection"}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Bottom gradient — for controls legibility */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-foreground/50 to-transparent pointer-events-none" />

          {/* Top gradient — subtle depth on mobile (header overlap) */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-foreground/30 to-transparent pointer-events-none lg:hidden" />

          {/* Slide counter badge */}
          <div className="absolute top-4 right-4 lg:top-6 lg:right-6 inline-flex items-center gap-1.5 rounded-full bg-foreground/40 backdrop-blur-sm border border-white/10 px-3 py-1.5">
            <span className="text-white font-semibold text-sm tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-white/40 text-xs">/</span>
            <span className="text-white/50 text-sm tabular-nums">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Arrow controls */}
          {!reduced && (
            <div className="absolute bottom-6 right-4 lg:bottom-8 lg:right-6 flex items-center gap-2">
              <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 flex items-center justify-center text-white cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 flex items-center justify-center text-white cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Dot Indicators */}
          {!reduced && (
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 lg:bottom-9">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index
                      ? "w-7 bg-white"
                      : "w-2.5 bg-white/45 hover:bg-white/65"
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
