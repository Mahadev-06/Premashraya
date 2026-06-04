import type { Metadata } from 'next';
import HeroSection from "@/sections/HeroSection";
import QuickHighlightsSection from "@/sections/QuickHighlightsSection";
import FounderSection from "@/sections/FounderSection";
import RoomsSection from "@/sections/RoomsSection";
import ActivitiesSection from "@/sections/ActivitiesSection";
import CaregiverSection from "@/sections/CaregiverSection";


export const metadata: Metadata = {
  title: 'Premashraya | Free Cancer Patient Shelter in Bhubaneswar & Cuttack',
  description: 'Premashraya provides free hygienic accommodation, nutritious meals, counselling, and emotional support for cancer patients undergoing treatment in Bhubaneswar & Cuttack, Odisha.',
  alternates: {
    canonical: 'https://premashraya.org',
  },
  openGraph: {
    title: 'Premashraya | Free Cancer Patient Shelter in Bhubaneswar & Cuttack',
    description: 'Free hygienic shelter, nutritious meals, and emotional care for cancer patients during treatment in Odisha.',
    url: 'https://premashraya.org',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Premashraya cancer patient shelter in Bhubaneswar' }],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickHighlightsSection />
      <FounderSection />
      <RoomsSection />
      <ActivitiesSection />
      <CaregiverSection />
    </>
  );
}
