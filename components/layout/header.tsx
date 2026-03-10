"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, Anchor, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { CONTACTS } from "@/config";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const EMERGENCY_TEL = CONTACTS.main.phone;
const BANNER_HEIGHT_PX = 36;


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Calculate top position: only offset for banner on home page
  const topPosition = isHomePage ? Math.max(0, BANNER_HEIGHT_PX - scrollY) : 0;

  return (
    <>
      {/* Emergency Banner - Only shown on home page */}
      {isHomePage && (
        <div
          className="absolute top-0 w-full z-10 bg-destructive text-white"
          style={{ height: `${BANNER_HEIGHT_PX}px` }}
        >
          <div className="mx-auto max-w-screen-2xl px-4 h-full flex items-center justify-center">
            <div className="flex items-center justify-center gap-2 text-sm md:text-base">
              <span className="font-medium tracking-tight">
                24/7 Emergency Survey Response:
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
      )}

      {/* Main Header - Fixed with dynamic styling based on page */}
      <header
        className="fixed z-50 w-full border-b border-border bg-background/[0.97] backdrop-blur-[12px] transition-all duration-300"
        style={{
          top: `${topPosition}px`,
        }}
        role="banner"
      >
        <div
          className="mx-auto max-w-screen-2xl px-4 py-3"
          style={{ height: "56px" }}
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
                  alt=""
                  src={"/logo.svg"}
                  className="transition-all duration-300"
                />
              </span>
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-tight text-foreground">
                  JG-Marine
                </div>
                <div className="label-caps text-muted-foreground">
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
                    className={`text-nav inline-flex items-center gap-1 ${
                      isActive
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
            <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200"
                asChild
                aria-label="Call us"
              >
                <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {EMERGENCY_TEL}
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
                    variant="default"
                    className="w-full"
                    asChild
                    aria-label="Call us"
                  >
                    <a href={`tel:${EMERGENCY_TEL.replace(/\s/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      {EMERGENCY_TEL}
                    </a>
                  </Button>
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
                      className={`rounded-md px-3 py-2 text-base transition-colors ${
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
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>

                <div className="px-4 pb-5 mt-auto">
                  <Separator className="mb-4" />
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
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
