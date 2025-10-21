// components/home/service-tiers.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface Service {
  title: string;
  bestFor: string;
  deliverables: string[];
  slug: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "Marine Surveys",
    bestFor: "Shipowners, Fleet Operators, P&I Clubs",
    deliverables: [
      "Vessel, P&I, and H&M Condition Surveys",
      "Marine Warranty Surveys (MWS)",
      "Flag State and Classification Inspections",
    ],
    slug: "marine-surveys",
    imageUrl: "/services/1.jpg",
  },
  {
    title: "Cargo & Inland Services",
    bestFor: "Logistics Providers, Freight Forwarders, Cargo Insurers",
    deliverables: [
      "Cargo and Inland Transport Surveys",
      "Towage and Bunker Approval Surveys",
      "Liquid Cargo and Specialist Inspections",
    ],
    slug: "cargo-inland-services",
    imageUrl: "/services/2.jpg",
  },
  {
    title: "Technical Consulting & Engineering",
    bestFor: "Shipyards, Port Authorities, Fleet Managers",
    deliverables: [
      "Technical Audits (ISM, ISPS, MLC)",
      "Newbuild and Conversion Supervision",
      "Heavy Lift Engineering and Loss Prevention Advisory",
    ],
    slug: "technical-consulting-engineering",
    imageUrl: "/services/3.jpg",
  },
  {
    title: "Claims, Legal & Insurance Services",
    bestFor: "Insurers, P&I Clubs, Maritime Law Firms",
    deliverables: [
      "P&I, H&M, and Cargo Claims Handling",
      "Risk Assessment and Pre-Entry Surveys",
      "Expert Witness and Litigation Support",
    ],
    slug: "claims-legal-insurance",
    imageUrl: "/services/5.jpg",
  },
  {
    title: "Casualty Response & Investigation",
    bestFor: "Emergency Response Teams, Owners, Insurers",
    deliverables: [
      "Marine Casualty Management",
      "Salvage and Wreck Removal Consultancy",
      "Accident Investigation and Crew Care",
    ],
    slug: "casualty-response-investigation",
    imageUrl: "/services/6.jpg",
  },
];

// Gradient patterns for each card
const gradients = [
  "bg-gradient-to-br from-[#04080F] via-[#1a2332] to-[#04080F]",
  "bg-gradient-to-bl from-[#04080F] via-[#0f1f2e] to-[#04080F]",
  "bg-gradient-to-tr from-[#04080F] via-[#162233] to-[#04080F]",
  "bg-gradient-to-tl from-[#04080F] via-[#0d1b2a] to-[#04080F]",
  "bg-gradient-to-r from-[#04080F] via-[#18232f] to-[#04080F]",
];

export default function ServiceTiersUltimate() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#04080F] overflow-hidden">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0">
        {/* Radial gradient spots */}
        <div className="absolute top-0 left-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-accent/5 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-accent/3 rounded-full blur-[120px] sm:blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] bg-primary/40 rounded-full blur-[150px] sm:blur-[200px]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 sm:px-6 md:px-6">
        {/* Premium Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center md:text-left">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              {/* Wave decorations */}
              <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-r from-transparent to-accent" />
              <p className="font-mono text-[10px] sm:text-xs font-bold text-accent tracking-[0.3em] uppercase">
                COMPLETE MARITIME SOLUTIONS
              </p>
              <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-l from-transparent to-accent" />
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none mb-4 sm:mb-6"
          >
            Expert Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl"
          >
            From routine inspections to emergency casualty response, we provide
            specialized expertise for every maritime challenge.
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
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`
                  relative overflow-hidden rounded-lg
                  ${gradients[index]}
                  hover:shadow-2xl hover:shadow-accent/10
                  transition-all duration-700
                `}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Accent line top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover opacity-20 sm:opacity-25 md:opacity-30 group-hover:opacity-35 md:group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#04080F] via-transparent to-[#04080F]" />
                </div>

                {/* Content Container - Improved Layout */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 min-h-[350px] sm:min-h-[400px] items-center">
                  {/* Left: Title & Info */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* Number */}
                    <div className="inline-flex items-center gap-3 sm:gap-4">
                      <span className="font-mono text-xs sm:text-sm md:text-base font-bold text-white/40 tracking-[0.3em]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-[1px] w-8 sm:w-12 bg-accent/50" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-none group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>

                    {/* Best For Badge */}
                    <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-accent/30 transition-colors rounded">
                      <span className="font-mono text-[10px] sm:text-xs font-bold text-accent tracking-widest uppercase">
                        BEST FOR
                      </span>
                      <span className="text-xs sm:text-sm text-white/70 leading-relaxed">
                        {service.bestFor}
                      </span>
                    </div>
                  </div>

                  {/* Right: Core Services - Enhanced */}
                  <div className="space-y-4 sm:space-y-5">
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="h-1 w-1 rounded-full bg-accent" />
                      <p className="font-mono text-[10px] sm:text-xs font-bold text-white/60 tracking-widest uppercase">
                        CORE SERVICES
                      </p>
                    </div>

                    {/* Services List - Improved Readability */}
                    <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-5 sm:p-6 md:p-7">
                      <ul className="space-y-3 sm:space-y-4">
                        {service.deliverables.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 + i * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            {/* Icon */}
                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                              <div className="relative">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm group-hover/item:bg-accent/30 transition-colors" />
                                <CheckCircle
                                  className="relative h-4 w-4 sm:h-5 sm:w-5 text-accent group-hover/item:scale-110 transition-transform"
                                  strokeWidth={2}
                                />
                              </div>
                            </div>

                            {/* Text */}
                            <span className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed group-hover/item:text-white transition-colors">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
                      <div className="h-1 w-1 rounded-full bg-accent/50" />
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line (Card) */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
