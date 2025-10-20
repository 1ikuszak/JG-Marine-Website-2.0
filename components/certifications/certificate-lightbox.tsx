// components/certifications/certificate-lightbox.tsx
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Download, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Certificate } from "./types";

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateLightbox({
  certificate,
  onClose,
}: CertificateLightboxProps) {
  const [zoom, setZoom] = React.useState(1);

  React.useEffect(() => {
    if (certificate) {
      document.body.style.overflow = "hidden";
      setZoom(1); // Reset zoom when opening new certificate
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [certificate]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button - Top Right */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Zoom Controls - Top Left */}
        <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
          >
            <ZoomOut className="h-5 w-5" />
          </Button>
          <span className="text-white text-sm font-medium px-3">
            {Math.round(zoom * 100)}%
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
          >
            <ZoomIn className="h-5 w-5" />
          </Button>
        </div>

        {/* Download Button - Top Right (next to close) */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-16 z-50 text-white hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation();
            // TODO: Implement download functionality
            window.open(certificate.imageUrl, "_blank");
          }}
        >
          <Download className="h-5 w-5" />
        </Button>

        {/* Certificate Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-7xl max-h-[90vh] w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative w-full h-full overflow-auto"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              src={certificate.imageUrl}
              alt={certificate.title}
              width={1200}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Certificate Info - Bottom */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {certificate.title}
            </h3>
            <p className="text-white/80 mb-1">{certificate.issuingAuthority}</p>
            <p className="text-sm text-white/60">{certificate.date}</p>
            {certificate.certificateNumber && (
              <p className="text-xs font-mono text-white/50 mt-2">
                Certificate No: {certificate.certificateNumber}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
