import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JG‑MARINE – Independent Marine Surveyors Since 1959",
  description:
    "Independent marine surveyors & loss adjusters. 24/7 emergency response. Trusted by P&I clubs, insurers, and shipowners across 11+ countries.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.example.com"), // TODO: set your real domain
  openGraph: {
    title: "JG‑MARINE – Independent Marine Surveyors Since 1959",
    description:
      "Independent marine surveyors & loss adjusters. 24/7 emergency response. Trusted across 11+ countries.",
    type: "website",
    url: "https://www.example.com",
    siteName: "JG‑MARINE",
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
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} antialiased`}
      >
        <Header />

        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
