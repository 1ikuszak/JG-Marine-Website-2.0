// components/Solutions.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Ship,
  Package,
  Scale,
  Wrench,
  Anchor,
  Activity,
  ShieldCheck,
  AlarmClock,
  ChevronRight,
} from "lucide-react";

type Solution = {
  title: string;
  slug: string;
  blurb: string;
  bullets?: string[];
  emergency?: boolean;
  typicalRange?: string;
  response?: string;
  badges?: string[];
};

type Category = {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  solutions: Solution[];
};

const EMERGENCY_TEL = "+48 123 123 123"; // TODO: replace with real number

// brand-aligned accent (navy + gold)
// If you have CSS variables, you can replace classes with your brand tokens
const brandAccent = "from-[#0b1b31] via-[#0b1b31] to-[#0b1b31]"; // deep navy
const brandRing = "ring-1 ring-[#0b1b31]/15";
const goldAccentClass = "text-amber-400"; // subtle gold for premium hint

const CATEGORIES: Category[] = [
  {
    key: "marine",
    label: "Marine Operations",
    icon: Ship,
    description:
      "Hull & machinery • On/Off-hire • P&I investigations • Warranty surveys",
    solutions: [
      {
        title: "Marine Surveys (Hull & Machinery, Condition, On/Off-Hire)",
        slug: "marine-surveys",
        blurb:
          "Independent, defensible assessments for shipowners and insurers across Baltic and EU ports.",
        bullets: [
          "Class & statutory compliance context",
          "Photo evidence & clear defect coding",
          "Multilingual reporting",
        ],
        typicalRange: "€2,000–€10,000",
        response: "≤ 24 h",
        emergency: true,
        badges: ["DNV-GL", "IIMS"],
      },
      {
        title: "Marine Warranty Surveys",
        slug: "marine-warranty-surveys",
        blurb:
          "Critical risk control for high-value operations and project cargo movements.",
        bullets: [
          "Method statements & lift plans",
          "Weather windows & sea-fastening",
          "Compliance with client specs",
        ],
        typicalRange: "€10,000–€50,000",
        response: "≤ 24 h",
        emergency: true,
        badges: ["DNV-GL", "Flag State"],
      },
      {
        title: "P&I Investigations",
        slug: "p-and-i-investigations",
        blurb:
          "Impartial fact-finding and evidence preservation supporting claims and arbitration.",
        bullets: [
          "Witness interviews",
          "Chain of custody",
          "Rapid preliminary reports",
        ],
        typicalRange: "Case-based",
        response: "≤ 24 h",
        emergency: true,
        badges: ["CESAM", "IIMS"],
      },
    ],
  },
  {
    key: "cargo",
    label: "Cargo & Heavy Lift",
    icon: Package,
    description:
      "Cargo surveys • Heavy lift & project cargo • Offshore wind components",
    solutions: [
      {
        title: "Cargo Surveys (Inspection, Expertise, Damage Assessment)",
        slug: "cargo-surveys",
        blurb:
          "End-to-end cargo condition verification and loss analysis for insurers and shippers.",
        bullets: [
          "IMDG/reefer/steel expertise",
          "Sampling & tally",
          "Root-cause analysis",
        ],
        typicalRange: "€500–€3,000",
        response: "≤ 24 h",
        emergency: true,
        badges: ["CESAM"],
      },
      {
        title: "Heavy Lift & Project Cargo Supervision",
        slug: "heavy-lift-projects",
        blurb:
          "On-site supervision for lifts, roll-on/load-out, sea-fastening, and transport interfaces.",
        bullets: [
          "Loadout manuals",
          "Lift studies review",
          "Sea-fastening verification",
        ],
        typicalRange: "€15,000–€100,000",
        response: "≤ 24 h",
        emergency: true,
        badges: ["DNV-GL"],
      },
      {
        title: "Loss Adjusting (Complex Cases)",
        slug: "loss-adjusting",
        blurb:
          "Independent adjusting with defensible documentation and timeline reconstruction.",
        bullets: [
          "Quantum & liability analysis",
          "Salvage/mitigation oversight",
          "Insurer-grade reporting",
        ],
        typicalRange: "€20,000–€150,000",
        response: "≤ 24 h",
        emergency: true,
        badges: ["IIMS", "CESAM"],
      },
    ],
  },
  {
    key: "risk",
    label: "Risk & Compliance",
    icon: Scale,
    description:
      "Audits • Inspections • ISO/ISM/ISPS/MLC • Risk assessment & investigation",
    solutions: [
      {
        title: "Audits, Inspections & Vetting (ISO/ISM/ISPS/MLC, CMID)",
        slug: "audits-inspections-vetting",
        blurb:
          "Third-party audits and gap analyses aligned to international maritime standards.",
        bullets: [
          "Document control & drills",
          "Findings tracking",
          "Corrective actions",
        ],
        typicalRange: "Scope-based",
        response: "Planned",
        badges: ["Flag State", "DNV-GL"],
      },
      {
        title: "Risk Assessment & Accident Investigation",
        slug: "risk-assessment-accident-investigation",
        blurb:
          "Root-cause analysis and prevention planning to reduce recurring incidents.",
        bullets: [
          "Causation mapping",
          "Regulatory context",
          "Preventive controls",
        ],
        typicalRange: "Scope-based",
        response: "≤ 24 h",
        emergency: true,
        badges: ["IIMS"],
      },
      {
        title: "Claims Adjusting & Average Agent Services",
        slug: "claims-adjusting-average-agent",
        blurb:
          "Local Baltic presence with multilingual documentation accepted by major insurers.",
        bullets: [
          "Evidence curation",
          "Reserve recommendations",
          "Settlement support",
        ],
        typicalRange: "Case-based",
        response: "≤ 24 h",
        badges: ["CESAM"],
      },
    ],
  },
];

