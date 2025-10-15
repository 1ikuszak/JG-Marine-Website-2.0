"use client";

import { Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export default function EmergencyBanner() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // TODO: Replace with actual phone number
  const emergencyPhone = "+48 XXX XXX XXX";

  if (isMobile) {
    // Mobile: Floating bottom button
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button
          asChild
          size="lg"
          className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg animate-pulse"
        >
          <a
            href={`tel:${emergencyPhone}`}
            className="flex items-center justify-center gap-2"
          >
            <Phone className="h-5 w-5" />
            <span className="font-bold">24/7 Pilna Ekspertyza</span>
          </a>
        </Button>
      </div>
    );
  }

  // Desktop: Sticky top banner
  return (
    <div className="sticky top-0 z-50 bg-accent text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-3">
          {/* Main Message */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <Phone className="h-5 w-5 animate-pulse" />
            <span className="font-semibold text-sm md:text-base">
              24/7 Emergency Marine Survey Response | Baltic Region &lt;24h
            </span>
          </div>

          {/* Call Button */}
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="font-bold">
              <a href={`tel:${emergencyPhone}`}>Zadzwoń: {emergencyPhone}</a>
            </Button>

            {/* Trust Badges */}
            <div className="hidden lg:flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-white/20 hover:bg-white/30"
              >
                <Shield className="h-3 w-3 mr-1" />
                DNV Certified
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 hover:bg-white/30"
              >
                P&I Club Approved
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
