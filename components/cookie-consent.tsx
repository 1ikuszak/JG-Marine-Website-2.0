"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 shadow-lg sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-6"
    >
      <p className="text-sm text-muted-foreground mb-3 sm:mb-0">
        We use essential cookies to ensure this website functions properly. No tracking or marketing cookies are used.
      </p>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={decline}
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
