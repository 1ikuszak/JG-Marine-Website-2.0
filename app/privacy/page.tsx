// app/privacy/page.tsx
import * as React from "react";
import { Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    // FIX 1: Added 'pt-16' to offset the entire page from the fixed main header
    <main id="main-content" className="min-h-screen bg-background pt-16">
      {/* Simple Header */}
      <div className="border-b border-border bg-muted/30">
        {/* FIX 2: Increased padding for more breathing room */}
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="font-serif text-display-sm md:text-display font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Last updated: March 8, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      {/* FIX 3: Increased padding for the main content block */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              JG-Marine Co. Ltd. ("we," "us," or "our") is committed to
              protecting your privacy in accordance with Regulation (EU) 2016/679
              (General Data Protection Regulation — GDPR) and the Polish Act on
              the Protection of Personal Data (RODO). This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
          </section>

          {/* Data Controller */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              Data Controller
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The controller of your personal data is:
            </p>
            <div className="bg-muted/50 border border-border rounded-lg p-6 text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">JG-Marine Co. Ltd.</p>
              <p>ul. Armii Krajowej 116/2</p>
              <p>81-824 Sopot, Poland</p>
              <p className="mt-2">NIP: 5861028094 | KRS: 0000104270 | REGON: 190555043</p>
              <p className="mt-2">Email: info@jg-marine.com</p>
            </div>
          </section>

          {/* Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              Legal Basis for Processing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We process your personal data on the following legal bases under
              Article 6 of the GDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Legitimate interest (Art. 6(1)(f)):</strong> Processing
                necessary for responding to business inquiries, providing
                maritime survey services, and maintaining client relationships.
              </li>
              <li>
                <strong>Contract performance (Art. 6(1)(b)):</strong> Processing
                necessary for the performance of a service agreement to which
                you are a party.
              </li>
              <li>
                <strong>Consent (Art. 6(1)(a)):</strong> Where you have given
                explicit consent, such as for marketing communications. You may
                withdraw consent at any time.
              </li>
              <li>
                <strong>Legal obligation (Art. 6(1)(c)):</strong> Processing
                required to comply with applicable laws, including maritime
                regulations and tax obligations.
              </li>
            </ul>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              1. Information We Collect
            </h2>

            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              1.1 Personal Information
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Request a survey or quote</li>
              <li>Contact us via phone, email, or contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage our services</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This may include: name, email address, phone number, company name,
              job title, and any other information you choose to provide.
            </p>

            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              1.2 Automatically Collected Information
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain
              information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Time zone and location</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, operate, and maintain our services</li>
              <li>Process your requests and respond to inquiries</li>
              <li>Send you survey reports and related documentation</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud or security issues</li>
            </ul>
          </section>

          {/* 3. Information Sharing */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              3. How We Share Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>With Your Consent:</strong> When you authorize us to
                share your information
              </li>
              <li>
                <strong>Service Providers:</strong> With third-party vendors who
                perform services on our behalf (e.g., email delivery, analytics)
              </li>
              <li>
                <strong>Business Partners:</strong> When necessary to fulfill
                survey requirements (e.g., P&I clubs, insurance companies)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, sale, or acquisition
              </li>
            </ul>
          </section>

          {/* 4. Data Security */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              4. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the internet or electronic storage is 100%
              secure. While we strive to use commercially acceptable means to
              protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              5. Data Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. Survey
              records and related documentation may be retained for up to 10
              years in accordance with maritime industry standards and legal
              requirements.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              6. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Access:</strong> Request access to your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your
                information
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your
                information
              </li>
              <li>
                <strong>Withdrawal:</strong> Withdraw consent at any time
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us using the information
              provided below.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You also have the right to lodge a complaint with the Polish
              supervisory authority: <strong>Urząd Ochrony Danych Osobowych
              (UODO)</strong>, ul. Stawki 2, 00-193 Warszawa, Poland
              (website: <a href="https://uodo.gov.pl" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>).
            </p>
          </section>

          {/* 7. Cookies */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity
              on our website and store certain information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our website.
            </p>
          </section>

          {/* 8. Third-Party Links */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              8. Third-Party Websites
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </section>

          {/* 9. Children's Privacy */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              9. Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </section>

          {/* 10. International Transfers */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              10. International Data Transfers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              different data protection laws. We ensure appropriate safeguards
              are in place to protect your information in accordance with this
              Privacy Policy.
            </p>
          </section>

          {/* 11. Changes */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              12. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
            </p>
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <p className="font-semibold text-foreground mb-4">
                JG-Marine Co. Ltd.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>81-824 Sopot, ul. Armii Krajowej 116/2</p>
                <p>Poland</p>
                <a
                  href="mailto:info@jg-marine.com"
                  className="flex items-center gap-2 text-primary hover:underline mt-4"
                >
                  <Mail className="h-4 w-4" />
                  info@jg-marine.com
                </a>
                <p className="mt-4">Phone: +48 602 222 477</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Privacy Policy | JG Marine",
  description:
    "JG Marine's Privacy Policy - How we collect, use, and protect your personal information.",
};
