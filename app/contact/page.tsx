// app/contact/page.tsx
import ContactHero from "@/components/contact/contact-hero";
import OfficesTeamSection from "@/components/contact/offices-team-section";
import ContactFinalCta from "@/components/contact/contact-final-cta";

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <ContactHero />
      <OfficesTeamSection />
      <ContactFinalCta />
    </main>
  );
}

export const metadata = {
  title: "Contact JG Marine | Independent Marine Surveyors Poland",
  description:
    "Three offices covering Poland's major ports and locations inland. Independent marine surveyors in Sopot/Gdynia, Szczecin/Świnoujście, and Warsaw.",
  keywords:
    "contact marine surveyor, maritime survey Poland, independent marine surveyor, P&I surveyor Poland",
  openGraph: {
    title: "Contact JG Marine | Independent Marine Surveyors Poland",
    description:
      "Three offices covering Poland's major ports and locations inland. Independent marine surveyors in Sopot/Gdynia, Szczecin/Świnoujście, and Warsaw.",
    type: "website",
    url: "https://www.jg-marine.com/contact",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Contact JG Marine | Independent Marine Surveyors Poland",
    description:
      "Three offices covering Poland's major ports and locations inland. Independent marine surveyors in Sopot/Gdynia, Szczecin/Świnoujście, and Warsaw.",
  },
};
