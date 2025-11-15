// app/certifications/page.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";
import { CertificateCard } from "@/components/certifications/certificate-card";
import { CertificateLightbox } from "@/components/certifications/certificate-lightbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Certificate,
  CertificateCategory,
} from "@/components/certifications/types";
import { certificates } from "@/data/certificates";
import CredentialsCtaSection from "@/components/certifications/credentials-cta";

const categories: CertificateCategory[] = [
  "All",
  "DNV Certifications",
  "Flag State Authorizations",
  "Professional Memberships",
  "Chamber Certifications",
  "Safety & Auditing",
  "Specialized Maritime Training",
  "Company Policies & Appointments",
];

export default function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<CertificateCategory>("All");
  const [selectedCertificate, setSelectedCertificate] =
    React.useState<Certificate | null>(null);

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <>
      {/* Hero Section - Rewritten */}
      <section className="relative py-24 lg:py-32 bg-foreground overflow-hidden">
        {/* Premium Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[140px]" />
        </div>

        <div className="container relative mx-auto max-w-screen-xl px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-accent" />
              <p className="font-mono text-xs font-bold text-accent tracking-[0.3em] uppercase">
                PROFESSIONAL ACCREDITATION
              </p>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-accent" />
            </motion.div>

            {/* Headline - GP: SHORT impact */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Certifications and Memberships
            </motion.h1>

            {/* Subtext - GP: Varied rhythm */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              {/* MEDIUM sentence */}
              <p>
                DNV-certified surveyors serving the Baltic maritime industry
                since 1968.
              </p>

              {/* LONG sentence - builds importance */}
              <p>
                Our certifications span flag state authorizations, professional
                memberships, and specialized maritime training, enabling
                operations across 11+ European countries with recognition from
                P&I Clubs and classification societies worldwide.
              </p>
            </motion.div>

            {/* Trust Metrics - NO ABSOLUTES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {/* Stat 1: Certifications Count */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">20+</p>
                <p className="text-sm text-white/60">Active Certifications</p>
              </div>

              {/* Stat 2: DNV */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">DNV</p>
                <p className="text-sm text-white/60">Certified Standards</p>
              </div>

              {/* Stat 3: Years Accredited - REPLACED "100% Compliance" */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <FileCheck className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">64</p>
                <p className="text-sm text-white/60">Years Accredited</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section - Keep as-is (functionality is good) */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-6">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Results Count */}
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              <span className="font-semibold text-foreground">
                {filteredCertificates.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">
                {certificates.length}
              </span>{" "}
              certifications
            </p>

            {/* Mobile: Dropdown Select | Desktop: Horizontal Scroll */}
            <div className="w-full sm:w-auto">
              {/* Mobile/Tablet: Select Dropdown */}
              <div className="block lg:hidden w-full">
                <Select
                  value={selectedCategory}
                  onValueChange={(value) =>
                    setSelectedCategory(value as CertificateCategory)
                  }
                >
                  <SelectTrigger className="w-full h-10 border-2 hover:border-primary transition-colors">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Desktop: Horizontal Scroll Pills */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="text-xs whitespace-nowrap"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Active Filter Indicator (Mobile) */}
          {selectedCategory !== "All" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 flex items-center gap-2 lg:hidden"
            >
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                <span className="text-xs font-medium text-primary">
                  {selectedCategory}
                </span>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="text-primary hover:text-primary/70 transition-colors"
                >
                  <span className="sr-only">Clear filter</span>
                  <span className="text-xs">✕</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Certificates Grid - Keep as-is (functionality is good) */}
      <section className="py-32 bg-background">
        <div className="container mx-auto max-w-screen-xl px-6">
          {filteredCertificates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  {...certificate}
                  onClick={() => setSelectedCertificate(certificate)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No certifications found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      <CredentialsCtaSection />

      {/* Lightbox Modal */}
      <CertificateLightbox
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}
