import Link from "next/link";
import { Anchor, Phone, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl border bg-background">
                <Anchor className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold">JG-Marine</div>
                <div className="text-xs text-muted-foreground">Co. Ltd.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Niezależni surveyorzy morscy od 1959. 64 lata ekspertyzy w
              regionie Bałtyku.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">DNV</Badge>
              <Badge variant="secondary">IIMS</Badge>
              <Badge variant="secondary">CESAM</Badge>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/cargo" className="hover:text-foreground">
                  Ekspertyzy Ładunków
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hull-machinery"
                  className="hover:text-foreground"
                >
                  Kadłuby i Maszyny
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marine-warranty"
                  className="hover:text-foreground"
                >
                  Marine Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/services/loss-adjusting"
                  className="hover:text-foreground"
                >
                  Likwidacja Szkód
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Firma</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  O Nas
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-foreground">
                  Certyfikacje
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:+48XXXXXXXXX" className="hover:text-foreground">
                  +48 XXX XXX XXX
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@jg-marine.com"
                  className="hover:text-foreground"
                >
                  info@jg-marine.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Sopot, Poland
                  <br />
                  Szczecin • Warsaw
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} JG-Marine Co. Ltd. Wszelkie prawa
            zastrzeżone.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">
              Polityka Prywatności
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
