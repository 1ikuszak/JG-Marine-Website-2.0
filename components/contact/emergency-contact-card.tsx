// components/contact/emergency-contact-card.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, AlertCircle, Clock, Shield } from "lucide-react";
import { CONTACTS } from "@/config";

export default function EmergencyContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-destructive/10 via-destructive/5 to-transparent border-2 border-destructive/30 rounded-lg p-6 sm:p-8"
    >
      {/* Live Badge */}
      <div className="flex items-center gap-2 mb-6">
        <div className="relative">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
          <div className="absolute inset-0 w-2 h-2 bg-destructive rounded-full animate-ping" />
        </div>
        <span className="text-xs font-mono font-bold text-destructive tracking-wider uppercase">
          EMERGENCY RESPONSE ACTIVE
        </span>
      </div>

      {/* Icon */}
      <div className="mb-6">
        <div className="inline-flex p-3 bg-destructive/20 rounded-lg">
          <AlertCircle
            className="h-8 w-8 sm:h-10 sm:w-10 text-destructive"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
        Urgent Survey Needed?
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
        Vessel casualty, cargo damage, or critical breakdown? Call our emergency
        hotline for immediate DNV-certified surveyor assignment.
      </p>

      {/* Emergency Button */}
      <Button
        size="lg"
        className="w-full bg-destructive hover:bg-destructive/90 text-white font-semibold text-base sm:text-lg h-12 sm:h-14 mb-4 group"
        asChild
      >
        <a
          href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2"
        >
          <Phone className="h-5 w-5 group-hover:animate-pulse" />
          Call Emergency Hotline
        </a>
      </Button>

      {/* Response Times */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Surveyor Assignment</span>
          </div>
          <span className="font-bold text-destructive">Within 2h</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>On-Site Arrival</span>
          </div>
          <span className="font-bold text-destructive">Within 24h</span>
        </div>
      </div>
    </motion.div>
  );
}
