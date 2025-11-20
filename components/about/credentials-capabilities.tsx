"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Clock,
  Anchor,
  Shield,
  Globe,
  Flag,
  Award,
  FileCheck,
} from "lucide-react";
import Image from "next/image";

// Animated Counter
function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (inView && ref.current) {
      animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });
    }
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function CredentialsCapabilitiesSection() {
  const flagStates = [
    "Antigua & Barbuda",
    "Liberia",
    "Luxembourg",
    "Marshall Islands",
    "Vanuatu",
  ];

  const certifications = [
    "DNV-GL",
    "IRU Academy",
    "ADR/RID Dangerous Goods",
    "International Institute of Marine Surveying",
  ];

  const claimsAndNetworks = [
    "Allianz Global Corporate & Specialty",
    "Alandia Marine",
    "W.E. Cox",
    "W.K. Webster",
  ];

  const advantages = [
    {
      icon: Clock,
      title: "24-Hour Response",
      description: "On-site across Poland's major ports within a day.",
    },
    {
      icon: Anchor,
      title: "Seagoing Experience",
      description:
        "Master mariners who commanded vessels, not just inspected them.",
    },
    {
      icon: Shield,
      title: "Family-Owned Independence",
      description: "No insurer or shipowner affiliations. ITIC insured.",
    },
    {
      icon: Globe,
      title: "Eastern Europe Coverage",
      description: "Russian language capability across the region.",
    },
  ];

  const logos = [
    { src: "/logos/DNV.svg", alt: "DNV" },
    { src: "/logos/cesam.svg", alt: "Cesam" },
    { src: "/logos/IMS.svg", alt: "IMS" },
    { src: "/logos/IGPI.svg", alt: "P&I Clubs" },
    { src: "/logos/wecox.svg", alt: "WE Cox" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Header - Clean, minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Credentials & Capabilities
          </h2>
        </motion.div>

        {/* Metrics Bar - Three key numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-20"
        >
          {[
            { value: 120, suffix: "+", label: "Projects Annually" },
            { value: 60, suffix: "+", label: "Years Experience" },
            { value: 11, suffix: "", label: "Countries" },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-2">
                <AnimatedCounter to={metric.value} suffix={metric.suffix} />
              </p>
              <p className="text-xs md:text-sm text-foreground/60 tracking-wide">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* LEFT: Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Flag State Authority */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded">
                  <Flag className="h-4 w-4 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Flag State Authority
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {flagStates.map((state, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-card border border-border text-foreground/70 rounded"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded">
                  <Award className="h-4 w-4 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/70 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Claims & Networks */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded">
                  <FileCheck
                    className="h-4 w-4 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Claims Agents & Networks
                </h3>
              </div>
              <ul className="space-y-2">
                {claimsAndNetworks.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/70 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT: Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="bg-primary/10 p-2.5 rounded inline-flex mb-4 group-hover:bg-primary/15 transition-colors">
                  <advantage.icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h4>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo Scroller - Animated on dark background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-12"
        >
          <p className="text-center text-xs text-foreground/40 uppercase tracking-[0.2em] mb-8">
            Recognized By
          </p>

          {/* Dark background container */}
          <div className="relative bg-foreground rounded-lg py-12 overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />

            {/* Infinite scroll container */}
            <div className="relative flex overflow-hidden">
              {/* First set of logos */}
              <motion.ul
                className="flex items-center justify-center md:justify-start flex-shrink-0"
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {logos.map((logo, index) => (
                  <li key={index} className="flex-shrink-0 mx-12">
                    <div className="relative w-28 h-16 flex items-center justify-center group">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={112}
                        height={56}
                        className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </li>
                ))}
              </motion.ul>

              {/* Duplicate for seamless loop */}
              <motion.ul
                className="flex items-center justify-center md:justify-start flex-shrink-0"
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                aria-hidden="true"
              >
                {logos.map((logo, index) => (
                  <li
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 mx-12"
                  >
                    <div className="relative w-28 h-16 flex items-center justify-center group">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={112}
                        height={56}
                        className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* Trust statement */}
          <p className="text-center text-xs text-foreground/40 mt-6">
            Surveys to DNV standards. Reports accepted by P&I Clubs worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
