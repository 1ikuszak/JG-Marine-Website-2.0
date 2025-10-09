import AboutCTA from "@/components/about/about-cta";
import AboutHero from "@/components/about/about-hero";
import AboutTestimonials from "@/components/about/about-testimonials";
import CompanyStory from "@/components/about/company-story";
import GeographicPresence from "@/components/about/geographic-presence";
import HeritageTimeline from "@/components/about/heritage-timeline";
import IndustryInvolvement from "@/components/about/industry-involvement";
import MissionValues from "@/components/about/mission-values";
import OurApproach from "@/components/about/our-approach";
import WhyIndependence from "@/components/about/why-independence";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Nas - 64 Lata Tradycji Morskiej | JG Marine",
  description:
    "Poznaj historię JG Marine: trzy pokolenia kapitanów żeglugi wielkiej, 64 lata niezależnych ekspertyz morskich w regionie Bałtyku. Certyfikowani surveyorzy DNV od 1959.",
  keywords:
    "historia JG Marine, surveyorzy morscy Polska, dziedzictwo morskie, niezależne ekspertyzy, tradycja maritimowa",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HeritageTimeline />
      <CompanyStory />
      <MissionValues />
      <GeographicPresence />
      <WhyIndependence />
      <OurApproach />
      <IndustryInvolvement />
      <AboutTestimonials />
      <AboutCTA />
    </>
  );
}
