// components/GlobalReach.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Globe2,
  Clock,
  MapPin,
  Anchor,
  ArrowRight,
  PhoneCall,
  Ship,
} from "lucide-react";

type Port = { name: string; country: string; etaHrs: number };
type OfficeTZ = { city: string; tz: string; offset: string };

const PORTS: Port[] = [
  { name: "Gdańsk", country: "PL", etaHrs: 4 },
  { name: "Gdynia", country: "PL", etaHrs: 4 },
  { name: "Szczecin/Świnoujście", country: "PL", etaHrs: 6 },
  { name: "Klaipėda", country: "LT", etaHrs: 8 },
  { name: "Rostock", country: "DE", etaHrs: 8 },
  { name: "Hamburg", country: "DE", etaHrs: 12 },
];

const OFFICES: OfficeTZ[] = [
  { city: "Sopot HQ", tz: "Europe/Warsaw", offset: "UTC+1/+2" },
  { city: "Szczecin", tz: "Europe/Warsaw", offset: "UTC+1/+2" },
  { city: "Warsaw", tz: "Europe/Warsaw", offset: "UTC+1/+2" },
];

const EMERGENCY_TEL = "+48 123 123 123"; // TODO: replace

export function GlobalReach() {
  return (
    <section id="global-reach" className="relative border-b bg-white">
      {/* premium backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b31]/3 via-transparent to-transparent" />
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Globe2 className="h-3.5 w-3.5" />
            Global Reach
          </div>
          <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-[#0b1b31]">
            Baltic Expertise · International Operations
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Operational presence in{" "}
            <span className="font-medium">11+ countries</span>. Dispatch from
            Poland to key Baltic and North Sea ports with multilingual
            documentation accepted by major insurers and P&amp;I clubs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Map / Visualization */}
          <Card className="overflow-hidden border-[#0b1b31]/10">
            <div className="relative h-[360px] w-full bg-muted">
              {/* Replace with an actual interactive map component when ready */}
              <Image
                src="/maps/baltic-coverage.png"
                alt="JG-Marine Baltic & North Sea operational coverage"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1 text-white backdrop-blur">
                  <Ship className="h-4 w-4" />
                  <span className="text-sm">
                    Coverage: Baltic · North Sea · Inland PL
                  </span>
                </div>
              </div>
            </div>
            <Separator />
            <CardContent className="grid gap-3 p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full">
                  AIS-assisted dispatch
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  Multilingual reports
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  Insurer-accepted formats
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                For remote locations, we coordinate with partner surveyors while
                maintaining independent oversight and reporting integrity.
              </p>
            </CardContent>
          </Card>

          {/* Ports ETA + Timezones */}
          <div className="grid gap-6">
            <Card className="border-[#0b1b31]/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg text-[#0b1b31]">
                  Typical Dispatch Times to Key Ports
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <ul className="grid gap-2">
                  {PORTS.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-amber-400" />
                        <span className="text-sm">
                          {p.name}, {p.country}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        <Clock className="mr-1 inline h-4 w-4" />
                        Dispatch ≤ {p.etaHrs} h
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-muted-foreground">
                  * Actual times depend on documentation, access permissions,
                  and weather/port conditions.
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#0b1b31]/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg text-[#0b1b31]">
                  Offices & Time Zones
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="flex flex-wrap gap-2">
                  {OFFICES.map((o) => (
                    <Badge
                      key={o.city}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {o.city} · {o.offset}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  We coordinate across EU time zones; urgent requests are
                  handled 24/7 by on-call surveyors.
                </p>
                <div className="flex items-center justify-between rounded-xl border bg-[#0b1b31]/5 px-3 py-3">
                  <div className="text-sm text-[#0b1b31]">
                    <Anchor className="mr-2 inline h-4 w-4" />
                    Need availability now? Speak to a surveyor.
                  </div>
                  <Button variant="outline" className="shrink-0" asChild>
                    <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Emergency 24/7
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between gap-2 rounded-xl border border-[#0b1b31]/10 bg-white px-4 py-3">
              <span className="text-sm text-[#0b1b31]">
                Planning a project outside the Baltic? We coordinate globally
                with retained partners.
              </span>
              <Button asChild>
                <a href="/contact">
                  Request Coordination <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
