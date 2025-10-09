"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  UserCheck,
  FileCheck,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: ProcessStep[] = [
  {
    title: "Krok 1: Twoje Zgłoszenie Alarmowe",
    description:
      "Nasz telefon alarmowy jest dostępny 24/7. Po otrzymaniu zgłoszenia, w ciągu maksymalnie 2 godzin przypisujemy certyfikowanego surveyora DNV, który jest gotowy do natychmiastowej mobilizacji.",
    icon: Phone,
  },
  {
    title: "Krok 2: Ekspert na Miejscu Zdarzenia",
    description:
      "W regionie Morza Bałtyckiego, nasz ekspert dotrze na miejsce w mniej niż 24 godziny. Rozpocznie szczegółową inspekcję, dokumentację fotograficzną HD i analizę, aby precyzyjnie ocenić sytuację.",
    icon: UserCheck,
  },
  {
    title: "Krok 3: Raport i Wsparcie w Zakończeniu Sprawy",
    description:
      "W ciągu 24-48h otrzymasz raport wstępny. Pełna, zgodna z wymogami P&I Clubs i Flag State dokumentacja końcowa, zostanie dostarczona w 5-7 dni, zapewniając Ci mocne wsparcie w negocjacjach.",
    icon: FileCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background border-y">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column: The Client's Journey */}
          <div className="lg:col-span-2">
            {/* Section Header */}
            <div className="max-w-xl mb-12">
              <p className="font-semibold text-accent mb-2">
                PROCES, KTÓREMU MOŻESZ ZAUFAĆ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Twoja Droga do Rozwiązania Problemu
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                Od pierwszego telefonu po finalny raport, nasz proces jest
                zaprojektowany dla Twojej wygody i maksymalnego bezpieczeństwa.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* The connecting line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-border -z-10" />

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-lg font-bold ring-8 ring-background">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Reassurance Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-lg border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                    <span>Twoja Gwarancja Spokoju</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Na każdym etapie procesu zapewniamy:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <strong>Dostępność 24/7/365</strong>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <strong>Certyfikowanych Ekspertów DNV</strong>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <strong>100% Niezależność i Obiektywizm</strong>
                    </li>
                  </ul>
                  <Button size="lg" className="w-full mt-6">
                    Zgłoś Awarię lub Zadaj Pytanie
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
