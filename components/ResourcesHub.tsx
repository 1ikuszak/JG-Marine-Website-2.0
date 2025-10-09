// components/ResourcesHub.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FileText,
  FileBarChart2,
  ClipboardCheck,
  ShieldCheck,
  Download,
  ArrowRight,
  Search,
  Lock,
  Clock,
} from "lucide-react";

type Resource = {
  id: string;
  title: string;
  type: "Guide" | "Checklist" | "Case Study" | "Policy";
  description: string;
  href: string;
  size: string; // e.g. "2.1 MB PDF"
  updated: string; // e.g. "2025-08"
  tags: string[];
  restricted?: boolean; // gated by NDA
};

const navyText = "text-[#0b1b31]";
const gold = "text-amber-400";

const RESOURCES: Resource[] = [
  {
    id: "mws-spec",
    title: "Marine Warranty Survey – Specification Guide",
    type: "Guide",
    description:
      "Scope templates, method statement requirements, and acceptance criteria aligned with insurer expectations.",
    href: "/resources/marine-warranty-survey-spec.pdf",
    size: "1.9 MB PDF",
    updated: "2025-06",
    tags: ["MWS", "Offshore Wind", "Heavy Lift"],
  },
  {
    id: "cargo-check",
    title: "Cargo Survey – Operational Checklist",
    type: "Checklist",
    description:
      "Pre-arrival, on-site, and reporting checklist covering reefer, steel, IMDG, and bulk cargoes.",
    href: "/resources/cargo-survey-checklist.pdf",
    size: "0.8 MB PDF",
    updated: "2025-05",
    tags: ["Cargo", "Claims", "Operations"],
  },
  {
    id: "reporting-standards",
    title: "Reporting Standards & Evidence Handling",
    type: "Policy",
    description:
      "Photography rules, defect coding, chain of custody, and arbitration-ready documentation practices.",
    href: "/resources/reporting-standards.pdf",
    size: "1.2 MB PDF",
    updated: "2025-04",
    tags: ["Compliance", "Evidence", "Insurers"],
  },
  {
    id: "offshore-case",
    title: "Case Study – Offshore Wind Emergency (Anonymized)",
    type: "Case Study",
    description:
      "4-hour dispatch, independent severity grading, and mitigation planning. Identifiers removed; full report under NDA.",
    href: "/resources/case-offshore-wind-summary.pdf",
    size: "1.5 MB PDF",
    updated: "2025-03",
    tags: ["Offshore Wind", "Emergency", "Insurers"],
    restricted: true,
  },
  {
    id: "heavy-lift-manual",
    title: "Loadout & Sea-Fastening Review – Practitioner Notes",
    type: "Guide",
    description:
      "Engineer-to-surveyor handoff, lift study red flags, and acceptance notes for project cargo operations.",
    href: "/resources/loadout-seafastening-notes.pdf",
    size: "2.3 MB PDF",
    updated: "2025-07",
    tags: ["Heavy Lift", "Engineering", "MWS"],
  },
  {
    id: "audit-pack",
    title: "ISM/ISPS/MLC Audit – Findings Tracker Template",
    type: "Checklist",
    description:
      "Gap analysis tracker and CAPA log template aligned with flag and class expectations.",
    href: "/resources/audit-findings-tracker.xlsx",
    size: "120 KB XLSX",
    updated: "2025-02",
    tags: ["Compliance", "Audits", "Flag State"],
  },
];

const CATEGORIES = [
  "All",
  "Guide",
  "Checklist",
  "Case Study",
  "Policy",
] as const;

export function ResourcesHub() {
  const [tab, setTab] = React.useState<(typeof CATEGORIES)[number]>("All");
  const [q, setQ] = React.useState("");

  const filtered = RESOURCES.filter((r) => {
    const matchesTab = tab === "All" || r.type === tab;
    const matchesQ =
      !q ||
      r.title.toLowerCase().includes(q.toLowerCase()) ||
      r.description.toLowerCase().includes(q.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(q.toLowerCase()));
    return matchesTab && matchesQ;
  });

  return (
    <section id="resources" className="relative border-t bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b31]/3 via-transparent to-transparent" />
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2">
            <FileText className="h-3.5 w-3.5" />
            Resources & Downloads
          </div>
          <h2
            className={`mt-2 text-2xl md:text-4xl font-semibold tracking-tight ${navyText}`}
          >
            Technical Guides, Checklists & Documentation
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Evidence-driven content reflecting three generations of maritime
            expertise. All materials are prepared to support procurement,
            claims, and compliance workflows.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Tabs
            value={tab}
            onValueChange={(v) => setTab(v as any)}
            className="w-full sm:w-auto"
          >
            <TabsList className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <TabsTrigger
                  key={c}
                  value={c}
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search guides, checklists, tags…"
              className="pl-9"
              aria-label="Search resources"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.id} r={r} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-xl border border-[#0b1b31]/10 bg-[#0b1b31]/5 p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className={`text-base font-medium ${navyText}`}>
                Need a document tailored to your tender?
              </div>
              <p className="text-sm text-muted-foreground">
                We provide <strong>scope-aligned</strong> templates and
                compliance letters for procurement files.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">
                Request Custom Document <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ r }: { r: Resource }) {
  return (
    <Card className="group flex h-full flex-col justify-between border-[#0b1b31]/10 transition hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="rounded-full">
            {r.type}
          </Badge>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>Updated {r.updated}</span>
          </div>
        </div>
        <CardTitle className="mt-2 text-base md:text-lg leading-tight">
          {r.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{r.description}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          {r.tags.map((t) => (
            <Badge key={t} variant="outline" className="rounded-full">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {r.restricted ? (
            <Lock className="h-3.5 w-3.5" />
          ) : (
            <ShieldCheck className={`h-3.5 w-3.5 ${gold}`} />
          )}
          <span>{r.size}</span>
        </div>
        <Button asChild variant={r.restricted ? "outline" : "default"}>
          <Link href={r.href} prefetch={false}>
            <Download className="mr-2 h-4 w-4" />
            {r.restricted ? "Request Access" : "Download"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
