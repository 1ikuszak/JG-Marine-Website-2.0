// app/certifications/page.tsx
import type { Metadata } from "next";
import CertificationsContent from "./certifications-content";

export const metadata: Metadata = {
  title: "Certifications & Memberships | JG-Marine",
  description:
    "View JG-Marine's professional certifications, memberships, and accreditations including IIMS, DNV, and Lloyd's Register qualifications.",
  alternates: { canonical: "https://www.jg-marine.com/certifications" },
};

export default function CertificationsPage() {
  return <CertificationsContent />;
}
