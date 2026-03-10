"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Flag, Users, FileCheck } from "lucide-react";

export default function CredentialsSection() {
  const flagStates = [
    "Antigua & Barbuda",
    "Republic of Liberia",
    "Luxembourg",
    "Marshall Islands",
    "Vanuatu",
  ];

  const certifications = [
    "DNV-GL",
    "IRU Academy",
    "International Institute of Container Lessors",
    "Polish Chamber of Maritime Commerce",
    "Polish Chamber of Logistics and Forwarding",
    "ADR/RID Dangerous Goods Safety Advisors",
  ];

  const memberships = [
    "International Institute of Marine Surveying",
    "IVR Rotterdam (European Inland Shipping Association)",
    "International Transport Intermediaries Club Ltd.",
  ];

  const claimsAgents = [
    "Allianz Global Corporate & Specialty",
    "Alandia Marine",
  ];

  const networks = ["W.E. Cox", "W.K. Webster"];

  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-background pointer-events-none" />

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
            <p className="label-caps text-primary">
              Credentials
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6 leading-tight tracking-tight"
          >
            Certifications and Affiliations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body-sm md:text-body text-foreground/60 leading-relaxed"
          >
            Recognized by maritime authorities and trusted by global
            underwriters.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Flag State Authority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border p-8 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Flag className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground">
                Flag State Inspectors
              </h3>
            </div>
            <p className="text-sm text-foreground/60 mb-4">
              Authorized to conduct inspections for the maritime administrations
              of:
            </p>
            <ul className="space-y-2">
              {flagStates.map((state, i) => (
                <li
                  key={i}
                  className="text-sm text-foreground/70 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {state}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border p-8 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Shield className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground">
                Certifications
              </h3>
            </div>
            <p className="text-sm text-foreground/60 mb-4">
              Our surveyors and experts are certified by:
            </p>
            <ul className="space-y-2">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className="text-sm text-foreground/70 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border p-8 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground">
                Professional Memberships
              </h3>
            </div>
            <p className="text-sm text-foreground/60 mb-4">
              Active members of:
            </p>
            <ul className="space-y-2">
              {memberships.map((membership, i) => (
                <li
                  key={i}
                  className="text-sm text-foreground/70 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {membership}
                </li>
              ))}
            </ul>
            <p className="text-xs text-foreground/50 mt-4">
              ITIC liability insurance certificate holder.
            </p>
          </motion.div>

          {/* Claims & Networks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border p-8 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <FileCheck className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground">
                Claims Survey Agents
              </h3>
            </div>
            <p className="text-sm text-foreground/60 mb-4">
              Entrusted by global underwriters:
            </p>
            <ul className="space-y-2 mb-6">
              {claimsAgents.map((agent, i) => (
                <li
                  key={i}
                  className="text-sm text-foreground/70 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {agent}
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 mb-2">
              Loss adjusting networks:
            </p>
            <ul className="space-y-2">
              {networks.map((network, i) => (
                <li
                  key={i}
                  className="text-sm text-foreground/70 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {network}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* DNV Training Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-foreground/50 max-w-2xl mx-auto">
            Our experts are trained by DNV-GL in HAZOP, vetting inspections,
            risk assessment, and accident investigation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
