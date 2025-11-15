// components/about/heritage-cta.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Clock, Users, Anchor } from "lucide-react";
import Image from "next/image";
import { CONTACTS } from "@/config";

export default function HeritageCtaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/about/cta-heritage.jpg"
          alt="JG Marine maritime survey operations"
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

      <div className="container relative mx-auto max-w-screen-xl px-6">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Overline */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-accent" />
              <p className="font-mono text-xs font-bold text-accent tracking-[0.3em] uppercase">
                REQUEST SURVEY
              </p>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-accent" />
            </div>

            {/* Main Headline - GP: SHORT sentences, factual */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Family-Owned Since 1968
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-light">
                Three generations of Master Mariners serving the Baltic region.
              </p>
            </div>

            {/* Supporting Copy - GP: Varied rhythm */}
            <div className="space-y-4 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {/* SHORT */}
              <p>Need a marine survey?</p>

              {/* MEDIUM */}
              <p>
                We deploy DNV-certified surveyors within 24 hours across
                Poland's major ports.
              </p>

              {/* LONG - builds importance */}
              <p>
                From hull inspections to cargo damage assessments, our team
                brings 64 years of maritime expertise to every survey,
                maintaining the independence and precision that built our
                reputation across three generations.
              </p>
            </div>

            {/* Trust Signals - Factual Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto py-8">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <Users className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">3rd</p>
                  <p className="text-xs text-white/60">Generation</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">DNV</p>
                  <p className="text-xs text-white/60">Certified</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">24h</p>
                  <p className="text-xs text-white/60">Response</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <Anchor className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">120+</p>
                  <p className="text-xs text-white/60">Annual Projects</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Dual Path */}
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
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  {CONTACTS.main.phone}
                </a>
              </Button>
            </div>

            {/* Final Trust Statement */}
            <p className="text-sm text-white/50 pt-6">
              Surveyor assigned within 2 hours • On-site within 24 hours (Baltic
              region)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
