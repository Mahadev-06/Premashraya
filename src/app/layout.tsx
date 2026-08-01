import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageNavigation from "@/components/PageNavigation";
import StructuredData from "@/components/StructuredData";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://premashraya.org"),
  title: "Premashraya | Free Cancer Patient Shelter in Bhubaneswar & Cuttack",
  description:
    "Premashraya provides free hygienic accommodation, nutritious meals, counselling, and emotional support for cancer patients undergoing treatment in Bhubaneswar & Cuttack.",
  keywords: [
    "cancer patient shelter Bhubaneswar",
    "cancer support Odisha",
    "free accommodation for cancer patients",
    "NGO cancer care Odisha",
    "cancer patient support Cuttack",
    "cancer shelter near hospitals",
    "Premashraya charitable trust",
    "cancer care Bhubaneswar",
    "cancer patient home Odisha",
    "free cancer shelter India",
  ],
  openGraph: {
    title: "Premashraya | Free Cancer Patient Shelter in Bhubaneswar & Cuttack",
    description:
      "Premashraya provides free hygienic accommodation, nutritious meals, counselling, and emotional support for cancer patients undergoing treatment in Bhubaneswar & Cuttack.",
    url: "https://premashraya.org",
    siteName: "Premashraya",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.webp",
        alt: "Premashraya - Free Cancer Patient Shelter in Bhubaneswar & Cuttack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premashraya | Free Cancer Patient Shelter in Bhubaneswar & Cuttack",
    description:
      "Premashraya provides free hygienic accommodation, nutritious meals, counselling, and emotional support for cancer patients undergoing treatment in Bhubaneswar & Cuttack.",
    images: ["/images/hero.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.webp",
  },
  alternates: {
    canonical: "https://premashraya.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "ADD_YOUR_VERIFICATION_CODE",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden w-full" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Noto+Sans+Oriya:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased w-full flex flex-col min-h-screen">
        <StructuredData />
        <SmoothScroll />
        <LanguageProvider>
          <div className="relative w-full overflow-hidden flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
            <PageNavigation />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

