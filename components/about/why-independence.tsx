import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Scale, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function WhyIndependence() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div>
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Niezależność
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Dlaczego Niezależność Jest Kluczowa
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              W świecie maritime surveying, gdzie konflikty interesów mogą
              prowadzić do stronniczych raportów i milionowych sporów, nasza{" "}
              <strong className="text-foreground">
                strukturalna niezależność rodzinna
              </strong>{" "}
              jest fundamentalną gwarancją obiektywności.
            </p>

            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-success" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Zero Konfliktów Interesów
                  </h3>
                  <p className="text-muted-foreground">
                    Nie jesteśmy powiązani z ubezpieczycielami, P&I Clubs ani
                    armatorami. Raportujemy tylko fakty, chroniąc wyłącznie
                    Twoje interesy.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-success" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Obiektywność Gwarantowana
                  </h3>
                  <p className="text-muted-foreground">
                    Własność rodzinna oznacza, że nasze decyzje nie są dyktowane
                    przez korporacyjne cele finansowe czy naciski zewnętrzne.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Reputacja Bez Kompromisów
                  </h3>
                  <p className="text-muted-foreground">
                    64 lata w branży to dowód, że naszą reputację budujemy na
                    uczciwości i fachowości, nie na politycznych układach.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Dostępność i Elastyczność
                  </h3>
                  <p className="text-muted-foreground">
                    Jako niezależna firma rodzinna możemy szybko podejmować
                    decyzje i dostosowywać się do unikalnych potrzeb każdego
                    klienta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* TODO: Add image showing handshake, contract signing, or independence concept */}
              <Image
                src="/about/independence-visual.jpg"
                alt="JG Marine independence guarantee"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Quote Card */}
            <Card className="absolute -bottom-6 -left-6 max-w-sm shadow-2xl border-2 border-accent/30">
              <CardContent className="p-6">
                <div className="text-4xl text-accent mb-2">"</div>
                <p className="text-sm text-foreground italic mb-3">
                  Nasza niezależność to nie marketing - to strukturalna
                  gwarancja, że zawsze stawiamy fakty ponad wszystko.
                </p>
                <div className="text-xs font-semibold text-muted-foreground">
                  — Jacek Goszczyński, Founder & CEO
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
