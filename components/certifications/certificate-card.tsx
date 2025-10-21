// components/certifications/certificate-card.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Calendar, Building2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CertificateCardProps {
  id: string;
  title: string;
  issuingAuthority: string;
  date: string;
  category: string;
  imageUrl: string;
  description?: string;
  certificateNumber?: string;
  onClick: () => void;
}

export function CertificateCard({
  title,
  issuingAuthority,
  date,
  category,
  imageUrl,
  description,
  certificateNumber,
  onClick,
}: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-full bg-card border-2 border-border hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
        {/* Category Badge - Top Right */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
          <Badge
            variant="secondary"
            className="bg-primary/90 text-primary-foreground backdrop-blur-sm border-none text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1"
          >
            {category}
          </Badge>
        </div>

        {/* Certificate Image */}
        <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title} - ${issuingAuthority}`}
            fill
            className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 sm:pb-8">
            <div className="flex items-center gap-2 text-white">
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base font-semibold">
                View Certificate
              </span>
            </div>
          </div>
        </div>

        {/* Certificate Info */}
        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Issuing Authority */}
          <div className="flex items-start gap-2 text-muted-foreground">
            <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
            <p className="text-xs sm:text-sm font-medium">{issuingAuthority}</p>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <p className="text-xs sm:text-sm">{date}</p>
          </div>

          {/* Certificate Number (if provided) */}
          {certificateNumber && (
            <div className="pt-2 sm:pt-3 border-t border-border">
              <p className="text-[10px] sm:text-xs font-mono text-muted-foreground">
                Certificate No: {certificateNumber}
              </p>
            </div>
          )}

          {/* Description (if provided) */}
          {description && (
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Accent Line Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
