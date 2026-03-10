import { Hero } from "@/components/home/hero";
import ServiceTiers from "@/components/home/service-tiers";
import TeamSectionWhiteUniform from "@/components/home/team-section";
import OfficeLocationsSection from "@/components/home/office-locations";
import FinalCTA from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <main id="main-content">
      {/* Hero Section with Carousel */}
      <Hero
        slides={[
          {
            src: "/hero/h1.png",
            alt: "JG Marine surveyor conducting bridge inspection",
          },
          {
            src: "/hero/h4.png",
            alt: "Hull inspection in dry dock",
          },
          {
            src: "/hero/h2.png",
            alt: "Wind farm component assessment at port",
          },
          {
            src: "/hero/h3.png",
            alt: "Cargo assessment at port facility",
          },
        ]}
      />

      {/* Services Section */}
      <div id="services">
        <ServiceTiers />
      </div>

      {/* Team Section */}
      <TeamSectionWhiteUniform />

      {/* Office Locations */}
      <OfficeLocationsSection />

      {/* Final CTA & Contact */}
      <FinalCTA />
    </main>
  );
}

export const metadata = {
  title: "JG Marine - Independent Marine Surveys | Poland",
  description:
    "Independent marine surveys for hull, cargo, and offshore projects. 120+ years of maritime expertise. Three offices covering Poland's major ports and locations inland.",
  keywords:
    "marine survey Poland, cargo inspection Poland, independent marine surveyor, marine warranty survey, offshore wind, hull machinery survey",
  openGraph: {
    title: "JG Marine - Independent Marine Surveys | Poland",
    description:
      "Independent marine surveys for hull, cargo, and offshore projects. 120+ years of maritime expertise.",
    type: "website",
    url: "https://www.jg-marine.com",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "JG Marine - Independent Marine Surveys | Poland",
    description:
      "Independent marine surveys for hull, cargo, and offshore projects. 120+ years of maritime expertise.",
  },
};
