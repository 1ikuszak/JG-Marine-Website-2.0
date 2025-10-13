"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Anchor } from "lucide-react";
import Image from "next/image";

// Helper Component: Animated Counter
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

// Premium Logo Scroller with Framer Motion Animation
const LogoScroller = ({
  logos,
  title,
}: {
  logos: { src: string; alt: string }[];
  title: string;
}) => {
  return (
    <div className="py-12">
      <h3 className="text-center text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase mb-12">
        {title}
      </h3>

      {/* Rich black background container for logos */}
      <div className="relative bg-[#04080F] rounded-2xl py-12 overflow-hidden">
        {/* Subtle gradient overlays for fade effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04080F] via-transparent to-[#04080F] z-10 pointer-events-none" />

        {/* Infinite scroll container */}
        <div className="relative flex overflow-hidden">
          {/* First set of logos - animated */}
          <motion.ul
            className="flex items-center justify-center md:justify-start flex-shrink-0"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {logos.map((logo, index) => (
              <li key={index} className="flex-shrink-0 mx-12">
                <div className="relative w-32 h-auto flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={128}
                    height={64}
                    className="object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </li>
            ))}
          </motion.ul>

          {/* Second set of logos - duplicate for seamless loop */}
          <motion.ul
            className="flex items-center justify-center md:justify-start flex-shrink-0"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <li key={`duplicate-${index}`} className="flex-shrink-0 mx-12">
                <div className="relative w-32 h-16 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={128}
                    height={64}
                    className="object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
}

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
      "64 years of continuous operation. Knowledge passed down through three generations provides a depth of expertise corporations cannot replicate.",
  },
  {
    icon: Shield,
    title: "Guaranteed Independence",
    description: "Zero conflicts of interest",
    details:
      "Our independent, family-owned structure means we are not tied to insurers or shipowners. Your interests are our only priority, ensuring unbiased reports.",
  },
];

export default function TrustAndDifferentiationSection() {
  const certificationLogos = [
    { src: "/logos/DNV.svg", alt: "DNV Logo" },
    { src: "/logos/cesam.svg", alt: "Cesam Logo" },
    { src: "/logos/IMS.svg", alt: "IMS Logo" },
    { src: "/logos/IGPI.svg", alt: "P&I Clubs Logo" },
    { src: "/logos/wecox.svg", alt: "WE Cox Logo" },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background pointer-events-none" />

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header with refined typography */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6 leading-[1.1]">
              Why Companies Choose JG Marine Over Global Networks
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our results are built on three key advantages that our competition
              cannot offer.
            </p>
          </motion.div>
        </div>

        {/* Part 1: Premium Animated Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24">
          {[
            {
              value: 120,
              label: "Projects Annually",
              desc: "Consistent quality and precision in every survey",
            },
            {
              value: 64,
              label: "Years of Experience",
              desc: "A heritage of three generations of captains and engineers",
            },
            {
              value: 11,
              label: "Countries in Europe",
              desc: "Local presence, delivering to international standards",
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
                {/* Gradient background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-2xl scale-150 group-hover:scale-175 transition-transform duration-500" />

                <p className="relative text-6xl md:text-7xl font-bold text-accent tracking-tight">
                  <AnimatedCounter to={metric.value} />
                  {index === 0 && "+"}
                </p>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Part 2: Premium Advantage Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="relative h-full bg-card shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border/50 hover:border-accent/30 group overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="relative p-8 md:p-10">
                  {/* Icon with gradient background */}
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-accent/10 rounded-xl blur-xl group-hover:bg-accent/20 transition-colors duration-500" />
                    <div className="relative bg-accent/10 p-3 rounded-xl group-hover:bg-accent/15 transition-colors duration-500">
                      <advantage.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="font-semibold text-foreground/80 mb-4 text-base">
                    {advantage.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Part 3: Premium Logo Scroller with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <LogoScroller
            logos={certificationLogos}
            title="Recognized By Global Maritime Authorities"
          />
        </motion.div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Every survey performed to DNV standards. Reports accepted by P&I
            Clubs worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
