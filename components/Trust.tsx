// components/Trust.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import {
  ShieldCheck,
  CheckCircle2,
  Info,
  ExternalLink,
  Anchor,
} from "lucide-react";

// JG-Marine brand accents (navy + subtle gold)
const navy = "text-[#0b1b31]";
const gold = "text-amber-400";

type Cert = {
  key: string;
  label: string;
  short: string;
  details: string[];
  link?: string;
};

const CERTS: Cert[] = [
  {
    key: "dnv",
    label: "DNV-GL Risk Assessment",
    short: "Independent risk methodologies accepted by insurers and operators.",
    details: [
      "Method statements & lift plans review for marine operations",
      "Sea-fastening verification & loadout supervision acceptance",
      "Documentation aligned with international standards",
    ],
    link: "https://www.dnv.com/",
  },
  {
    key: "iims",
    label: "IIMS Member",
    short:
      "Professional body for marine surveyors ensuring technical competence.",
    details: [
      "Ongoing CPD & peer standards",
      "Guidance on reporting structure & evidence handling",
      "Global recognition with insurers and legal stakeholders",
    ],
    link: "https://www.iims.org.uk/",
  },
  {
    key: "cesam",
    label: "CESAM Paris",
    short:
      "European marine insurance association—claims & adjusting ecosystem.",
    details: [
      "Accepted reporting framework for cargo & liabilities",
      "Recognition across EU insurance markets",
      "Facilitates cross-border collaboration on complex cases",
    ],
    link: "https://www.cesam.org/",
  },
  {
    key: "flag",
    label: "Flag State Inspector (6 jurisdictions)",
    short:
      "Authorized inspections as per relevant administrations’ requirements.",
    details: [
      "Compliance auditing & deficiency tracking",
      "Operational readiness & safety oversight",
      "Reports accepted by port and registry stakeholders",
    ],
  },
];

export function Trust() {
  return (
    <section id="trust" className="relative border-b bg-white">
      {/* Subtle premium backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b31]/2 via-transparent to-transparent" />
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Anchor className="h-3.5 w-3.5" />
            Verified by Maritime Authorities
          </div>
          <h2
            className={`mt-2 text-2xl md:text-4xl font-semibold tracking-tight ${navy}`}
          >
            Credentials & Client Proof
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Independent accreditation and recognition accepted by insurers,
            shipowners, and flag administrations across the EU and beyond.
          </p>
        </div>

        {/* Client Proof Grid (logos can be anonymized) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Top EU P&I Club",
            "Major Baltic Shipowner",
            "International Insurer",
            "Offshore Energy Leader",
          ].map((label, i) => (
            <Card key={label} className="group transition hover:shadow-md">
              <CardContent className="h-24 grid place-items-center">
                <div className="relative h-10 w-40 opacity-80 group-hover:opacity-100 transition">
                  {/* Replace with real client logos; these are placeholders */}
                  <Image
                    src={`/logos/client-${i + 1}.svg`}
                    alt={`${label} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications – interactive cards */}
        <div className="mt-10 md:mt-12 grid gap-6 md:grid-cols-2">
          {CERTS.map((c) => (
            <Card
              key={c.key}
              className="border-[#0b1b31]/10 hover:shadow-md transition"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <ShieldCheck className={`h-5 w-5 ${gold}`} />
                  {c.label}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="inline-flex items-center">
                          <Info className="ml-1 h-4 w-4 text-muted-foreground" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-sm">{c.short}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {c.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 ${gold}`} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Verify scope
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle>{c.label}</DialogTitle>
                        <DialogDescription>{c.short}</DialogDescription>
                      </DialogHeader>
                      <Separator />
                      <div className="mt-4 space-y-2 text-sm">
                        {c.details.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                      {c.link && (
                        <div className="mt-6">
                          <a
                            href={c.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
                          >
                            Visit official site{" "}
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Badge variant="secondary" className="rounded-full">
                    Accepted by major insurers
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            Need documentation for your compliance file? We provide
            certification letters on request.
          </p>
          <Button
            asChild
            className="bg-[#0b1b31] hover:bg-[#0d2341] text-white"
          >
            <a href="/contact">Request Certification Confirmation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
