import type { Metadata } from "next";
import {
  Microscope,
  Waves,
  Users,
  Unlock,
  Link2,
  Sprout,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/seo/PageHero";
import CTABanner from "@/components/seo/CTABanner";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About BiodiversityOS — Research, Mission & Story",
  description:
    "BiodiversityOS is built on field research by Mar Sustentable in the Mexican Caribbean, ongoing since 2015. Learn about the research behind the platform and the principles guiding it.",
  keywords: [
    "about BiodiversityOS",
    "Mar Sustentable",
    "Cozumel shark research",
    "marine conservation",
    "citizen science",
    "open biodiversity data",
    "Mexican Caribbean research",
  ],
  alternates: {
    canonical: "https://biodiversityos.org/about",
  },
};

const timeline = [
  {
    year: "2015",
    title: "Field Research Begins",
    description:
      "Mar Sustentable initiates shark documentation research in Holbox, Mexico. The approach combines fishers' Local Ecological Knowledge with geospatial methods to document shark diversity and habitat use.",
  },
  {
    year: "2021",
    title: "Research Expands to Cozumel Region",
    description:
      "Field research extends to Isla Mujeres and Cozumel. Club de los Tiburones México launches with Save Our Seas Foundation support, bringing shark conservation education to students across Latin America and the Caribbean.",
  },
  {
    year: "2018–present",
    title: "Science Outreach",
    description:
      "Mar Sustentable produces educational content on marine biodiversity, reaching communities across the region with science communication grounded in ongoing field research.",
  },
  {
    year: "Now",
    title: "BiodiversityOS",
    description:
      "Open data infrastructure built on top of this fieldwork — interactive maps, structured sighting records, and community data submission to make marine biodiversity research accessible and collaborative.",
  },
];

const values = [
  {
    icon: Microscope,
    title: "Scientific Rigor",
    description:
      "Observations follow structured data schemas grounded in the field methodologies developed by Mar Sustentable over years of research in the Mexican Caribbean.",
  },
  {
    icon: Waves,
    title: "Ocean First",
    description:
      "The platform exists to serve conservation. Every design decision prioritizes the usefulness and reliability of marine biodiversity data over growth metrics.",
  },
  {
    icon: Users,
    title: "Community Knowledge",
    description:
      "Fishers, divers, and local observers hold ecological knowledge that formal research often misses. BiodiversityOS is designed to recognize and integrate these contributions.",
  },
  {
    icon: Unlock,
    title: "Open Access",
    description:
      "Biodiversity observations collected through the platform are openly accessible for research, conservation planning, and public understanding.",
  },
  {
    icon: Link2,
    title: "Attribution",
    description:
      "Contributors receive credit for their observations. Proper attribution is built into the data model — not an afterthought.",
  },
  {
    icon: Sprout,
    title: "Long-Term Thinking",
    description:
      "Biodiversity records should outlast any single organization or funding cycle. The platform is designed with data permanence and accessibility as core requirements.",
  },
];

const partners = [
  {
    name: "Mar Sustentable",
    role: "Primary Research Partner",
    desc: "Marine conservation organization leading field research in the Mexican Caribbean since 2015, using fishers' Local Ecological Knowledge and geospatial methods.",
    url: "https://www.marsustentable.org",
  },
  {
    name: "Club de los Tiburones México",
    role: "Education & Outreach",
    desc: "Shark conservation education program launched in 2021 with Save Our Seas Foundation support. Reached students across 10+ countries in Latin America and the Caribbean.",
    url: null,
  },
];

function AboutJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BiodiversityOS",
    url: "https://biodiversityos.org",
    logo: "https://biodiversityos.org/assets/image.png",
    description:
      "Open platform for marine biodiversity data, built on field research by Mar Sustentable in the Mexican Caribbean since 2015.",
    parentOrganization: {
      "@type": "Organization",
      name: "Mar Sustentable",
      url: "https://www.marsustentable.org",
    },
    sameAs: [
      "https://www.marsustentable.org",
      "https://app.biodiversityos.org",
    ],
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
      "Ocean Data",
      "Coral Reef Ecosystems",
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
          title="From Cozumel's reefs to open biodiversity data"
          description="BiodiversityOS was born from years of field research in the Mexican Caribbean — open infrastructure to map and protect marine life."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />

        <section className="edSection">
          <div className="ed prose">
            <p className="eyebrow">Our Mission</p>
            <h2 className="edTitle">Open infrastructure for marine biodiversity data</h2>
            <p>
              BiodiversityOS provides open infrastructure for marine
              biodiversity data — starting with shark observations in the
              Mexican Caribbean and designed to grow through community
              participation.
            </p>
            <p>
              The platform is built on field research by{" "}
              <a
                href="https://www.marsustentable.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mar Sustentable
              </a>
              , whose work in the Mexican Caribbean has used fishers&apos;
              Local Ecological Knowledge alongside geospatial tools since 2015.
              BiodiversityOS makes that research approach scalable and open.
            </p>
          </div>
        </section>

        <section className="edSection">
          <div className="ed edWide">
            <p className="eyebrow">Our Journey</p>
            <h2 className="edTitle" style={{ marginBottom: "2.5rem" }}>
              A decade of field research
            </h2>
            <div className={styles.timeline}>
              {timeline.map((item) => (
                <div key={item.title} className={styles.tItem}>
                  <span className={styles.tYear}>{item.year}</span>
                  <div>
                    <h3 className={styles.tTitle}>{item.title}</h3>
                    <p className={styles.tDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="edSection">
          <div className="ed edWide">
            <p className="eyebrow">Our Values</p>
            <h2 className="edTitle" style={{ marginBottom: "2.5rem" }}>
              The principles that guide what we build
            </h2>
            <div className="edList">
              {values.map(({ icon: Icon, title, description }) => (
                <article key={title} className="edEntry">
                  <Icon
                    className="edIcon"
                    size={26}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="edSection">
          <div className="ed edWide">
            <p className="eyebrow">Research Foundation</p>
            <h2 className="edTitle" style={{ marginBottom: "2.5rem" }}>
              Built on verified field research
            </h2>
            <div className={styles.partners}>
              {partners.map((p) => (
                <div key={p.name} className={styles.partner}>
                  <h3 className={styles.partnerName}>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit" }}
                      >
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <span className={styles.partnerRole}>{p.role}</span>
                  <p className={styles.partnerDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Explore the Platform"
          description="Access the interactive map, report a sighting, or learn about the species documented in the Mexican Caribbean."
          primaryLabel="Open the Map"
          primaryHref="https://app.biodiversityos.org/"
          secondaryLabel="Species Guide"
          secondaryHref="/species"
        />
      </main>
      <Footer />
    </>
  );
}
