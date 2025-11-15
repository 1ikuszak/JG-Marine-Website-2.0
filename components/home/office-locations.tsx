"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

import { OFFICES } from "@/config";

export default function OfficeLocationsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header - Simplified */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">
              OFFICE LOCATIONS
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
          >
            Baltic Coverage
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-foreground/60"
          >
            Three offices serving Poland&apos;s major maritime routes.
          </motion.p>
        </div>

        {/* Simplified Office Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Sopot Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-6">
                {/* Office Name */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Sopot (Head Office)
                </h3>

                {/* Coverage */}
                <p className="text-sm text-foreground/60 mb-4">
                  Ports of Gdynia &amp; Gdańsk
                </p>

                {/* Contact Info */}
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${OFFICES[0].contact.email}`}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
                    <span className="group-hover:underline break-all">
                      {OFFICES[0].contact.email}
                    </span>
                  </a>

                  <a
                    href={`tel:${OFFICES[0].contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group"
                  >
                    <Phone
                      className="h-4 w-4 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="group-hover:underline">
                      {OFFICES[0].contact.phone}
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Szczecin Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-6">
                {/* Office Name */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Szczecin Office
                </h3>

                {/* Coverage */}
                <p className="text-sm text-foreground/60 mb-4">
                  Ports of Szczecin &amp; Świnoujście
                </p>

                {/* Contact Info */}
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${OFFICES[1].contact.email}`}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
                    <span className="group-hover:underline break-all">
                      {OFFICES[1].contact.email}
                    </span>
                  </a>

                  <a
                    href={`tel:${OFFICES[1].contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group"
                  >
                    <Phone
                      className="h-4 w-4 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="group-hover:underline">
                      {OFFICES[1].contact.phone}
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Warsaw Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-6">
                {/* Office Name */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Warsaw Office
                </h3>

                {/* Coverage */}
                <p className="text-sm text-foreground/60 mb-4">
                  Inland &amp; CMR Coordination
                </p>

                {/* Contact Info */}
                <div className="space-y-2.5">
                  <a
                    href={`mailto:${OFFICES[2].contact.email}`}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
                    <span className="group-hover:underline break-all">
                      {OFFICES[2].contact.email}
                    </span>
                  </a>

                  <a
                    href={`tel:${OFFICES[2].contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors group"
                  >
                    <Phone
                      className="h-4 w-4 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="group-hover:underline">
                      {OFFICES[2].contact.phone}
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* View Full Coverage CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            <span>View Full Coverage Map</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
