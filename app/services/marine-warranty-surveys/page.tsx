// app/services/marine-warranty-surveys/page.tsx
import { ServiceDetail } from "@/components/ServiceDetail";

export default function Page() {
  return (
    <ServiceDetail
      slug="marine-warranty-surveys"
      title="Marine Warranty Surveys"
      benefitHeadline="Protect high-value operations with independent DNV-aligned oversight and acceptance notes recognized by insurers."
      aboveFold={{
        range: "€10,000–€50,000",
        response: "≤ 24 h",
        coverage: "Baltic + International",
      }}
      summary="We review method statements, lift studies, sea-fastening and weather windows. On-site attendance ensures procedural conformity and evidence for insurer acceptance."
      bullets={[
        "Method statements & lift plan conformance",
        "Sea-fastening verification and acceptance notes",
        "Attendance logs, photographic evidence, comments register",
      ]}
      differentiators={[
        "Independent authority vs. global network outsourcing",
        "3-generation Baltic expertise with offshore wind track record",
        "Reports accepted by P&I clubs and H&M underwriters",
      ]}
      steps={[
        {
          label: "Scope & Risks",
          desc: "Clarify cargo, operations, interfaces, and acceptance criteria.",
        },
        {
          label: "Review & Comments",
          desc: "Assess documents, issue comments register, align with stakeholders.",
        },
        {
          label: "Site Attendance",
          desc: "Witness critical ops; verify sea-fastening, rigging, and weather windows.",
        },
        {
          label: "Acceptance & Report",
          desc: "Issue acceptance notes and final report with evidence.",
        },
      ]}
      leadMagnet={{
        label: "Download MWS Spec Guide (PDF)",
        href: "/resources/marine-warranty-survey-spec.pdf",
      }}
      casePreview={{
        title: "€50M Offshore Wind Emergency",
        impact: [
          "Prevented €8M delay",
          "Insurer accepted without arbitration",
          "Controlled risk for remaining lifts",
        ],
        href: "/case-studies/offshore-50m",
        cover: "/cases/offshore-wind.jpg",
      }}
      emergency
    />
  );
}
