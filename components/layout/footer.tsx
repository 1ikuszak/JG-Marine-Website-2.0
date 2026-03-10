import Link from "next/link";
import Image from "next/image";
import { CONTACTS } from "@/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-foreground">
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
                  alt="JG-Marine"
                  src={"/logo.svg"}
                  className="brightness-0 invert"
                />
              </span>
              <div>
                <div className="text-lg font-semibold text-white">
                  JG-Marine
                </div>
                <div className="text-sm text-white/60">Co. Ltd.</div>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Independent Marine Service.
              <br />
              120+ years of maritime experience.
            </p>

            <div className="text-xs text-white/60">
              IIMS • CESAM • P&I Approved
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-label font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Marine Surveys
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Cargo & Inland
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Claims & Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Casualty Response
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-label font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#team"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-label font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <div className="text-xs text-white/60 mb-1">
                  Phone
                </div>
                <a
                  href={`tel:${CONTACTS.main.phone.replace(/\s/g, "")}`}
                  className="text-white hover:text-white/80 transition-colors hover:underline"
                >
                  {CONTACTS.main.phone}{" "}
                </a>
              </li>
              <li>
                <div className="text-xs text-white/60 mb-1">Email</div>
                <a
                  href="mailto:info@jg-marine.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  info@jg-marine.com
                </a>
              </li>
              <li>
                <div className="text-xs text-white/60 mb-1">
                  Offices
                </div>
                <div className="text-white/60">
                  Sopot, Poland
                  <br />
                  <span className="text-xs">Szczecin • Warsaw</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div>
            <p>© {currentYear} JG-Marine Co. Ltd. All rights reserved.</p>
            <p className="text-xs text-white/40 mt-1">
              NIP: 5861028094 | KRS: 0000104270 | REGON: 190555043
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
