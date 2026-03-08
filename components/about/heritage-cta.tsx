"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { CONTACTS } from "@/config";

export default function HeritageCtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/about/cta-heritage.jpg"
          alt="JG Marine maritime survey operations"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/80" />

        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        </div>
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Overline */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-white/50" />
              <p className="text-xs font-medium text-white/70 tracking-[0.3em] uppercase">
                Request Survey
              </p>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-white/50" />
            </div>

            {/* Main Headline - factual, understated */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Need a Marine Survey?
              </h2>
            </div>

            {/* Supporting Copy - Gary Provost rhythm */}
            <div className="space-y-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {/* SHORT */}
              {/* MEDIUM */}
              <p>
                Sopot, Szczecin, Warsaw — wherever the cargo sits. Our team speaks Russian for Eastern Europe coverage.
              </p>

              {/* MEDIUM */}
              <p>
                Hull inspections. Cargo damage. Heavy lift approvals. Towage
                warranties. CMR surveys. Reports accepted by P&I Clubs
                worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 group"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  Request Survey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5 group-hover:animate-pulse" />
                  {CONTACTS.main.phone}
                </a>
              </Button>
            </div>

            {/* Office note */}
            <p className="text-sm text-white/50 pt-4">
              Three offices covering Poland's major ports and locations inland.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
