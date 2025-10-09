import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, ArrowRight, FileText, Calendar } from "lucide-react";
import Image from "next/image";

export default function AboutCTA() {
  const emergencyTel = "+48 XXX XXX XXX";

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
          className="text-accent"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <Card className="overflow-hidden border-2 border-accent/20 shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Left: Content */}
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 w-fit">
                  Rozpocznij Współpracę
                </Badge>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Doświadcz 64 Lat Ekspertyzy Morskiej
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Dołącz do grona zadowolonych klientów - P&I Clubs, armatorów i
                  ubezpieczycieli, którzy zaufali naszej niezależności i
                  fachowości.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <a href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Zamów Ekspertyzę
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-accent/30 hover:bg-accent/5"
                  >
                    <a href="/case-studies">
                      <FileText className="mr-2 h-5 w-5" />
                      Zobacz Portfolio
                    </a>
                  </Button>
                </div>

                {/* Quick Links */}
                <div className="space-y-3 pt-6 border-t">
                  <a
                    href={`tel:${emergencyTel.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <Phone className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-foreground">
                        Pilna Ekspertyza 24/7
                      </div>
                      <div className="text-sm">{emergencyTel}</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@jg-marine.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <Mail className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-foreground">
                        Email Bezpośredni
                      </div>
                      <div className="text-sm">info@jg-marine.com</div>
                    </div>
                  </a>

                  <a
                    href="/contact"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                  >
                    <Calendar className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-foreground">
                        Umów Konsultację
                      </div>
                      <div className="text-sm">Porozmawiaj z ekspertem</div>
                    </div>
                    <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </CardContent>

              {/* Right: Image */}
              <div className="relative min-h-[400px] lg:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                {/* TODO: Add image - team photo, office, or maritime scene */}
                <Image
                  src="/about/cta-team.jpg"
                  alt="JG Marine team ready to help"
                  fill
                  className="object-cover"
                />

                {/* Floating Trust Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="bg-white/95 backdrop-blur-sm border-accent/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="font-bold text-foreground mb-1">
                            Dostępni 24/7
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Region Bałtyku + 11 krajów
                          </div>
                        </div>
                        <Badge className="bg-success/10 text-success-foreground border-success/20 shrink-0">
                          ✓ DNV Certified
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Card>

          {/* Bottom Trust Signals */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Zaufali nam:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* TODO: Add actual client/partner logos */}
              {[
                "P&I Clubs",
                "DNV",
                "IIMS",
                "CESAM",
                "Flag States",
                "Major Insurers",
              ].map((org, i) => (
                <div
                  key={i}
                  className="px-4 py-2 border border-dashed rounded text-xs font-semibold text-muted-foreground"
                >
                  {org} Logo
                </div>
              ))}
            </div>
          </div>

          {/* Alternative Contact Options */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-center text-foreground mb-4">
                  Wolisz Mniej Formalny Kontakt?
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.linkedin.com/company/jg-marine"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn - JG Marine
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href="https://www.linkedin.com/in/jacek-goszczynski"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn - Jacek Goszczyński
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
