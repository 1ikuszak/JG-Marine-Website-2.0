"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Award } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  email?: string;
  phone?: string;
  certifications?: string[];
  imageUrl?: string; // TODO: Add actual profile images
}

const teamMembers: TeamMember[] = [
  {
    name: "Jacek Goszczyński",
    role: "Founder & CEO",
    description:
      "Seasoned Master Mariner and certified auditor across multiple maritime disciplines. Accredited expert in commercial courts.",
    email: "jack@jg-marine.com",
    phone: "48 602 222 477",
    certifications: [
      "Master Mariner",
      "Court Expert",
      "Multi-Discipline Auditor",
    ],
    imageUrl: "/team/jacek.jpg", // TODO: Replace with actual image
  },
  {
    name: "Mariusz Łapiński",
    role: "Lead Auditor",
    description:
      "ISO/ISM/ISPS Lead Auditor specializing in maritime operations and risk assessment. Fluent in English and Russian.",
    email: "mariusz@jg-marine.com",
    phone: "+48 501 505 797",
    certifications: ["ISO/ISM/ISPS Lead Auditor", "ADR/RID Advisor"],
    imageUrl: "/team/mariusz.jpg",
  },
  {
    name: "Jerzy Barszczewski",
    role: "Chief Engineer",
    description:
      "M.Sc. in Mechanical Engineering with expertise in shipbuilding, reefer equipment, and fuel handling systems.",
    email: "jerzy@jg-marine.com",
    phone: "48 501 386 133",
    certifications: [
      "M.Sc. Mechanical Eng.",
      "Chief Engineer",
      "H&M Specialist",
    ],
    imageUrl: "/team/jerzy.jpg",
  },
  {
    name: "Joanna Adamczak",
    role: "Operations Manager",
    description:
      "MA in Economics. Manages international survey coordination and client relations across 11+ countries.",
    email: "joanna@jg-marine.com",
    phone: "48 604 643 200",
    certifications: ["MA Economics", "Operations Management"],
    imageUrl: "/team/joanna.jpg",
  },
  {
    name: "Dominik Kowalewski",
    role: "Senior Cargo Surveyor",
    description:
      "Experienced surveyor in general commodities and containerized cargo. Conducts loading supervision and draft surveys.",
    email: "dominik@jg-marine.com",
    phone: "48 509 682 700",
    certifications: ["Cargo Surveyor", "Agricultural Certified"],
    imageUrl: "/team/dominik.jpg",
  },
  {
    name: "Bartłomiej Bączek",
    role: "Cargo Surveyor",
    description:
      "Maritime Academy graduate specializing in general commodities and container cargo surveys. AutoCAD proficient.",
    email: "baczek@jg-marine.com",
    phone: "48 509 682 701",
    certifications: ["Maritime Academy", "AutoCAD"],
    imageUrl: "/team/bartlomiej-b.jpg",
  },
  {
    name: "Marek Borowski",
    role: "Regional Surveyor",
    description:
      "Certified agricultural products expert conducting surveys throughout Silesian Region and Germany.",
    email: "marek@jg-marine.com",
    phone: "+48 509 682 700",
    certifications: ["Agricultural Expert", "Cross-Border Operations"],
    imageUrl: "/team/marek.jpg",
  },
  {
    name: "Bartłomiej Jaworski",
    role: "Warsaw Office Manager",
    description:
      "ISO 9001:2008 Lead Auditor with HAZMAT certification. Oversees Warsaw office operations and container projects.",
    email: "bartek@jg-marine.com",
    phone: "48 602 752 200",
    certifications: ["ISO 9001 Lead Auditor", "HAZMAT Certified"],
    imageUrl: "/team/bartlomiej-j.jpg",
  },
  {
    name: "Beata Fredrich",
    role: "Office Coordinator",
    description:
      "MA in Environmental Protection from Gdańsk University. Coordinates office operations and administrative logistics.",
    certifications: ["MA Environmental Protection", "Operations"],
    imageUrl: "/team/beata.jpg",
  },
];

export default function TeamSectionWhiteUniform() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* MARITIME Ocean Gradients - Deep Sea Blues & Teals */}
      <div className="absolute inset-0">
        {/* Deep Ocean Blue - Top Right */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-blue-400/20 rounded-full blur-[160px]" />

        {/* Teal/Turquoise - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-teal-300/25 rounded-full blur-[150px]" />

        {/* Cyan/Sea Blue - Center */}
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-cyan-300/20 rounded-full blur-[140px]" />

        {/* Aquamarine - Bottom Right */}
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-300/15 rounded-full blur-[130px]" />

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
                  className="text-blue-500/30"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Header with Maritime Touch */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            {/* Wave decorations */}
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-blue-400" />
            <p className="font-mono text-xs font-bold text-blue-600 tracking-[0.3em] uppercase">
              THE MARITIME EXPERTS
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-blue-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight tracking-tight"
          >
            Meet The Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Decades of maritime expertise, certified to international standards.
          </motion.p>
        </div>

        {/* UNIFORM GRID - All Same Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              {/* Card - Uniform Size with Maritime Border */}
              <div className="relative h-full bg-card border-2 border-border hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-500 overflow-hidden flex flex-col">
                {/* BIG Profile Image Area - Ocean Gradient */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-400/20 via-teal-300/15 to-cyan-300/10">
                  {/* TODO: Replace with actual image */}
                  {/* <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  /> */}

                  {/* Placeholder with initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold text-blue-500/30">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Ocean Wave Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />

                  {/* Number Badge - Maritime Blue */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-card/95 backdrop-blur-sm px-3 py-1.5 border-2 border-blue-500/30">
                      <span className="font-mono text-sm font-bold text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Name & Role - Ocean Colors */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-base font-semibold text-blue-600">
                      {member.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {member.description}
                  </p>

                  {/* Certifications - Ocean Theme */}
                  {member.certifications && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.certifications.map((cert, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700"
                        >
                          <Award className="h-3 w-3" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Contact Info - Maritime Hover */}
                  {(member.email || member.phone) && (
                    <div className="space-y-2 pt-4 border-t border-border">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-blue-600 transition-colors group/link"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          <span className="group-hover/link:underline truncate">
                            {member.email}
                          </span>
                        </a>
                      )}
                      {member.phone && (
                        <a
                          href={`tel:+${member.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-blue-600 transition-colors group/link"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          <span className="group-hover/link:underline">
                            +{member.phone}
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
