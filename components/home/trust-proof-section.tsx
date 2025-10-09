"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, Star, Quote } from "lucide-react";
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

// Helper Component: Infinite Logo Scroller
const LogoScroller = ({
  logos,
  title,
}: {
  logos: { src: string; alt: string }[];
  title: string;
}) => (
  <div className="py-8">
    <h3 className="text-center text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-8">
      {title}
    </h3>
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function TrustProofSection() {
  // TODO: Replace with actual logo image paths
  const certificationLogos = [
    { src: "/logos/dnv-logo.svg", alt: "DNV Logo" },
    { src: "/logos/iims-logo.svg", alt: "IIMS Logo" },
    { src: "/logos/cesam-logo.svg", alt: "CESAM Logo" },
    { src: "/logos/pi-clubs-logo.svg", alt: "P&I Clubs Logo" },
    { src: "/logos/flag-state-logo.svg", alt: "Flag State Logo" },
  ];

  const clientLogos = [
    { src: "/logos/client1-logo.svg", alt: "Client 1 Logo" },
    { src: "/logos/client2-logo.svg", alt: "Client 2 Logo" },
    { src: "/logos/client3-logo.svg", alt: "Client 3 Logo" },
    { src: "/logos/client4-logo.svg", alt: "Client 4 Logo" },
    { src: "/logos/client5-logo.svg", alt: "Client 5 Logo" },
    { src: "/logos/client6-logo.svg", alt: "Client 6 Logo" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background border-y">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          {/* CHANGE: Reverted to the original headline and subheadline */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Zaufali Nam Liderzy Branży Morskiej
          </h2>
          <p className="text-lg text-muted-foreground">
            Ponad 60 lat budowania zaufania przez rezultaty
          </p>
        </div>

        <LogoScroller
          logos={certificationLogos}
          title="Certyfikacje i Akredytacje"
        />

        {/* Main Proof Block: Metrics + Testimonial */}
        <div className="grid lg:grid-cols-5 gap-12 items-center my-16">
          {/* Left: Animated Metrics */}
          <div className="lg:col-span-2 space-y-8">
            <div className="text-center lg:text-left">
              <p className="text-5xl md:text-6xl font-bold text-accent">
                <AnimatedCounter to={120} />+
              </p>
              <h3 className="text-lg font-semibold text-primary mt-1">
                Projektów Rocznie
              </h3>
              <p className="text-muted-foreground mt-1">
                Niezmienna jakość i precyzja w każdej ekspertyzie.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-5xl md:text-6xl font-bold text-accent">
                <AnimatedCounter to={64} />
              </p>
              <h3 className="text-lg font-semibold text-primary mt-1">
                Lata Doświadczenia
              </h3>
              <p className="text-muted-foreground mt-1">
                Dziedzictwo trzech pokoleń kapitanów i inżynierów.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-5xl md:text-6xl font-bold text-accent">
                <AnimatedCounter to={11} />
              </p>
              <h3 className="text-lg font-semibold text-primary mt-1">
                Krajów w Europie
              </h3>
              <p className="text-muted-foreground mt-1">
                Lokalna obecność, międzynarodowe standardy.
              </p>
            </div>
          </div>

          {/* Right: Featured Testimonial */}
          <div className="lg:col-span-3">
            <Card className="bg-muted/40 border-border shadow-lg">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-primary font-medium mb-6 leading-relaxed">
                  "JG-MARINE to jedyny zespół, który przybył na miejsce awarii w
                  Gdańsku w 18 godzin. Ich raport wytrzymał bezproblemowo
                  arbitraż w Londynie."
                </blockquote>
                <Badge className="mb-6 bg-accent/10 text-accent border border-accent/20 font-semibold">
                  Czas reakcji: 18h vs 5 dni u konkurencji
                </Badge>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Jacek Kowalski</p>
                    <p className="text-sm text-muted-foreground">
                      Claims Manager, Baltic Shipping Line
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <LogoScroller logos={clientLogos} title="Zaufali Nam Liderzy Branży" />
      </div>
    </section>
  );
}
