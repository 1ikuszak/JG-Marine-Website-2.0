// app/contact/page.tsx
import * as React from "react";
import ContactPageHero from "@/components/contact/contact-hero";
import ContactFormSection from "@/components/contact/contact-form-section";
import EmergencyContactCard from "@/components/contact/emergency-contact-card";
import OfficeLocationsCompact from "@/components/contact/office-locations-compact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ContactPageHero />

      {/* Main Content Grid */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12">
            {/* LEFT SIDEBAR: Emergency + Offices (Sticky on Desktop) */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">
              <div className="lg:sticky lg:top-24 space-y-6 lg:space-y-8">
                <EmergencyContactCard />
                <OfficeLocationsCompact />
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-8">
              <ContactFormSection />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                24/7
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Emergency Response
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                2h
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Response Time
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                120+
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Annual Projects
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                11+
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Countries
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "Contact JG Marine | 24/7 Maritime Survey Response",
  description:
    "Request a survey quote or call our emergency hotline. DNV-certified surveyors available 24/7 across the Baltic region. Response within 2 hours.",
  keywords:
    "contact marine surveyor, emergency maritime survey, Baltic survey contact, DNV surveyor Poland",
};
