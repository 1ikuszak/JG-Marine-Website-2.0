import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, BookOpen, Briefcase } from "lucide-react";
import Image from "next/image";

interface Involvement {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

const involvements: Involvement[] = [
  {
    category: "Członkostwa Profesjonalne",
    icon: <Award className="h-6 w-6" />,
    items: [
      "IIMS - International Institute of Marine Surveying",
      "CESAM - European Cargo Surveyors and Marine Adjusters",
      "IVR Rotterdam - Inland Vessel Register",
      "ITIC - Insurance Coverage Membership",
      "Polish Chamber of Maritime Commerce",
    ],
  },
  {
    category: "Konferencje i Wydarzenia",
    icon: <Users className="h-6 w-6" />,
    items: [
      "WindEurope Offshore - Annual Participation",
      "IUMI Conference - International Union of Marine Insurance",
      "Baltic Maritime Days - Regular Speakers",
      "Polish Maritime Forum - Industry Experts",
    ],
  },
  {
    category: "Publikacje i Thought Leadership",
    icon: <BookOpen className="h-6 w-6" />,
    items: [
      "Lloyd's List Maritime Intelligence - Featured Articles",
      "Maritime Risk International - Technical Publications",
      "Industry White Papers on Baltic Offshore Wind",
      "Technical Guidelines for P&I Clubs",
    ],
  },
  {
    category: "Współpraca Instytucjonalna",
    icon: <Briefcase className="h-6 w-6" />,
    items: [
      "Maritime University of Gdynia - Guest Lectures",
      "Polish Register of Shipping - Technical Consultations",
      "Port Authorities - Safety and Compliance Advisory",
      "Insurance Industry - Risk Assessment Training",
    ],
  },
];

export default function IndustryInvolvement() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Zaangażowanie w Branży
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Aktywni Liderzy w Społeczności Maritime
          </h2>
          <p className="text-lg text-muted-foreground">
            Nasze zaangażowanie wykracza poza codzienne operacje - kształtujemy
            przyszłość branży
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Visual with Conference Photos */}
          <div className="space-y-4">
            {/* Main Conference Image */}
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xl">
              {/* TODO: Add photo from maritime conference/event */}
              <Image
                src="/about/conference-speaking.jpg"
                alt="JG Marine speaking at maritime conference"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <p className="text-white font-semibold">
                  WindEurope Offshore 2024 - Jacek Goszczyński presenting on
                  Baltic risk management
                </p>
              </div>
            </div>

            {/* Two Smaller Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                {/* TODO: Add photo from industry event */}
                <Image
                  src="/about/industry-event-1.jpg"
                  alt="JG Marine at industry event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                {/* TODO: Add photo from training/lecture */}
                <Image
                  src="/about/industry-event-2.jpg"
                  alt="JG Marine conducting training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quote Card */}
            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="p-6">
                <div className="text-4xl text-accent mb-2">"</div>
                <p className="text-foreground italic mb-3">
                  Dzielimy się naszą wiedzą, bo silna branża maritime to korzyść
                  dla wszystkich. Nasza rola to nie tylko surveying - to
                  budowanie standardów i edukacja.
                </p>
                <div className="text-sm font-semibold text-muted-foreground">
                  — Mariusz Łapiński, Lead Auditor
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Involvement Categories */}
          <div className="space-y-6">
            {involvements.map((involvement, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:border-accent/30"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      {involvement.icon}
                    </div>
                    <h3 className="text-lg font-bold text-primary">
                      {involvement.category}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {involvement.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recognition Banner */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-accent/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Uznani Eksperci w Branży Maritime
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nasze zaangażowanie w rozwój branży jest doceniane przez
              organizacje międzynarodowe, uczelnie maritime i instytucje
              branżowe w całej Europie
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-white border-success/20">
                <Award className="h-3 w-3 mr-1 text-success" />
                IUMI Member
              </Badge>
              <Badge variant="secondary" className="bg-white border-success/20">
                <Award className="h-3 w-3 mr-1 text-success" />
                CESAM Certified
              </Badge>
              <Badge variant="secondary" className="bg-white border-success/20">
                <Award className="h-3 w-3 mr-1 text-success" />
                IIMS Fellow
              </Badge>
              <Badge variant="secondary" className="bg-white border-success/20">
                <Award className="h-3 w-3 mr-1 text-success" />
                Conference Speaker
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
