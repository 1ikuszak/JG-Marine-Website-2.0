"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

// <-- CHANGED: Import the main OFFICES config
// (Path assumes /src/components/ and /src/config/)
import { OFFICES } from "../../config/offices";

// <-- CHANGED: Create a helper to map IDs to the short names
// this component needs
const officeShortNames: { [key: string]: string } = {
  sopot: "Sopot HQ",
  szczecin: "Szczecin Branch",
  warsaw: "Warsaw Office",
};

// <-- CHANGED: We now build the 'offices' array by
// transforming the data from the imported config file.
const offices = OFFICES.map((office) => ({
  name: officeShortNames[office.id] || office.address.city, // Use short name
  tagline: office.tagline, // Use tagline from config
  address: `${office.address.postalCode} ${office.address.street}`, // Combine fields
  phone: office.contact.phone, // Use correct phone from config
  email: office.contact.email, // Use correct email from config
}));

// <-- DELETED: The old, hard-coded 'offices' array is now gone.

export default function OfficeLocationsCompact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-card border border-border rounded-lg p-6 sm:p-8"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            Our Offices
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Strategic presence across Poland's major maritime hubs
        </p>
      </div>

      {/* Offices List */}
      <div className="space-y-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="pb-6 border-b border-border last:border-0 last:pb-0"
          >
            {/* Office Name */}
            <div className="mb-3">
              <p className="font-semibold text-foreground text-base sm:text-lg">
                {office.name}
              </p>
              <p className="text-xs sm:text-sm text-primary font-medium">
                {office.tagline}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {office.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {office.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <a
                  href={`mailto:${office.email}`}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {office.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coverage Note */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          <MapPin className="inline h-3 w-3 mr-1" />
          Full coverage across 11+ European countries
        </p>
      </div>
    </motion.div>
  );
}
