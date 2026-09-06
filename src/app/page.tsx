import type { Metadata } from "next";
import StoryShell from "@/components/story/StoryShell";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AppSection from "@/components/sections/AppSection";
import ObservationsSection from "@/components/sections/ObservationsSection";
import TechSection from "@/components/sections/TechSection";
import WhoIsItForSection from "@/components/sections/WhoIsItForSection";
import AboutSection from "@/components/sections/AboutSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title:
    "BiodiversityOS — Seven years of shark sightings in Cozumel, openly recorded",
  description:
    "743 shark sightings across 66 dive sites in the Cozumel Reefs National Park, logged since 2019 by the divers who work there. Species, counts, seasonality and coordinates — public, georeferenced and permanent.",
  alternates: {
    canonical: "https://biodiversityos.org",
  },
};

export default function Home() {
  return (
    <StoryShell>
      <Header />

      <main className="relative z-0 flex-1 w-full overflow-hidden" role="main">
        <HeroSection />
        <AboutSection />
        <ObservationsSection />
        <AppSection />
        <TechSection />
        <WhoIsItForSection />
        <CtaSection />
      </main>

      <Footer />
    </StoryShell>
  );
}
