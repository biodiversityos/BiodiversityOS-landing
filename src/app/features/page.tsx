import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/seo/PageHero";
import CTABanner from "@/components/seo/CTABanner";
import { Map, Filter, Clock, Users, Download, Shield } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Platform Features — BiodiversityOS Marine Data Tools",
  description:
    "BiodiversityOS features: an interactive map of shark sightings in Cozumel, species and behavior filters, temporal data selection, community verification, and georeferenced data export for conservation research.",
  keywords: [
    "biodiversity mapping",
    "marine data visualization",
    "interactive biodiversity map",
    "shark sighting map",
    "citizen science platform",
    "georeferenced data export",
    "marine species filtering",
    "open biodiversity data",
  ],
  alternates: {
    canonical: "https://biodiversityos.org/features",
  },
};

const features = [
  {
    icon: Map,
    title: "Interactive Biodiversity Map",
    description:
      "Explore a map of shark sightings and marine species observations in the Mexican Caribbean. Navigate by location, zoom into specific areas, and visualize where species have been documented.",
    highlights: [
      "Georeferenced sighting markers",
      "Geographic filtering",
      "Cozumel region focus",
      "Open map tiles (OpenStreetMap)",
    ],
  },
  {
    icon: Filter,
    title: "Species & Behavior Filtering",
    description:
      "Filter observations by species and behavior type. Isolate the data relevant to your research or conservation planning without wading through unrelated records.",
    highlights: [
      "Species selection",
      "Behavioral categories",
      "Date range selection",
      "Combined filter queries",
    ],
  },
  {
    icon: Clock,
    title: "Temporal Filtering",
    description:
      "Select date ranges to explore sightings over time. Useful for comparing observations across seasons or tracking data coverage over a research period.",
    highlights: [
      "Custom date ranges",
      "Timeline slider",
      "Chronological sighting view",
      "Data coverage overview",
    ],
  },
  {
    icon: Users,
    title: "Community Verification",
    description:
      "Observations are reviewed through a community process that combines local ecological knowledge with scientific validation — the same approach used by Mar Sustentable in the field.",
    highlights: [
      "Community review process",
      "Local knowledge integration",
      "Structured data schema",
      "Attribution tracking",
    ],
  },
  {
    icon: Download,
    title: "Georeferenced Data Export",
    description:
      "Export structured, georeferenced biodiversity data in standard formats for use in GIS software, research papers, and conservation planning.",
    highlights: [
      "GeoJSON & CSV formats",
      "Standard metadata schemas",
      "Citation-ready structure",
      "Open access downloads",
    ],
  },
  {
    icon: Shield,
    title: "Data Traceability",
    description:
      "Each observation is linked to its contributor with transparent attribution. The verification chain — from submission to review — is recorded and accessible.",
    highlights: [
      "Contributor attribution",
      "Transparent provenance",
      "Structured verification trail",
      "Long-term accessibility",
    ],
  },
];

function FeaturesJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BiodiversityOS",
    applicationCategory: "EnvironmentApplication",
    operatingSystem: "Web",
    url: "https://app.biodiversityos.org",
    description:
      "Interactive platform for marine biodiversity data collection, visualization, and open science collaboration.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: features.map((f) => f.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesJsonLd />
      <Header />
      <main className="flex-1 w-full" role="main">
        <PageHero
          eyebrow="Platform"
          title="Tools for marine biodiversity data"
          description="BiodiversityOS provides tools for submitting, exploring, and exporting marine biodiversity observations — built on open principles and grounded in field research."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Features" },
          ]}
        />

        <section className="edSection">
          <div className="ed edWide">
            <div className="edList">
              {features.map(({ icon: Icon, title, description, highlights }) => (
                <article key={title} className="edEntry">
                  <Icon
                    className="edIcon"
                    size={26}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <ul className={styles.hi}>
                      {highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to dive in?"
          description="Start exploring real-time marine biodiversity data on our interactive map — it's free and open."
          primaryLabel="Open the Map"
          primaryHref="https://app.biodiversityos.org/"
          secondaryLabel="Read the FAQ"
          secondaryHref="/faq"
        />
      </main>
      <Footer />
    </>
  );
}
