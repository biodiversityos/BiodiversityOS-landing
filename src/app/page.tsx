import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AppSection from "@/components/sections/AppSection";
import TechSection from "@/components/sections/TechSection";
import WhoIsItForSection from "@/components/sections/WhoIsItForSection";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title:
    "BiodiversityOS — Open Marine Biodiversity Data Platform | Shark Tracking & Conservation",
  description:
    "Community-driven platform for collecting, structuring, and visualizing marine biodiversity data. Track shark sightings in Cozumel, explore interactive maps, and contribute to open conservation science.",
  alternates: {
    canonical: "https://biodiversityos.org",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 w-full overflow-hidden" role="main">
        <HeroSection />

        <AboutSection />

        <AppSection />

        <TechSection />

        <WhoIsItForSection />
      </main>

      <Footer />
    </>
  );
}
