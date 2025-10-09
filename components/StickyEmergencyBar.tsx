"use client";
import { SITE } from "@/lib/site.config";

export function StickyEmergencyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-2 border-t border-white/10 bg-[#0A0F14]/95 px-4 py-3 shadow-sm sm:hidden">
      <a
        href="#request"
        className="flex-1 rounded-md border border-white/10 px-4 py-3 text-center text-sm font-medium text-white"
      >
        Request Survey
      </a>
      <a
        href={`tel:${SITE.phoneEmergencyTel}`}
        className="flex-1 rounded-md bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white"
        aria-label={`Emergency 24/7. Call ${SITE.phoneEmergency}`}
      >
        🚨 Emergency 24/7
      </a>
    </div>
  );
}
