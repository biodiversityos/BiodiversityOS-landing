import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/seo/PageHero";
import CTABanner from "@/components/seo/CTABanner";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Species Guide — Shark Species of Cozumel & the Caribbean",
  description:
    "Comprehensive guide to shark species found in Cozumel and the Mexican Caribbean: Caribbean Reef Shark, Nurse Shark, Bull Shark, Whale Shark, and more. IUCN status, identification tips, and behavioral data.",
  keywords: [
    "shark species Cozumel",
    "Caribbean reef shark",
    "nurse shark Mexico",
    "bull shark Cozumel",
    "whale shark Caribbean",
    "shark identification guide",
    "marine species Caribbean",
    "Cozumel marine life",
    "shark conservation status",
    "hammerhead shark Mexico",
  ],
  alternates: {
    canonical: "https://biodiversityos.org/species",
  },
};

export interface SpeciesData {
  slug: string;
  commonName: string;
  scientificName: string;
  iucnStatus: string;
  iucnColor: string;
  maxLength: string;
  habitat: string;
  diet: string;
  description: string;
  behavior: string;
  frequency: "Common" | "Occasional" | "Rare" | "Very Rare";
  emoji: string;
}

export const speciesData: SpeciesData[] = [
  {
    slug: "caribbean-reef-shark",
    commonName: "Caribbean Reef Shark",
    scientificName: "Carcharhinus perezi",
    iucnStatus: "Endangered",
    iucnColor: "#DC2626",
    maxLength: "3.0 m (10 ft)",
    habitat: "Coral reefs, reef edges, drop-offs",
    diet: "Reef fish, cephalopods, crustaceans",
    description:
      "The Caribbean Reef Shark is the most commonly encountered reef shark in the Caribbean Sea. A robust species with a typical requiem shark shape, it plays a crucial role as an apex predator maintaining the health of coral reef ecosystems throughout Cozumel's waters.",
    behavior:
      "Often seen patrolling reef walls and channels. Generally calm around divers but can be curious. Most active during dawn and dusk hunting periods. Known to form loose aggregations at cleaning stations.",
    frequency: "Common",
    emoji: "🦈",
  },
  {
    slug: "nurse-shark",
    commonName: "Nurse Shark",
    scientificName: "Ginglymostoma cirratum",
    iucnStatus: "Vulnerable",
    iucnColor: "#EA580C",
    maxLength: "4.3 m (14 ft)",
    habitat: "Sandy bottoms, coral crevices, mangroves",
    diet: "Bottom-dwelling fish, shrimp, squid, sea urchins",
    description:
      "Nurse Sharks are one of the most recognizable sharks in the Caribbean, often seen resting on sandy bottoms during the day. Their docile nature and bottom-dwelling habits make them a frequent encounter for divers in Cozumel.",
    behavior:
      "Nocturnal hunters that rest in groups during daytime, often stacking on top of each other in caves and under ledges. Generally very docile but should not be disturbed. Use barbels near mouth to detect prey.",
    frequency: "Common",
    emoji: "🦈",
  },
  {
    slug: "bull-shark",
    commonName: "Bull Shark",
    scientificName: "Carcharhinus leucas",
    iucnStatus: "Vulnerable",
    iucnColor: "#EA580C",
    maxLength: "3.4 m (11 ft)",
    habitat: "Coastal waters, river mouths, deep channels",
    diet: "Fish, rays, other sharks, turtles, dolphins",
    description:
      "Bull Sharks are powerful predators known for their ability to thrive in both salt and fresh water. In the Cozumel channel, they are seasonally observed during the winter months, creating one of the region's most spectacular diving experiences.",
    behavior:
      "Territorial and solitary. Known for seasonal migrations to Cozumel waters, typically between November and March. Tend to patrol deeper channels and walls. Among the most powerful shark species encountered in the region.",
    frequency: "Occasional",
    emoji: "🦈",
  },
  {
    slug: "whale-shark",
    commonName: "Whale Shark",
    scientificName: "Rhincodon typus",
    iucnStatus: "Endangered",
    iucnColor: "#DC2626",
    maxLength: "18.8 m (62 ft)",
    habitat: "Open ocean, coastal feeding areas",
    diet: "Plankton, small fish, fish eggs",
    description:
      "The Whale Shark is the largest living fish species and a gentle giant of the ocean. Near Cozumel and the Yucatan coast, they gather seasonally to feed on plankton and fish eggs, particularly between May and September around Isla Holbox and Isla Mujeres.",
    behavior:
      "Filter feeders that swim slowly near the surface. Gather in large aggregations during feeding events. Completely harmless to humans. Known for their distinctive spotted pattern unique to each individual, used for photo-identification.",
    frequency: "Occasional",
    emoji: "🐋",
  },
  {
    slug: "great-hammerhead",
    commonName: "Great Hammerhead Shark",
    scientificName: "Sphyrna mokarran",
    iucnStatus: "Critically Endangered",
    iucnColor: "#991B1B",
    maxLength: "6.1 m (20 ft)",
    habitat: "Coastal-pelagic, deep channels, continental shelves",
    diet: "Stingrays, groupers, other sharks, cephalopods",
    description:
      "The Great Hammerhead is the largest of the hammerhead species and one of the most impressive predators in the Caribbean. Occasionally spotted in the deeper waters around Cozumel, their distinctive hammer-shaped head provides 360-degree vision for hunting.",
    behavior:
      "Solitary and nomadic. Uses its cephalofoil (head) to pin stingrays to the ocean floor. Highly sensitive to electromagnetic fields produced by prey. Encounters are rare and considered a privilege by divers.",
    frequency: "Rare",
    emoji: "🔨",
  },
  {
    slug: "blacktip-shark",
    commonName: "Blacktip Shark",
    scientificName: "Carcharhinus limbatus",
    iucnStatus: "Vulnerable",
    iucnColor: "#EA580C",
    maxLength: "2.8 m (9 ft)",
    habitat: "Shallow coastal waters, bays, estuaries",
    diet: "Schooling fish, sardines, herring, mullet",
    description:
      "Blacktip Sharks are fast, agile predators easily identified by the prominent black tips on their fins. Found in shallow coastal waters around Cozumel, they are known for their spectacular spinning leaps when feeding.",
    behavior:
      "Active and fast-swimming. Often seen in small groups hunting schooling fish. Known for spinning jumps out of the water during feeding frenzies. Tend to be shy around divers but can be curious in feeding situations.",
    frequency: "Occasional",
    emoji: "🦈",
  },
  {
    slug: "lemon-shark",
    commonName: "Lemon Shark",
    scientificName: "Negaprion brevirostris",
    iucnStatus: "Vulnerable",
    iucnColor: "#EA580C",
    maxLength: "3.4 m (11 ft)",
    habitat: "Mangroves, shallow bays, coral reefs",
    diet: "Fish, rays, crustaceans, seabirds",
    description:
      "Named for their yellowish-brown coloration, Lemon Sharks are found in the shallow tropical waters of the Caribbean. Mangrove areas around Cozumel serve as important nursery habitats for juvenile lemon sharks.",
    behavior:
      "Social sharks that often form groups. Juveniles heavily depend on mangrove nurseries for protection. Adults are generally docile but can be defensive if provoked. Studied extensively for their social behavior.",
    frequency: "Rare",
    emoji: "🍋",
  },
  {
    slug: "tiger-shark",
    commonName: "Tiger Shark",
    scientificName: "Galeocerdo cuvier",
    iucnStatus: "Near Threatened",
    iucnColor: "#D97706",
    maxLength: "5.5 m (18 ft)",
    habitat: "Coastal-pelagic, deep channels, open ocean",
    diet: "Sea turtles, fish, seals, birds, almost anything",
    description:
      "Tiger Sharks are large, powerful predators named for the dark vertical stripes on juvenile specimens. While uncommon in Cozumel, they are occasionally sighted in deeper offshore waters and represent one of the largest predatory sharks in the Caribbean.",
    behavior:
      "Primarily nocturnal hunters with an extremely varied diet. Known as 'garbage cans of the sea' due to their willingness to eat almost anything. Solitary and wide-ranging, they may pass through Cozumel waters during migrations.",
    frequency: "Very Rare",
    emoji: "🐅",
  },
];

function SpeciesJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shark Species of Cozumel & the Mexican Caribbean",
    description:
      "Comprehensive guide to shark species documented in Cozumel and the Mexican Caribbean through BiodiversityOS field research.",
    url: "https://biodiversityos.org/species",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: speciesData.length,
      itemListElement: speciesData.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${s.commonName} (${s.scientificName})`,
        url: `https://biodiversityos.org/species/${s.slug}`,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FrequencyBadge({ frequency }: { frequency: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    Common: { bg: "#ECFDF5", color: "#059669" },
    Occasional: { bg: "#FFF7ED", color: "#EA580C" },
    Rare: { bg: "#FEF2F2", color: "#DC2626" },
    "Very Rare": { bg: "#F5F3FF", color: "#6D28D9" },
  };
  const style = colors[frequency] || colors["Rare"];

  return (
    <span
      className={styles.frequencyBadge}
      style={{ background: style.bg, color: style.color }}
    >
      {frequency}
    </span>
  );
}

export default function SpeciesPage() {
  return (
    <>
      <SpeciesJsonLd />
      <Header />
      <main className="flex-1 w-full" role="main">
        <PageHero
          eyebrow="Species Guide"
          title="Shark Species of Cozumel & the Caribbean"
          description="Explore the shark species documented through BiodiversityOS field research. Learn identification features, conservation status, and behavioral patterns."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Species Guide" },
          ]}
        />

        <section className={styles.speciesSection}>
          <div className={styles.speciesGrid}>
            {speciesData.map((species) => (
              <Link
                key={species.slug}
                href={`/species/${species.slug}`}
                className={styles.speciesCard}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.speciesEmoji}>{species.emoji}</span>
                  <div>
                    <FrequencyBadge frequency={species.frequency} />
                    <span
                      className={styles.iucnBadge}
                      style={{
                        background: `${species.iucnColor}15`,
                        color: species.iucnColor,
                      }}
                    >
                      {species.iucnStatus}
                    </span>
                  </div>
                </div>

                <h2 className={styles.speciesName}>{species.commonName}</h2>
                <p className={styles.scientificName}>
                  {species.scientificName}
                </p>
                <p className={styles.speciesDesc}>{species.description.slice(0, 150)}...</p>

                <div className={styles.speciesStats}>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Max Length</span>
                    <span className={styles.statValue}>{species.maxLength}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Habitat</span>
                    <span className={styles.statValue}>{species.habitat}</span>
                  </div>
                </div>

                <span className={styles.readMore}>
                  View Full Profile →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner
          title="Spotted a Shark in Cozumel?"
          description="Report your sighting on BiodiversityOS and contribute to marine conservation research."
          primaryLabel="Report a Sighting"
          primaryHref="https://app.biodiversityos.org/"
          secondaryLabel="Read FAQ"
          secondaryHref="/faq"
        />
      </main>
      <Footer />
    </>
  );
}
