"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlarmClock, ShieldCheck, ArrowRight } from "lucide-react";

type Slide = { src: string; alt: string };

interface HeroProps {
  slides?: Slide[];
  emergencyTel?: string;
}

export function Hero({
  slides = [
    {
      src: "/hero/1.jpg",
      alt: "JG-Marine surveyor on bridge wing during inspection",
    },
    { src: "/hero/2.jpg", alt: "Hull condition survey in drydock" },
    {
      src: "/hero/3.jpg",
      alt: "Offshore wind component assessment at quay",
    },
  ],
  emergencyTel = "+48 123 123 123",
}: HeroProps) {
  const [index, setIndex] = React.useState(0);
  const [reduced, setReduced] = React.useState(false);
  const timer = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const onChange = () => setReduced(m.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);

  // After
  React.useEffect(() => {
    if (reduced) {
      return;
    }
    // No need to clear here first, the cleanup function handles it
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );

    // The corrected cleanup function
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [slides.length, reduced]);

  return (
    <section
      className="relative isolate overflow-hidden border-b"
      aria-label="Independent marine surveyors since 1959"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <AnimatePresence initial={false}>
          {slides.map((s, i) =>
            i === index ? (
              <motion.div
                key={s.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
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
        {reduced && (
          <div className="absolute inset-0">
            <Image
              src={slides[0]?.src || "/hero/inspection-bridge.jpg"}
              alt={
                slides[0]?.alt ||
                "JG-Marine surveyor on bridge wing during inspection"
              }
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="min-h-[68vh] md:min-h-[78vh] flex items-center py-12 md:py-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              Independent Marine Surveyors Since 1959
            </h1>
            <p className="mt-3 text-base md:text-lg text-white/80 max-w-prose">
              Trusted by P&I clubs, insurers, and shipowners across 11+
              countries. Independent · Certified · Available 24/7.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <a href="/contact" aria-label="Request a survey">
                  Request Survey
                </a>
              </Button>
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <a
                  href={`tel:${emergencyTel.replace(/\s/g, "")}`}
                  aria-label="Call emergency hotline"
                >
                  <AlarmClock className="mr-2 h-4 w-4" /> Emergency Response
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-[13px]">
              <Badge
                variant="secondary"
                className="bg-white/10 border-white/20 text-white"
              >
                120+ Projects/Year
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/10 border-white/20 text-white"
              >
                11+ Countries
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/10 border-white/20 text-white"
              >
                DNV-GL
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/10 border-white/20 text-white"
              >
                IIMS
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/10 border-white/20 text-white"
              >
                CESAM
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/10 border-white/20 text-white"
              >
                Flag State Inspector
              </Badge>
            </div>

            <div className="mt-6 flex items-center gap-2">
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
      </div>

      {/* reassurance ribbon */}
      <div className="hidden md:block absolute bottom-6 inset-x-0">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-white backdrop-blur border border-white/10">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-sm">Independent reporting guarantee</span>
            <span className="text-white/40">•</span>
            <span className="text-sm">Response within 4 hours</span>
            <span className="text-white/40">•</span>
            <span className="text-sm">Multilingual documentation</span>
            <ArrowRight className="h-4 w-4 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
