import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
