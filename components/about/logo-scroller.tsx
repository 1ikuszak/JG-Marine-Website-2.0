"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoScrollerSection() {
  const logos = [
    { src: "/logos/DNV.svg", alt: "DNV Logo" },
    { src: "/logos/cesam.svg", alt: "Cesam Logo" },
    { src: "/logos/IMS.svg", alt: "IMS Logo" },
    { src: "/logos/IGPI.svg", alt: "P&I Clubs Logo" },
    { src: "/logos/wecox.svg", alt: "WE Cox Logo" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        <h3 className="text-center text-xs font-medium text-foreground/50 tracking-[0.3em] uppercase mb-12">
          Recognized By
        </h3>

        {/* Dark background container */}
        <div className="relative bg-foreground rounded-lg py-16 overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />

          {/* Infinite scroll container */}
          <div className="relative flex overflow-hidden">
            {/* First set of logos */}
            <motion.ul
              className="flex items-center justify-center md:justify-start flex-shrink-0"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {logos.map((logo, index) => (
                <li key={index} className="flex-shrink-0 mx-12">
                  <div className="relative w-32 h-24 flex items-center justify-center group">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={64}
                      className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </li>
              ))}
            </motion.ul>

            {/* Duplicate for seamless loop */}
            <motion.ul
              className="flex items-center justify-center md:justify-start flex-shrink-0"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <li key={`duplicate-${index}`} className="flex-shrink-0 mx-12">
                  <div className="relative w-32 h-16 flex items-center justify-center group">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={64}
                      className="object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-foreground/50">
            Surveys performed to DNV standards. Reports accepted by P&I Clubs
            worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
