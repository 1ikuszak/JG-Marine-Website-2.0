"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Anchor, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO - Editorial Split Layout */}
      {/* HERO - Editorial Split Layout with Golden Ratio */}
      <section className="relative h-screen overflow-hidden bg-background">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[61.8%_38.2%]">
          {/* LEFT: Heritage Image - Golden Ratio Width (61.8%) */}
          <div className="relative h-1/2 lg:h-full order-2 lg:order-1">
            <Image
              src="/about/A.jpg"
              alt="JG Marine heritage - Three generations of Master Mariners"
              fill
              className="object-cover grayscale"
              priority
              quality={100}
            />
            {/* Minimal overlay - just a subtle gradient at the edge */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 lg:to-background/40" />

            {/* Subtle photo credit/caption */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs text-white/60 tracking-[0.3em] uppercase">
                Circa 1968 — Baltic Sea
              </p>
            </div>
          </div>

          {/* RIGHT: Text Content - Golden Ratio Width (38.2%) */}
          <div className="relative h-1/2 lg:h-full bg-background order-1 lg:order-2 flex items-center justify-center">
            <div className="w-full max-w-xl px-8 md:px-12 lg:px-14 xl:px-16">
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
                  className="mb-12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-accent/30" />
                    <span className="text-xs md:text-sm tracking-[0.4em] text-foreground/60 uppercase font-light">
                      Est. 1968
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
                  className="mb-8"
                >
                  <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-primary leading-[0.95] mb-3">
                    Three
                  </span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-primary leading-[0.95]">
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
                  className="h-[1px] w-20 bg-secondary mb-10 origin-left"
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
                  className="space-y-6"
                >
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 tracking-wide">
                    Master Mariners
                  </p>
                  <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                    64 years of Baltic maritime heritage combined with modern
                    DNV certifications and international standards
                  </p>
                  <p className="text-xs md:text-sm text-foreground/50 tracking-[0.2em] uppercase font-light">
                    Baltic Maritime Excellence
                  </p>
                </motion.div>

                {/* Subtle CTA or scroll hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="mt-12 flex items-center gap-4"
                >
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs tracking-[0.3em] text-foreground/40 uppercase">
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

            {/* Decorative corner detail */}
            <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-foreground/10" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-foreground/10" />
          </div>
        </div>

        {/* Optional: Golden ratio indicator line (subtle vertical divider) */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute left-[61.8%] top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-secondary to-transparent origin-center"
        />
      </section>

      {/* STORY - Editorial with More Text */}
      {/* OUR STORY - Cinematic Image-Rich Narrative */}
      <section className="relative">
        {/* Story Introduction - Text with Side Image */}
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left: Story Text */}
          <div className="bg-background flex items-center py-20 lg:py-32">
            <div className="container mx-auto max-w-2xl px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Overline */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-accent/30" />
                  <span className="text-xs tracking-[0.3em] text-foreground/60 uppercase font-light">
                    Our Heritage
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary leading-[1.1] mb-8">
                  Born from the sea,
                  <br />
                  built on trust
                </h2>

                {/* Accent Line */}
                <div className="w-20 h-[1px] bg-secondary mb-12" />

                {/* Body Text */}
                <div className="space-y-6 text-base md:text-lg text-foreground/70 leading-relaxed">
                  <p>
                    In 1968, when maritime surveying was still an emerging
                    profession in Poland, the first generation of JG Marine
                    Master Mariners made a decisive choice: leave the bridge of
                    commercial vessels to build something more enduring.
                  </p>
                  <p>
                    They understood that the industry needed more than
                    inspectors—it needed allies who spoke the language of the
                    sea, who had felt the weight of command, who knew that every
                    survey report could mean the difference between a resolved
                    claim and a devastating loss.
                  </p>
                </div>

                {/* Stats - Integrated */}
                <div className="mt-12 pt-12 border-t border-border/30">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-2">
                        Founded
                      </p>
                      <p className="text-3xl font-light text-primary">1968</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-2">
                        Location
                      </p>
                      <p className="text-3xl font-light text-primary">Gdańsk</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Heritage Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[50vh] lg:min-h-full"
          >
            {/* TODO: Replace with 1968 founding era photo - vessel, maritime scene, or founders */}
            <Image
              src="/about/B.jpg"
              alt="JG Marine founding in 1968 - Baltic maritime heritage"
              fill
              className="object-cover grayscale"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Image Caption */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs text-white/70 tracking-[0.3em] uppercase">
                Gdańsk Port, 1968
              </p>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Image Break - First Generation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.2 }}
          className="relative h-[70vh] lg:h-screen"
        >
          {/* TODO: Powerful wide shot - Master Mariner at sea, on bridge, or with vessel */}
          <Image
            src="/about/C.jpg"
            alt="First generation Master Mariners - JG Marine founders"
            fill
            className="object-cover grayscale"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-end justify-center pb-16 lg:pb-24">
            <div className="text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="text-sm tracking-[0.4em] text-white/60 uppercase mb-4">
                  First Generation
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
                  Masters of the Baltic
                </h3>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Evolution Story - Asymmetric Grid */}
        <div className="container mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Grid - 2 stacked images */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 space-y-8"
            >
              {/* TODO: Image 1 - Maritime operations, surveying work */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/about/D.jpg"
                  alt="JG Marine maritime survey operations"
                  fill
                  className="object-cover grayscale"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* TODO: Image 2 - Team at work, vessel inspection */}
              <div className="relative aspect-[16/9] lg:ml-12">
                <Image
                  src="/about/E.jpg"
                  alt="Survey team conducting vessel inspection"
                  fill
                  className="object-cover grayscale"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-6 text-base md:text-lg text-foreground/70 leading-relaxed">
                <p>
                  What began as a small surveying firm focused on Baltic
                  maritime transport has evolved into a recognized authority
                  across hull & machinery, P&I matters, heavy lift projects, and
                  comprehensive loss adjusting.
                </p>
                <p>
                  Yet we've never forgotten where we came from. The sea demands
                  respect, expertise demands humility, and trust demands
                  unwavering independence.
                </p>
              </div>

              {/* Stats */}
              <div className="pt-8 space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-light text-primary">
                    Three
                  </span>
                  <div>
                    <p className="text-sm text-foreground/60">Generations of</p>
                    <p className="text-sm font-medium text-foreground/80">
                      Master Mariners
                    </p>
                  </div>
                </div>
                <div className="h-px bg-border/30" />
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-light text-primary">11+</span>
                  <div>
                    <p className="text-sm text-foreground/60">
                      Operational presence
                    </p>
                    <p className="text-sm font-medium text-foreground/80">
                      European Countries
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modern Era - Split Layout */}
        <div className="grid lg:grid-cols-5">
          {/* Text Column */}
          <div className="lg:col-span-2 bg-muted flex items-center py-16 lg:py-24">
            <div className="container mx-auto max-w-xl px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-6"
              >
                <div className="w-12 h-[1px] bg-secondary" />
                <h3 className="text-3xl md:text-4xl font-light text-primary leading-tight">
                  Today's Standard,
                  <br />
                  Tomorrow's Legacy
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Today, the company operates in 11+ countries, conducts 120+
                  projects annually, and maintains the same commitment to
                  independence and precision that defined us from day one.
                </p>

                {/* Final Stat */}
                <div className="pt-6 border-t border-border/30">
                  <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-2">
                    Annual Projects
                  </p>
                  <p className="text-5xl font-light text-primary">120+</p>
                  <p className="text-sm text-foreground/60 mt-2">
                    Surveys & Inspections
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image Grid - Modern Operations */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-3 grid grid-cols-2 gap-4 p-4 lg:p-8"
          >
            {/* TODO: 4 modern images showing current operations */}

            {/* Image 1 - Top Left */}
            <div className="relative aspect-square">
              <Image
                src="/about/4.jpg"
                alt="Modern maritime survey operations"
                fill
                className="object-cover"
                quality={100}
              />
            </div>

            {/* Image 2 - Top Right */}
            <div className="relative aspect-square">
              <Image
                src="/about/5.jpg"
                alt="DNV certified surveyor at work"
                fill
                className="object-cover"
                quality={100}
              />
            </div>

            {/* Image 3 - Bottom Left */}
            <div className="relative aspect-square">
              <Image
                src="/about/1.jpg"
                alt="Offshore wind project supervision"
                fill
                className="object-cover"
                quality={100}
              />
            </div>

            {/* Image 4 - Bottom Right */}
            <div className="relative aspect-square">
              <Image
                src="/about/2.jpg"
                alt="Heavy lift survey operations"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </motion.div>
        </div>

        {/* Closing Statement - Full Width with Image */}
        <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
          {/* TODO: Powerful closing image - vessel, sea, or team portrait */}
          <Image
            src="/about/F.jpg"
            alt="JG Marine - Three generations of maritime excellence"
            fill
            className="object-cover grayscale"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />

          {/* Centered Quote/Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative z-10 text-center px-6 max-w-4xl"
          >
            <div className="space-y-8">
              <div className="h-px w-16 bg-secondary mx-auto" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-primary leading-relaxed">
                "Three generations of maritime expertise,
                <br className="hidden md:block" />
                one unwavering mission"
              </blockquote>
              <p className="text-sm tracking-[0.3em] text-foreground/60 uppercase">
                Est. 1968 — Gdańsk, Poland
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO - Large Vintage Image */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4 }}
          className="relative h-[70vh] lg:h-screen"
        >
          {/* TODO: Replace with authentic founding generation photo */}
          <Image
            src="/about/G.jpg"
            alt="JG Marine founding generation, Gdańsk 1968"
            fill
            className="object-cover grayscale"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          {/* Minimal caption */}
          <div className="absolute bottom-12 left-8 lg:left-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xs md:text-sm text-white/60 tracking-[0.3em] uppercase"
            >
              Gdańsk, 1968
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* TIMELINE - Refined & Minimal */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20 lg:mb-32"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent/30" />
              <span className="text-xs tracking-[0.3em] text-foreground/60 uppercase font-light">
                Evolution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary leading-tight">
              Six Decades
              <br />
              of Maritime Heritage
            </h2>
          </motion.div>

          {/* Timeline Items */}
          <div className="space-y-32 lg:space-y-40">
            {/* 1968 - The Beginning */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/H.jpg"
                    alt="1968 - The Beginning"
                    fill
                    className="object-cover grayscale"
                    quality={100}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <p className="text-7xl md:text-8xl lg:text-9xl font-light text-foreground/10 leading-none">
                    1968
                  </p>
                  <div className="w-16 h-[1px] bg-secondary" />
                  <h3 className="text-2xl md:text-3xl font-light text-primary">
                    The Beginning
                  </h3>
                </div>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg">
                  First generation of Master Mariners establish JG Marine in
                  Gdańsk, focusing on maritime transport and Baltic shipping
                  operations.
                </p>
              </div>
            </motion.div>

            {/* 1985 - Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-7xl md:text-8xl lg:text-9xl font-light text-foreground/10 leading-none">
                    1985
                  </p>
                  <div className="w-16 h-[1px] bg-secondary" />
                  <h3 className="text-2xl md:text-3xl font-light text-primary">
                    Expansion
                  </h3>
                </div>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg">
                  Broadening into cargo surveys and heavy lift operations.
                  Second generation begins learning the craft.
                </p>
              </div>

              {/* Image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/J.jpg"
                    alt="1985 - Expansion Era"
                    fill
                    className="object-cover grayscale"
                    quality={100}
                  />
                </div>
              </div>
            </motion.div>

            {/* 2004 - Integration */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/9.jpg"
                    alt="2004 - European Integration"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <p className="text-7xl md:text-8xl lg:text-9xl font-light text-foreground/10 leading-none">
                    2004
                  </p>
                  <div className="w-16 h-[1px] bg-secondary" />
                  <h3 className="text-2xl md:text-3xl font-light text-primary">
                    European Integration
                  </h3>
                </div>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg">
                  DNV certifications earned. Operations expand to 11+ countries.
                  Recognition from major P&I Clubs.
                </p>
              </div>
            </motion.div>

            {/* 2024 - Today */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-7xl md:text-8xl lg:text-9xl font-light text-foreground/10 leading-none">
                    2024
                  </p>
                  <div className="w-16 h-[1px] bg-secondary" />
                  <h3 className="text-2xl md:text-3xl font-light text-primary">
                    Three Generations
                  </h3>
                </div>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg">
                  Third generation continues the legacy with modern technology
                  and offshore wind expertise—while preserving our independence.
                </p>
              </div>

              {/* Image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/news-3.jpg"
                    alt="2024 - Modern Operations"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION - Minimal Statement */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <div className="h-px w-16 bg-accent/30 mx-auto" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary leading-relaxed max-w-3xl mx-auto">
              Independent, precise, and trustworthy marine surveys—protecting
              client interests through three generations of maritime expertise
            </h2>
          </motion.div>
        </div>
      </section>

      {/* INDEPENDENCE - Clean Statement */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about/I.jpg"
            alt="Independence guaranteed"
            fill
            className="object-cover grayscale opacity-20"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container relative mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            {/* Icon & Headline */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <Shield
                  className="h-12 w-12 text-primary/60"
                  strokeWidth={1.5}
                />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary leading-tight">
                  Independence guaranteed
                  <br />
                  by family ownership
                </h2>
                <div className="w-20 h-[1px] bg-secondary" />
              </div>

              <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
                Not tied to insurers. Not beholden to P&I Clubs. Not pressured
                by shipowner groups. We answer only to the facts we observe and
                the clients who trust us.
              </p>
            </div>

            {/* Stats/Features */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-border/50 bg-card p-6">
                <h3 className="text-lg font-medium text-primary mb-2">
                  No Conflicts
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  No external shareholders demanding different conclusions
                </p>
              </div>
              <div className="border border-border/50 bg-card p-6">
                <h3 className="text-lg font-medium text-primary mb-2">
                  Objective Reporting
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Reports accepted by arbitrators and major insurers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - Grid Overview */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent/30" />
              <span className="text-xs tracking-[0.3em] text-foreground/60 uppercase font-light">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary">
              Comprehensive Maritime
              <br />
              Survey Services
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: Anchor,
                title: "Maritime Surveys",
                desc: "Hull & machinery, P&I matters, on/off-hire inspections, pre-purchase surveys",
              },
              {
                icon: Globe,
                title: "Heavy Lift & Projects",
                desc: "Marine warranty surveys, loadout operations, offshore wind installations",
              },
              {
                icon: Shield,
                title: "Loss Adjusting",
                desc: "Cargo surveys, claims handling, expert reports for arbitration",
              },
              {
                icon: Clock,
                title: "Technical Audits",
                desc: "ISO/ISM/ISPS compliance, Flag State inspections, risk assessments",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group border-l-2 border-border/30 hover:border-secondary transition-colors duration-500 pl-6 lg:pl-8 py-4"
              >
                <service.icon
                  className="h-8 w-8 text-foreground/40 group-hover:text-secondary transition-colors duration-500 mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl md:text-2xl font-light text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC PRESENCE - Clean Layout */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary leading-tight">
                  Local Presence,
                  <br />
                  International Reach
                </h2>
                <div className="w-20 h-[1px] bg-secondary" />
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  Three strategic offices in key Baltic ports. Operational
                  presence across 11+ European countries.
                </p>
              </div>

              {/* Office Locations */}
              <div className="space-y-4 pt-4">
                {[
                  { city: "Sopot HQ", desc: "Baltic operations center" },
                  { city: "Szczecin", desc: "Western Baltic coverage" },
                  { city: "Warsaw", desc: "Central European hub" },
                ].map((office, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">{office.city}</p>
                      <p className="text-sm text-foreground/60">
                        {office.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Coverage Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-card border border-border/50 p-8 lg:p-10"
            >
              <div className="space-y-8">
                {/* Countries List */}
                <div>
                  <p className="text-xs tracking-[0.3em] text-foreground/50 uppercase mb-6">
                    Operational Coverage
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-foreground/70">
                    <p>Poland</p>
                    <p>Germany</p>
                    <p>Sweden</p>
                    <p>Denmark</p>
                    <p>Norway</p>
                    <p>Finland</p>
                    <p>Lithuania</p>
                    <p>Latvia</p>
                    <p>Estonia</p>
                    <p>Netherlands</p>
                    <p>Belgium</p>
                    <p className="col-span-2 text-primary font-medium pt-2">
                      + Global partner network
                    </p>
                  </div>
                </div>

                {/* Response Times */}
                <div className="pt-6 border-t border-border/30 space-y-4">
                  {[
                    { label: "Baltic Response", value: "<24h" },
                    { label: "Central Europe", value: "<48h" },
                    { label: "Emergency", value: "24/7" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60">
                        {item.label}
                      </span>
                      <span className="text-xl font-light text-primary">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS - Minimal Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="h-px w-16 bg-accent/30 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6">
              Certified Excellence
            </h2>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
              Decades of trust earned, not just certifications purchased
            </p>
          </motion.div>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Allianz Global & Specialty",
                desc: "Authorized claims survey agent",
              },
              {
                title: "CESAM Paris",
                desc: "Appointed average agents",
              },
              {
                title: "W.E. Cox Network",
                desc: "Loss adjusting partnership",
              },
              {
                title: "W.K. Webster",
                desc: "Global network member",
              },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border/50 hover:border-secondary/50 transition-colors duration-500 p-6 lg:p-8"
              >
                <h3 className="text-lg md:text-xl font-medium text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground/60">{cert.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Badge Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: "DNV", desc: "Certified" },
              { title: "ITIC", desc: "Member" },
              { title: "IIMS", desc: "Fellow" },
              { title: "CESAM", desc: "Member" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center border border-border/30 p-4 lg:p-6"
              >
                <p className="font-medium text-primary mb-1">{badge.title}</p>
                <p className="text-xs text-foreground/50">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean & Direct */}
      <section className="relative py-24 lg:py-32 border-t border-border/30">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-12"
          >
            {/* Headline */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary leading-tight">
                Ready to work together?
              </h2>
              <div className="h-px w-16 bg-secondary mx-auto" />
              <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Emergency response or routine surveying—our team of Master
                Mariners is ready
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-base" asChild>
                <a href="/contact">Request Survey</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base border-2"
                asChild
              >
                <a href="tel:+48XXXXXXXXX">Emergency: +48 XXX XXX XXX</a>
              </Button>
            </div>

            {/* Footer Note */}
            <p className="text-xs md:text-sm text-foreground/40 tracking-wide">
              Response within 2 hours • Surveyor on-site &lt;24h Baltic region
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
