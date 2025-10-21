// components/certifications/credentials-cta.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Shield,
  CheckCircle,
  Clock,
  FileCheck,
  Award,
} from "lucide-react";

export default function CredentialsCtaSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-foreground overflow-hidden">
      {/* Premium Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-accent/15 rounded-full blur-[120px] sm:blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-primary/10 rounded-full blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="container relative mx-auto max-w-screen-xl px-4 sm:px-6 md:px-6">
        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT: Proof Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-r from-transparent to-accent" />
                <p className="font-mono text-[10px] sm:text-xs font-bold text-accent tracking-[0.3em] uppercase">
                  VERIFIED EXPERTISE
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
                Credentials Verified.
                <br />
                <span className="text-accent">Assets Protected.</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                You've seen our certifications. Now let our proven expertise
                protect your maritime investments with reports accepted by P&I
                clubs worldwide.
              </p>
            </div>

            {/* Proof Stack - Why Act Now */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-accent/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <CheckCircle
                    className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white mb-1">
                    DNV Certified Surveyors
                  </p>
                  <p className="text-xs sm:text-sm text-white/60">
                    International standards, globally accepted reports
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-accent/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Clock
                    className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white mb-1">
                    24-Hour Baltic Response
                  </p>
                  <p className="text-xs sm:text-sm text-white/60">
                    Surveyor on-site within 24h throughout the region
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-accent/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <FileCheck
                    className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white mb-1">
                    P&I Club Accepted
                  </p>
                  <p className="text-xs sm:text-sm text-white/60">
                    Reports recognized by major insurers worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-accent/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Award
                    className="h-5 w-5 sm:h-6 sm:w-6 text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white mb-1">
                    64 Years of Heritage
                  </p>
                  <p className="text-xs sm:text-sm text-white/60">
                    Three generations of Master Mariners
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border-2 border-white/20 rounded-lg p-6 sm:p-8 md:p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 border border-accent/40 rounded-full mb-6 sm:mb-8">
                <Shield className="h-4 w-4 text-accent" strokeWidth={2} />
                <span className="text-xs sm:text-sm font-bold text-accent">
                  CERTIFIED & READY
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Don't Let Certification Delays Cost You
              </h3>

              <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 leading-relaxed">
                Every hour of delay increases risk exposure. Our certified
                surveyors are standing by 24/7 to protect your interests.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/10">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                    2h
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60">
                    Assignment
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                    24h
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60">
                    On-site
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                    100%
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60">
                    Accepted
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 sm:space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-base sm:text-lg py-5 sm:py-6 group"
                  asChild
                >
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2"
                  >
                    Get Certified Survey Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="tel:+48XXXXXXXXX"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Emergency Hotline
                  </a>
                </Button>
              </div>

              {/* Trust Footer */}
              <p className="text-xs sm:text-sm text-white/50 text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                <Shield className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Secure • Encrypted • Confidential
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
