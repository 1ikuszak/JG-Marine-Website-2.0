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

const NAV: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About Us" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

const EMERGENCY_TEL = "+48 XXX XXX XXX";
const BANNER_HEIGHT_PX = 36;
const HEADER_HEIGHT_PX = 64; // Approx height for py-4 + logo

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Calculate opacity progression (0-200px scroll range)
  const scrollProgress = Math.min(scrollY / 200, 1);
  const bgOpacity = 0.1 + scrollProgress * 0.9; // 10% -> 100%
  const isTransparent = scrollY < 50;

  // Calculate top position: starts at 36px (emergency banner height), transitions to 0
  const topPosition = Math.max(0, BANNER_HEIGHT_PX - scrollY); // 36px -> 0px

  return (
    <>
      {/* Emergency Banner - Scrolls away naturally */}
      <div
        className="absolute top-0 w-full z-10 bg-destructive text-white"
        style={{ height: `${BANNER_HEIGHT_PX}px` }}
      >
        <div className="mx-auto max-w-screen-2xl px-4 h-full flex items-center justify-center">
          <div className="flex items-center justify-center gap-2 text-sm md:text-[15px]">
            <AlarmClock aria-hidden className="h-4 w-4 shrink-0" />
            <span className="font-medium tracking-tight">
              URGENT SURVEY? 24/7 Hotline:
            </span>

            {/* FIX 1: Added missing <a> tag */}
            <a
              href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}
              className="inline-flex items-center underline-offset-2 hover:underline focus-visible:underline"
            >
              {EMERGENCY_TEL}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Fixed with dynamic top position */}
      <header
        className="fixed z-50 w-full border-b border-white/10 transition-all duration-300"
        style={{
          top: `${topPosition}px`, // Dynamic top position
          backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        role="banner"
      >
        <div
          className={[
            "mx-auto max-w-screen-2xl px-4 transition-all duration-300",
            isTransparent ? "py-4" : "py-3",
          ].join(" ")}
          // Give the inner div a predictable height for the spacer
          style={{ height: isTransparent ? `${HEADER_HEIGHT_PX}px` : `56px` }} // 56px is approx py-3 height
        >
          <div className="flex items-center justify-between gap-3 h-full">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="JG-Marine — Home Page"
            >
              <span className="grid place-items-center">
                <Image
                  width={32}
                  height={32}
                  alt="logo"
                  src={"/logo.svg"}
                  className={`transition-all duration-300 ${
                    isTransparent ? "brightness-0 invert" : ""
                  }`}
                />
              </span>
              <div className="leading-tight">
                <div
                  className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                    isTransparent ? "text-white" : "text-foreground"
                  }`}
                >
                  JG-Marine
                </div>
                <div
                  className={`text-[11px] uppercase tracking-widest transition-colors duration-300 ${
                    isTransparent ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  Co. Ltd.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Primary"
            >
              {NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm transition-colors duration-300 inline-flex items-center gap-1 ${
                      isTransparent
                        ? isActive
                          ? "text-white font-medium"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <Button asChild size="sm" variant="accent">
                <Link href="/contact">Request Survey</Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                asChild
                aria-label="Emergency hotline"
                className={isTransparent ? "text-white hover:bg-white/10" : ""}
              >
                <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Urgent 24/7
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className={
                    isTransparent ? "text-white hover:bg-white/10" : ""
                  }
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[92vw] sm:w-[420px] p-0 flex flex-col"
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
                    aria-label="Call the emergency hotline"
                  >
                    <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Urgent 24/7: {EMERGENCY_TEL}
                    </a>
                  </Button>
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
                    <Link href="/contact">Request Survey</Link>
                  </Button>
                </div>

                <div className="px-4 pb-5 mt-auto">
                  <Separator className="mb-4" />
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
