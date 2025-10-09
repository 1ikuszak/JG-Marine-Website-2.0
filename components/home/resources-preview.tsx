import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail?: string;
}

// TODO: Replace with dynamic content from CMS/database
const placeholderPosts: BlogPost[] = [
  {
    title: "Top 5 Przyczyn Uszkodzeń Ładunku w Zimowych Operacjach Bałtyckich",
    excerpt:
      "Analiza najczęstszych problemów związanych z transportem morskim w trudnych warunkach zimowych oraz praktyczne wskazówki zapobiegania...",
    category: "Technical Guide",
    date: "2025-01-15",
    readTime: "8 min",
  },
  {
    title: "Nowe Regulacje IMO 2025: Wpływ na Surveye Statków",
    excerpt:
      "Kompleksowy przegląd nowych wymogów Międzynarodowej Organizacji Morskiej i ich implikacji dla armatorów oraz surveyorów...",
    category: "Regulatory Update",
    date: "2025-01-10",
    readTime: "6 min",
  },
  {
    title:
      "Boom Offshore Wind na Bałtyku: Szanse i Wyzwania dla Marine Warranty",
    excerpt:
      "Analiza rosnącego rynku farm wiatrowych na morzu i kluczowych aspektów nadzoru morskiego w projektach odnawialnej energii...",
    category: "Market Insights",
    date: "2025-01-05",
    readTime: "10 min",
  },
];

export default function ResourcesPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Maritime Expertise & Industry Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Najnowsze analizy, porady techniczne i aktualizacje regulacyjne
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {placeholderPosts.map((post, index) => (
            <Card
              key={index}
              className="flex flex-col hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                {/* Thumbnail Placeholder */}
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  {/* TODO: Add actual blog post thumbnail images */}
                  <span className="text-sm text-muted-foreground">
                    Blog Image
                  </span>
                </div>

                {/* Category & Read Time */}
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime} czytania
                  </span>
                </div>

                {/* Title */}
                <CardTitle className="text-xl line-clamp-2 hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                {/* Excerpt */}
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("pl-PL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between group"
                >
                  <a
                    href={`/resources/${post.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    Czytaj więcej
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <a href="/resources">
              Więcej Ekspertyz Branżowych
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
