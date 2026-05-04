import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/seo/PageHero";
import CTABanner from "@/components/seo/CTABanner";
import {
  Map,
  Filter,
  Clock,
  Users,
  Download,
  Shield,
  Eye,
  BarChart3,
} from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Features — Interactive Biodiversity Mapping & Data Tools",
  description:
    "Explore BiodiversityOS features: interactive species maps, real-time shark tracking, temporal data filtering, community verification, georeferenced data exports, and open API access for marine conservation research.",
  keywords: [
    "biodiversity mapping features",
    "species tracking tool",
    "marine data visualization",
    "interactive biodiversity map",
    "shark tracking software",
    "citizen science platform features",
    "georeferenced data export",
    "marine species filtering",
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
      "Explore a dynamic, real-time map showing shark sightings and marine species observations across the Mexican Caribbean. Zoom into dive sites, identify hotspots, and visualize biodiversity patterns geographically.",
    highlights: [
      "Real-time sighting markers",
      "Heatmap visualization",
      "Dive site overlays",
      "Satellite & terrain views",
    ],
    color: "#2563EB",
    bgColor: "#EFF6FF",
  },
  {
    icon: Filter,
    title: "Advanced Species Filtering",
    description:
      "Filter observations by species, behavior type, size class, and environmental conditions. Quickly isolate the data that matters for your research or conservation planning.",
    highlights: [
      "Multi-species selection",
      "Behavioral categories",
      "Size classification",
      "Depth range filtering",
    ],
    color: "#0D9488",
    bgColor: "#F0FDFA",
  },
  {
    icon: Clock,
    title: "Temporal Analysis",
    description:
      "Analyze biodiversity trends over time with powerful date range selectors and timeline sliders. Track seasonal migration patterns, population changes, and long-term ecological trends.",
    highlights: [
      "Custom date ranges",
      "Seasonal pattern detection",
      "Timeline slider",
      "Historical comparison",
    ],
    color: "#7C3AED",
    bgColor: "#F5F3FF",
  },
  {
    icon: Users,
    title: "Community Verification",
    description:
      "Every observation goes through our community-driven verification system. Combine local ecological knowledge with scientific validation to ensure data integrity and reliability.",
    highlights: [
      "Peer review system",
      "Expert validation",
      "Confidence scoring",
      "Attribution tracking",
    ],
    color: "#059669",
    bgColor: "#ECFDF5",
  },
  {
    icon: Eye,
    title: "Species Identification Tools",
    description:
      "Access comprehensive species profiles with identification guides, distinguishing features, and reference photos. Learn to differentiate between similar species with expert-curated content.",
    highlights: [
      "Photo reference library",
      "Key identification features",
      "IUCN conservation status",
      "Behavioral indicators",
    ],
    color: "#DC2626",
    bgColor: "#FEF2F2",
  },
  {
    icon: BarChart3,
    title: "Behavioral Analysis",
    description:
      "Record and analyze marine species behavior including feeding patterns, social interactions, territorial behavior, and responses to environmental changes.",
    highlights: [
      "Behavior categorization",
      "Activity pattern analysis",
      "Social group tracking",
      "Environmental correlation",
    ],
    color: "#EA580C",
    bgColor: "#FFF7ED",
  },
  {
    icon: Download,
    title: "Georeferenced Data Export",
    description:
      "Export structured, georeferenced biodiversity data in standard formats for use in GIS software, research papers, and conservation planning tools.",
    highlights: [
      "GeoJSON & CSV exports",
      "Standard metadata schemas",
      "Citation-ready formats",
      "Bulk download options",
    ],
    color: "#1C4D8D",
    bgColor: "#EEF5FC",
  },
  {
    icon: Shield,
    title: "Decentralized Data Integrity",
    description:
      "Built with decentralized technologies to ensure every biodiversity record is traceable, attributed, and permanently accessible. No single point of failure for critical conservation data.",
    highlights: [
      "Immutable records",
      "Transparent provenance",
      "Contributor attribution",
      "Long-term preservation",
    ],
    color: "#6D28D9",
    bgColor: "#F5F3FF",
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
          eyebrow="Platform Capabilities"
          title="Powerful Tools for Marine Conservation"
          description="BiodiversityOS provides a comprehensive suite of tools for collecting, analyzing, and sharing marine biodiversity data — free and open for everyone."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Features" },
          ]}
        />

        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article key={index} className={styles.featureCard}>
                  <div
                    className={styles.featureIcon}
                    style={{ background: feature.bgColor }}
                  >
                    <Icon size={28} color={feature.color} strokeWidth={1.8} />
                  </div>
                  <h2 className={styles.featureTitle}>{feature.title}</h2>
                  <p className={styles.featureDesc}>{feature.description}</p>
                  <ul className={styles.featureHighlights}>
                    {feature.highlights.map((h, i) => (
                      <li key={i}>
                        <span
                          className={styles.highlightDot}
                          style={{ background: feature.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <CTABanner
          title="Ready to Dive In?"
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
