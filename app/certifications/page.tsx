// app/certifications/page.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Shield, CheckCircle } from "lucide-react";
import { CertificateCard } from "@/components/certifications/certificate-card";
import { CertificateLightbox } from "@/components/certifications/certificate-lightbox";
import { Button } from "@/components/ui/button";
import {
  Certificate,
  CertificateCategory,
} from "@/components/certifications/types";
import { certificates } from "@/data/certificates";

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
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-foreground overflow-hidden">
        {/* Premium Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[140px]" />
        </div>

        <div className="container relative mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-accent" />
              <p className="font-mono text-xs font-bold text-accent tracking-[0.3em] uppercase">
                CERTIFIED EXCELLENCE
              </p>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-accent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              International Certifications & Accreditations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12"
            >
              64 years of maritime heritage backed by the highest international
              standards and continuous professional development
            </motion.p>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">20+</p>
                <p className="text-sm text-white/60">
                  International Certifications
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">DNV</p>
                <p className="text-sm text-white/60">Certified Standards</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-white mb-1">100%</p>
                <p className="text-sm text-white/60">Compliance Record</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border py-6">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredCertificates.length} of {certificates.length}{" "}
              certifications
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          {filteredCertificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Additional Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Commitment to Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every member of our team maintains current certifications through
              continuous professional development. Our credentials are regularly
              audited and updated to meet the latest international standards.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Verify Our Credentials</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <CertificateLightbox
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}
