// components/ContactGateway.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  AlarmClock,
  Phone,
  MapPin,
  ShieldCheck,
  Send,
  Building2,
} from "lucide-react";

const EMERGENCY_TEL = "+48 123 123 123"; // TODO: replace with real number

export function ContactGateway() {
  return (
    <section id="contact" className="relative bg-white border-t">
      {/* subtle navy backdrop tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1b31]/3 via-transparent to-transparent" />
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-[#0b1b31]">
            Contact & Emergency
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            All inquiries answered within{" "}
            <span className="font-medium">4 hours</span>. For urgent cases, call
            our 24/7 hotline for immediate dispatch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {/* Smart Contact Form */}
          <Card className="md:col-span-3 border-[#0b1b31]/10">
            <CardHeader className="pb-4">
              <CardTitle className="text-base md:text-lg text-[#0b1b31]">
                Request Survey / Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mws">
                        Marine Warranty Survey
                      </SelectItem>
                      <SelectItem value="hull">
                        Hull & Machinery / Condition
                      </SelectItem>
                      <SelectItem value="cargo">Cargo Survey</SelectItem>
                      <SelectItem value="loss">Loss Adjusting</SelectItem>
                      <SelectItem value="audit">
                        Audits & Compliance (ISO/ISM/ISPS/MLC)
                      </SelectItem>
                      <SelectItem value="risk">
                        Risk Assessment / Investigation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="urgency">Urgency</Label>
                  <Select>
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Emergency · Urgent · Standard · Planning" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">
                        Emergency (dispatch ASAP)
                      </SelectItem>
                      <SelectItem value="urgent">Urgent (≤ 24 h)</SelectItem>
                      <SelectItem value="standard">
                        Standard (2–3 days)
                      </SelectItem>
                      <SelectItem value="planning">
                        Planning (scope/quote)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="projectValue">Project Value (approx.)</Label>
                  <Input id="projectValue" placeholder="e.g., €50,000" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location / Port</Label>
                  <Input id="location" placeholder="e.g., Gdańsk, PL" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="details">Brief Project Details</Label>
                <Textarea
                  id="details"
                  placeholder="Vessel/cargo, incident or scope, deadlines, documentation requirements…"
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Full name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Organization" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+44 ..." />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="rounded-full">
                    Free 30-min consultation
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    Confidential handling
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    Reports accepted by major insurers
                  </Badge>
                </div>
                <Button className="min-w-[180px]">
                  <Send className="mr-2 h-4 w-4" />
                  Send Request
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Emergency + Offices */}
          <div className="md:col-span-2 grid gap-4">
            <Card className="border-red-600/30">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlarmClock className="h-5 w-5" />
                  Emergency Hotline (24/7)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <a
                  href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-red-700 underline underline-offset-4"
                >
                  <Phone className="h-4 w-4" />
                  {EMERGENCY_TEL}
                </a>
                <p className="text-muted-foreground">
                  Response guarantee: ≤ 4 hours
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-600 text-white rounded-full">
                    Dispatch now
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    Multilingual team
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#0b1b31]/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-[#0b1b31]">
                  <Building2 className="h-5 w-5" />
                  Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                {[
                  {
                    name: "Sopot HQ",
                    tel: EMERGENCY_TEL,
                    addr: "ul. Example 1, 81-000 Sopot, PL",
                  },
                  {
                    name: "Szczecin",
                    tel: EMERGENCY_TEL,
                    addr: "ul. Example 2, 70-000 Szczecin, PL",
                  },
                  {
                    name: "Warsaw",
                    tel: EMERGENCY_TEL,
                    addr: "ul. Example 3, 00-000 Warszawa, PL",
                  },
                ].map((o) => (
                  <div
                    key={o.name}
                    className="flex items-start justify-between gap-4 rounded-lg border p-3"
                  >
                    <div>
                      <div className="font-medium">{o.name}</div>
                      <div className="mt-1 flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{o.addr}</span>
                      </div>
                    </div>
                    <a
                      href={`tel:${o.tel.replace(/\s/g, "")}`}
                      className="text-sm underline underline-offset-4"
                    >
                      Call
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-[#0b1b31]/10">
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  <span className="text-muted-foreground">
                    Latest project: €45M offshore survey completed this week
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Secondary CTA */}
            <div className="flex items-center justify-between gap-2 rounded-xl border border-[#0b1b31]/10 bg-[#0b1b31]/5 px-4 py-3">
              <span className="text-sm text-[#0b1b31]">
                Prefer email? Send specs and documents directly.
              </span>
              <Button variant="outline" asChild>
                <Link href="mailto:contact@jg-marine.com">Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
