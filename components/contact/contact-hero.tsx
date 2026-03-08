"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import { CONTACTS } from "@/config";

export default function ContactPageHero() {
  return (
    <section className="relative pt-24 pb-12 md:py-24 bg-secondary overflow-hidden">
      {/* Premium Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-white/50" />
            <p className="font-mono text-xs font-bold text-white/70 tracking-[0.3em] uppercase">
              CONTACT
            </p>
            <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-white/50" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]"
          >
            Need Marine Surveyors?
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3 text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            <p>Three offices covering Poland's major ports and locations inland.</p>

            <p>
              Sopot/Gdynia · Szczecin/Świnoujście · Warsaw
            </p>

            <p>Our office telephones are regularly answered during business hours.</p>
          </motion.div>

          {/* Quick Contact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {/* Phone */}
            {/* FIX: Added opening <a> tag */}
            <a
              href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
              className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-lg p-4 transition-all duration-300 group min-h-[90px]"
            >
              <Phone className="h-5 w-5 text-white/70 group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <p className="text-xs text-white/50 mb-0.5">Call</p>
                <p className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors">
                  {CONTACTS.main.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            {/* FIX: Added opening <a> tag */}
            <a
              href={`mailto:${CONTACTS.main.email}`}
              className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-lg p-4 transition-all duration-300 group min-h-[90px]"
            >
              <Mail className="h-5 w-5 text-white/70 group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <p className="text-xs text-white/50 mb-0.5">Email</p>
                <p className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors break-all">
                  {CONTACTS.main.email}
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-h-[90px]">
              <Clock className="h-5 w-5 text-white/70" />
              <div className="text-center">
                <p className="text-xs text-white/50 mb-0.5">Hours</p>
                <p className="text-sm font-semibold text-white">
                  Mon–Fri Business Hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
