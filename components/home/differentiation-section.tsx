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

// Translated and aligned with the strategy document
const advantages: Advantage[] = [
  {
    icon: Clock,
    title: "24h Baltic Response",
    description: "The fastest mobilization in the region",
    details:
      "While global networks take 5-7 days to mobilize, we are on-site within 24 hours. Our local presence in key Baltic ports eliminates costly delays.",
  },
  {
    icon: Anchor,
    title: "3-Generation Heritage",
    description: "A tradition of Master Mariners",
    details:
      "64 years of continuous operation. Knowledge passed down through three generations of Master Mariners provides a depth of expertise corporations cannot replicate.",
  },
  {
    icon: Shield,
    title: "Guaranteed Independence",
    description: "Zero conflicts of interest",
    details:
      "Our independent, family-owned structure means we are not tied to insurers or shipowners. Your interests are our only priority, ensuring unbiased reports.",
  },
];

const comparisonPoints = {
  them: [
    "Response time: 5-7 days",
    "Corporate structure",
    "Lack of local knowledge",
    "Standardized approach",
  ],
  us: [
    "Response time: <24h in Baltic",
    "64 years of family heritage",
    "Deep regional expertise",
    "Tailored, individual approach",
  ],
};

export default function DifferentiationSectionV1() {
  return (
    <section className="py-16 md:py-24 bg-background border-y">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Why Companies Choose JG Marine Over Global Networks
          </h2>
          <p className="text-lg text-muted-foreground">
            Three key advantages our competition cannot offer.
          </p>
        </div>

        {/* --- Part 1: Elegant Grid --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-border/80 group">
                <CardContent className="p-8">
                  <advantage.icon className="h-7 w-7 text-accent mb-5 transition-colors group-hover:text-accent/80" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="font-semibold text-muted-foreground mb-4">
                    {advantage.description}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {advantage.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* --- Part 2: The Scorecard --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="shadow-xl border-2 border-border/50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Them Column */}
              <div className="p-8 bg-card">
                <h3 className="text-2xl font-bold text-muted-foreground mb-6">
                  Global Networks
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
                    ADVANTAGE
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
