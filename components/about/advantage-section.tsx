"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Anchor, Shield, Globe } from "lucide-react";

// Animated Counter Component
function AnimatedCounter({ to }: { to: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (inView && ref.current) {
      animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
      });
    }
  }, [inView, to]);

  return <span ref={ref}>0</span>;
}

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
}

const advantages: Advantage[] = [
  {
    icon: Clock,
    title: "24-Hour Baltic Response",
    description: "On-site across Poland's major ports within a day",
    details:
      "Offices in Sopot, Szczecin, and Warsaw mean local deployment. Gdynia, Gdańsk, Świnoujście, inland routes - we're already there.",
  },
  {
    icon: Anchor,
    title: "Seagoing Experience",
    description: "Master mariners who commanded vessels",
    details:
      "This hands-on maritime experience is increasingly rare in Western Europe. Our private collection includes navigation and shipbuilding manuals from the 17th century.",
  },
  {
    icon: Shield,
    title: "Family-Owned Independence",
    description: "No insurer or shipowner affiliations",
    details:
      "Survey reports serve client interests. We hold ITIC liability insurance and maintain HSEQ company policy for quality and safety.",
  },
  {
    icon: Globe,
    title: "Eastern Europe Coverage",
    description: "Russian and multiple European languages",
    details:
      "Our team speaks Russian and other languages, enabling surveys across Eastern Europe where language can be a barrier.",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background pointer-events-none" />

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">
              Operational Advantages
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight"
          >
            Regional Presence and Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-foreground/60 leading-relaxed"
          >
            What a Baltic-based maritime surveying company can offer.
          </motion.p>
        </div>

        {/* Animated Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {[
            {
              value: 120,
              suffix: "+",
              label: "Projects Annually",
              desc: "Surveys completed each year",
            },
            {
              value: 60,
              suffix: "+",
              label: "Years of Experience",
              desc: "Three generations of master mariners",
            },
            {
              value: 11,
              suffix: "",
              label: "Countries in Europe",
              desc: "Regional coverage from Poland",
            },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-xl scale-150 group-hover:scale-[1.6] transition-transform duration-500" />
                <p className="relative text-5xl md:text-6xl font-bold text-primary tracking-tight">
                  <AnimatedCounter to={metric.value} />
                  {metric.suffix}
                </p>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-foreground/60 max-w-xs mx-auto leading-relaxed">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full bg-card hover:bg-secondary/5 transition-all duration-500 border border-border hover:border-primary/30 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="relative p-8">
                  {/* Icon */}
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-primary/5 rounded-lg blur-lg group-hover:bg-primary/10 transition-colors duration-500" />
                    <div className="relative bg-primary/10 p-3 rounded-lg group-hover:bg-primary/15 transition-colors duration-500">
                      <advantage.icon
                        className="h-6 w-6 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="font-medium text-foreground/70 mb-3 text-sm">
                    {advantage.description}
                  </p>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {advantage.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
