import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Award, Anchor } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  email?: string;
  phone?: string;
  certifications?: string[];
  featured?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jacek Goszczyński",
    role: "Founder & CEO",
    description:
      "Seasoned Master Mariner and certified auditor across multiple maritime disciplines. Accredited expert in commercial courts in Szczecin and Warsaw, bringing decades of hands-on maritime experience.",
    email: "jack@jg-marine.com",
    phone: "48 602 222 477",
    certifications: [
      "Master Mariner",
      "Court Expert",
      "Multi-Discipline Auditor",
    ],
    featured: true,
  },
  {
    name: "Mariusz Łapiński",
    role: "Lead Auditor",
    description:
      "ISO/ISM/ISPS Lead Auditor specializing in maritime operations and risk assessment. Dangerous Goods Safety Advisor (ADR/RID) with fluency in English and Russian for international operations.",
    email: "mariusz@jg-marine.com",
    phone: "+48 501 505 797",
    certifications: ["ISO/ISM/ISPS Lead Auditor", "ADR/RID Advisor"],
    featured: true,
  },
  {
    name: "Jerzy Barszczewski",
    role: "Chief Engineer",
    description:
      "M.Sc. in Mechanical Engineering with expertise in shipbuilding, reefer equipment, and fuel handling systems. Specializes in comprehensive Hull & Machinery Surveys for commercial vessels.",
    email: "jerzy@jg-marine.com",
    phone: "48 501 386 133",
    certifications: [
      "M.Sc. Mechanical Eng.",
      "Chief Engineer",
      "H&M Specialist",
    ],
    featured: true,
  },
  {
    name: "Joanna Adamczak",
    role: "Operations Manager",
    description:
      "MA in Economics. Manages international survey coordination, client relations across 11+ countries, and operational logistics. Ensures seamless project execution and client communication.",
    email: "joanna@jg-marine.com",
    phone: "48 604 643 200",
    certifications: ["MA Economics", "Operations Management"],
  },
  {
    name: "Dominik Kowalewski",
    role: "Senior Cargo Surveyor",
    description:
      "Experienced surveyor in general commodities and containerized cargo. Conducts loading supervision, on/off-hire surveys, draft surveys, and agricultural product assessments.",
    email: "dominik@jg-marine.com",
    phone: "48 509 682 700",
    certifications: ["Cargo Surveyor", "Agricultural Certified"],
  },
  {
    name: "Bartłomiej Bączek",
    role: "Cargo Surveyor",
    description:
      "Maritime Academy graduate specializing in general commodities and container cargo surveys. Proficient in loading supervision and AutoCAD technical documentation.",
    email: "baczek@jg-marine.com",
    phone: "48 509 682 701",
    certifications: ["Maritime Academy", "AutoCAD"],
  },
  {
    name: "Marek Borowski",
    role: "Regional Surveyor",
    description:
      "Certified agricultural products expert conducting surveys throughout Silesian Region and Germany. Extensive experience in cross-border cargo inspections and quality assessments.",
    email: "marek@jg-marine.com",
    phone: "+48 509 682 700",
    certifications: ["Agricultural Expert", "Cross-Border Operations"],
  },
  {
    name: "Bartłomiej Jaworski",
    role: "Warsaw Office Manager",
    description:
      "ISO 9001:2008 Lead Auditor with HAZMAT certification from Antwerp's International Institute of Container Lessors. Oversees Warsaw office operations and container survey projects.",
    email: "bartek@jg-marine.com",
    phone: "48 602 752 200",
    certifications: ["ISO 9001 Lead Auditor", "HAZMAT Certified"],
  },
  {
    name: "Beata Fredrich",
    role: "Office Coordinator",
    description:
      "MA in Environmental Protection from Gdańsk University. Coordinates office operations, accounting support, and administrative logistics across multiple locations.",
    certifications: ["MA Environmental Protection", "Operations"],
  },
];

export default function TeamSection() {
  const featuredMembers = teamMembers.filter((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Anchor className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Nasz Zespół
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Eksperci z Dekadami Doświadczenia
          </h2>
          <p className="text-lg text-muted-foreground">
            Certyfikowani surveyorzy i audytorzy maritime z międzynarodowym
            doświadczeniem
          </p>
        </div>

        {/* Featured Team Members (Leadership) - LARGER */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredMembers.map((member, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 group"
            >
              <CardHeader className="pb-6">
                {/* LARGER Avatar */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent via-accent/80 to-accent/60 flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform shadow-lg">
                  <span className="text-4xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-base font-semibold text-accent mb-4">
                    {member.role}
                  </p>
                </div>

                {/* Certifications */}
                {member.certifications && (
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.certifications.map((cert, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-success/10 text-success-foreground border-success/20 text-xs px-2 py-1"
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {member.description}
                </p>

                {/* Contact Info */}
                {(member.email || member.phone) && (
                  <div className="space-y-2 pt-4 border-t">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <Mail className="h-4 w-4 shrink-0" />
                        <span className="group-hover/link:underline">
                          {member.email}
                        </span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:+${member.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <Phone className="h-4 w-4 shrink-0" />
                        <span className="group-hover/link:underline">
                          +{member.phone}
                        </span>
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Team Members - LARGER avatars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherMembers.map((member, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:border-accent/30"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  {/* LARGER Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center shrink-0 border-2 border-border">
                    <span className="text-lg font-bold text-accent">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-bold text-primary mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-accent mb-2">
                      {member.role}
                    </p>

                    {/* Certifications */}
                    {member.certifications && (
                      <div className="flex flex-wrap gap-1">
                        {member.certifications.map((cert, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-[10px] px-1.5 py-0.5 bg-success/5 border-success/10"
                          >
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Description - More prominent */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                {/* Contact Info */}
                {(member.email || member.phone) && (
                  <div className="flex flex-col gap-2 pt-3 border-t text-xs">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:+${member.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <span>+{member.phone}</span>
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-muted/50 to-muted/30 border-accent/20">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-3">
                Potrzebujesz Ekspertyzy Surveyora?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Nasz zespół jest dostępny 24/7 w całym regionie Bałtyku
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Skontaktuj się z Zespołem
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent/30 hover:bg-accent/5"
                >
                  <a href="/about">Dowiedz się Więcej o Nas</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
