// components/SiteFooter.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Anchor,
  AlarmClock,
  Phone,
  ShieldCheck,
  Globe2,
  ArrowRight,
} from "lucide-react";

const EMERGENCY_TEL = "+48 123 123 123"; // TODO: replace with real number

export function SiteFooter() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JG-MARINE Co. Ltd.",
    url: "http://www.jg-marine.com",
    logo: "http://www.jg-marine.com/logo.png",
    description:
      "Independent, DNV-certified marine and cargo surveyors providing loss adjusting, marine warranty, audits and risk assessment since 1959.",
    telephone: EMERGENCY_TEL,
    sameAs: [
      "https://www.linkedin.com/company/jg-marine", // TODO: replace if different
    ],
    memberOf: [
      { "@type": "Organization", name: "IIMS" },
      { "@type": "Organization", name: "CESAM" },
    ],
    areaServed: ["PL", "LT", "DE", "EU"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Example 1",
      addressLocality: "Sopot",
      postalCode: "81-000",
      addressCountry: "PL",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Emergency",
        telephone: EMERGENCY_TEL,
        availableLanguage: ["en", "pl"],
        areaServed: "EU",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JG-MARINE",
    url: "http://www.jg-marine.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "http://www.jg-marine.com/search?q={query}",
      "query-input": "required name=query",
    },
  };

  return (
    <footer className="relative mt-16 border-t bg-white">
      {/* Top CTA strip */}
      <div className="border-b bg-[#0b1b31] text-white">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-3 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-2">
            <Anchor className="h-5 w-5" />
            <div className="text-sm md:text-base">
              Need a surveyor now? Independent experts on call 24/7.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild variant="secondary">
              <Link href="/contact">
                Request Survey <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                <AlarmClock className="mr-2 h-4 w-4" />
                Emergency 24/7
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-screen-xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company */}
          <div>
            <div className="text-lg font-semibold tracking-tight text-[#0b1b31]">
              JG-MARINE Co. Ltd.
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Independent marine surveyors & loss adjusters. Baltic expertise
              with international reach since 1959.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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
            <div className="mt-5 text-sm">
              <a
                href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-red-700 underline underline-offset-4"
              >
                <Phone className="h-4 w-4" />
                {EMERGENCY_TEL}
              </a>
              <div className="mt-2 text-xs text-muted-foreground">
                Emergency hotline (24/7)
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-[#0b1b31]">
              Services
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  className="hover:underline"
                  href="/services/marine-surveys"
                >
                  Marine Surveys (H&M/Condition)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/services/marine-warranty-surveys"
                >
                  Marine Warranty Surveys
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/services/cargo-surveys"
                >
                  Cargo Surveys
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/services/loss-adjusting"
                >
                  Loss Adjusting
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/services/audits-inspections-vetting"
                >
                  Audits & Vetting (ISO/ISM/ISPS/MLC)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/services/risk-assessment-accident-investigation"
                >
                  Risk Assessment & Investigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-[#0b1b31]">
              Resources
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  className="hover:underline"
                  href="/resources/marine-warranty-survey-spec.pdf"
                >
                  MWS Spec Guide (PDF)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/resources/cargo-survey-checklist.pdf"
                >
                  Cargo Checklist (PDF)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="/resources/reporting-standards.pdf"
                >
                  Reporting Standards (PDF)
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/resources">
                  Resources Hub
                </Link>
              </li>
            </ul>
            <div className="mt-5 rounded-xl border border-[#0b1b31]/10 bg-[#0b1b31]/5 p-3">
              <div className="text-sm">Need vendor onboarding pack?</div>
              <Link
                href="/resources/vendor-onboarding-pack.zip"
                className="text-sm underline underline-offset-4"
              >
                Download compliance docs
              </Link>
            </div>
          </div>

          {/* Offices */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-[#0b1b31]">
              Offices
            </div>
            <ul className="mt-3 space-y-3 text-sm">
              {[
                { name: "Sopot HQ", addr: "ul. Example 1, 81-000 Sopot, PL" },
                {
                  name: "Szczecin",
                  addr: "ul. Example 2, 70-000 Szczecin, PL",
                },
                { name: "Warsaw", addr: "ul. Example 3, 00-000 Warszawa, PL" },
              ].map((o) => (
                <li key={o.name}>
                  <div className="font-medium">{o.name}</div>
                  <div className="text-muted-foreground">{o.addr}</div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Globe2 className="h-4 w-4" />
              <span>Operations in 11+ countries</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span>
              Independent reporting guarantee • Multilingual documentation
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link className="hover:underline" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:underline" href="/terms">
              Terms
            </Link>
            <span>© {new Date().getFullYear()} JG-MARINE</span>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </footer>
  );
}
