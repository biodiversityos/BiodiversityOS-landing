import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/seo/PageHero";
import CTABanner from "@/components/seo/CTABanner";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions About BiodiversityOS",
  description:
    "Find answers about BiodiversityOS: how to report shark sightings, our data collection methods, decentralized science technology, community participation, and marine conservation in Cozumel.",
  keywords: [
    "BiodiversityOS FAQ",
    "shark tracking questions",
    "marine biodiversity help",
    "citizen science how to",
    "DeSci explained",
    "Cozumel shark species",
    "biodiversity data platform",
    "how to report shark sighting",
  ],
  alternates: {
    canonical: "https://biodiversityos.org/faq",
  },
};

// FAQ data duplicated here for JSON-LD (server-side)
const faqStructuredData = [
  {
    q: "What is BiodiversityOS?",
    a: "BiodiversityOS is a community-driven, open-source platform for collecting, structuring, and visualizing marine biodiversity data. It transforms real-world observations into open, verifiable knowledge, starting with shark tracking in Cozumel, Mexico, with a vision to expand globally across all ecosystems.",
  },
  {
    q: "Is BiodiversityOS free to use?",
    a: "Yes, BiodiversityOS is completely free and open source. Anyone can access the data, contribute observations, and use our tools for research and conservation purposes.",
  },
  {
    q: "How can I report a shark sighting?",
    a: "You can report sightings through our web application at app.biodiversityos.org. Simply click 'Submit Sighting', fill in the details including species, location, date, behavior observed, and any photos.",
  },
  {
    q: "What shark species can be found in Cozumel?",
    a: "Cozumel's waters are home to several shark species including Caribbean Reef Sharks, Nurse Sharks, Bull Sharks, Whale Sharks, Hammerhead Sharks, and occasionally Blacktip Sharks.",
  },
  {
    q: "Do I need to be a scientist to contribute data?",
    a: "No! BiodiversityOS is designed for citizen scientists, divers, fishers, and anyone who encounters marine life. Our platform guides you through the data submission process.",
  },
  {
    q: "What does 'decentralized science' (DeSci) mean?",
    a: "Decentralized Science (DeSci) uses blockchain and distributed technologies to make scientific research more open, transparent, and collaborative.",
  },
  {
    q: "What technology does BiodiversityOS use?",
    a: "BiodiversityOS is built with modern web technologies including Next.js, React, and Leaflet for interactive mapping, with decentralized technologies for data integrity.",
  },
  {
    q: "Can conservation organizations partner with BiodiversityOS?",
    a: "Absolutely. We actively seek partnerships with conservation organizations, protected area managers, academic institutions, and research networks.",
  },
  {
    q: "How is my contributed data used?",
    a: "Your contributed data is used to build a comprehensive picture of marine biodiversity. It feeds into interactive maps, species distribution analyses, and conservation research.",
  },
  {
    q: "Is BiodiversityOS committed to open principles?",
    a: "Yes. BiodiversityOS is built around open data principles: observations are openly accessible, contributors receive attribution, and the platform is designed to avoid locking data behind proprietary systems.",
  },
];

function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqStructuredData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQJsonLd />
      <Header />
      <main className="flex-1 w-full" role="main">
        <PageHero
          eyebrow="Help & Support"
          title="Frequently Asked Questions"
          description="Everything you need to know about BiodiversityOS, marine data collection, and how to get involved in ocean conservation."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "FAQ" },
          ]}
        />

        <FAQClient />

        <CTABanner
          title="Still Have Questions?"
          description="Reach out to our team — we're happy to help you get started with BiodiversityOS."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          secondaryLabel="Explore Features"
          secondaryHref="/features"
        />
      </main>
      <Footer />
    </>
  );
}
