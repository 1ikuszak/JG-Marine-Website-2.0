import { Hero } from "@/components/home/hero";
import ServiceTiers from "@/components/home/service-tiers";
import HowItWorks from "@/components/home/how-it-works";
import OfficeLocationsSection from "@/components/home/office-locations";
import FinalCTA from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Carousel */}
      <Hero
        slides={[
          {
            src: "/hero/h1.png",
            alt: "Surveyor JG-Marine podczas inspekcji na moście kapitańskim",
          },
          {
            src: "/hero/h4.png",
            alt: "Ekspertyza kadłuba w suchym doku",
          },
          {
            src: "/hero/h2.png",
            alt: "Ocena komponentów farm wiatrowych na nabrzeżu",
          },
          {
            src: "/hero/h3.png",
            alt: "Ocena komponentów farm wiatrowych na nabrzeżu",
          },
        ]}
        emergencyTel="+48 58 760 11 20"
      />

      {/* Main Content Sections */}
      <main className="min-h-screen">
        {/* Services Section - MOVED TO #2 POSITION (Client Priority) */}
        <div id="services">
          <ServiceTiers />
        </div>

        {/* Process Section - How It Works */}
        <HowItWorks />

        {/* Office Locations - Condensed Version */}
        <OfficeLocationsSection />

        {/* Final CTA & Contact Form */}
        <FinalCTA />
      </main>
    </>
  );
}

export const metadata = {
  title: "JG Marine - Independent Marine Surveys | Baltic Region 24/7",
  description:
    "DNV-certified marine surveys for hull, cargo, and offshore projects. 64 years of Baltic maritime expertise. 24-hour response across Poland.",
  keywords:
    "marine survey Poland, cargo inspection Baltic, DNV certified surveyor, marine warranty survey, offshore wind, hull machinery survey",
};
