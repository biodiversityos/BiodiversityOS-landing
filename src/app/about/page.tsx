import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/seo/PageHero";
import CTABanner from "@/components/seo/CTABanner";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About BiodiversityOS — Our Mission, Story & Team",
  description:
    "Learn about BiodiversityOS: born from years of shark research in Cozumel by Mar Sustentable, we're building open infrastructure to map and protect marine biodiversity worldwide through community-driven science.",
  keywords: [
    "about BiodiversityOS",
    "Mar Sustentable Cozumel",
    "marine conservation mission",
    "ocean research team",
    "biodiversity intelligence",
    "citizen science organization",
    "DeSci marine research",
    "Cozumel shark research",
  ],
  alternates: {
    canonical: "https://biodiversityos.org/about",
  },
};

const timeline = [
  {
    year: "2018",
    title: "Mar Sustentable Founded",
    description:
      "Field research begins in Cozumel to document shark presence and marine biodiversity in the Mexican Caribbean.",
  },
  {
    year: "2020",
    title: "Data Collection Expands",
    description:
      "Hundreds of shark sightings documented. Partnerships form with local dive operators and conservation groups.",
  },
  {
    year: "2022",
    title: "Digital Platform Vision",
    description:
      "The need for a structured, open data platform becomes clear. BiodiversityOS concept takes shape.",
  },
  {
    year: "2024",
    title: "BiodiversityOS Launched",
    description:
      "First version of the platform goes live with interactive mapping, species filtering, and community data submission.",
  },
  {
    year: "2025",
    title: "DeSci Integration",
    description:
      "Decentralized science technologies integrated for data traceability, attribution, and permanent accessibility.",
  },
  {
    year: "2026",
    title: "Global Expansion",
    description:
      "Platform expanding beyond Cozumel to cover more regions of the Caribbean and beyond, building a global biodiversity network.",
  },
];

const values = [
  {
    emoji: "🔬",
    title: "Scientific Rigor",
    description:
      "Every observation follows structured methodologies. We maintain research-grade data standards while remaining accessible to all contributors.",
  },
  {
    emoji: "🌊",
    title: "Ocean First",
    description:
      "Our work is driven by a deep commitment to marine ecosystems. Every feature we build serves the goal of understanding and protecting ocean life.",
  },
  {
    emoji: "🤝",
    title: "Community Power",
    description:
      "We believe the best conservation science happens when researchers, local communities, divers, and technologists work together.",
  },
  {
    emoji: "🔓",
    title: "Open by Default",
    description:
      "Data should be free. Our platform, code, and collected data are open and accessible to anyone working toward conservation.",
  },
  {
    emoji: "🌐",
    title: "Decentralized Trust",
    description:
      "Using DeSci principles to ensure data integrity, proper attribution, and permanent accessibility without centralized control.",
  },
  {
    emoji: "🌱",
    title: "Long-Term Thinking",
    description:
      "We build for permanence. Biodiversity records should outlast any single organization, server, or funding cycle.",
  },
];

function AboutJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BiodiversityOS",
    url: "https://biodiversityos.org",
    logo: "https://biodiversityos.org/image.png",
    description:
      "Community-driven platform for collecting, structuring, and visualizing marine biodiversity data. Born from shark research in Cozumel by Mar Sustentable.",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Cozumel, Quintana Roo, Mexico",
    },
    sameAs: ["https://app.biodiversityos.org"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cozumel",
      addressRegion: "Quintana Roo",
      addressCountry: "MX",
    },
    areaServed: {
      "@type": "Place",
      name: "Mexican Caribbean",
    },
    knowsAbout: [
      "Marine Biodiversity",
      "Shark Conservation",
      "Citizen Science",
      "Decentralized Science",
      "Ocean Data",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      <Header />
      <main className="flex-1 w-full" role="main">
        <PageHero
          eyebrow="Our Story"
          title="From Cozumel's Reefs to a Global Vision"
          description="BiodiversityOS was born from years of field research in the Mexican Caribbean. We're building open infrastructure to map and protect life across all ecosystems."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />

        {/* Mission Section */}
        <section className={styles.missionSection}>
          <div className={styles.missionContainer}>
            <div className={styles.missionContent}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                We are building the <strong>operating system for biodiversity data</strong> — 
                a platform where communities, scientists, and technologists collaborate to 
                document, understand, and protect the natural world. Starting with shark 
                tracking in Cozumel, we envision a global network of open biodiversity intelligence.
              </p>
              <p className={styles.missionText}>
                Our work with <strong>Mar Sustentable</strong> in the Mexican Caribbean has shown 
                that when local knowledge meets modern technology, conservation becomes more 
                effective, transparent, and inclusive. BiodiversityOS is the next step in this journey.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timelineSection}>
          <div className={styles.timelineContainer}>
            <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "3rem" }}>
              Our Journey
            </h2>
            <div className={styles.timeline}>
              {timeline.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesContainer}>
            <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "0.75rem" }}>
              Our Values
            </h2>
            <p className={styles.valuesSubtitle}>
              The principles that guide everything we build
            </p>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <article key={index} className={styles.valueCard}>
                  <span className={styles.valueEmoji}>{value.emoji}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className={styles.partnersSection}>
          <div className={styles.partnersContainer}>
            <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "0.75rem" }}>
              Partners & Collaborators
            </h2>
            <p className={styles.valuesSubtitle}>
              Working together to protect marine ecosystems
            </p>
            <div className={styles.partnersGrid}>
              {[
                {
                  name: "Mar Sustentable",
                  role: "Field Research & Data Collection",
                  desc: "Leading marine conservation research in the Mexican Caribbean since 2018.",
                },
                {
                  name: "Local Dive Operators",
                  role: "Community Data Contributors",
                  desc: "Dive professionals providing daily observations and species sightings.",
                },
                {
                  name: "Academic Institutions",
                  role: "Scientific Validation",
                  desc: "Universities and research centers ensuring data quality and methodology.",
                },
                {
                  name: "DeSci Community",
                  role: "Technology & Infrastructure",
                  desc: "Decentralized science builders providing open infrastructure and tooling.",
                },
              ].map((partner, i) => (
                <div key={i} className={styles.partnerCard}>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <span className={styles.partnerRole}>{partner.role}</span>
                  <p className={styles.partnerDesc}>{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Join Our Mission"
          description="Whether you're a researcher, diver, conservationist, or developer — there's a place for you in BiodiversityOS."
          primaryLabel="Get Involved"
          primaryHref="/contact"
          secondaryLabel="Explore Features"
          secondaryHref="/features"
        />
      </main>
      <Footer />
    </>
  );
}
