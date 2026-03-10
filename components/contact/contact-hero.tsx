"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Award, ShieldCheck, Clock } from "lucide-react";
import { CONTACTS } from "@/config";

export default function ContactHero() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

      <div className="container relative mx-auto max-w-screen-xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-white/60" />
            <p className="label-caps text-white/80">
              CONTACT US
            </p>
            <div className="h-[2px] w-8 bg-white/60" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-display-sm md:text-display font-bold text-white leading-tight mb-6"
          >
            Need Marine Surveyors? Call Now.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body md:text-body-lg text-white/70 max-w-2xl mx-auto mb-10"
          >
            Three offices covering Poland&apos;s major ports and inland
            locations. Our phones are answered during business hours.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-sm mx-auto"
          >
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base h-16 rounded-xl group shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 cursor-pointer"
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
          </motion.div>

          {/* Secondary row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-3 max-w-sm mx-auto mt-3"
          >
            <Button
              className="flex-1 border border-white/25 bg-white/8 hover:bg-white/10 text-white font-semibold text-base h-14 rounded-xl cursor-pointer"
              asChild
            >
              <a
                href={`tel:${CONTACTS.main.phone2.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                <span>{CONTACTS.main.phone2}</span>
              </a>
            </Button>

            <Button
              className="flex-1 border border-white/25 bg-white/8 hover:bg-white/10 text-white font-semibold text-base h-14 rounded-xl cursor-pointer"
              asChild
            >
              <a
                href={`mailto:${CONTACTS.main.email}`}
                className="flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>{CONTACTS.main.email}</span>
              </a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            <div className="bg-white/10 border border-white/20 rounded-full px-3 py-1.5 label-caps text-white/80 flex items-center gap-1.5">
              <Award className="h-3 w-3" />
              IIMS Member
            </div>
            <div className="bg-white/10 border border-white/20 rounded-full px-3 py-1.5 label-caps text-white/80 flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3" />
              CESAM Certified
            </div>
            <div className="bg-white/10 border border-white/20 rounded-full px-3 py-1.5 label-caps text-white/80 flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              Mon–Fri Business Hours
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
