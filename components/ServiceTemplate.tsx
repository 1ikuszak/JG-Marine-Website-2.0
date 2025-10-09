// components/ServiceTemplate.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  AlarmClock,
  ShieldCheck,
  FileDown,
  ChevronRight,
  MapPin,
  Clock,
  Ship,
  ClipboardList,
} from "lucide-react";

type Step = { label: string; desc: string };

export type ServiceTemplateProps = {
  /** slug używany w CTA i breadcrumb, np. "marine-warranty-surveys" */
  slug: string;
  /** Nazwa usługi widoczna jako H1 */
  title: string;
  /** Krótkie zdanie korzyści pod tytułem */
  benefitHeadline: string;
  /** Snapshot nad foldem (pola opcjonalne wyświetlają się tylko gdy są) */
  aboveFold?: {
    range?: string; // np. "€10,000–€50,000"
    response?: string; // np. "≤ 24 h"
    coverage?: string; // np. "Baltic + International"
  };
  /** 1 akapit opisu */
  summary: string;
  /** Lista „what we do” */
  bullets: string[];
  /** Dlaczego JG-MARINE */
  differentiators: string[];
  /** Kroki procesu (4–6) */
  steps: Step[];
  /** Opcjonalny lead magnet */
  leadMagnet?: { label: string; href: string };
  /** Opcjonalny podgląd case study */
  casePreview?: {
    title: string;
    impact: string[];
    href: string;
    cover?: string;
  };
  /** Odznaki certyfikacji; domyślnie standardowe */
  certifications?: string[];
  /** Czy pokazywać Emergency CTA */
  emergency?: boolean;
  /** Telefon alarmowy */
  emergencyTel?: string;
};

const NAVY = "#0b1b31";
const GOLD_CLASS = "text-amber-400";

export function ServiceTemplate({
  slug,
  title,
  benefitHeadline,
  aboveFold,
  summary,
  bullets,
  differentiators,
  steps,
  leadMagnet,
  casePreview,
  certifications = ["DNV-GL", "IIMS", "CESAM", "Flag State"],
  emergency = true,
  emergencyTel = "+48 123 123 123",
}: ServiceTemplateProps) {
  return (
    <section className="relative">
      {/* premium tint tła */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b31]/3 via-transparent to-transparent" />

      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-16">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-muted-foreground">{title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1
              className="text-2xl md:text-4xl font-semibold tracking-tight"
              style={{ color: NAVY }}
            >
              {title}
            </h1>
            <p className="mt-2 text-lg text-gray-700">{benefitHeadline}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {certifications.map((c) => (
                <Badge key={c} variant="secondary" className="rounded-full">
                  {c}
                </Badge>
              ))}
              {emergency && (
                <Badge className="rounded-full bg-red-600 text-white">
                  Emergency
                </Badge>
              )}
            </div>
          </div>

          {/* Snapshot */}
          <Card className="border-[#0b1b31]/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Project Snapshot</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              {aboveFold?.range && (
                <Row label="Typical Range" value={aboveFold.range} />
              )}
              {aboveFold?.response && (
                <Row
                  label="Response"
                  value={
                    <span className="inline-flex items-center gap-2">
                      {aboveFold.response}
                      <Clock className="h-4 w-4" />
                    </span>
                  }
                />
              )}
              {aboveFold?.coverage && (
                <Row
                  label="Coverage"
                  value={
                    <span className="inline-flex items-center gap-2">
                      {aboveFold.coverage}
                      <MapPin className="h-4 w-4" />
                    </span>
                  }
                />
              )}
              <div className="pt-2">
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/contact?service=${encodeURIComponent(slug)}`}>
                      Request Quote
                    </Link>
                  </Button>
                  {emergency && (
                    <Button variant="destructive" asChild>
                      <a href={`tel:${emergencyTel.replace(/\s/g, "")}`}>
                        <AlarmClock className="mr-2 h-4 w-4" />
                        Emergency
                      </a>
                    </Button>
                  )}
                </div>
                {leadMagnet && (
                  <Button variant="outline" asChild className="mt-2 w-full">
                    <Link href={leadMagnet.href}>
                      <FileDown className="mr-2 h-4 w-4" />
                      {leadMagnet.label}
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What we do + Why us */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 border-[#0b1b31]/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-base md:text-lg">What We Do</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <p className="text-sm text-muted-foreground">{summary}</p>
              <ul className="grid gap-2 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <ShieldCheck className={`mt-0.5 h-4 w-4 ${GOLD_CLASS}`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#0b1b31]/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-base md:text-lg">
                Why JG-MARINE
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2 text-sm">
              {differentiators.map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <Ship className={`mt-0.5 h-4 w-4 ${GOLD_CLASS}`} />
                  <span>{d}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold" style={{ color: NAVY }}>
            Process Overview
          </h3>
          <Separator className="my-3" />
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((s, idx) => (
              <Card key={`${idx}-${s.label}`} className="border-[#0b1b31]/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">
                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#0b1b31]/20 text-[#0b1b31]">
                      {idx + 1}
                    </span>
                    {s.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  {s.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Preview + Inline Lead (opcjonalnie) */}
        {casePreview && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2 overflow-hidden border-[#0b1b31]/10">
              <div className="relative h-44 w-full bg-muted">
                {casePreview.cover && (
                  <Image
                    src={casePreview.cover}
                    alt={casePreview.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-white/90"
                  >
                    Case Study
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base md:text-lg">
                  {casePreview.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="grid gap-2 text-sm">
                  {casePreview.impact.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ClipboardList
                        className={`mt-0.5 h-4 w-4 ${GOLD_CLASS}`}
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4">
                  <Link href={casePreview.href}>
                    Open case <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#0b1b31]/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  Request Custom Proposal
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Input placeholder="Your name" />
                <Input placeholder="Company" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
                <Textarea
                  placeholder="Scope, vessel/cargo, location, deadlines…"
                  className="min-h-[100px]"
                />
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/contact?service=${encodeURIComponent(slug)}`}>
                      Send
                    </Link>
                  </Button>
                  {emergency && (
                    <Button variant="destructive" asChild>
                      <a href={`tel:${emergencyTel.replace(/\s/g, "")}`}>
                        <AlarmClock className="mr-2 h-4 w-4" />
                        Emergency
                      </a>
                    </Button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to confidential handling. Response
                  within 4 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
