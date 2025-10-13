"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, UserCheck, FileCheck, ArrowRight } from "lucide-react";

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
    <section className="relative py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Premium Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs font-bold text-accent tracking-[0.3em] uppercase mb-6"
          >
            OUR PROCESS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight tracking-tight"
          >
            From Incident to Resolution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A clear path designed for speed and precision.
          </motion.p>
        </div>

        {/* Process Steps - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Arrow Connector (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 z-10">
                  <ArrowRight className="h-6 w-6 text-accent/40" />
                </div>
              )}

              {/* Card */}
              <div className="relative h-full bg-background border-2 border-border hover:border-accent transition-all duration-300 p-8">
                {/* Large Number - Monospace */}
                <div className="mb-6">
                  <span className="font-mono text-6xl font-bold text-accent/20 leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Timing Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20">
                  <span className="font-mono text-xs font-bold text-accent tracking-wider">
                    {step.timing}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Bar - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t-2 border-b-2 border-border py-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="space-y-2">
                <div className="h-1 w-12 bg-accent mx-auto mb-4" />
                <p className="text-sm font-semibold text-primary leading-tight">
                  {guarantee}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Need immediate assistance?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="min-w-[200px]">
              <a href="/contact">Report an Incident</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="min-w-[200px]"
            >
              <a href="tel:+48XXXXXXXXX">Call 24/7 Hotline</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
