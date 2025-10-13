"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, Anchor, AlarmClock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

type NavItem = { href: string; label: string };

// TRANSLATED: Navigation items updated to English.
const NAV: NavItem[] = [
  { href: "/services", label: "Services" }, // [cite: 18]
  { href: "/case-studies", label: "Case Studies" }, // [cite: 27]
  { href: "/about", label: "About Us" }, // [cite: 32]
  { href: "/certifications", label: "Certifications" }, // [cite: 29]
  { href: "/contact", label: "Contact" }, // [cite: 46]
];

const EMERGENCY_TEL = "+48 XXX XXX XXX";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-destructive text-white">
        <div className="mx-auto max-w-screen-2xl px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-sm md:text-[15px]">
            <AlarmClock aria-hidden className="h-4 w-4 shrink-0" />
            {/* TRANSLATED: Banner text updated. */}
            <span className="font-medium tracking-tight">
              URGENT SURVEY? 24/7 Hotline:
            </span>
            <a
              href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}
              className="inline-flex items-center underline-offset-2 hover:underline focus-visible:underline"
            >
              {EMERGENCY_TEL}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={[
          "sticky top-0 z-50 w-full border-b transition-all duration-200",
          "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          scrolled ? "shadow-sm" : "",
        ].join(" ")}
        role="banner"
      >
        <div
          className={[
            "mx-auto max-w-screen-2xl px-4 transition-all duration-200",
            scrolled ? "py-3" : "py-4",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              // TRANSLATED: Aria-label updated for accessibility.
              aria-label="JG-Marine — Home Page"
            >
              <span className="grid place-items-center">
                <Image
                  width={32}
                  height={32}
                  alt="logo"
                  src={"logo.svg"}
                  className="text-foreground group-hover:text-accent transition-colors"
                />
              </span>
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-tight text-foreground">
                  JG-Marine
                </div>
                <div className="text-[11px] uppercase text-muted-foreground tracking-widest">
                  Co. Ltd.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Primary"
            >
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors inline-flex items-center gap-1 ${
                    pathname === item.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {/* TRANSLATED: CTA updated. */}
                <Link href="/contact">Request Survey</Link>
              </Button>

              <Button
                variant="destructive"
                size="sm"
                asChild
                aria-label="Emergency hotline"
              >
                <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {/* TRANSLATED: CTA updated. */}
                  Urgent 24/7
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                {/* TRANSLATED: Aria-label updated. */}
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[92vw] sm:w-[420px] p-0"
                // TRANSLATED: Aria-label updated.
                aria-label="Mobile navigation"
              >
                <div className="flex items-center justify-between px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-muted">
                      <Anchor className="h-4 w-4 text-foreground" />
                    </span>
                    <div className="text-base font-semibold">JG-Marine</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    // TRANSLATED: Aria-label updated.
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <Separator />

                <div className="px-4 py-4">
                  <Button
                    variant="destructive"
                    className="w-full"
                    asChild
                    // TRANSLATED: Aria-label updated.
                    aria-label="Call the emergency hotline"
                  >
                    <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      {/* TRANSLATED: CTA updated. */}
                      Urgent 24/7: {EMERGENCY_TEL}
                    </a>
                  </Button>
                  {/* TRANSLATED & CORRECTED: Text aligned with strategy document. */}
                  <p className="mt-2 text-xs text-muted-foreground">
                    Response commitment: Surveyor assigned in &lt;2 hours.
                  </p>
                </div>
                <Separator />

                <nav
                  className="flex flex-col gap-1 px-2 py-2"
                  aria-label="Mobile"
                >
                  {NAV.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-[15px] transition-colors ${
                        pathname === item.href
                          ? "bg-muted font-medium text-foreground"
                          : "hover:bg-muted focus-visible:bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Separator />

                <div className="flex flex-col gap-2 px-4 py-4">
                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {/* TRANSLATED: CTA updated. */}
                    <Link href="/contact">Request Survey</Link>
                  </Button>
                </div>

                <div className="px-4 pb-5 mt-auto">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                    <Badge variant="secondary">DNV</Badge>
                    <Badge variant="secondary">IIMS</Badge>
                    <Badge variant="secondary">CESAM</Badge>
                    <span className="ml-auto">
                      © {new Date().getFullYear()} JG-Marine
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
