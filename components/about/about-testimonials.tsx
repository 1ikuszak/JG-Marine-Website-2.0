import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string;
  image?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "JG-MARINE to jedyny zespół, który przybył na miejsce awarii w Gdańsku w 18 godzin. Raport wytrzymał arbitraż w Londynie bez żadnych zastrzeżeń. Profesjonalizm na najwyższym poziomie.",
    author: "Jacek Kowalski",
    role: "Claims Manager",
    company: "Baltic Shipping Line",
    metric: "18h vs 5 dni konkurencji",
    image: "/testimonials/client-1.jpg",
    rating: 5,
  },
  {
    quote:
      "Współpracujemy z JG Marine od ponad dekady. Ich niezależność i fachowość są niezastąpione. Każdy raport jest dokładny, terminowy i akceptowany przez wszystkie P&I Clubs bez dyskusji.",
    author: "Anna Wiśniewska",
    role: "Senior Underwriter",
    company: "Major P&I Club",
    metric: "10+ lat współpracy",
    image: "/testimonials/client-2.jpg",
    rating: 5,
  },
  {
    quote:
      "W projektach offshore wind potrzebujemy surveyorów, którzy rozumieją zarówno maritime operations jak i specyfikę OWE. JG Marine to jedni z nielicznych w regionie z realnym doświadczeniem.",
    author: "Lars Hansen",
    role: "Project Manager",
    company: "Baltic Wind Development",
    metric: "€500M+ projektów nadzorowanych",
    image: "/testimonials/client-3.jpg",
    rating: 5,
  },
  {
    quote:
      "Lokalny zespół z międzynarodowymi certyfikatami - dokładnie to, czego potrzebowaliśmy. Reakcja w 24 godziny na Bałtyku to game-changer w naszej branży.",
    author: "Michael Schmidt",
    role: "Technical Director",
    company: "European Logistics Group",
    metric: "60+ surveyów rocznie",
    image: "/testimonials/client-4.jpg",
    rating: 5,
  },
  {
    quote:
      "Dziedzictwo trzech pokoleń kapitanów jest widoczne w każdym aspekcie ich pracy. To nie są biurowi surveyorzy - to ludzie, którzy rozumieją morze.",
    author: "Piotr Nowak",
    role: "Fleet Superintendent",
    company: "Polish Vessel Operators",
    metric: "Zaufany partner flotowy",
    image: "/testimonials/client-5.jpg",
    rating: 5,
  },
  {
    quote:
      "Niezależność JG Marine to nie marketing. Jako sąd arbitrażowy widzimy, że ich raporty są zawsze obiektywne i wytrzymują najbardziej szczegółową analizę prawną.",
    author: "Dr. Elena Kowalczyk",
    role: "Maritime Arbitrator",
    company: "Warsaw Commercial Court",
    metric: "Akceptowany ekspert sądowy",
    image: "/testimonials/client-6.jpg",
    rating: 5,
  },
];

export default function AboutTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Opinie Klientów
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Co Mówią o Nas Klienci
          </h2>
          <p className="text-lg text-muted-foreground">
            Zaufali nam P&I Clubs, armatorzy, ubezpieczyciele i deweloperzy
            offshore w całej Europie
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all flex flex-col"
            >
              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-accent/20 mb-3" />

                {/* Quote Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metric Badge */}
                {testimonial.metric && (
                  <Badge className="mb-4 bg-success/10 text-success-foreground border-success/20 w-fit">
                    {testimonial.metric}
                  </Badge>
                )}

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  {/* Avatar */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted shrink-0">
                    {/* TODO: Add client photos if available, otherwise use initials */}
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-accent/10 text-accent font-semibold">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="font-semibold text-foreground truncate">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">
                  Wskaźnik Satysfakcji
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Akceptacja P&I
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  85%
                </div>
                <div className="text-sm text-muted-foreground">
                  Klienci Długoterminowi
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-muted-foreground">
                  Średnia Ocena
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
