"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Ship, Anchor, Building2 } from "lucide-react";

interface Office {
  name: string;
  tagline: string;
  location: string;
  address: string;
  coverage: string[];
  services: string[];
  email: string;
  phone: string;
  icon: React.ElementType;
  mapPosition: { top: string; left: string };
}

const offices: Office[] = [
  {
    name: "Head Office",
    tagline: "Sopot Maritime Hub",
    location: "Sopot",
    address: "81-824 ul. Armii Krajowej 116/2",
    coverage: ["Port of Gdynia", "Port of Gdańsk", "Gulf of Gdańsk"],
    services: [
      "Hull & Machinery Surveys",
      "Cargo Surveys",
      "P&I Condition Surveys",
      "Pre-Purchase Inspections",
    ],
    email: "info@jg-marine.com",
    phone: "+48 58 760 11 20",
    icon: Anchor,
    mapPosition: { top: "15%", left: "78%" }, // Northeast coast - Gdańsk/Sopot
  },
  {
    name: "Szczecin Branch",
    tagline: "Western Baltic Operations",
    location: "Szczecin",
    address: "70-412 ul. Niepodległości 26/26",
    coverage: ["Port of Szczecin", "Port of Świnoujście", "Oder River"],
    services: [
      "Marine Surveys",
      "Cargo Inspections",
      "Draft Surveys",
      "On/Off Hire Surveys",
    ],
    email: "info@jg-marine.com",
    phone: "+48 58 760 11 20",
    icon: Ship,
    mapPosition: { top: "18%", left: "22%" }, // Northwest coast - Szczecin
  },
  {
    name: "Warsaw Office",
    tagline: "Inland Coordination Center",
    location: "Warsaw",
    address: "03-289 ul. Szumiących Traw 6a/9",
    coverage: ["Central Poland", "Inland Waterways", "CMR Territory"],
    services: [
      "Non-Marine Surveys",
      "CMR Surveys",
      "Inland Survey Coordination",
      "Logistics Consulting",
    ],
    email: "info@jg-marine.com",
    phone: "+48 58 760 11 20",
    icon: Building2,
    mapPosition: { top: "42%", left: "68%" }, // Central-east - Warsaw
  },
];

