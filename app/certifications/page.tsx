// app/certifications/page.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, ChevronDown } from "lucide-react";
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
      {/* Hero Section - Mobile Optimized */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-foreground overflow-hidden">
        {/* Premium Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/15 rounded-full blur-[100px] sm:blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[350px] sm:w-[500px] lg:w-[700px] h-[350px] sm:h-[500px] lg:h-[700px] bg-accent/10 rounded-full blur-[100px] sm:blur-[140px]" />
        </div>

        <div className="container relative mx-auto max-w-screen-xl px-4 sm:px-6 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-r from-transparent to-accent" />
              <p className="font-mono text-[10px] sm:text-xs font-bold text-accent tracking-[0.3em] uppercase">
                CERTIFIED EXCELLENCE
              </p>
              <div className="h-[2px] w-6 sm:w-8 bg-gradient-to-l from-transparent to-accent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              International Certifications & Accreditations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed mb-8 sm:mb-10 md:mb-12 px-4"
            >
              64 years of maritime heritage backed by the highest international
              standards and continuous professional development
            </motion.p>

            {/* Trust Metrics - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-6 rounded-lg">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent mx-auto mb-2 sm:mb-3" />
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  20+
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/60">
                  International Certifications
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-6 rounded-lg">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent mx-auto mb-2 sm:mb-3" />
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  DNV
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/60">
                  Certified Standards
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-6 rounded-lg">
                <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-accent mx-auto mb-2 sm:mb-3" />
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  100%
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/60">
                  Compliance Record
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section - REDESIGNED for Mobile */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-3 sm:py-4 md:py-6">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 md:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            {/* Results Count */}
            <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
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

      {/* Certificates Grid - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 md:px-6">
          {filteredCertificates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCertificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  {...certificate}
                  onClick={() => setSelectedCertificate(certificate)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <p className="text-muted-foreground text-base sm:text-lg">
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
