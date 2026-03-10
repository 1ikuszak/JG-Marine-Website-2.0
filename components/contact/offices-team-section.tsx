"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACTS } from "@/config";
import { OFFICES } from "@/config/offices";

const OfficeMap = dynamic(() => import("@/components/home/office-map"), {
  ssr: false,
});

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const personnelArray = Object.values(CONTACTS.personnel);

const getTeamForOffice = (officeId: string) =>
  personnelArray.filter((person) => person.officeId === officeId);

export default function OfficesTeamSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary" />
          <p className="label-caps text-primary">
            OUR OFFICES & TEAM
          </p>
        </div>
        <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-10 sm:mb-16">
          Meet the Team Behind Every Survey
        </h2>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Office blocks */}
          <div className="space-y-6">
            {OFFICES.map((office, index) => {
              const team = getTeamForOffice(office.id);

              return (
                <motion.div
                  key={office.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-card border border-border rounded-xl p-6 border-l-4 ${
                    office.type === "headquarters"
                      ? "border-l-primary"
                      : "border-l-primary/50"
                  }`}
                >
                  {/* Type label */}
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        office.type === "headquarters"
                          ? "bg-primary"
                          : "bg-primary/50"
                      }`}
                    />
                    <span className="label-caps text-primary/70">
                      {office.type === "headquarters"
                        ? "Head Office"
                        : office.type === "branch"
                          ? "Branch Office"
                          : "Inland Office"}
                    </span>
                  </div>

                  {/* City name */}
                  <h3 className="font-serif text-h4-sm md:text-h4 font-bold text-foreground">
                    {office.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-foreground/60 mb-3">
                    {office.tagline}
                  </p>

                  {/* Contact info */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-body-sm text-foreground/70">
                        {office.address.fullAddress}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <a
                        href={`tel:${office.contact.phone.replace(/\s/g, "")}`}
                        className="text-body-sm text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                      >
                        {office.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                      <a
                        href={`mailto:${office.contact.email}`}
                        className="text-body-sm text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                      >
                        {office.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Team grid */}
                  {team.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {team.map((person) => (
                          <div
                            key={person.name}
                            className="border border-border rounded-lg p-3 bg-background flex gap-3 items-center"
                          >
                            {/* Avatar */}
                            {person.imageUrl ? (
                              <Image
                                src={person.imageUrl}
                                alt={person.name}
                                width={40}
                                height={40}
                                className="rounded-full object-cover w-10 h-10 flex-shrink-0"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="text-sm font-semibold text-primary">
                                  {getInitials(person.name)}
                                </span>
                              </div>
                            )}

                            {/* Info */}
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-foreground truncate">
                                {person.name}
                              </p>
                              <p className="text-xs text-foreground/60 truncate">
                                {person.role}
                              </p>
                              <div className="flex gap-2 mt-1">
                                {person.phone && (
                                  <a
                                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                                    aria-label={`Call ${person.name}`}
                                    className="text-foreground/50 hover:text-primary transition-colors cursor-pointer"
                                  >
                                    <Phone className="h-3.5 w-3.5" />
                                  </a>
                                )}
                                {person.email && (
                                  <a
                                    href={`mailto:${person.email}`}
                                    aria-label={`Email ${person.name}`}
                                    className="text-foreground/50 hover:text-primary transition-colors cursor-pointer"
                                  >
                                    <Mail className="h-3.5 w-3.5" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: Leaflet map (sticky on desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <OfficeMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
