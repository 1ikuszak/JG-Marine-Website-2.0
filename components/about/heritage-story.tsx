"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeritageStorySection() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Left: Story Text */}
        <div className="bg-background flex items-center py-20 lg:py-32">
          <div className="container mx-auto max-w-2xl px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Overline */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-accent/30" />
                <span className="text-xs tracking-[0.3em] text-foreground/60 uppercase font-light">
                  Our Heritage
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-medium text-primary leading-[1.1] mb-8">
                Built on the bridge,
                <br />
                not the boardroom
              </h2>

              <div className="w-20 h-[1px] bg-secondary mb-12" />

              {/* Body - Gary Provost rhythm: SHORT, MEDIUM, LONG, SHORT */}
              <div className="space-y-6 text-base lg:text-lg text-foreground/70 leading-relaxed">
                {/* SHORT - punchy opener */}
                <p>
                  The company started with a choice. Leave the bridge. Stay in
                  the industry.
                </p>

                {/* MEDIUM - context */}
                <p>
                  Three generations of master mariners built JG Marine on what
                  they knew: Baltic waters, Polish ports, the language of cargo
                  and hulls and claims. Maritime surveying was the work.
                  Independence was the principle.
                </p>

                {/* LONG - credibility, scope */}
                <p>
                  Over 60 years, the scope expanded beyond marine transport to
                  include CMR surveys, technical heavy lift projects, warranty
                  surveys, and towage approvals for offshore wind and oil
                  projects from Polish yards - but the foundation stayed the
                  same: educated personnel, international certifications, family
                  ownership with no insurer or shipowner affiliations.
                </p>

                {/* SHORT - resolution */}
                <p>We answer to facts. That hasn't changed.</p>
              </div>

              {/* Stats */}
              <div className="mt-12 pt-12 border-t border-border/30">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-2">
                      Established
                    </p>
                    <p className="text-3xl text-primary">1961</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-2">
                      Generations
                    </p>
                    <p className="text-3xl text-primary">Three</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Heritage Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[50vh] lg:min-h-full"
        >
          <Image
            src="/about/B.jpg"
            alt="JG Marine founding generation"
            fill
            className="object-cover grayscale"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
