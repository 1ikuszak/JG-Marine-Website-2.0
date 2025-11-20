"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, AlertCircle, Clock, MapPin } from "lucide-react";
import { CONTACTS } from "@/config";

export default function EmergencyContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-destructive/10 via-destructive/5 to-transparent border-2 border-destructive/30 rounded-lg p-8"
    >
      {/* Live Badge */}
      <div className="flex items-center gap-2 mb-6">
        <div className="relative">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
          <div className="absolute inset-0 w-2 h-2 bg-destructive rounded-full animate-ping" />
        </div>
        <span className="text-xs font-mono font-bold text-destructive tracking-wider uppercase">
          24/7 AVAILABLE
        </span>
      </div>

      {/* Icon */}
      <div className="mb-6">
        <div className="inline-flex p-3 bg-destructive/20 rounded-lg">
          <AlertCircle
            className="h-10 w-10 text-destructive"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Content - GP: SHORT sentences */}
      <h3 className="text-2xl font-bold text-foreground mb-3">
        Emergency Survey
      </h3>
      <div className="space-y-3 text-base text-muted-foreground mb-6 leading-relaxed">
        <p>Vessel casualty? Cargo damage? Critical breakdown?</p>
        <p>
          Call our emergency hotline for immediate DNV-certified surveyor
          assignment.
        </p>
      </div>

      {/* Emergency Button - SHOWS ACTUAL NUMBER */}
      <Button
        size="lg"
        className="w-full bg-destructive hover:bg-destructive/90 text-white font-semibold text-lg h-14 mb-4 group"
        asChild
      >
        {/* FIX: Added the opening <a> tag here */}
        <a
          href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2"
        >
          <Phone className="h-5 w-5 group-hover:animate-pulse" />
          {CONTACTS.main.phone}
        </a>
      </Button>
      <Button
        size="lg"
        className="w-full font-semibold text-lg h-14 mb-4 group"
        variant={"outline"}
        asChild
      >
        {/* FIX: Added the opening <a> tag here */}
        <a
          href={`tel:${CONTACTS.main.phone2.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2"
        >
          <Phone className="h-5 w-5 group-hover:animate-pulse" />
          {CONTACTS.main.phone2}
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
            <MapPin className="h-4 w-4" />
            <span>On-Site (Baltic Region)</span>
          </div>
          <span className="font-bold text-destructive">Within 24h</span>
        </div>
      </div>
    </motion.div>
  );
}
