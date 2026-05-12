import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
