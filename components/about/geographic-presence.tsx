import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, Globe } from "lucide-react";
import Image from "next/image";

interface Office {
  city: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

const offices: Office[] = [
  {
    city: "Sopot",
    type: "Centrala",
    address: "ul. Example 123, 81-XXX Sopot",
    phone: "+48 XXX XXX XXX",
    email: "sopot@jg-marine.com",
    image: "/about/office-sopot.jpg",
  },
  {
    city: "Szczecin",
    type: "Oddział Regionalny",
    address: "ul. Example 456, 70-XXX Szczecin",
    phone: "+48 XXX XXX XXX",
    email: "szczecin@jg-marine.com",
    image: "/about/office-szczecin.jpg",
  },
  {
    city: "Warszawa",
    type: "Biuro",
    address: "ul. Example 789, 00-XXX Warszawa",
    phone: "+48 602 752 200",
    email: "bartek@jg-marine.com",
    image: "/about/office-warszawa.jpg",
  },
];

const countries = [
  "Polska",
  "Niemcy",
  "Szwecja",
  "Dania",
  "Norwegia",
  "Finlandia",
  "Litwa",
  "Łotwa",
  "Estonia",
  "Holandia",
  "Belgia",
];

export default function GeographicPresence() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Globe className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Obecność Geograficzna
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Lokalna Obecność, Globalny Zasięg
          </h2>
          <p className="text-lg text-muted-foreground">
            Strategiczne lokalizacje w kluczowych portach Bałtyckich i sieć
            partnerska w całej Europie
          </p>
        </div>

        {/* Map Visualization */}
        <div className="mb-16 max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative aspect-[16/9]">
              {/* TODO: Add interactive map or map image showing coverage */}
              <Image
                src="/about/map-coverage.jpg"
                alt="JG Marine coverage map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4 max-w-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">3</div>
                    <div className="text-sm text-white/80">Biura w Polsce</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      11+
                    </div>
                    <div className="text-sm text-white/80">
                      Krajów Operacyjnych
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      &lt;24h
                    </div>
                    <div className="text-sm text-white/80">Reakcja Bałtyk</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Office Locations */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {offices.map((office, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Office Image */}
              <div className="relative aspect-[16/10]">
                {/* TODO: Add actual office/port photos */}
                <Image
                  src={office.image}
                  alt={`${office.city} office`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {office.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-bold text-primary">
                    {office.city}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <a
                      href={`tel:${office.phone}`}
                      className="hover:text-accent transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="text-muted-foreground">
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-accent transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Countries Coverage */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-accent/5 to-primary/5">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">
              Kraje Operacyjne
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {countries.map((country, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white border-accent/20 text-foreground"
                >
                  {country}
                </Badge>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              + Sieć partnerska dla operacji globalnych
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
