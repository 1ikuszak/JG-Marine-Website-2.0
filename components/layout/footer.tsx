import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 py-16 md:py-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="grid place-items-center">
                <Image
                  width={32}
                  height={32}
                  alt="logo"
                  src={"/logo.svg"}
                  className="text-foreground"
                />
              </span>
              <div>
                <div className="text-lg font-semibold text-primary">
                  JG-Marine
                </div>
                <div className="text-sm text-muted-foreground">Co. Ltd.</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Independent marine surveyors since 1959. 64 years of expertise
              across the Baltic region.
            </p>

            <div className="text-xs text-muted-foreground">
              DNV • IIMS • CESAM • P&I Approved
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/marine-surveys"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Marine Surveys
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cargo-inland"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cargo & Inland
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technical-consulting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/claims-insurance"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Claims & Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/casualty-response"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Casualty Response
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <div className="text-xs text-muted-foreground mb-1">
                  Emergency 24/7
                </div>
                <a
                  href="tel:+48XXXXXXXXX"
                  className="text-primary hover:underline"
                >
                  +48 XXX XXX XXX
                </a>
              </li>
              <li>
                <div className="text-xs text-muted-foreground mb-1">Email</div>
                <a
                  href="mailto:info@jg-marine.com"
                  className="hover:text-primary transition-colors"
                >
                  info@jg-marine.com
                </a>
              </li>
              <li>
                <div className="text-xs text-muted-foreground mb-1">
                  Offices
                </div>
                <div>
                  Sopot, Poland
                  <br />
                  <span className="text-xs">Szczecin • Warsaw</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {currentYear} JG-Marine Co. Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
