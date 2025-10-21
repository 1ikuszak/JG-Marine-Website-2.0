// components/contact/contact-hero.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Shield } from "lucide-react";
import { CONTACTS } from "@/config";

export default function ContactPageHero() {
  return (
    <section className="relative pt-24 pb-12 sm:py-16 md:py-20 lg:py-24 bg-foreground overflow-hidden">
      {/* Premium Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-primary/15 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px] lg:h-[600px] bg-accent/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/8 rounded-full blur-[100px] sm:blur-[150px]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-3 sm:mb-4"
          >
            <div className="h-[1px] w-4 sm:w-6 bg-gradient-to-r from-transparent to-accent" />
            <p className="font-mono text-[9px] sm:text-[10px] md:text-xs font-bold text-accent tracking-[0.25em] sm:tracking-[0.3em] uppercase">
              24/7 MARITIME RESPONSE
            </p>
            <div className="h-[1px] w-4 sm:w-6 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>

          {/* Main Headline - Much Smaller on Mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.15] px-2"
          >
            Get Expert Maritime
            <br />
            <span className="text-accent">Surveying Today</span>
          </motion.h1>

          {/* Subheadline - Smaller on Mobile */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 px-2 sm:px-4 leading-relaxed max-w-2xl mx-auto"
          >
            Emergency or planned survey? We respond within 2 hours with
            DNV-certified surveyors across the Baltic region.
          </motion.p>

          {/* Quick Contact Grid - Better Mobile Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {/* Phone */}
            {/* FIX: Added opening <a> tag */}
            <a
              href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
              className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 rounded-lg p-3 sm:p-4 transition-all duration-300 group min-h-[80px] sm:min-h-[90px]"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <p className="text-[10px] sm:text-xs text-white/50 mb-0.5">
                  Call Us
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent transition-colors">
                  {CONTACTS.main.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            {/* FIX: Added opening <a> tag */}
            <a
              href={`mailto:${CONTACTS.main.email}`}
              className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 rounded-lg p-3 sm:p-4 transition-all duration-300 group min-h-[80px] sm:min-h-[90px]"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <p className="text-[10px] sm:text-xs text-white/50 mb-0.5">
                  Email
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent transition-colors break-all">
                  {CONTACTS.main.email}
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 min-h-[80px] sm:min-h-[90px]">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              <div className="text-center">
                <p className="text-[10px] sm:text-xs text-white/50 mb-0.5">
                  Availability
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  24/7 Service
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust Badge - Smaller on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white/80">
              Secure & Confidential • Response within 2h
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
