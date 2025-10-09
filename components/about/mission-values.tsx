import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield, Target, Compass, Award, Users, Anchor } from "lucide-react";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Niezależność i Integralność",
    description:
      "Struktura rodzinna gwarantuje brak konfliktów interesów. Raportujemy tylko fakty, bez wpływu zewnętrznych nacisków.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Doskonałość Techniczna",
    description:
      "Certyfikowani surveyorzy DNV z dekadami doświadczenia morskiego. Ciągłe szkolenia i rozwój kompetencji.",
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Bezpieczeństwo i Compliance",
    description:
      "Zgodność z międzynarodowymi regulacjami ISM, ISPS, MLC. Prewencja ryzyka w każdym projekcie.",
  },
  {
    icon: <Anchor className="h-8 w-8" />,
    title: "Tradycja Morska",
    description:
      "Trzy pokolenia kapitanów - wiedza przekazywana przez 64 lata. Głębokie zrozumienie operacji maritimowych.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Zaufanie Klienta",
    description:
      "Transparentna komunikacja, terminowość, dostępność 24/7. Długoterminowe relacje z P&I Clubs i armatorami.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Innowacja i Rozwój",
    description:
      "Nowoczesne technologie (drony, cyfryzacja) połączone z tradycyjną ekspertyzą. Adaptacja do zmieniającego się rynku.",
  },
];

export default function MissionValues() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Misja i Wartości
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Co Nas Definiuje
          </h2>

          <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-8 md:p-10">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                "Dostarczać niezależne, precyzyjne i godne zaufania ekspertyzy
                morskie, chroniąc interesy klientów poprzez połączenie
                64-letniego dziedzictwa maritimowego z międzynarodowymi
                standardami DNV."
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
                <div className="h-px w-12 bg-accent/30" />
                <span className="text-sm font-semibold">Nasza Misja</span>
                <div className="h-px w-12 bg-accent/30" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all hover:border-accent/50"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {value.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
