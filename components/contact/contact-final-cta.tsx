"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Award, Anchor, BarChart2 } from "lucide-react";
import { CONTACTS } from "@/config";

const trustPoints = [
  { icon: Anchor, text: "120+ years of maritime experience" },
  { icon: BarChart2, text: "900+ annual projects completed" },
  { icon: MapPin, text: "Sopot · Szczecin · Warsaw" },
  { icon: Award, text: "IIMS Member · CESAM certified" },
];

export default function ContactFinalCta() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Background: maritime image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero/2.jpg"
          alt="Marine survey operations"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/85 to-secondary/75" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Overline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-white/60" />
            <p className="label-caps text-white/80">
              READY TO GET STARTED
            </p>
            <div className="h-[2px] w-8 bg-white/60" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-h2-sm md:text-h2 text-white font-bold leading-tight mb-8">
            Request a Survey Today
          </h2>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            {trustPoints.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  <Icon className="h-3.5 w-3.5 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-white/80">{text}</span>
              </div>
            ))}
          </div>

          {/* Phone CTA button */}
          <div className="max-w-sm mx-auto">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-16 rounded-xl group shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200"
              asChild
            >
              <a
                href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 group-hover:animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-70 font-normal tracking-wider uppercase leading-none mb-0.5">
                    Call Now
                  </div>
                  <div>{CONTACTS.main.phone}</div>
                </div>
              </a>
            </Button>
          </div>

          {/* Email sub-text */}
          <p className="mt-4 text-sm text-white/50">
            Or email us at{" "}
            <a
              href={`mailto:${CONTACTS.main.email}`}
              className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
            >
              {CONTACTS.main.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
