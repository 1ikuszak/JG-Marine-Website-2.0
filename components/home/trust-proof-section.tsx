"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";

import Image from "next/image";

// Helper Component: Animated Counter
function AnimatedCounter({ to }: { to: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (inView && ref.current) {
      animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
      });
    }
  }, [inView, to]);

  return <span ref={ref}>0</span>;
}

// Premium Logo Scroller with Dark Background (Luxury Brand Style)
const LogoScroller = ({
  logos,
  title,
}: {
  logos: { src: string; alt: string }[];
  title: string;
}) => {
  return (
    <div className="py-12">
      <h3 className="text-center text-xs font-medium text-foreground/50 tracking-[0.3em] uppercase mb-12">
        {title}
      </h3>

      {/* Premium dark background container - like Apple, Rolex */}
      <div className="relative bg-foreground rounded-lg py-16 overflow-hidden">
        {/* Gradient fade edges for seamless scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />

        {/* Infinite scroll container */}
        <div className="relative flex overflow-hidden">
          {/* First set of logos - animated */}
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

          {/* Second set of logos - duplicate for seamless loop */}
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
    </div>
  );
};

export default function TrustAndDifferentiationSection() {
  const certificationLogos = [
    { src: "/logos/cesam.svg", alt: "Cesam Logo" },
    { src: "/logos/IMS.svg", alt: "IMS Logo" },
    { src: "/logos/IGPI.svg", alt: "P&I Clubs Logo" },
    { src: "/logos/wecox.svg", alt: "WE Cox Logo" },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background pointer-events-none" />

      <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header with refined typography */}

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
              OPERATIONAL ADVANTAGES
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground tracking-tight mb-6 leading-[1.1]">
              Regional Expertise and Response Capabilities
            </h2>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">
              Three differentiators of Baltic-based maritime surveying.
            </p>
          </motion.div>
        </div>

        {/* Part 1: Premium Animated Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24">
          {[
            {
              value: 900,
              label: "Annual Cases",
              desc: "Consistent quality and precision in every survey",
            },
            {
              value: 100,
              label: "Years of Experience",
              desc: "A heritage of generations of captains and engineers",
            },
            {
              value: 11,
              label: "Countries in Europe",
              desc: "Local presence, delivering to international standards",
            },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                {/* Subtle gradient background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-xl scale-150 group-hover:scale-[1.6] transition-transform duration-500" />

                <p className="relative text-6xl md:text-7xl font-bold text-primary tracking-tight">
                  <AnimatedCounter to={metric.value} />
                  {index === 0 && "+"}
                </p>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {metric.label}
              </h3>
              <p className="text-base text-foreground/60 max-w-xs mx-auto leading-relaxed">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Part 2: Premium Logo Scroller with Dark Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <LogoScroller
            logos={certificationLogos}
            title="Recognized By Global Maritime Authorities"
          />
        </motion.div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-base text-foreground/50 max-w-2xl mx-auto">
            Independent survey reports accepted by P&I Clubs worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
