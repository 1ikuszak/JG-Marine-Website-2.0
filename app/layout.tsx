import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";
import { CookieConsent } from "@/components/cookie-consent";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JG‑MARINE – Independent Marine Surveyors Since 1959",
  description:
    "Independent marine surveyors & loss adjusters. 24/7 emergency response. Trusted by P&I clubs, insurers, and shipowners across 11+ countries.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.jg-marine.com"),
  openGraph: {
    title: "JG‑MARINE – Independent Marine Surveyors Since 1959",
    description:
      "Independent marine surveyors & loss adjusters. 24/7 emergency response. Trusted across 11+ countries.",
    type: "website",
    url: "https://www.jg-marine.com",
    siteName: "JG‑MARINE",
  },
  twitter: {
    card: "summary_large_image",
    title: "JG‑MARINE – Independent Marine Surveyors Since 1959",
    description:
      "Independent marine surveyors & loss adjusters. 24/7 emergency response. Trusted across 11+ countries.",
  },
  alternates: {
    canonical: "https://www.jg-marine.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === 'development' && (
          <script
            async
            crossOrigin="anonymous"
            src="https://tweakcn.com/live-preview.min.js"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JG-Marine Co. Ltd.",
              url: "https://www.jg-marine.com",
              logo: "https://www.jg-marine.com/logo.svg",
              description:
                "Independent marine surveyors & loss adjusters providing 24/7 emergency response across 11+ European countries.",
              foundingDate: "1959",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ul. Armii Krajowej 116/2",
                addressLocality: "Sopot",
                postalCode: "81-824",
                addressCountry: "PL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+48-602-222-477",
                contactType: "customer service",
                availableLanguage: ["English", "Polish"],
              },
              sameAs: [
                "https://www.linkedin.com/company/jg-marine",
                "https://x.com/jgmarineltd",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />

        {children}
        <Footer />
        <Toaster position="top-right" richColors />
        <CookieConsent />
      </body>
    </html>
  );
}
