"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Award } from "lucide-react";
import Image from "next/image";
import { CONTACTS } from "@/config";

// <-- CHANGED: Import CONTACTS from your main config file
// Adjust this path if your component is in a different folder

// <-- FIX: Define an interface for our team member
// This tells TypeScript the exact "shape" of the objects we expect
interface TeamMember {
  name: string;
  email: string;
  phone: string;
  role: string;
  description: string;
  certifications: readonly string[]; // 'readonly' matches 'as const'
  imageUrl: string | undefined; // some members may not have an image
}

// <-- FIX: We cast the result to TeamMember[]
// This overrides TypeScript's incorrect 'never[]' inference
const teamMembers = Object.values(CONTACTS.personnel) as TeamMember[];

export default function TeamSectionWhiteUniform() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Gradient Blobs - Using Theme Colors */}
      <div className="absolute inset-0">
        {/* Primary Blue - Top Right */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-primary/15 rounded-full blur-[160px]" />
        {/* Secondary - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[150px]" />
        {/* Primary - Center */}
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[140px]" />
        {/* Accent - Bottom Right */}
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[130px]" />
        {/* Subtle Wave Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="waves"
                x="0"
                y="0"
                width="100"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 25 Q 25 15, 50 25 T 100 25"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                  className="text-primary/30"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            {/* Wave decorations */}
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="font-mono text-xs font-bold text-primary tracking-[0.3em] uppercase">
              THE MARITIME EXPERTS
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight"
          >
            Meet The Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/60 leading-relaxed"
          >
            Certified to international standards.
          </motion.p>
        </div>

        {/* UNIFORM GRID - All Same Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* We are now mapping over the array from our config */}
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              {/* Card - Uniform Size */}
              <div className="relative h-full bg-card border-2 border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 overflow-hidden flex flex-col">
                {/* BIG Profile Image Area */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/5">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: "50% 16%" }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-bold text-primary/20">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-card/10 to-transparent" />
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Name & Role */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-base font-semibold text-primary">
                      {member.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4 flex-1">
                    {member.description}
                  </p>

                  {/* Certifications */}
                  {member.certifications && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.certifications.map((cert, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-primary/5 border border-primary/20 text-[10px] font-mono text-primary"
                        >
                          <Award className="h-3 w-3" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Contact Info */}
                  {(member.email || member.phone) && (
                    <div className="space-y-2 pt-4 border-t border-border">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-xs text-foreground/60 hover:text-primary transition-colors group/link"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span className="group-hover/link:underline truncate">
                            {member.email}
                          </span>
                        </a>
                      )}
                      {member.phone && (
                        <a
                          // This logic handles phone numbers with spaces, +, etc.
                          href={`tel:+${member.phone.replace(/\D/g, "")}`}
                          className="flex items-center gap-2 text-xs text-foreground/60 hover:text-primary transition-colors group/link"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span className="group-hover/link:underline">
                            {member.phone}
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
