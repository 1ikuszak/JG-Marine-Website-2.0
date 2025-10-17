import { Hero } from "@/components/home/hero";
import PainReliefSection from "@/components/home/pain-relief-section";
import ServiceTiers from "@/components/home/service-tiers";
import TrustProofSection from "@/components/home/trust-proof-section";
import HowItWorks from "@/components/home/how-it-works";
import DifferentiationSection from "@/components/home/differentiation-section";
import FinalCTA from "@/components/home/final-cta";
import ResourcesPreview from "@/components/home/resources-preview";
import TeamSection from "@/components/home/team-section";
import OfficeLocationsSection from "@/components/home/office-locations";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Carousel */}
      <Hero
        slides={[
          {
            src: "/hero/1.jpg",
            alt: "Surveyor JG-Marine podczas inspekcji na moście kapitańskim",
          },
          {
            src: "/hero/2.jpg",
            alt: "Ekspertyza kadłuba w suchym doku",
          },
          {
            src: "/hero/3.jpg",
            alt: "Ocena komponentów farm wiatrowych na nabrzeżu",
          },
          {
            src: "/hero/4.jpg",
            alt: "Ocena komponentów farm wiatrowych na nabrzeżu",
          },
          {
            src: "/hero/5.jpg",
            alt: "Ocena komponentów farm wiatrowych na nabrzeżu",
          },
          {
            src: "/hero/6.jpg",
            alt: "Ocena komponentów farm wiatrowych na nabrzeżu",
          },
        ]}
        emergencyTel="+48 XXX XXX XXX"
      />

      {/* Main Content Sections */}
      <main className="min-h-screen">
        {/* C. Pain-to-Relief Section */}
        <PainReliefSection />

        {/* D. Service Tiers Overview */}
        <ServiceTiers />

        {/* E. Trust & Proof Section */}
        <TrustProofSection />

        {/* F. How It Works */}
        <HowItWorks />

        <OfficeLocationsSection />

        <TeamSection />

        {/* H. Final CTA Section */}
        <FinalCTA />
      </main>
    </>
  );
}

export const metadata = {
  title: "JG Marine - Niezależne Ekspertyzy Morskie DNV | Region Bałtyku 24/7",
  description:
    "64 lata dziedzictwa morskiego + certyfikaty DNV = zero sporów ubezpieczeniowych. Surveyorzy dostępni 24/7 w całym regionie Bałtyku. 120+ ekspertyz rocznie.",
  keywords:
    "marine survey Poland, cargo inspection Baltic, DNV certified surveyor, marine warranty survey, offshore wind, ekspertyza morska",
};
