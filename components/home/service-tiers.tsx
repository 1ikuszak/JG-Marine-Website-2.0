"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

interface Service {
  title: string;
  bestFor: string;
  deliverables: string[];
  outcome: string;
  imageUrl: string;
  slug: string;
}

// CHANGE: Reverted to the original, more detailed content for services
const services: Service[] = [
  {
    title: "Ekspertyzy Ładunków i Transportu",
    bestFor: "Freight Forwarders, Logistics Providers",
    deliverables: [
      "Ocena stanu ładunku przed/po transporcie",
      "Dokumentacja fotograficzna i raportowanie",
      "Wsparcie w rozliczeniach ubezpieczeniowych",
    ],
    outcome: "Szybkie rozliczenia szkód w 7-14 dni",
    imageUrl: "/services/cargo.jpg", // TODO: Replace with actual image
    slug: "cargo-transport-surveys",
  },
  {
    title: "Ekspertyzy Kadłubów i Maszyn",
    bestFor: "Fleet Operators, Shipowners",
    deliverables: [
      "Surveye H&M zgodne z wymogami P&I Clubs",
      "Oceny pre-purchase i condition surveys",
      "Inspekcje on/off-hire dla flot",
    ],
    outcome: "Zgodność z wymogami flag state, minimalizacja ryzyka",
    imageUrl: "/services/hull-machinery.jpg", // TODO: Replace with actual image
    slug: "hull-machinery-surveys",
  },
  {
    title: "Marine Warranty & Heavy Lift",
    bestFor: "Project Cargo Managers, Offshore Developers",
    deliverables: [
      "Nadzór operacji heavy lift i project cargo",
      "Marine warranty surveys (DNV standard)",
      "Load-out planning i risk assessment",
    ],
    outcome: "Zero wypadków w nadzorowanych operacjach",
    imageUrl: "/services/heavy-lift.jpg", // TODO: Replace with actual image
    slug: "marine-warranty-heavy-lift",
  },
  {
    title: "Likwidacja Szkód i Audyty",
    bestFor: "P&I Clubs, Insurance Underwriters",
    deliverables: [
      "Comprehensive loss adjusting services",
      "Audyty ISM/ISPS/MLC dla statków",
      "Wsparcie w arbitrażach międzynarodowych",
    ],
    outcome: "Raporty akceptowane przez London arbitration",
    imageUrl: "/services/claims.jpg", // TODO: Replace with actual image
    slug: "loss-adjusting-claims",
  },
];

export default function ServiceTiers() {
  return (
    <section className="py-16 md:py-24 bg-background border-y">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* CHANGE: Reverted to the original section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nasze Usługi Ekspertyz Morskich
          </h2>
          <p className="text-lg text-muted-foreground">
            Kompleksowe rozwiązania dostosowane do potrzeb każdego segmentu
            morskiego
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image Column */}
              <div className={index % 2 !== 0 ? "lg:order-last" : ""}>
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg w-full h-full"
                />
              </div>

              {/* Text Content Column */}
              <div className="flex flex-col">
                <Badge variant="secondary" className="w-fit text-sm mb-3">
                  {service.bestFor}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t">
                  <p className="text-sm font-semibold text-primary mb-4">
                    <span className="text-muted-foreground font-normal">
                      Rezultat:{" "}
                    </span>
                    {service.outcome}
                  </p>
                  <Button asChild size="lg">
                    <a href={`/services/${service.slug}`}>
                      Dowiedz się więcej
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-24 pt-12 border-t">
          <h3 className="text-2xl font-bold text-primary mb-3">
            Nie jesteś pewien, która usługa jest dla Ciebie?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Nasz zespół ekspertów jest gotowy, aby omówić Twoje konkretne
            potrzeby i zarekomendować optymalne rozwiązanie.
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="/contact">Skonsultuj się z ekspertem</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
