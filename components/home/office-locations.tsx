"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { OFFICES } from "@/config";

// SSR-safe dynamic import of the Leaflet map
const OfficeMap = dynamic(() => import("@/components/home/office-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-xl border border-border bg-secondary/20 animate-pulse flex items-center justify-center h-full min-h-[420px]">
      <span className="text-base text-foreground/40">Loading map…</span>
    </div>
  ),
});

const officeDisplayData = [
  {
    label: "Head Office",
    ports: "Gdynia · Gdańsk",
    dotColor: "bg-primary",
    labelStyle: "text-primary font-bold",
    cardClass: "border-l-4 border-l-primary border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300",
  },
  {
    label: "Branch Office",
    ports: "Szczecin · Świnoujście",
    dotColor: "bg-primary/60",
    labelStyle: "text-primary/70 font-semibold",
    cardClass: "border-l-4 border-l-primary/50 border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300",
  },
  {
    label: "Inland Office",
    ports: "Central Poland · CMR",
    dotColor: "bg-primary/60",
    labelStyle: "text-primary/70 font-semibold",
    cardClass: "border-l-4 border-l-primary/50 border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300",
  },
];

export default function OfficeLocationsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background pointer-events-none" />

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="label-caps text-primary">
              OFFICE LOCATIONS
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-h2-sm md:text-h2 font-bold text-foreground leading-tight"
          >
            Three Offices Serving Poland&apos;s Major Ports and Locations Inland
          </motion.h2>
        </div>

        {/* Two-column: cards left, map right */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left: Office Cards stacked */}
          <div className="flex flex-col gap-4">
            {OFFICES.map((office, index) => {
              const display = officeDisplayData[index];
              return (
                <motion.div
                  key={office.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`p-6 rounded-xl hover:shadow-md transition-all duration-300 ${display.cardClass}`}
                  >
                    {/* Office type badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full ${display.dotColor} flex-shrink-0`} />
                      <span className={`label-caps ${display.labelStyle}`}>
                        {display.label}
                      </span>
                    </div>

                    {/* Office city */}
                    <h3 className="font-serif text-h4-sm md:text-h4 font-bold text-foreground mb-1">
                      {office.address.city}
                    </h3>

                    {/* Port coverage */}
                    <p className="text-body-sm text-foreground/60 mb-4 font-medium">
                      {display.ports}
                    </p>

                    {/* Address */}
                    <div className="flex items-start gap-2 text-base text-foreground/70 mb-3">
                      <MapPin
                        className="h-4 w-4 flex-shrink-0 mt-0.5 text-foreground/40"
                        strokeWidth={1.5}
                      />
                      <span className="leading-snug">{office.address.fullAddress}</span>
                    </div>

                    {/* Phone */}
                    <a
                      href={`tel:${office.contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-base text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4 flex-shrink-0 text-foreground/40" strokeWidth={1.5} />
                      <span className="font-medium">{office.contact.phone}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-0 rounded-xl overflow-hidden h-full"
          >
            <OfficeMap />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
