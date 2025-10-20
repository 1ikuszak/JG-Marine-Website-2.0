// components/certifications/types.ts
export interface Certificate {
  id: string;
  title: string;
  issuingAuthority: string;
  date: string;
  category: string;
  imageUrl: string;
  description?: string;
  certificateNumber?: string;
}

export type CertificateCategory =
  | "All"
  | "DNV Certifications"
  | "Flag State Authorizations"
  | "Professional Memberships"
  | "Chamber Certifications"
  | "Safety & Auditing"
  | "Specialized Maritime Training"
  | "Company Policies & Appointments";
