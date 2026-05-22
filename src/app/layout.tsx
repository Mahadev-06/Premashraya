import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageNavigation from "@/components/PageNavigation";

export const metadata: Metadata = {
  title: "Premashraya | A Place of Care, Comfort & Hope",
  description:
    "A supportive residential sanctuary focused on dignity, emotional support, and peaceful healing. Experience care that feels like home.",
  keywords: [
    "palliative care",
    "healing sanctuary",
    "cancer care",
    "residential care",
    "comfort care",
    "end of life care",
  ],
  openGraph: {
    title: "Premashraya | A Place of Care, Comfort & Hope",
    description:
      "A supportive residential sanctuary focused on dignity, emotional support, and peaceful healing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Plus+Jakarta+Sans:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased w-full flex flex-col min-h-screen">
        <div className="relative w-full overflow-hidden flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
          <PageNavigation />
        </div>
      </body>
    </html>
  );
}