export default function OfficeLocationsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-foreground overflow-hidden">
      {/* Premium gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[140px]" />
      </div>

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
            <p className="text-xs font-medium text-primary tracking-[0.3em] uppercase">
              Strategic Presence
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Baltic Coverage You Can Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Three strategically positioned offices providing complete coverage
            across Poland's major ports and inland routes
          </motion.p>
        </div>

        {/* Visual Map Section - Real Poland Outline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[500px] mb-20 hidden lg:block"
        >
          {/* Real Poland Map Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
            <div className="relative w-full h-full max-w-2xl">
              {/* Accurate Poland SVG outline */}
              <svg
                viewBox="0 0 600 700"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Poland border - based on real geographic outline */}
                <path
                  d="M 120 140 L 140 120 L 180 110 L 220 105 L 260 108 L 300 115 L 340 125 L 380 135 L 420 145 L 460 155 L 490 170 L 510 180 L 520 195 L 522 210 L 518 230 L 510 250 L 505 270 L 502 290 L 500 310 L 498 340 L 495 370 L 490 400 L 485 430 L 478 460 L 470 485 L 458 510 L 445 530 L 428 548 L 408 562 L 385 572 L 360 578 L 335 580 L 310 578 L 285 572 L 260 562 L 238 548 L 218 530 L 200 510 L 185 488 L 172 465 L 162 440 L 155 415 L 150 390 L 148 365 L 148 340 L 150 315 L 154 290 L 160 265 L 168 240 L 178 218 L 190 198 L 205 180 L 220 165 L 238 152 L 258 142 L 280 135 L 255 125 L 230 118 L 205 112 L 180 108 L 155 106 L 130 108 L 110 115 L 95 125 L 85 138 L 80 152 L 78 168 L 80 185 L 85 200 L 92 213 L 100 225 L 110 235 L 105 248 L 98 260 L 90 270 L 82 278 L 75 285 L 70 290 L 68 293 L 70 310 L 75 328 L 82 345 L 90 360 L 100 373 L 112 385 L 125 395 L 140 402 L 155 407 L 170 410 L 180 408 L 188 402 L 195 395 L 200 387 L 203 378 L 205 368 L 208 400 L 212 430 L 218 458 L 225 485 L 233 510 L 242 533 L 252 554 L 263 572 L 275 588 L 288 601 L 302 611 L 317 619 L 333 624 L 350 627 L 368 627 L 385 624 L 400 618 L 413 610 L 425 600 L 435 588 L 443 575 L 450 560 L 455 544 L 458 527 L 460 510 L 462 492 L 465 473 L 468 453 L 472 432 L 477 410 L 483 387 L 490 363 L 498 338 L 507 312 L 517 285 L 528 257 L 540 228 L 553 198 L 565 170 L 575 145 L 583 122 L 588 102 L 590 85 L 588 70 L 582 58 L 572 48 L 558 40 L 540 35 L 520 32 L 498 31 L 475 32 L 450 35 L 425 40 L 400 47 L 375 56 L 350 67 L 325 80 L 300 95 L 275 112 L 250 130 L 228 148 L 208 165 L 190 182 L 175 198 L 162 213 L 152 227 L 145 240 L 140 252 L 137 263 L 135 273 L 130 260 L 125 245 L 120 228 L 117 210 L 116 190 L 118 170 L 120 152 Z"
                  className="text-primary"
                  fill="rgba(255,255,255,0.04)"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="2"
                />

                {/* Baltic Sea indication (northern border) */}
                <line
                  x1="100"
                  y1="80"
                  x2="600"
                  y2="80"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>

          {/* Office Location Pins */}
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              className="absolute"
              style={{
                top: office.mapPosition.top,
                left: office.mapPosition.left,
              }}
            >
              {/* Pulsing Pin */}
              <div className="relative">
                {/* Pulse rings */}
                <div className="absolute inset-0 -m-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 animate-ping" />
                </div>
                {/* Pin itself */}
                <div className="relative w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                  <office.icon className="h-4 w-4 text-white" strokeWidth={2} />
                </div>
                {/* Location Label */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded shadow-lg border border-primary/20">
                    <p className="text-xs font-semibold text-foreground">
                      {office.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Connection Lines - Updated positions */}
          <svg className="absolute inset-0 pointer-events-none opacity-20">
            {/* Szczecin to Sopot */}
            <line
              x1="22%"
              y1="18%"
              x2="78%"
              y2="15%"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-primary"
            />
            {/* Sopot to Warsaw */}
            <line
              x1="78%"
              y1="15%"
              x2="68%"
              y2="42%"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-primary"
            />
            {/* Szczecin to Warsaw */}
            <line
              x1="22%"
              y1="18%"
              x2="68%"
              y2="42%"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-primary"
            />
          </svg>
        </motion.div>

        {/* Office Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-500 group overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6 relative inline-flex">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg" />
                    <div className="relative bg-primary/20 p-4 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <office.icon
                        className="h-8 w-8 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Office Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {office.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    {office.tagline}
                  </p>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-4 text-white/70">
                    <MapPin
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <div className="text-sm">
                      <p className="font-medium text-white">
                        {office.location}
                      </p>
                      <p className="text-xs">{office.address}</p>
                    </div>
                  </div>

                  {/* Coverage Areas */}
                  <div className="mb-4">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                      Coverage
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {office.coverage.map((area, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                      Services
                    </p>
                    <ul className="space-y-1">
                      {office.services.map((service, i) => (
                        <li
                          key={i}
                          className="text-xs text-white/70 flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    {/* --- FIX 1: Added <a> tag --- */}
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-xs text-white/70 hover:text-primary transition-colors group/link"
                    >
                      <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span className="group-hover/link:underline">
                        {office.email}
                      </span>
                    </a>

                    {/* --- FIX 2: Added <a> tag --- */}
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-xs text-white/70 hover:text-primary transition-colors group/link"
                    >
                      <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span className="group-hover/link:underline">
                        {office.phone}
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-6">
            Not sure which office to contact? We'll route your inquiry to the
            right team.
          </p>
          <Button size="lg" variant="accent" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">3</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">
                Strategic Offices
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">6+</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">
                Major Ports
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">24h</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">
                Response Time
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-xs text-white/60 uppercase tracking-wider">
                Poland Coverage
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
