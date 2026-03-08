"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, UserCheck, FileCheck, Clock, Shield } from "lucide-react";
import Image from "next/image";
import { CONTACTS } from "@/config";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  timing: string;
}

const TEL = CONTACTS.main.phone;

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Survey Request",
    description:
      "Contact our office by phone or email. Our team will confirm the assignment and arrange a surveyor.",
    icon: Phone,
    timing: "Quick response",
  },
  {
    number: "02",
    title: "On-Site Inspection",
    description:
      "Surveyor arrives at the agreed location. Inspection conducted to international standards and client requirements.",
    icon: UserCheck,
    timing: "Agreed schedule",
  },
  {
    number: "03",
    title: "Report Delivery",
    description:
      "Preliminary findings shared promptly. Complete documentation delivered within agreed timeframe.",
    icon: FileCheck,
    timing: "As agreed",
  },
];

export default function HowItWorksPremium() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* HERO SPLIT LAYOUT - Golden Ratio */}
      <div className="grid lg:grid-cols-[45%_55%]">
        {/* LEFT: Content */}
        <div className="relative flex items-center py-12 md:py-20 lg:py-32">
          <div className="container mx-auto max-w-xl px-4 sm:px-6 lg:px-12 xl:px-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-4 md:mb-6"
                >
                  {/* Wave decorations */}
                  <div className="h-[2px] w-6 md:w-8 bg-gradient-to-r from-transparent to-primary" />
                  <p className="font-mono text-xs font-bold text-primary tracking-[0.3em] uppercase">
                    SURVEY PROCESS
                  </p>
                  <div className="h-[2px] w-6 md:w-8 bg-gradient-to-l from-transparent to-primary" />
                </motion.div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-serif text-foreground leading-[1.1] mb-4 md:mb-6">
                Request to Report
                <br />
                Delivery
              </h2>

              <p className="text-base md:text-lg text-foreground/60 leading-relaxed">
                Standard process for marine and cargo surveys
              </p>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="space-y-8 md:space-y-12 mb-12 md:mb-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-12 md:pl-16 group"
                >
                  {/* Vertical Line Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[18px] md:left-6 top-10 md:top-12 bottom-0 w-px bg-border group-hover:bg-primary/30 transition-colors duration-500" />
                  )}

                  {/* Number Circle */}
                  <div className="absolute left-0 top-0">
                    <div className="relative">
                      <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-border group-hover:border-primary transition-colors duration-500 flex items-center justify-center bg-background">
                        <span className="text-xs md:text-sm font-bold text-foreground/40 group-hover:text-primary transition-colors duration-500">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2 md:space-y-3">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <step.icon
                        className="h-4 w-4 md:h-5 md:w-5 text-primary"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Timing Badge */}
                    <div className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1 md:py-1.5 bg-primary/5 border border-primary/20 rounded">
                      <span className="text-xs font-semibold text-primary tracking-wide">
                        {step.timing}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-3 md:space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <a href="/contact">Report an Incident</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-2"
                >
                  <a href={`tel:${TEL.replace(/\s/g, "")}`}>
                    Call 24/7 Hotline
                  </a>
                </Button>
              </div>

              <p className="text-xs text-foreground/40 pt-2 md:pt-4">
                Response within 2 hours • Surveyor on-site &lt;24h
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Hero Image with Guarantee Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[400px] md:min-h-[500px] lg:min-h-full"
        >
          {/* Image */}
          <Image
            src="/process.jpg"
            alt="JG Marine surveyor conducting professional vessel inspection"
            fill
            className="object-cover"
            priority
          />

          {/* Stronger gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

          {/* GUARANTEE CARDS - Responsive Grid */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {/* Card 1: 24/7 Emergency */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Clock
                        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight mb-0.5 sm:mb-1">
                      24/7/365
                    </p>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Emergency Response
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: DNV Certified */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Shield
                        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight mb-0.5 sm:mb-1">
                      DNV Certified
                    </p>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Surveyors
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: 100% Independent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <UserCheck
                        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight mb-0.5 sm:mb-1">
                      100% Independent
                    </p>
                    <p className="text-xs text-white/80 leading-relaxed">
                      & Objective
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: P&I Club Accepted */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-3 sm:p-4 md:p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <FileCheck
                        className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight mb-0.5 sm:mb-1">
                      P&I Club
                    </p>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Accepted Reports
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
