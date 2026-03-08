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
      setZoom(1);
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
        {/* Top Controls Bar */}
        <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-3 sm:p-4">
          <div className="flex items-center justify-between">
            {/* Zoom Controls - Left */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-10 sm:w-10 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
              >
                <ZoomOut className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <span className="text-white text-xs sm:text-sm font-medium px-2 sm:px-3">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-10 sm:w-10 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
              >
                <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Download Button */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-10 sm:w-10 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(certificate.imageUrl, "_blank");
                }}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-10 sm:w-10 text-white hover:bg-white/10"
                onClick={onClose}
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Certificate Image Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-7xl w-full mx-2 sm:mx-4"
          style={{
            maxHeight: "calc(100vh - 180px)",
            marginTop: "60px",
            marginBottom: "120px",
          }}
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
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
              {certificate.title}
            </h3>
            <p className="text-sm sm:text-base text-white/80 mb-0.5 sm:mb-1">
              {certificate.issuingAuthority}
            </p>
            <p className="text-xs sm:text-sm text-white/60">
              {certificate.date}
            </p>
            {certificate.certificateNumber && (
              <p className="text-xs font-mono text-white/50 mt-1 sm:mt-2">
                Certificate No: {certificate.certificateNumber}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
