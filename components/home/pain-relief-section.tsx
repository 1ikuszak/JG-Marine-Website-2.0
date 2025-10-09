"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  Scale,
  Users,
  Languages,
  ShieldCheck,
  XCircle,
  CheckCircle,
} from "lucide-react";

// A simple SVG component for the blueprint background
const BlueprintSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    className="text-border/60"
  >
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M 20 0 L 0 0 0 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
    <circle
      cx="20%"
      cy="30%"
      r="150"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeDasharray="4 4"
    />
    <path
      d="M 10% 80% Q 40% 90%, 70% 60% T 90% 70%"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    />
    <path
      d="M 80% 10% L 90% 20%"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

interface PainPoint {
  pain: string;
  icon: React.ElementType;
  competitorGap: string;
  jgSolution: string;
}

const painPoints: PainPoint[] = [
  {
    pain: "Kosztowne opóźnienia w krytycznych sytuacjach",
    icon: Clock,
    competitorGap: "Globalne sieci: 5-7 dni czas reakcji",
    jgSolution: "Lokalny zespół na miejscu <24h w regionie Batyku",
  },
  {
    pain: "Stronnicze raporty prowadzące do sporów",
    icon: Scale,
    competitorGap: "Surveyorzy powiązani kapitałowo z ubezpieczycielami",
    jgSolution: "Gwarancja 100% niezależności przez strukturę właścicielską",
  },
  {
    pain: "Brak głębokiej, lokalnej wiedzy eksperckiej",
    icon: Users,
    competitorGap: "Brak stałej obecności i znajomości lokalnych warunków",
    jgSolution: "64 lata dziedzictwa + 3 strategiczne biura w Polsce",
  },
  {
    pain: "Bariery językowe i kulturowe w operacjach",
    icon: Languages,
    competitorGap: "Monolingwiczne raporty, utrudniona komunikacja",
    jgSolution: "Wielojęzyczny zespół i dokumentacja (PL, EN, DE)",
  },
  {
    pain: "Niepewność zgodności z nowymi przepisami",
    icon: ShieldCheck,
    competitorGap: "Wiedza często nieaktualna o miesiące lub lata",
    jgSolution: "Certyfikaty DNV i ciągłe szkolenia z najnowszych norm",
  },
];

export default function PainReliefSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    // The section now has a relative isolate context for the background
    <section className="relative isolate py-16 md:py-24 bg-background overflow-hidden">
      {/* CHANGE: Added a sophisticated background element */}
      <div className="absolute inset-0 -z-10">
        <BlueprintSvg />
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-semibold text-accent mb-2">PROBLEM ROZWIĄZANY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Przewaga, Którą Zapewniamy
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Zamiast problemów typowych dla globalnych sieci, dostarczamy
            szybkość, niezależność i lokalną wiedzę ekspercką, której
            potrzebujesz.
          </p>
        </div>

        {/* High-Quality Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Cards are now simpler, with a subtle border and stronger shadow on hover */}
              <Card className="h-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <point.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-base font-semibold text-primary leading-tight">
                    {point.pain}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-2 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Them */}
                    <div className="flex items-start gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        {point.competitorGap}
                      </span>
                    </div>

                    {/* Us */}
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-primary">
                        {point.jgSolution}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
