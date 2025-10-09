// components/FAQCompliance.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ShieldCheck,
  FileText,
  Languages,
  AlarmClock,
  Scale,
  Download,
  Globe2,
  FileCheck2,
  ClipboardList,
} from "lucide-react";

const navy = "text-[#0b1b31]";
const gold = "text-amber-400";

export function FAQCompliance() {
  return (
    <section id="faq" className="relative border-t bg-white">
      {/* subtle premium backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b31]/3 via-transparent to-transparent" />
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            Compliance & FAQ
          </div>
          <h2
            className={`mt-2 text-2xl md:text-4xl font-semibold tracking-tight ${navy}`}
          >
            Credentials, Reporting & Engagement Terms
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Straight answers to the most common procurement, compliance, and
            reporting questions from insurers, shipowners, and legal teams.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left rail: proof & resources */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="border-[#0b1b31]/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">
                  Accepted by Major Insurers
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    DNV-GL
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    IIMS
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    CESAM
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    Flag State
                  </Badge>
                </div>
                <Separator />
                <ul className="grid gap-2">
                  <li className="flex items-start gap-2">
                    <FileCheck2 className={`mt-0.5 h-4 w-4 ${gold}`} />
                    <span>
                      Reports recognized by P&amp;I clubs and H&amp;M
                      underwriters
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className={`mt-0.5 h-4 w-4 ${gold}`} />
                    <span>
                      Evidence handling and chain of custody procedures
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className={`mt-0.5 h-4 w-4 ${gold}`} />
                    <span>
                      Independent, unbiased findings suitable for arbitration
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#0b1b31]/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">
                  Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/marine-warranty-survey-spec.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Marine Warranty Survey – Spec Guide (PDF)
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/cargo-survey-checklist.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Cargo Survey – Checklist (PDF)
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/reporting-standards.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Reporting Standards & Evidence (PDF)
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#0b1b31]/10">
              <CardContent className="pt-6">
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <AlarmClock className="h-4 w-4 text-red-600" />
                    <span>Emergency dispatch ≤ 4 h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-[#0b1b31]" />
                    <span>Multilingual documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-[#0b1b31]" />
                    <span>Operations in 11+ countries</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right rail: FAQ */}
          <div className="lg:col-span-2">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="acceptance">
                <AccordionTrigger className="text-left">
                  Are your survey reports accepted by major insurers and P&amp;I
                  clubs?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. Our reporting structure aligns with insurer expectations
                  and international standards. We are recognized by{" "}
                  <strong>DNV-GL</strong>, <strong>IIMS</strong>, and work
                  within the
                  <strong> CESAM</strong> ecosystem. Reports include
                  photographic evidence, defect coding, scope, and conclusions
                  suitable for underwriting and claims decisions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dispatch">
                <AccordionTrigger className="text-left">
                  How fast can you dispatch a qualified surveyor?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  For emergencies, we target <strong>≤ 4 hours</strong> to
                  Baltic ports (documentation permitting). Standard surveys are
                  scheduled within <strong>24–48 hours</strong>. See our{" "}
                  <Link
                    href="#global-reach"
                    className="underline underline-offset-4"
                  >
                    Global Reach
                  </Link>{" "}
                  section for typical ETAs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="languages">
                <AccordionTrigger className="text-left">
                  Which languages do you support for reports and communication?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  We prepare reports in <strong>English</strong> and{" "}
                  <strong>Polish</strong> as standard. Additional languages can
                  be arranged on request for cross-border stakeholders.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="confidentiality">
                <AccordionTrigger className="text-left">
                  How do you handle confidentiality and client-sensitive data?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Case materials follow strict <strong>chain of custody</strong>{" "}
                  and access control. Public case studies anonymize identifiers;
                  full documentation is provided under <strong>NDA</strong> upon
                  request.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranty">
                <AccordionTrigger className="text-left">
                  What is included in a Marine Warranty Survey (MWS) scope?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Scope typically covers <em>method statements</em>,{" "}
                  <em>lift plans</em>, <em>sea-fastening</em>, weather windows,
                  and conformity to standards. Deliverables: review comments,
                  site attendance logs, photographic evidence, and acceptance
                  notes aligned with insurer requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fees">
                <AccordionTrigger className="text-left">
                  What are your typical fees and commercial terms?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Fees depend on scope, location, and urgency. Typical ranges
                  are shown on service cards; we provide a fixed-price or capped
                  T&amp;M quote after a short scoping call. Standard terms
                  include expense pass-through and insurer-accepted invoicing
                  formats.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="evidence">
                <AccordionTrigger className="text-left">
                  What evidence standards do you follow for claims and
                  arbitration?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  We document <strong>time-stamped photos</strong>,{" "}
                  <strong>witness statements</strong>, and
                  <strong> source records</strong> with traceable references.
                  Findings and conclusions are written to be defensible in
                  arbitration, with <strong>independence</strong> explicitly
                  stated.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="availability">
                <AccordionTrigger className="text-left">
                  Can you operate outside Poland and the Baltic region?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes. We coordinate internationally with retained partners
                  while maintaining <strong>independent oversight</strong> and
                  final reporting responsibility to ensure consistency and
                  acceptance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-col items-start gap-3 rounded-xl border border-[#0b1b31]/10 bg-[#0b1b31]/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm">
                Need a formal compliance letter or vendor onboarding pack?
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href="/resources/vendor-onboarding-pack.zip">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Vendor Pack
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Request Confirmation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
