import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/seo/CTABanner";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { blogPosts } from "../page";

type PageParams = { params: Promise<{ slug: string }> };

const articleContent: Record<string, string[]> = {
  "citizen-science-transforming-marine-conservation-cozumel": [
    "Citizen science — the involvement of non-professional observers in structured data collection — has become a significant tool in marine conservation. In the Mexican Caribbean, this approach is being applied to shark monitoring, where consistent, georeferenced observations can reveal patterns that short research expeditions cannot capture.",
    "## Documenting Local Knowledge",
    "Mar Sustentable's research in the Mexican Caribbean has relied from the start on fishers' Local Ecological Knowledge alongside formal scientific methods. Fishers who work these waters daily accumulate detailed observations about species presence, behavior, and habitat use — knowledge that is both scientifically valuable and historically underrepresented in formal datasets.",
    "BiodiversityOS extends this approach. Rather than replacing field research, the platform creates a structured way for divers, guides, fishers, and marine observers to contribute observations using the same data schema that researchers use in the field.",
    "## How Observations Are Collected",
    "After a dive or encounter, observers log their sightings through the BiodiversityOS application at app.biodiversityos.org. The record includes species, location coordinates, date, observed behavior, depth, and photographic evidence when available. Structured fields ensure consistency across contributors.",
    "Each observation enters a community verification process. Submissions are reviewed against the ecological context of the region — cross-referenced with known species ranges, habitat types, and seasonal patterns documented through Mar Sustentable's field research.",
    "## Why Baseline Data Matters",
    "Reef ecosystems in the Mexican Caribbean are under sustained pressure: climate change, fishing activity, and coastal development all affect species distribution over time. Detecting these changes requires a baseline — a record of what was present, where, and when, collected consistently over years.",
    "Community-driven data collection addresses the scale problem. A small research team can cover a limited area during a field season. A network of consistent observers, using the same data schema, can cover far more ground and sustain collection through periods when funded research is not active.",
    "## Contribute to the Record",
    "If you encounter sharks or other marine species in Cozumel or the wider Caribbean, consider reporting your sighting through BiodiversityOS. Species, date, location, and observed behavior are the core fields. Photos improve the scientific value of each record. Uncertain identifications can be flagged for community review.",
  ],
  "understanding-shark-behavior-data-reveals": [
    "Sharks in the Mexican Caribbean show diverse behavioral patterns shaped by species, season, habitat, and prey availability. Understanding these patterns helps observers make more meaningful records — and helps researchers interpret the data they receive.",
    "## Seasonal Presence",
    "Different shark species follow distinct seasonal patterns in the region. Bull sharks (Carcharhinus leucas) are more commonly observed in Cozumel's deeper channels during winter months — a pattern long noted by local fishers and dive operators, and consistent with broader research on bull shark movement in the Caribbean.",
    "Whale sharks (Rhincodon typus) gather near Isla Holbox and Isla Mujeres primarily between May and September, driven by seasonal concentrations of fish spawn and plankton. Caribbean Reef Sharks (Carcharhinus perezi) maintain a more consistent year-round presence on coral reef structures, suggesting resident rather than migratory populations.",
    "## Habitat Preferences",
    "Species use habitat in characteristically different ways. Nurse sharks (Ginglymostoma cirratum) are frequently observed resting on sandy bottoms and in cave systems during daylight hours — they are primarily nocturnal hunters. Caribbean Reef Sharks patrol reef walls and drop-offs, and are regularly seen at cleaning stations where small fish remove parasites.",
    "Bull sharks tend toward deeper water and stronger current environments. Great Hammerheads (Sphyrna mokarran) — critically endangered and rarely encountered — are most likely to appear along deep channel edges.",
    "## What to Record in the Field",
    "Behavioral context adds scientific value beyond a simple presence record. Researchers working with community-submitted data look for: whether a shark was resting, feeding, or patrolling; whether it was alone or in a group; approximate depth and proximity to specific habitat types (reef wall, sandy bottom, open water).",
    "Photographic records, even imperfect ones, allow post-hoc species confirmation and can capture fin patterns useful for individual identification in some species.",
    "## The Value of Sustained Observation",
    "Individual sightings become ecologically meaningful when accumulated over time and across many observers. Patterns in seasonal presence, habitat use, or behavioral shifts can only emerge from datasets collected consistently across months and years. This is the core argument for community-driven biodiversity monitoring: scale and continuity that individual research projects cannot match.",
  ],
  "technology-behind-biodiversityos-open-data-desci": [
    "BiodiversityOS is built on open-source web technologies with a focus on accessibility, data integrity, and transparency. This article describes the platform's technical approach and the principles behind it.",
    "## Web Architecture",
    "The platform is built with Next.js, a React-based framework that enables server-side rendering and static generation. This ensures that species profiles, the map interface, and content pages are fast-loading and accessible to search engines without requiring JavaScript execution.",
    "Interactive mapping uses Leaflet, an open-source mapping library, with CartoDB basemap tiles. The map component supports filtering by species, date range, and behavior — allowing researchers to explore observations spatially.",
    "## Open Data Principles",
    "BiodiversityOS is designed around the principle that biodiversity data is a public resource. Observations are intended to be openly accessible rather than locked behind institutional subscriptions or proprietary databases.",
    "This draws on the growing DeSci (Decentralized Science) movement, which advocates for scientific outputs that are transparent, community-governed, and not dependent on any single institutional infrastructure. For biodiversity data, this means prioritizing long-term accessibility over convenience of centralized control.",
    "## Data Quality Through Structure",
    "Citizen science data quality depends on how observations are collected. BiodiversityOS uses structured submission forms to standardize what is recorded with each sighting: species, date, GPS coordinates, depth, observed behavior, and photographic evidence when available.",
    "Community verification adds a quality layer. Submissions are reviewed by contributors with local ecological knowledge — the same kind of knowledge that Mar Sustentable has incorporated into its field research since 2015.",
    "## Attribution",
    "Contributors receive attribution for their observations. This is designed into the data model, not added as an afterthought. Proper attribution matters both for recognizing individual contributors and for making the provenance of each data record clear to researchers who use it.",
    "For the local communities — fishers, divers, guides — whose ecological knowledge has historically been used without formal credit, attribution is a matter of scientific integrity as much as recognition.",
  ],
  "beginners-guide-species-identification-caribbean": [
    "Learning to identify marine species improves the quality of observations you can contribute and adds depth to time spent underwater. This guide covers the shark species most likely to be encountered in Cozumel and the wider Mexican Caribbean, with field identification notes based on established scientific descriptions.",
    "## Before You Dive",
    "Familiarize yourself with the species you are most likely to encounter in your specific area. In Cozumel, the most commonly observed sharks are Caribbean Reef Sharks and Nurse Sharks. Bull Sharks are seasonally present, primarily in deeper channels between November and March. Whale Sharks aggregate near Isla Holbox and Isla Mujeres from May to September.",
    "A waterproof camera or an underwater slate for notes will help you capture details for later identification and submission. Photos significantly improve the scientific value of a sighting record.",
    "## Caribbean Reef Shark (Carcharhinus perezi)",
    "The most frequently encountered reef shark in the Caribbean. Identification features: streamlined gray body with white underside, moderately rounded snout, no distinctive fin markings. Adults typically measure 1.5 to 2.5 meters. Most often observed patrolling reef walls and drop-offs.",
    "Possible confusion: Blacktip Shark (Carcharhinus limbatus) has prominent black fin tips. Silky Shark (Carcharhinus falciformis) is more slender with a more rounded first dorsal fin.",
    "## Nurse Shark (Ginglymostoma cirratum)",
    "One of the most recognizable sharks in the region. Key features: broad flattened head, small eyes, prominent barbels (sensory projections) near the mouth, tan to yellowish-brown coloration. Can reach up to 4 meters. Typically seen resting on sandy bottoms or in reef crevices during the day.",
    "Nurse sharks are bottom-dwelling nocturnal hunters that rest during daylight hours, often in groups. They pump water actively over their gills while stationary — unlike most sharks, they do not need to swim continuously to breathe.",
    "## Bull Shark (Carcharhinus leucas)",
    "A heavy-bodied shark with a distinctively blunt, broad snout. Gray above with a white underside. More muscular and stocky in build than other requiem sharks of similar size. In Cozumel, most commonly observed in deeper channel water, typically below 20 meters.",
    "Bull sharks are capable of tolerating brackish and freshwater environments — a unique adaptation among marine sharks. In the Caribbean, they are associated with deeper coastal channels and reef edges.",
    "## Whale Shark (Rhincodon typus)",
    "The largest living fish species. Unmistakable: dark gray-blue body with a distinctive pattern of white spots and pale vertical stripes. Wide, flat head with a terminal mouth. Individuals seen near the Yucatan Peninsula typically range from 6 to 12 meters. Filter feeders that are harmless to humans.",
    "Seasonal aggregations near Isla Holbox and Isla Mujeres occur primarily between May and September, associated with fish spawning events and plankton concentrations.",
    "## Submitting a Sighting",
    "When reporting through BiodiversityOS, include: species name or your best identification, GPS location or a description of the dive site, date, approximate depth, observed behavior, and photos if available. Uncertain identifications are accepted — mark them as unconfirmed and the community verification process will assist.",
  ],
  "why-open-biodiversity-data-matters-future": [
    "Biodiversity data — records of which species occur where, when, and under what conditions — is foundational to conservation planning. Without it, decisions about which areas to protect, which species to monitor, and how to measure the effectiveness of interventions are made with incomplete information.",
    "## The Data Gap in Marine Environments",
    "Marine environments are among the least documented on Earth. Species distributions in coastal reef systems like those in the Mexican Caribbean are known primarily through targeted research projects, which are limited in scope and duration by funding and logistics.",
    "This creates gaps. A species that was regularly observed in a given area twenty years ago may now be absent, present at lower densities, or restricted to specific microhabitats — and without consistent historical records, the change goes undetected. Baseline data is only useful if it was collected in the first place.",
    "## What Open Access Changes",
    "Scientific data has traditionally been stored in institutional repositories, published in subscription journals, or retained by individual researchers. This fragmentation limits the scale at which data can be analyzed and the range of people who can use it.",
    "Open access removes these barriers. When biodiversity observations are freely accessible, they can be combined across sources, analyzed at regional or global scales, and used by conservation organizations, government agencies, and local communities who would otherwise lack access to research outputs.",
    "## How BiodiversityOS Fits",
    "BiodiversityOS is designed around open access as a core principle, not a feature. Observations submitted to the platform are intended to be accessible to any researcher or conservationist who needs them. Contributor attribution is built into each record.",
    "The platform draws on the methodological approach developed by Mar Sustentable in the Mexican Caribbean — combining structured field protocols with local ecological knowledge — and makes that approach scalable through community participation.",
    "## Why Attribution Matters for Open Science",
    "Local fishers, divers, and guides possess ecological knowledge accumulated over years of direct observation. Their contributions to biodiversity records have historically gone unattributed, reducing both the incentive to contribute and the scientific transparency of how data was obtained.",
    "Open biodiversity platforms that build attribution into their data model address this directly. Every observation links to its contributor. This is both scientifically correct — provenance matters for data reliability — and a matter of recognizing communities whose knowledge makes the research possible.",
  ],
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "BiodiversityOS",
      "marine conservation",
      post.category.toLowerCase(),
      "shark research",
      "citizen science",
      "Cozumel",
    ],
    alternates: {
      canonical: `https://biodiversityos.org/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogArticlePage({ params }: PageParams) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const content = articleContent[slug] || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://biodiversityos.org/blog/${slug}`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://biodiversityos.org",
    },
    publisher: {
      "@type": "Organization",
      name: "BiodiversityOS",
      url: "https://biodiversityos.org",
      logo: {
        "@type": "ImageObject",
        url: "https://biodiversityos.org/image.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://biodiversityos.org/blog/${slug}`,
    },
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 w-full" role="main">
        <header
          style={{
            background: "#ffffff",
            padding: "1.5rem 0 clamp(2.5rem,6vw,4rem)",
            borderBottom: "1px solid rgba(15,40,84,0.08)",
          }}
        >
          <div className="ed">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                {
                  label:
                    post.title.length > 50
                      ? post.title.slice(0, 50) + "…"
                      : post.title,
                },
              ]}
            />
            <div style={{ marginTop: "1.75rem" }}>
              <span className="tag">{post.category}</span>
            </div>
            <h1
              className="edTitle"
              style={{
                fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                margin: "1.1rem 0",
              }}
            >
              {post.title}
            </h1>
            <div className="metaRow">
              <span style={{ fontWeight: 600 }}>{post.author}</span>
              <span className="sep">·</span>
              <span>{formatDate(post.date)}</span>
              <span className="sep">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <article className="ed" style={{ padding: "0" }}>
          <div
            className="prose"
            style={{ padding: "clamp(2.5rem,6vw,4rem) 1.5rem 0" }}
          >
            {content.map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={i}>{paragraph.replace("## ", "")}</h2>;
              }
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j}>{part.slice(2, -2)}</strong>
                    ) : (
                      <span key={j}>{part}</span>
                    ),
                  )}
                </p>
              );
            })}
          </div>

          <div
            style={{
              margin: "3rem 1.5rem 0",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(15,40,84,0.1)",
              paddingBottom: "clamp(3rem,7vw,5rem)",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link href="/blog" className="btnGhost">
              ← All articles
            </Link>
            <Link href="/species" className="btnSolid">
              Species Guide
            </Link>
          </div>
        </article>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
