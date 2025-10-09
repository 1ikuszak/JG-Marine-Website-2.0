import { Hero } from "@/components/home/hero";
import PainReliefSection from "@/components/home/pain-relief-section";
import ServiceTiers from "@/components/home/service-tiers";
import TrustProofSection from "@/components/home/trust-proof-section";
import HowItWorks from "@/components/home/how-it-works";
import DifferentiationSection from "@/components/home/differentiation-section";
import FinalCTA from "@/components/home/final-cta";
import ResourcesPreview from "@/components/home/resources-preview";
import TeamSection from "@/components/home/team-section";

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

        <TeamSection />

        {/* G. Competitive Differentiation */}
        <DifferentiationSection />

        {/* H. Final CTA Section */}
        <FinalCTA />

        {/* I. Resources Preview */}
        <ResourcesPreview />
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

// import { CaseShowcase } from "@/components/CaseShowcase";
// import { ContactGateway } from "@/components/ContactPro";
// import { Differentiation } from "@/components/Differentiation";
// import { FAQCompliance } from "@/components/FAQCompliance";
// import { SiteFooter } from "@/components/FooterPro";
// import { GlobalReach } from "@/components/GlobalReach";
// import { Header } from "@/components/Header";
// import { Hero } from "@/components/Hero";
// import { ResourcesHub } from "@/components/ResourcesHub";
// import { Solutions } from "@/components/Services";
// import { StickyEmergencyBar } from "@/components/StickyEmergencyBar";
// import { Trust } from "@/components/Trust";

// export default function Home() {
//   return (
//     <div className="min-h-dvh bg-white">
//       <div className="min-h-dvh">
//         <Header />
//         <Hero
//           emergencyTel="+48 123 123 123"
//           slides={[
//             {
//               src: "/hero/inspection-bridge.jpg",
//               alt: "Bridge wing inspection",
//             },
//             { src: "/hero/drydock-hull.jpg", alt: "Drydock hull survey" },
//             { src: "/hero/offshore-wind.jpg", alt: "Offshore wind component" },
//           ]}
//         />{" "}
//         <Differentiation />
//         <Solutions />
//         <Trust />
//         <CaseShowcase />
//         <GlobalReach />
//         <ContactGateway />
//         <FAQCompliance />
//         <ResourcesHub />
//         <SiteFooter />
//       </div>
//     </div>
//   );
// }
