import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  milestone?: boolean;
}

const timeline: TimelineEvent[] = [
  {
    year: "1959",
    title: "Założenie Firmy",
    description:
      "Pierwsze pokolenie Master Mariners zakłada firmę surveyingową w Gdańsku, koncentrując się na usługach dla floty Bałtyckiej.",
    image: "/about/timeline-1959.jpg",
    milestone: true,
  },
  {
    year: "1975",
    title: "Rozszerzenie Działalności",
    description:
      "Ekspansja na porty w Szczecinie i rozwój usług cargo surveying. Pierwsze międzynarodowe kontrakty z armatorami skandynawskimi.",
    image: "/about/timeline-1975.jpg",
  },
  {
    year: "1989",
    title: "Transformacja Ustrojowa",
    description:
      "Adaptacja do wolnego rynku i nawiązanie współpracy z międzynarodowymi P&I Clubs. Drugie pokolenie wchodzi do zarządu.",
    image: "/about/timeline-1989.jpg",
  },
  {
    year: "2004",
    title: "Integracja Europejska",
    description:
      "Wstąpienie Polski do UE otwiera nowe możliwości. Certyfikacja DNV i rozszerzenie usług na 11 krajów europejskich.",
    image: "/about/timeline-2004.jpg",
    milestone: true,
  },
  {
    year: "2015",
    title: "Specjalizacja Offshore Wind",
    description:
      "Wejście w rynek odnawialnej energii morskiej. Pierwsze projekty Marine Warranty Survey dla farm wiatrowych na Bałtyku.",
    image: "/about/timeline-2015.jpg",
  },
  {
    year: "2025",
    title: "Trzecie Pokolenie",
    description:
      "Kontynuacja dziedzictwa rodzinnego z nowoczesnymi technologiami i certyfikatami. 120+ projektów rocznie, obsługa klientów w 11+ krajach.",
    image: "/about/timeline-2025.jpg",
    milestone: true,
  },
];

export default function HeritageTimeline() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Nasza Historia
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            64 Lata Ewolucji i Doskonałości
          </h2>
          <p className="text-lg text-muted-foreground">
            Od małej rodzinnej firmy do lidera ekspertyz morskich w regionie
            Bałtyku
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent transform -translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <Card
                    className={`hover:shadow-xl transition-all ${
                      event.milestone ? "border-2 border-accent/50" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          className={`text-lg px-3 py-1 ${
                            event.milestone
                              ? "bg-accent text-accent-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {event.year}
                        </Badge>
                        {event.milestone && (
                          <Badge className="bg-success/10 text-success-foreground border-success/20">
                            Kluczowy Moment
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div
                    className={`w-6 h-6 rounded-full border-4 border-background ${
                      event.milestone ? "bg-accent scale-125" : "bg-muted"
                    } shadow-lg z-10`}
                  />
                </div>

                {/* Image */}
                <div className="w-full md:w-5/12">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    {/* TODO: Add actual historical photos */}
                    <Image
                      src={event.image}
                      alt={`${event.year} - ${event.title}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
