import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Anchor, Award, Globe, Calendar } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        {/* TODO: Add hero image - historic maritime photo or company founders */}
        <Image
          src="/about/hero-heritage.jpg"
          alt="JG Marine - 64 lata dziedzictwa morskiego"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Overline */}
          <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Anchor className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              O JG Marine
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Trzy Pokolenia Kapitanów Żeglugi Wielkiej
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            64 lata tradycji morskiej połączone z nowoczesnymi certyfikatami DNV
            - niezależność i fachowość gwarantowana przez strukturę rodzinną
          </p>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white px-4 py-2 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Założona w 1959
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white px-4 py-2 text-sm">
              <Award className="h-4 w-4 mr-2" />
              Certyfikat DNV
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm border-white/30 text-white px-4 py-2 text-sm">
              <Globe className="h-4 w-4 mr-2" />
              11+ Krajów Operacyjnych
            </Badge>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
}
