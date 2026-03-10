"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Award, Anchor, BarChart2 } from "lucide-react";
import { CONTACTS } from "@/config";

const trustPoints = [
  {
    icon: Anchor,
    text: "120+ years of maritime experience",
  },
  {
    icon: BarChart2,
    text: "900+ annual projects completed",
  },
  {
    icon: MapPin,
    text: "Sopot · Szczecin · Warsaw coverage",
  },
  {
    icon: Award,
    text: "IIMS Member since 1968 · CESAM certified",
  },
];

export default function PremiumCtaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Background: maritime image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero/2.jpg"
          alt=""
          role="presentation"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          quality={40}
        />
        {/* Layered gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/85 to-secondary/75" />
        {/* Subtle accent glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

          {/* ── Left column: compelling copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-white/60" />
              <p className="label-caps text-white/80">
                EMERGENCY RESPONSE
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold leading-[1.05] mb-10">
              <span className="text-white">Request a Survey</span>
              <br />
              <span className="text-white">Available 24/7.</span>
            </h2>

            {/* Trust bullets */}
            <ul className="space-y-4">
              {trustPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/90 text-body-sm">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right column: CTA card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Gradient border wrapper */}
            <div className="relative rounded-2xl p-px bg-gradient-to-br from-white/25 via-primary/40 to-white/5 shadow-2xl">
            <div className="relative rounded-2xl bg-white/[0.06] backdrop-blur-md p-8 md:p-10">
              {/* Glare highlight */}
              <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              {/* Card header */}
              <div className="text-center mb-8">
                <p className="label-caps text-white/80 mb-2">
                  CALL NOW — AVAILABLE 24/7
                </p>
                <p className="text-white/70 text-sm">
                  Direct line to our survey operations team
                </p>
              </div>

              {/* Phone buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base h-16 rounded-xl group shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-200"
                  asChild
                >
                  <a
                    href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 group-hover:animate-pulse" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-70 font-normal tracking-wider uppercase leading-none mb-0.5">
                        Main Line
                      </div>
                      <div>{CONTACTS.main.phone}</div>
                    </div>
                  </a>
                </Button>

                <Button
                  size="lg"
                  className="w-full border border-white/25 bg-white/8 hover:bg-white/10 text-white font-semibold text-base h-14 rounded-xl group transition-all duration-200"
                  asChild
                >
                  <a
                    href={`tel:${CONTACTS.main.phone2.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3.5 w-3.5 group-hover:animate-pulse" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-50 font-normal tracking-wider uppercase leading-none mb-0.5">
                        Alternative
                      </div>
                      <div>{CONTACTS.main.phone2}</div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
