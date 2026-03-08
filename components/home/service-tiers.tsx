// components/home/service-tiers.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Anchor,
  Package,
  Wrench,
  Scale,
  AlertTriangle,
  Container,
} from "lucide-react";

interface Service {
  title: string;
  deliverables: string[];
  slug: string;
  imageUrl: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const services: Service[] = [
  {
    title: "Marine Surveys",
    icon: Anchor,
    deliverables: [
      "Hull & Machinery (H&M) Surveys",
      "Protection & Indemnity (P&I) Condition Surveys",
      "Marine Warranty Surveys (MWS)",
      "On/Off Hire Surveys",
      "Pre-Purchase Inspections",
      "Flag State and Classification Inspections",
    ],
    slug: "marine-surveys",
    imageUrl: "/services/1.jpg",
  },
  {
    title: "Cargo & Inland Services",
    icon: Package,
    deliverables: [
      "Cargo Damage Assessment and Surveys",
      "Draft Surveys and Loading Supervision",
      "Steel Cargo Surveys and Industrial Site Inspections",
      "Agricultural and Bulk Commodity Inspections",
      "Inland Waterway Vessel and Barge Surveys",
      "Inland Transport (CMR) Surveys",
      "Towage Approval Surveys with Weather Routing",
      "Bunker Surveys",
      "Liquid Cargo Inspections",
      "Container Inspections",
    ],
    slug: "cargo-inland-services",
    imageUrl: "/services/2.jpg",
  },
  {
    title: "Heavy Lifts & Project Cargo",
    icon: Container,
    deliverables: [
      "Pre-Planning and Feasibility Studies",
      "Lashing and Securing Calculations",
      "Method Statement Preparation",
      "Loading and Transshipment Supervision",
      "Heavy Lift Engineering and Load-Out Planning",
      "Offshore Wind Farm Project Support",
    ],
    slug: "heavy-lifts-project-cargo",
    imageUrl: "/services/4.jpg",
  },
  {
    title: "Technical Consulting & Engineering",
    icon: Wrench,
    deliverables: [
      "Technical Audits (ISM, ISPS, MLC, CMID)",
      "Vetting Inspections and Compliance Assessments",
      "Newbuild and Conversion Supervision",
      "Loss Prevention and Risk Advisory",
    ],
    slug: "technical-consulting-engineering",
    imageUrl: "/services/3.jpg",
  },
  {
    title: "Claims, Legal & Insurance Services",
    icon: Scale,
    deliverables: [
      "P&I and H&M Claims Handling",
      "Cargo Claims and Loss Assessment",
      "Average Adjusting Services",
      "Risk Assessment and Pre-Entry Surveys",
      "Expert Witness and Litigation Support",
    ],
    slug: "claims-legal-insurance",
    imageUrl: "/services/5.jpg",
  },
  {
    title: "Casualty Response & Investigation",
    icon: AlertTriangle,
    deliverables: [
      "Marine Casualty Management",
      "Salvage and Wreck Removal Consultancy",
      "Accident Investigation and Root Cause Analysis",
      "Emergency Survey Response (24/7)",
    ],
    slug: "casualty-response-investigation",
    imageUrl: "/services/6.jpg",
  },
];

export default function ServiceTiersUltimate() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container relative mx-auto max-w-screen-xl px-4 sm:px-6 md:px-6">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
          >
            <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-r from-transparent to-accent" />
            <p className="font-mono text-xs font-bold text-accent tracking-[0.3em] uppercase">
              MARITIME SURVEY SERVICES
            </p>
            <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif text-foreground leading-none mb-4 sm:mb-6"
          >
            Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Marine surveys, cargo inspections, and casualty response across the
            Baltic region. Hull and machinery assessments, technical audits, and
            offshore project support.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="space-y-4 sm:space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-xl hover:shadow-border/80 transition-all duration-500">
                {/* Hover gold tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                {/* Background Image — visible on right side */}
                <div className="absolute inset-0">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover opacity-50 sm:opacity-55 md:opacity-60 group-hover:opacity-65 md:group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gradient: card bg on left (content readable), photo visible on right */}
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-card/85 to-card/15" />
                </div>

                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 min-h-[350px] sm:min-h-[400px] items-center">

                  {/* Left: Title & Info */}
                  <div className="space-y-6 sm:space-y-8">

                    {/* Number */}
                    <div className="inline-flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-muted-foreground/70 tracking-[0.3em]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-[1px] w-8 sm:w-12 bg-accent/50" />
                    </div>

                    {/* Icon */}
                    <div className="relative inline-flex flex-shrink-0">
                      <div className="absolute inset-0 w-full h-full bg-accent/15 rounded-full blur-md" />
                      {React.createElement(service.icon, {
                        className: "relative h-12 w-12 sm:h-14 sm:w-14 text-accent",
                        strokeWidth: 1.5,
                      })}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-serif text-foreground leading-none group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Core Services List */}
                  <div className="space-y-4 sm:space-y-5">
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-border">
                      <div className="h-1 w-1 rounded-full bg-accent" />
                      <p className="font-mono text-xs font-bold text-muted-foreground/70 tracking-widest uppercase">
                        CORE SERVICES
                      </p>
                    </div>

                    {/* Services List */}
                    <div className="bg-secondary border border-border rounded-lg p-5 sm:p-6 md:p-7">
                      <ul className="space-y-3.5 sm:space-y-5">
                        {service.deliverables.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 + i * 0.06 }}
                            className={`flex items-start gap-3 group/item${
                              service.deliverables.length > 4 &&
                              (i + 1) % 4 === 0 &&
                              i !== service.deliverables.length - 1
                                ? " pb-3.5 sm:pb-5 border-b border-border"
                                : ""
                            }`}
                          >
                            <CheckCircle
                              className="flex-shrink-0 mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 text-accent"
                              strokeWidth={2}
                            />
                            <span className="text-base sm:text-base md:text-lg text-foreground font-medium leading-relaxed group-hover/item:text-primary transition-colors">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                      <div className="h-1 w-1 rounded-full bg-accent/40" />
                    </div>
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
