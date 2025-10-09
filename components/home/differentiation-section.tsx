"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Anchor, XCircle, CheckCircle } from "lucide-react";

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
}

const advantages: Advantage[] = [
  {
    icon: Clock,
    title: "24h Reakcja na Bałtyku",
    description: "Najszybsza mobilizacja w regionie",
    details:
      "Podczas gdy globalne sieci potrzebują 5-7 dni na mobilizację, my jesteśmy na miejscu w ciągu 24 godzin. Lokalna obecność w kluczowych portach Bałtyku eliminuje opóźnienia.",
  },
  {
    icon: Anchor,
    title: "Dziedzictwo 3 Pokoleń",
    description: "Tradycja kapitanów żeglugi wielkiej",
    details:
      "64 lata nieprzerwanych operacji. Wiedza przekazywana przez trzy pokolenia Master Mariners - głębia ekspertyzy, której korporacje nie mogą odtworzyć.",
  },
  {
    icon: Shield,
    title: "Niezależność Gwarantowana",
    description: "Zero konfliktów interesów",
    details:
      "Niezależna, rodzinna struktura właścicielska. Nie jesteśmy powiązani z ubezpieczycielami czy armatorami. Tylko Twoje interesy są priorytetem.",
  },
];

const comparisonPoints = {
  them: [
    "Reakcja: 5-7 dni",
    "Korporacyjna struktura",
    "Brak lokalnej wiedzy",
    "Standardowe podejście",
  ],
  us: [
    "Reakcja: <24h na Bałtyku",
    "64 lata dziedzictwa rodzinnego",
    "Ekspertyza regionalna",
    "Indywidualne podejście",
  ],
};

export default function DifferentiationSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 border-y">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Dlaczego Firmy Wybierają JG Marine Zamiast Globalnych Sieci?
          </h2>
          <p className="text-lg text-muted-foreground">
            Trzy kluczowe przewagi, których konkurencja nie może zaoferować.
          </p>
        </div>

        {/* --- Part 1: New Elegant Grid --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-border">
                <CardContent className="p-8">
                  <advantage.icon className="h-7 w-7 text-accent mb-5" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="font-semibold text-muted-foreground mb-4">
                    {advantage.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {advantage.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* --- Part 2: The Scorecard (Remains the same) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="shadow-xl border-2 border-border/50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Them Column */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-muted-foreground mb-6">
                  Globalne Sieci
                </h3>
                <ul className="space-y-4">
                  {comparisonPoints.them.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Us Column */}
              <div className="p-8 bg-accent text-accent-foreground border-l-2 border-border/50">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  JG Marine
                  <span className="text-xs bg-white text-accent px-2 py-0.5 rounded-full font-bold">
                    PRZEWAGA
                  </span>
                </h3>
                <ul className="space-y-4">
                  {comparisonPoints.us.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                      <span className="font-semibold">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
