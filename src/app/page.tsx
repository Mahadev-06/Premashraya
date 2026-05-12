import HeroSection from "@/sections/HeroSection";
import QuickHighlightsSection from "@/sections/QuickHighlightsSection";
import FounderSection from "@/sections/FounderSection";
import RoomsSection from "@/sections/RoomsSection";
import ActivitiesSection from "@/sections/ActivitiesSection";
import CaregiverSection from "@/sections/CaregiverSection";
import StoriesSection from "@/sections/StoriesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickHighlightsSection />
      <FounderSection />
      <RoomsSection />
      <ActivitiesSection />
      <CaregiverSection />
      <StoriesSection />
    </>
  );
}
