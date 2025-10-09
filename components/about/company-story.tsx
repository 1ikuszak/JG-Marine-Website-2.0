import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CompanyStory() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <div className="col-span-2 relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
                {/* TODO: Add company photo - team at work, vessel inspection */}
                <Image
                  src="/about/story-main.jpg"
                  alt="JG Marine team conducting survey"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Two smaller images */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                {/* TODO: Add photo - historic company photo */}
                <Image
                  src="/about/story-heritage.jpg"
                  alt="JG Marine historical photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                {/* TODO: Add photo - modern survey equipment */}
                <Image
                  src="/about/story-modern.jpg"
                  alt="Modern survey technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -right-6 shadow-2xl border-2 border-accent/20 hidden lg:block">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-accent mb-1">120+</div>
                <div className="text-sm text-muted-foreground">
                  Projektów Rocznie
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story Content */}
          <div>
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Nasza Opowieść
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Od Tradycji do Nowoczesności
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">
                  JG Marine została założona w 1959 roku
                </strong>{" "}
                przez pierwsze pokolenie Master Mariners, którzy przez dekady
                służyli na statkach żeglugi wielkiej. Ich pasja do morza i
                głęboka znajomość operacji morskich stały się fundamentem firmy.
              </p>

              <p>
                Przez ponad sześć dekad ewoluowaliśmy od lokalnej firmy
                surveyingowej do{" "}
                <strong className="text-foreground">
                  uznanego lidera w regionie Bałtyku
                </strong>
                , obsługując klientów w 11+ krajach europejskich. Ta
                transformacja była możliwa dzięki połączeniu tradycyjnej wiedzy
                maritimowej z nowoczesnymi standardami i certyfikacjami.
              </p>

              <p>
                Drugie i trzecie pokolenie rodziny kontynuuje dziedzictwo,
                wprowadzając{" "}
                <strong className="text-foreground">
                  nowoczesne technologie i międzynarodowe certyfikaty DNV
                </strong>
                , jednocześnie zachowując niezależność i wartości, które
                definiują naszą firmę od początku.
              </p>

              <p>
                Dzisiaj jesteśmy dumni z tego, że{" "}
                <strong className="text-foreground">
                  każdy członek naszego zespołu dzieli pasję do morza
                </strong>{" "}
                i zaangażowanie w dostarczanie najwyższej jakości usług
                surveyingowych. Nasza niezależność rodzinna gwarantuje, że
                zawsze stawiamy interesy klientów na pierwszym miejscu.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">
                    Rodzinna Własność
                  </div>
                  <div className="text-sm text-muted-foreground">
                    100% niezależność
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">
                    Międzynarodowe Certyfikaty
                  </div>
                  <div className="text-sm text-muted-foreground">
                    DNV, IIMS, CESAM
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">
                    Specjalizacja Regionalna
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Eksperci Bałtyccy
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">
                    Tradycja + Innowacja
                  </div>
                  <div className="text-sm text-muted-foreground">
                    64 lata + nowoczesność
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
