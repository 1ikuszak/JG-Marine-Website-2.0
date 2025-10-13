"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

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
    <section className="relative py-24 md:py-32 bg-[#04080F] overflow-hidden">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0">
        {/* Radial gradient spots */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/40 rounded-full blur-[200px]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Premium Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs font-bold text-accent tracking-[0.3em] uppercase mb-6"
          >
            COMPLETE MARITIME SOLUTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6"
          >
            Expert Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl"
          >
            From routine inspections to emergency casualty response, we provide
            specialized expertise for every maritime challenge.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
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
                  relative overflow-hidden
                  ${gradients[index]}
                  hover:shadow-2xl hover:shadow-accent/10
                  transition-all duration-700
                `}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Accent line top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Background Image - BRIGHTER */}
                <div className="absolute inset-0">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#04080F] via-transparent to-[#04080F]" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 lg:p-16 min-h-[400px] items-center">
                  {/* Left: Title & Info */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Number */}
                    <div className="inline-flex items-center gap-4">
                      <span className="font-mono text-sm md:text-base font-bold text-white/40 tracking-[0.3em]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-[1px] w-12 bg-accent/50" />
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>

                    {/* Best For Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-accent/30 transition-colors">
                      <span className="font-mono text-[10px] font-bold text-accent tracking-widest uppercase">
                        BEST FOR
                      </span>
                      <span className="text-xs text-white/70">
                        {service.bestFor}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Deliverables */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="font-mono text-xs font-bold text-white/60 tracking-widest uppercase mb-4">
                      CORE SERVICES
                    </p>
                    {/* Glassmorphism background box for better readability */}
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-sm">
                      <ul className="space-y-4">
                        {service.deliverables.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                            <span className="text-base md:text-lg text-white font-medium leading-relaxed group-hover:text-accent transition-colors">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:col-span-2 flex items-center justify-start lg:justify-end">
                    <Button
                      asChild
                      size="lg"
                      className="group/btn relative overflow-hidden bg-white/10 hover:bg-accent backdrop-blur-sm border border-white/20 hover:border-accent transition-all duration-500"
                    >
                      <a
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-3"
                      >
                        <span className="relative z-10 text-white font-semibold">
                          Details
                        </span>
                        <ArrowRight className="relative z-10 h-5 w-5 text-white transition-transform group-hover/btn:translate-x-1" />

                        {/* Hover background effect */}
                        <div className="absolute inset-0 bg-accent/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
