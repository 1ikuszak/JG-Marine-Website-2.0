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
    title: "Three Offices Across Poland",
    icon: Clock,
    solution: "Offices in Sopot/Gdynia, Szczecin/Świnoujście, and Warsaw — covering major ports and inland routes.",
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
      "100+ years of maritime heritage and deep local knowledge of Polish ports.",
  },
  {
    title: "Multilingual Operations",
    icon: Languages,
    solution: "Multilingual team and documentation (PL, EN, DE) as standard.",
  },
  {
    title: "Internationally Recognized",
    icon: ShieldCheck,
    solution: "IIMS and CESAM certified. Reports accepted by P&I Clubs worldwide.",
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
            <p className="label-caps text-primary">
              YOUR COMPETITIVE ADVANTAGE
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-4"
          >
            Why Companies Trust JG Marine Over Global Networks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body md:text-body-lg text-muted-foreground"
          >
            Five reasons Baltic operators choose a regional specialist over an
            international conglomerate.
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
                <h3 className="font-serif text-h4-sm md:text-h4 font-bold text-card-foreground mb-4">
                  {advantage.title}
                </h3>

                {/* Solution - Simple */}
                <p className="text-body-sm text-muted-foreground">
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
