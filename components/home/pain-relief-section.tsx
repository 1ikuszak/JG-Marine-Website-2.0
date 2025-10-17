"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Scale, Users, Languages, ShieldCheck } from "lucide-react";

interface Advantage {
  title: string;
  icon: React.ElementType;
  solution: string;
}

const advantages: Advantage[] = [
  {
    title: "24-Hour Baltic Response",
    icon: Clock,
    solution: "Surveyors on-site within 24h throughout the Baltic region.",
  },
  {
    title: "Guaranteed Independence",
    icon: Scale,
    solution: "Total independence guaranteed through our ownership structure.",
  },
  {
    title: "Local Maritime Expertise",
    icon: Users,
    solution:
      "64 years of Baltic maritime heritage and unmatched local knowledge.",
  },
  {
    title: "Multilingual Operations",
    icon: Languages,
    solution: "Multilingual team and documentation (PL, EN, DE) as standard.",
  },
  {
    title: "DNV Certified Standards",
    icon: ShieldCheck,
    solution: "DNV certified with continuous training on the latest standards.",
  },
];

export default function AdvantagesSectionClean() {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            {/* Wave decorations */}
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="font-mono text-xs font-bold text-primary tracking-[0.3em] uppercase">
              YOUR OPERATIONAL ADVANTAGE
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            The Advantage You Get
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Speed, independence, and local expertise you need.
          </motion.p>
        </div>

        {/* Clean Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Minimal Card */}
              <div className="h-full p-8 bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <advantage.icon
                    className="h-10 w-10 text-accent"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-4 leading-tight">
                  {advantage.title}
                </h3>

                {/* Solution - Simple */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {advantage.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
