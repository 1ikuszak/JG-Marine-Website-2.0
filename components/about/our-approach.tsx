import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Globe, Zap } from "lucide-react";

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
}

const differentiators: Differentiator[] = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Reakcja Błyskawiczna",
    description:
      "Lokalna obecność w portach Bałtyckich oznacza najszybszy czas reakcji w regionie. Surveyor na miejscu w krytycznych godzinach.",
    metric: "<24h w regionie Bałtyku",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "64 Lata Dziedzictwa",
    description:
      "Trzy pokolenia kapitanów - wiedza przekazywana przez dziesięciolecia. Głębokość ekspertyzy, której korporacje nie mogą odtworzyć.",
    metric: "3 pokolenia Master Mariners",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Bałtyk + Międzynarodowe",
    description:
      "Lokalna specjalizacja w regionie Bałtyckim połączona z międzynarodowymi standardami DNV i zasięgiem w 11+ krajach.",
    metric: "Lokalni + Globalni",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Innowacja + Tradycja",
    description:
      "Nowoczesne technologie (drony, cyfrowe raportowanie) wspierane dekadami praktycznej wiedzy maritimowej.",
    metric: "Najlepsze z dwóch światów",
  },
];

export default function OurApproach() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nasze Unikalne Podejście
          </h2>
          <p className="text-lg text-muted-foreground">
            Cztery kluczowe przewagi, które odróżniają JG Marine od globalnych
            sieci i lokalnej konkurencji
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-2xl transition-all"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="inline-block bg-success/10 text-success-foreground px-3 py-1 rounded-full text-sm font-semibold border border-success/20">
                      {item.metric}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Comparison */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-center text-primary mb-8">
                JG Marine vs Globalne Sieci
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Globalne Sieci */}
                <div>
                  <div className="text-muted-foreground font-semibold mb-4">
                    Globalne Sieci
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Reakcja: 5-7 dni</li>
                    <li>• Struktura korporacyjna</li>
                    <li>• Brak lokalnej wiedzy</li>
                    <li>• Standardowe podejście</li>
                    <li>• Potencjalne konflikty interesów</li>
                  </ul>
                </div>

                {/* JG Marine */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent rounded" />
                  <div className="text-accent font-bold mb-4 flex items-center gap-2">
                    JG Marine
                    <span className="text-xs bg-accent/10 px-2 py-0.5 rounded-full">
                      PRZEWAGA
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground font-medium">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      Reakcja: &lt;24h na Bałtyku
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      64 lata dziedzictwa rodzinnego
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      Eksperci regionalni
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      Indywidualne podejście
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success" />
                      Gwarantowana niezależność
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
