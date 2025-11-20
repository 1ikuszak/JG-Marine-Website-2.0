"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeritageCtaSection from "@/components/about/heritage-cta";
import TeamSectionWhiteUniform from "@/components/home/team-section";
import OfficeLocationsSection from "@/components/about/office-coverage";
import TrustProofSection from "@/components/home/trust-proof-section";
import AboutHeroSection from "@/components/about/hero-section";
import HeritageStorySection from "@/components/about/heritage-story";
import CredentialsSection from "@/components/about/credentials-section";
import AdvantagesSection from "@/components/about/advantage-section";
import LogoScrollerSection from "@/components/about/logo-scroller";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Three Generations / Master Mariners */}
      <AboutHeroSection />

      {/* Heritage Story - Built on the bridge, not the boardroom */}
      <HeritageStorySection />

      {/* Credentials - Flag states, certifications, memberships */}
      <CredentialsSection />

      {/* Advantages - 24h response, seagoing experience, independence, Eastern Europe */}
      <AdvantagesSection />

      {/* Team Section - Keep existing profiles */}
      <TeamSectionWhiteUniform />

      {/* Office Locations - Sopot, Szczecin, Warsaw */}
      <OfficeLocationsSection />

      {/* Logo Scroller - DNV, partners */}
      <LogoScrollerSection />

      {/* CTA - Request Survey */}
      <HeritageCtaSection />

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
