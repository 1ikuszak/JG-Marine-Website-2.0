"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, UserCheck, FileCheck, Clock, Shield } from "lucide-react";
import Image from "next/image";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  timing: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Emergency Request",
    description:
      "Call our 24/7 hotline. DNV-certified surveyor assigned within 2 hours.",
    icon: Phone,
    timing: "Within 2h",
  },
  {
    number: "02",
    title: "Expert On-Site",
    description:
      "Surveyor arrives in under 24 hours. Detailed inspection begins immediately.",
    icon: UserCheck,
    timing: "Under 24h",
  },
  {
    number: "03",
    title: "Report Delivered",
    description:
      "Preliminary report in 24-48h. Final documentation in 5-7 days.",
    icon: FileCheck,
    timing: "24h-7d",
  },
];

const guarantees = [
  "24/7/365 Emergency Response",
  "DNV Certified Surveyors",
  "100% Independent & Objective",
  "P&I Club Accepted Reports",
];

export default function HowItWorksPremium() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* HERO SPLIT LAYOUT - Golden Ratio */}
      <div className="grid lg:grid-cols-[45%_55%] min-h-screen">
        {/* LEFT: Content */}
        <div className="relative flex items-center py-20 lg:py-32">
          <div className="container mx-auto max-w-xl px-6 lg:px-12 xl:px-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary/30" />
                <span className="text-xs tracking-[0.3em] text-foreground/50 uppercase font-light">
                  Our Process
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
                From Incident
                <br />
                to Resolution
              </h2>

              <p className="text-base md:text-lg text-foreground/60 leading-relaxed">
                A clear path designed for speed and precision
              </p>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="space-y-12 mb-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-16 group"
                >
                  {/* Vertical Line Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-px bg-border group-hover:bg-primary/30 transition-colors duration-500" />
                  )}

                  {/* Number Circle */}
                  <div className="absolute left-0 top-0">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border-2 border-border group-hover:border-primary transition-colors duration-500 flex items-center justify-center bg-background">
                        <span className="text-sm font-bold text-foreground/40 group-hover:text-primary transition-colors duration-500">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon
                        className="h-5 w-5 text-primary"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Timing Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded">
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
              className="space-y-4"
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="/contact">Report an Incident</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto sm:ml-4 border-2"
              >
                <a href="tel:+48XXXXXXXXX">Call 24/7 Hotline</a>
              </Button>

              <p className="text-xs text-foreground/40 pt-4">
                Response within 2 hours • Surveyor on-site &lt;24h
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        {/* RIGHT: Hero Image with Prominent Guarantee Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[50vh] lg:min-h-full"
        >
          {/* Image */}
          <Image
            src="/process.jpg"
            alt="JG Marine surveyor conducting professional vessel inspection"
            fill
            className="object-cover"
            quality={100}
            priority
          />

          {/* Stronger gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

          {/* LARGE GUARANTEE CARDS - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: 24/7 Emergency */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Clock className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white leading-tight mb-1">
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
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Shield
                        className="h-6 w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white leading-tight mb-1">
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
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <UserCheck
                        className="h-6 w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white leading-tight mb-1">
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
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <FileCheck
                        className="h-6 w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white leading-tight mb-1">
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