function slugToContactHref(slug: string) {
  return `/contact?service=${encodeURIComponent(slug)}`;
}

function SolutionCard({ s }: { s: Solution }) {
  return (
    <Card className={`group flex h-full flex-col justify-between ${brandRing}`}>
      <CardHeader className="space-y-2">
        <CardTitle className="text-base md:text-lg leading-tight">
          {s.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{s.blurb}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {s.badges?.map((b) => (
            <Badge key={b} variant="secondary" className="rounded-full">
              {b}
            </Badge>
          ))}
          {s.emergency && (
            <Badge className="rounded-full bg-red-600 hover:bg-red-700 text-white">
              Emergency
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {s.bullets && (
          <ul className="mb-3 grid gap-2 text-sm">
            {s.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ShieldCheck className={`mt-0.5 h-4 w-4 ${goldAccentClass}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {s.typicalRange && (
            <span className="inline-flex items-center rounded-full border px-2 py-1">
              Typical: {s.typicalRange}
            </span>
          )}
          {s.response && (
            <span className="inline-flex items-center rounded-full border px-2 py-1">
              Response: {s.response}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <Button asChild size="sm">
            <Link href={slugToContactHref(s.slug)}>Request</Link>
          </Button>
          {s.emergency && (
            <Button
              variant="destructive"
              size="sm"
              asChild
              aria-label="Call emergency hotline"
            >
              <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                <AlarmClock className="mr-2 h-4 w-4" /> Emergency
              </a>
            </Button>
          )}
        </div>
        <Button variant="ghost" size="sm" asChild className="group/lnk">
          <Link
            href={`/services/${s.slug}`}
            aria-label={`Open ${s.title} details`}
          >
            View specs{" "}
            <ChevronRight className="ml-1 h-4 w-4 transition group-hover/lnk:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function Solutions() {
  return (
    <section id="services" className="relative">
      {/* subtle premium backdrop */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${brandAccent} opacity-[0.02]`}
      />
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Anchor className="h-3.5 w-3.5" />
            Solutions
          </div>
          <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">
            Comprehensive Maritime Solutions
          </h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Grouped for quick selection. Emergency-capable services marked with{" "}
            <span className="rounded-full bg-red-600 px-1.5 py-0.5 text-[11px] leading-none text-white align-middle">
              Emergency
            </span>
            .
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="marine" className="w-full">
          <TabsList className="w-full justify-start gap-2 overflow-x-auto">
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              return (
                <TabsTrigger
                  key={c.key}
                  value={c.key}
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {c.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {CATEGORIES.map((c) => (
            <TabsContent key={c.key} value={c.key} className="mt-6">
              {c.description && (
                <p className="mb-6 text-sm text-muted-foreground">
                  {c.description}
                </p>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {c.solutions.map((s) => (
                  <SolutionCard key={s.slug} s={s} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom reassurance row */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3 text-sm">
          <div className="flex items-center gap-2">
            <Activity className={`h-4 w-4 ${goldAccentClass}`} />
            <span>Independent & unbiased reporting</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className={`h-4 w-4 ${goldAccentClass}`} />
            <span>Operational in 11+ countries</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className={`h-4 w-4 ${goldAccentClass}`} />
            <span>Certified: DNV-GL · IIMS · CESAM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
