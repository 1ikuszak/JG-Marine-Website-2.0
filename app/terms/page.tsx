// app/terms/page.tsx
import * as React from "react";
import { Mail } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    // FIX 1: Added 'pt-16' to offset the entire page from the fixed main header
    <main id="main-content" className="min-h-screen bg-background pt-16">
      {/* Simple Header */}
      <div className="border-b border-border bg-muted/30">
        {/* FIX 2: Increased padding for more breathing room */}
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
          <h1 className="font-serif text-display-sm md:text-display font-bold text-foreground mb-4">
            Terms of Service
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
              These Terms of Service ("Terms") govern your use of the JG-Marine
              Co. Ltd. website and services. By accessing or using our services,
              you agree to be bound by these Terms. If you do not agree to these
              Terms, please do not use our services.
            </p>
          </section>

          {/* 1. Services */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              1. Services Description
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JG-Marine Co. Ltd. provides professional maritime surveying
              services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Marine surveys (hull & machinery, P&I, condition surveys)</li>
              <li>Cargo and inland transport surveys</li>
              <li>Technical consulting and engineering services</li>
              <li>Claims handling and loss adjusting</li>
              <li>Casualty response and investigation</li>
              <li>Marine warranty surveys</li>
            </ul>
          </section>

          {/* 2. Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              2. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By using our website, requesting our services, or engaging with us
              in any capacity, you acknowledge that you have read, understood,
              and agree to be bound by these Terms and our Privacy Policy. If
              you are acting on behalf of a company or organization, you
              represent that you have the authority to bind that entity to these
              Terms.
            </p>
          </section>

          {/* 3. Use of Website */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              3. Use of Website
            </h2>
            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              3.1 Permitted Use
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You may use our website for lawful purposes only. You agree not to
              use the website in any way that violates applicable laws or
              regulations.
            </p>

            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              3.2 Prohibited Activities
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Use the website in any way that could damage, disable, or impair
                the website
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                website
              </li>
              <li>
                Use any robot, spider, or other automatic device to access the
                website
              </li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>
                Collect or harvest any personal information from other users
              </li>
              <li>Impersonate any person or entity</li>
              <li>Use the website for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          {/* 4. Service Engagement */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              4. Service Engagement
            </h2>
            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              4.1 Quotes and Estimates
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All quotes and estimates provided are valid for 30 days unless
              otherwise specified. Quotes are subject to change based on the
              actual scope of work required.
            </p>

            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              4.2 Service Agreement
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A formal service agreement will be executed for all surveying
              services. The specific terms, conditions, scope of work, and fees
              will be outlined in the service agreement.
            </p>

            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              4.3 Payment Terms
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms will be specified in the service agreement.
              Generally, payment is due within 30 days of invoice date unless
              otherwise agreed. Late payments may incur interest charges as
              permitted by law.
            </p>
          </section>

          {/* 5. Professional Standards */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              5. Professional Standards
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All services are performed in accordance with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>DNV (Det Norske Veritas) standards and certifications</li>
              <li>
                International Association of Marine Surveyors (IAMS) guidelines
              </li>
              <li>
                International Institute of Marine Surveying (IIMS) standards
              </li>
              <li>Applicable international maritime conventions</li>
              <li>Polish and EU maritime regulations</li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              6. Intellectual Property
            </h2>
            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              6.1 Website Content
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All content on this website, including text, graphics, logos,
              images, and software, is the property of JG-Marine Co. Ltd. or its
              licensors and is protected by copyright and other intellectual
              property laws.
            </p>

            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              6.2 Survey Reports
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Survey reports and related documents are provided to the client
              for the specific purpose for which they were commissioned.
              Copyright in the reports remains with JG-Marine Co. Ltd. Clients
              may not reproduce or distribute reports without our written
              consent.
            </p>
          </section>

          {/* 7. Limitations of Liability */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              7. Limitations of Liability
            </h2>
            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              7.1 Website Use
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The website is provided "as is" without warranties of any kind. We
              do not warrant that the website will be uninterrupted, error-free,
              or free of viruses or other harmful components.
            </p>

            <h3 className="font-serif text-h4-sm md:text-h4 font-semibold text-foreground mb-4">
              7.2 Professional Services
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our liability for professional services is limited as specified in
              the service agreement. We maintain professional indemnity
              insurance as required by maritime industry standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages, or any loss of profits or revenues.
            </p>
          </section>

          {/* 8. Indemnification */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              8. Indemnification
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless JG-Marine Co.
              Ltd., its officers, directors, employees, and agents from any
              claims, damages, losses, liabilities, and expenses (including
              legal fees) arising from your use of the website or services, or
              your violation of these Terms.
            </p>
          </section>

          {/* 9. Confidentiality */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              9. Confidentiality
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain strict confidentiality regarding all client
              information and survey findings. Information will only be
              disclosed as required by law, with your consent, or as necessary
              to fulfill our contractual obligations to third parties (e.g., P&I
              clubs, insurers) as specified in the service agreement.
            </p>
          </section>

          {/* 10. Force Majeure */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              10. Force Majeure
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We shall not be liable for any failure or delay in performance due
              to circumstances beyond our reasonable control, including acts of
              God, war, terrorism, strikes, natural disasters, or government
              actions.
            </p>
          </section>

          {/* 11. Dispute Resolution */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              11. Dispute Resolution
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any disputes arising from these Terms or our services shall be
              resolved through:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Good faith negotiations between the parties</li>
              <li>
                If unresolved, mediation under the rules of a mutually agreed
                mediator
              </li>
              <li>
                If mediation fails, arbitration in accordance with Polish law
              </li>
            </ol>
          </section>

          {/* 12. Governing Law */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              12. Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of Poland. Any legal action or proceeding relating to
              these Terms shall be brought exclusively in the courts of Gdańsk,
              Poland.
            </p>
          </section>

          {/* 13. Severability */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              13. Severability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect.
            </p>
          </section>

          {/* 14. Changes to Terms */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              14. Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting to the website. Your
              continued use of the website after changes constitutes acceptance
              of the modified Terms.
            </p>
          </section>

          {/* 15. Entire Agreement */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              15. Entire Agreement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our Privacy Policy and any service
              agreement, constitute the entire agreement between you and
              JG-Marine Co. Ltd. regarding your use of the website and services.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="font-serif text-h2-sm md:text-h2 font-bold text-foreground mb-6">
              16. Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
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
  title: "Terms of Service | JG Marine",
  description:
    "JG Marine's Terms of Service - Legal terms governing the use of our website and services.",
};
