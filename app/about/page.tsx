"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Globe, Anchor, Clock } from "lucide-react";
import HeritageCtaSection from "@/components/about/heritage-cta";
import { Card, CardContent } from "@/components/ui/card";
import TeamSectionWhiteUniform from "@/components/home/team-section";
import OfficeLocationsSection from "@/components/about/office-coverage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO - Editorial Split Layout with Golden Ratio */}a
      <section className="relative min-h-screen overflow-hidden bg-background">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[61.8%_38.2%]">
          {/* LEFT: Heritage Image - Golden Ratio Width (61.8%) */}
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-full order-2 lg:order-1">
            <Image
              src="/about/C.jpg"
              alt="JG Marine heritage - Three generations of Master Mariners"
              fill
              className="object-cover grayscale"
              priority
              quality={100}
            />
            {/* Minimal overlay */}
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
                    64 years of Baltic maritime heritage combined with modern
                    DNV certifications and international standards
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

            {/* Decorative corner details - hidden on mobile */}
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
      {/* OUR STORY - Single Definitive Heritage Narrative */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* Left: Story Text */}
          <div className="bg-background flex items-center py-20 lg:py-32">
            <div className="container mx-auto max-w-2xl px-8 lg:px-16">
              <motion.div>
                {/* Overline */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-accent/30" />
                  <span className="text-xs tracking-[0.3em] text-foreground/60 uppercase font-light">
                    Our Heritage
                  </span>
                </div>

                {/* Headline - GP: Short punch */}
                <h2 className="text-5xl lg:text-6xl font-medium text-primary leading-[1.1] mb-8">
                  Born from the sea,
                  <br />
                  built on trust
                </h2>

                <div className="w-20 h-[1px] bg-secondary mb-12" />

                {/* Body - GP: Vary sentence length */}
                <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                  {/* SHORT opener */}
                  <p>In 1968, the first generation made a choice.</p>

                  {/* MEDIUM expansion */}
                  <p>
                    They left the bridge of commercial vessels to establish JG
                    Marine in Gdańsk. Maritime surveying was emerging in Poland.
                    The industry needed more than inspectors.
                  </p>

                  {/* LONG - builds to importance */}
                  <p>
                    They understood that shipowners, insurers, and cargo
                    interests required allies who spoke the language of the sea,
                    who had commanded vessels through Baltic storms, who knew
                    that every survey report could mean the difference between a
                    resolved claim and a devastating loss.
                  </p>

                  {/* MEDIUM resolution */}
                  <p>
                    Sixty-four years later, three generations of Master Mariners
                    continue that mission. The sea demands respect. Expertise
                    demands humility. Trust demands independence.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-12 pt-12 border-t border-border/30">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-2">
                        Established
                      </p>
                      <p className="text-3xl text-primary">1968</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-2">
                        Generations
                      </p>
                      <p className="text-3xl text-primary">Three</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Heritage Image */}
          <motion.div className="relative min-h-[50vh] lg:min-h-full">
            <Image
              src="/about/B.jpg"
              alt="JG Marine founding generation, Gdańsk 1968"
              fill
              className="object-cover grayscale"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>
      {/* Timeline - Single Definitive Heritage Narrative */}
      <section className="py-32">
        <div className="container mx-auto max-w-6xl px-8">
          {/* Section Header */}
          <motion.div className="mb-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent/30" />
              <span className="text-xs tracking-[0.3em] text-foreground/60 uppercase font-light">
                Evolution
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-medium text-primary leading-tight">
              Three Generations,
              <br />
              Three Milestones
            </h2>
          </motion.div>

          {/* Timeline Items - REDUCED TO 3 */}
          <div className="space-y-40">
            {/* 1968 - Founding */}
            <motion.div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/H.jpg"
                    alt="1968 - Founding generation"
                    fill
                    className="object-cover grayscale"
                    quality={100}
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <p className="text-9xl font-light text-foreground/10 leading-none">
                    1968
                  </p>
                  <div className="w-16 h-[1px] bg-secondary" />
                  <h3 className="text-3xl text-primary">Founding</h3>
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                  First generation of Master Mariners establish JG Marine in
                  Gdańsk. Baltic maritime surveying begins with hull inspections
                  and cargo assessments.
                </p>
              </div>
            </motion.div>

            {/* 2004 - European Integration */}
            <motion.div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-9xl font-light text-foreground/10 leading-none">
                    2004
                  </p>
                  <div className="w-16 h-[1px] bg-secondary" />
                  <h3 className="text-3xl text-primary">
                    European Integration
                  </h3>
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                  DNV certifications earned. Operations expand across 11+
                  European countries. Recognition from major P&I Clubs and
                  classification societies.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/9.jpg"
                    alt="2004 - DNV certification and expansion"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>
            </motion.div>

            {/* Today - Third Generation */}
            <motion.div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about/news-3.jpg"
                    alt="Today - Third generation operations"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="space-y-4">
                  <p className="text-9xl font-light text-foreground/10 leading-none">
                    Today
                  </p>
                  <div className="w-16 h-[1px] bg-secondary" />
                  <h3 className="text-3xl text-primary">Three Generations</h3>
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                  120+ projects annually across offshore wind, heavy lift, and
                  traditional maritime operations. Third generation continues
                  the legacy with modern technology and unwavering independence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* OPERATIONAL ADVANTAGES - Migrated from Homepage */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto max-w-screen-xl px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary" />
              <p className="text-xs font-bold text-primary tracking-[0.3em] uppercase">
                OPERATIONAL ADVANTAGES
              </p>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
            </motion.div>

            <motion.h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Regional Expertise and Response Capabilities
            </motion.h2>
            <p className="text-xl text-foreground/60">
              Three differentiators of Baltic-based maritime surveying.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {[
              {
                value: 120,
                label: "Projects Annually",
                desc: "Consistent quality and precision in every survey",
              },
              {
                value: 64,
                label: "Years of Experience",
                desc: "Three generations of captains and engineers",
              },
              {
                value: 11,
                label: "Countries in Europe",
                desc: "Local presence, international standards",
              },
            ].map((metric, index) => (
              <motion.div key={index} className="text-center">
                <p className="text-7xl font-bold text-primary mb-4">
                  {metric.value}+
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-foreground/60 max-w-xs mx-auto">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Advantage Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: 24-Hour Response */}
            <Card className="h-full bg-card border border-border hover:border-primary/30 transition-all duration-500">
              <CardContent className="p-10">
                <Clock
                  className="h-8 w-8 text-primary mb-6"
                  strokeWidth={1.5}
                />

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  24-Hour Baltic Response
                </h3>
                <p className="font-medium text-foreground/70 mb-4">
                  On-site within 24 hours throughout the Baltic region
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Local presence in Gdańsk, Szczecin, and Warsaw enables rapid
                  mobilization. Surveyors deploy from regional offices rather
                  than international hubs.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Three-Generation Heritage */}
            <Card className="h-full bg-card border border-border hover:border-primary/30 transition-all duration-500">
              <CardContent className="p-10">
                <Anchor
                  className="h-8 w-8 text-primary mb-6"
                  strokeWidth={1.5}
                />

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Three-Generation Maritime Heritage
                </h3>
                <p className="font-medium text-foreground/70 mb-4">
                  64 years of Baltic operations
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Established in 1968. Three generations of Master Mariners have
                  built specialized knowledge of regional ports, vessel types,
                  and maritime conditions.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Family-Owned Independence */}
            <Card className="h-full bg-card border border-border hover:border-primary/30 transition-all duration-500">
              <CardContent className="p-10">
                <Shield
                  className="h-8 w-8 text-primary mb-6"
                  strokeWidth={1.5}
                />

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Family-Owned Independence
                </h3>
                <p className="font-medium text-foreground/70 mb-4">
                  Independent ownership structure
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Family-owned company with no insurer or shipowner
                  affiliations. Survey reports serve client interests without
                  external influence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Simple Trust Message - REPLACES LogoScroller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16 pt-12 border-t border-border/30"
          >
            <p className="text-sm text-foreground/50 max-w-2xl mx-auto">
              DNV-certified surveyors. Reports accepted by P&I Clubs and
              classification societies worldwide.
            </p>
          </motion.div>
        </div>
      </section>
      {/*  Team Section ✅ (MIGRATED from homepage, 8 profiles) */}
      <section>
        <TeamSectionWhiteUniform />
      </section>
      {/* Office Coverage - Full Details ✅ (EXPANDED from homepage condensed version)*/}
      <section>
        <OfficeLocationsSection />
      </section>
      {/* CERTIFICATIONS - Minimal Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="h-px w-12 sm:w-16 bg-accent/30 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-4 sm:mb-6">
              Certifications and Memberships
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto px-4">
              Accredited by leading maritime authorities and professional
              organizations
            </p>
          </motion.div>

          {/* Certification Cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
                className="border border-border/50 hover:border-secondary/50 transition-colors duration-500 p-4 sm:p-6 lg:p-8"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/60">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Badge Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
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
                className="text-center border border-border/30 p-3 sm:p-4 lg:p-6"
              >
                <p className="text-sm sm:text-base font-medium text-primary mb-1">
                  {badge.title}
                </p>
                <p className="text-[10px] sm:text-xs text-foreground/50">
                  {badge.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <HeritageCtaSection />
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
