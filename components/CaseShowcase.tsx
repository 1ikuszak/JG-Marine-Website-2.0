// components/CaseShowcase.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChevronRight,
  Lock,
  ShieldCheck,
  FileText,
  ArrowDownToLine,
  MapPin,
  Calendar,
} from "lucide-react";

type CaseItem = {
  id: string;
  title: string;
  sector: "Offshore Wind" | "Heavy Lift" | "Fleet/Compliance" | "Cargo/Claims";
  summary: string;
  challenge: string;
  solution: string[];
  impact: string[];
  location: string;
  date: string;
  value?: string;
  confidential?: boolean;
  cover?: string;
};

const CASES: CaseItem[] = [
  {
    id: "offshore-50m",
    title: "€50M Offshore Wind Emergency",
    sector: "Offshore Wind",
    summary: "Critical nacelle component damage during quay operations.",
    challenge: "Time-sensitive damage assessment to protect project schedule.",
    solution: [
      "4-hour dispatch & triage with insurer and OEM on-site",
      "Independent severity grading with photographic evidence",
      "Temporary mitigation plan and logistics coordination",
    ],
    impact: [
      "Prevented project delay estimated at €8M",
      "Accepted by insurer without arbitration",
      "Controlled risk profile for remaining lifts",
    ],
    location: "Gdańsk, PL",
    date: "2024-07",
    value: "€50M+",
    confidential: true,
    cover: "/cases/offshore-wind.jpg",
  },
  {
    id: "heavy-550t",
    title: "550-ton Heavy Lift Investigation",
    sector: "Heavy Lift",
    summary: "Incidence during tandem lift of oversized cargo.",
    challenge:
      "Determine causation and liability with multi-party stakeholders.",
    solution: [
      "Rigging review and lift plan conformance check",
      "Witness interviews & chain of custody for evidence",
      "Defect coding and timeline reconstruction",
    ],
    impact: [
      "Insurer accepted adjusting report within 72 hours",
      "Reduced exposure through mitigation recommendations",
      "Closed without litigative escalation",
    ],
    location: "Rotterdam, NL",
    date: "2023-10",
    value: "€12M",
    cover: "/cases/heavy-lift.jpg",
  },
  {
    id: "fleet-audit",
    title: "Fleet Compliance Audit (15 vessels)",
    sector: "Fleet/Compliance",
    summary: "Coordinated ISM/ISPS/MLC audit across multiple ports.",
    challenge:
      "Minimize operational disruption while raising compliance baseline.",
    solution: [
      "Staggered port calls with remote pre-audit checks",
      "Findings tracking with corrective actions",
      "Multilingual summaries for owners and charterers",
    ],
    impact: [
      "30% premium reduction negotiated by insurer",
      "Zero detentions over the following 12 months",
      "Standardized documentation pack adopted",
    ],
    location: "Baltic & North Sea",
    date: "2024-03",
    cover: "/cases/fleet-audit.jpg",
  },
  {
    id: "cargo-reefer",
    title: "Reefer Cargo Damage Assessment",
    sector: "Cargo/Claims",
    summary: "Temperature excursion claim for high-value perishables.",
    challenge: "Rapid cause analysis to preserve subrogation rights.",
    solution: [
      "Data logger analysis and route reconstruction",
      "Sampling, tally and IMDG compliance check",
      "Independent quantum estimate for adjuster",
    ],
    impact: [
      "Settlement achieved without arbitration",
      "Process change agreed with logistics provider",
      "Prevention checklist adopted by client",
    ],
    location: "Hamburg, DE",
    date: "2023-06",
    cover: "/cases/cargo-reefer.jpg",
  },
];

const SECTORS = [
  "All",
  "Offshore Wind",
  "Heavy Lift",
  "Fleet/Compliance",
  "Cargo/Claims",
] as const;

export function CaseShowcase() {
  const [tab, setTab] = React.useState<(typeof SECTORS)[number]>("All");

  const filtered = CASES.filter((c) => tab === "All" || c.sector === tab);

  return (
    <section id="cases" className="relative border-b bg-white">
      {/* subtle premium backdrop (navy tint) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b31]/2 via-transparent to-transparent" />

      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Case Studies
          </div>
          <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-[#0b1b31]">
            Proven Results in Critical Situations
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Challenge → Solution → Impact. Confidential details are protected;
            documentation available upon request.
          </p>
        </div>

        {/* Tabs Filter */}
        <Tabs
          value={tab}
          onValueChange={(v) => setTab(v as any)}
          className="w-full"
        >
          <TabsList className="w-full justify-start gap-2 overflow-x-auto">
            {SECTORS.map((s) => (
              <TabsTrigger
                key={s}
                value={s}
                className="data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                {s}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={tab} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((cs) => (
                <CaseCard key={cs.id} cs={cs} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Lead magnet / resources CTA */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            Need documentation for procurement or compliance? Download our
            specification guides.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/resources/marine-warranty-survey-spec.pdf">
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Marine Warranty Survey Spec
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resources/cargo-survey-checklist.pdf">
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Cargo Survey Checklist
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseCard({ cs }: { cs: CaseItem }) {
  return (
    <Card className="group overflow-hidden transition hover:shadow-md">
      {/* Cover */}
      <div className="relative h-40 w-full bg-muted">
        {cs.cover ? (
          <Image src={cs.cover} alt={cs.title} fill className="object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full bg-white/90">
            {cs.sector}
          </Badge>
          {cs.confidential && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className="rounded-full bg-black/70 text-white">
                    <Lock className="mr-1 h-3.5 w-3.5" />
                    Confidential
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">
                    Client identifiers and sensitive data hidden; full
                    documentation available under NDA.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>

      {/* Content */}
      <CardHeader className="pb-3">
        <CardTitle className="text-base md:text-lg leading-tight">
          {cs.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{cs.summary}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-3 grid gap-2 text-sm">
          <Row icon={<MapPin className="h-4 w-4" />} label={cs.location} />
          <Row icon={<Calendar className="h-4 w-4" />} label={cs.date} />
          {cs.value && (
            <Row
              icon={<FileText className="h-4 w-4" />}
              label={`Project value: ${cs.value}`}
            />
          )}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Read case <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{cs.title}</DialogTitle>
              <DialogDescription>{cs.summary}</DialogDescription>
            </DialogHeader>

            <div className="mt-4 grid gap-4">
              <Block title="Challenge">{cs.challenge}</Block>
              <Block title="Solution">
                <ul className="grid gap-2">
                  {cs.solution.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-amber-400" />
                      <span className="text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Impact">
                <ul className="grid gap-2">
                  {cs.impact.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-amber-400" />
                      <span className="text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <Badge variant="secondary" className="rounded-full">
                  Accepted by major insurers
                </Badge>
                <div className="flex gap-2">
                  <Button asChild>
                    <Link href={`/case-studies/${cs.id}`}>Open full case</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/contact?ref=case:${cs.id}`}>
                      Discuss a similar project
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

function Row({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[13px] font-medium uppercase tracking-wide text-[#0b1b31]">
        {title}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
