// components/Differentiation.tsx
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Timer,
  PhoneCall,
  Factory,
  Layers,
  ChevronRight,
} from "lucide-react";

export function Differentiation() {
  return (
    <section id="why-us" className="relative">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 py-12 md:py-20">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Why Maritime Professionals Choose JG-Marine
          </h2>
          <p className="mt-2 text-muted-foreground max-w-3xl">
            Independent authority, direct access to certified surveyors, and
            response when minutes matter.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Global Networks (control) */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Layers className="h-5 w-5" />
                Global Networks
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Typical response</span>
                <span>48–72 h</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Point of contact</span>
                <span>Call centers</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Delivery model</span>
                <span>Outsourced pool</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Structure</span>
                <span>Multiple layers</span>
              </div>
            </CardContent>
          </Card>

          {/* JG-Marine (treatment) */}
          <Card className="border-green-600/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <ShieldCheck className="h-5 w-5 text-green-700" />
                JG-Marine
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Response</span>
                <span className="inline-flex items-center gap-2">
                  ≤ 4 h <Timer className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Contact</span>
                <span className="font-medium">Direct surveyor</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Knowledge</span>
                <span>3-generation expertise</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Independence</span>
                <span>No corporate layers</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">DNV-GL</Badge>
                <Badge variant="secondary">IIMS</Badge>
                <Badge variant="secondary">CESAM</Badge>
                <Badge variant="secondary">Flag State Inspector</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial + CTA */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardContent className="pt-6 text-sm">
              <p className="italic leading-relaxed">
                “Direct access to certified surveyors saved us critical time
                during an emergency survey.”
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Claims Director, International P&amp;I Club
              </p>
            </CardContent>
          </Card>

          <div className="flex items-stretch">
            <Card className="w-full">
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-4 w-4" />
                    <span>Emergency availability 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Factory className="h-4 w-4" />
                    <span>Offshore wind & heavy lift</span>
                  </div>
                </div>
                <Button asChild className="mt-5 w-full">
                  <a
                    href="#how-we-work"
                    className="flex items-center justify-center gap-2"
                  >
                    See How We Work Differently{" "}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
