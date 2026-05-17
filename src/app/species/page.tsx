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
  maxLength: string;
  habitat: string;
  diet: string;
  description: string;
  behavior: string;
  frequency: "Common" | "Occasional" | "Rare" | "Very Rare";
}

export const speciesData: SpeciesData[] = [
  {
    slug: "caribbean-reef-shark",
    commonName: "Caribbean Reef Shark",
    scientificName: "Carcharhinus perezi",
    iucnStatus: "Endangered",
    maxLength: "3.0 m (10 ft)",
    habitat: "Coral reefs, reef edges, drop-offs",
    diet: "Reef fish, cephalopods, crustaceans",
    description:
      "The Caribbean Reef Shark is the most commonly encountered reef shark in the Caribbean Sea. A robust species with a typical requiem shark shape, it plays a crucial role as an apex predator maintaining the health of coral reef ecosystems throughout Cozumel's waters.",
    behavior:
      "Often seen patrolling reef walls and channels. Generally calm around divers but can be curious. Most active during dawn and dusk hunting periods. Known to form loose aggregations at cleaning stations.",
    frequency: "Common",
  },
  {
    slug: "nurse-shark",
    commonName: "Nurse Shark",
    scientificName: "Ginglymostoma cirratum",
    iucnStatus: "Vulnerable",
    maxLength: "4.3 m (14 ft)",
    habitat: "Sandy bottoms, coral crevices, mangroves",
    diet: "Bottom-dwelling fish, shrimp, squid, sea urchins",
    description:
      "Nurse Sharks are one of the most recognizable sharks in the Caribbean, often seen resting on sandy bottoms during the day. Their docile nature and bottom-dwelling habits make them a frequent encounter for divers in Cozumel.",
    behavior:
      "Nocturnal hunters that rest in groups during daytime, often stacking on top of each other in caves and under ledges. Generally very docile but should not be disturbed. Use barbels near mouth to detect prey.",
    frequency: "Common",
  },
  {
    slug: "bull-shark",
    commonName: "Bull Shark",
    scientificName: "Carcharhinus leucas",
    iucnStatus: "Vulnerable",
    maxLength: "3.4 m (11 ft)",
    habitat: "Coastal waters, river mouths, deep channels",
    diet: "Fish, rays, other sharks, turtles, dolphins",
    description:
      "Bull Sharks are powerful predators known for their ability to thrive in both salt and fresh water. In the Cozumel channel, they are seasonally observed during the winter months, creating one of the region's most spectacular diving experiences.",
    behavior:
      "Territorial and solitary. Known for seasonal migrations to Cozumel waters, typically between November and March. Tend to patrol deeper channels and walls. Among the most powerful shark species encountered in the region.",
    frequency: "Occasional",
  },
  {
    slug: "whale-shark",
    commonName: "Whale Shark",
    scientificName: "Rhincodon typus",
    iucnStatus: "Endangered",
    maxLength: "18.8 m (62 ft)",
    habitat: "Open ocean, coastal feeding areas",
    diet: "Plankton, small fish, fish eggs",
    description:
      "The Whale Shark is the largest living fish species and a gentle giant of the ocean. Near Cozumel and the Yucatan coast, they gather seasonally to feed on plankton and fish eggs, particularly between May and September around Isla Holbox and Isla Mujeres.",
    behavior:
      "Filter feeders that swim slowly near the surface. Gather in large aggregations during feeding events. Completely harmless to humans. Known for their distinctive spotted pattern unique to each individual, used for photo-identification.",
    frequency: "Occasional",
  },
  {
    slug: "great-hammerhead",
    commonName: "Great Hammerhead Shark",
    scientificName: "Sphyrna mokarran",
    iucnStatus: "Critically Endangered",
    maxLength: "6.1 m (20 ft)",
    habitat: "Coastal-pelagic, deep channels, continental shelves",
    diet: "Stingrays, groupers, other sharks, cephalopods",
    description:
      "The Great Hammerhead is the largest of the hammerhead species and one of the most impressive predators in the Caribbean. Occasionally spotted in the deeper waters around Cozumel, their distinctive hammer-shaped head provides 360-degree vision for hunting.",
    behavior:
      "Solitary and nomadic. Uses its cephalofoil (head) to pin stingrays to the ocean floor. Highly sensitive to electromagnetic fields produced by prey. Encounters are rare and considered a privilege by divers.",
    frequency: "Rare",
  },
  {
    slug: "blacktip-shark",
    commonName: "Blacktip Shark",
    scientificName: "Carcharhinus limbatus",
    iucnStatus: "Vulnerable",
    maxLength: "2.8 m (9 ft)",
    habitat: "Shallow coastal waters, bays, estuaries",
    diet: "Schooling fish, sardines, herring, mullet",
    description:
      "Blacktip Sharks are fast, agile predators easily identified by the prominent black tips on their fins. Found in shallow coastal waters around Cozumel, they are known for their spectacular spinning leaps when feeding.",
    behavior:
      "Active and fast-swimming. Often seen in small groups hunting schooling fish. Known for spinning jumps out of the water during feeding frenzies. Tend to be shy around divers but can be curious in feeding situations.",
    frequency: "Occasional",
  },
  {
    slug: "lemon-shark",
    commonName: "Lemon Shark",
    scientificName: "Negaprion brevirostris",
    iucnStatus: "Vulnerable",
    maxLength: "3.4 m (11 ft)",
    habitat: "Mangroves, shallow bays, coral reefs",
    diet: "Fish, rays, crustaceans, seabirds",
    description:
      "Named for their yellowish-brown coloration, Lemon Sharks are found in the shallow tropical waters of the Caribbean. Mangrove areas around Cozumel serve as important nursery habitats for juvenile lemon sharks.",
    behavior:
      "Social sharks that often form groups. Juveniles heavily depend on mangrove nurseries for protection. Adults are generally docile but can be defensive if provoked. Studied extensively for their social behavior.",
    frequency: "Rare",
  },
  {
    slug: "tiger-shark",
    commonName: "Tiger Shark",
    scientificName: "Galeocerdo cuvier",
    iucnStatus: "Near Threatened",
    maxLength: "5.5 m (18 ft)",
    habitat: "Coastal-pelagic, deep channels, open ocean",
    diet: "Sea turtles, fish, seals, birds, almost anything",
    description:
      "Tiger Sharks are large, powerful predators named for the dark vertical stripes on juvenile specimens. While uncommon in Cozumel, they are occasionally sighted in deeper offshore waters and represent one of the largest predatory sharks in the Caribbean.",
    behavior:
      "Primarily nocturnal hunters with an extremely varied diet. Known as 'garbage cans of the sea' due to their willingness to eat almost anything. Solitary and wide-ranging, they may pass through Cozumel waters during migrations.",
    frequency: "Very Rare",
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

export default function SpeciesPage() {
  return (
    <>
      <SpeciesJsonLd />
      <Header />
      <main className="flex-1 w-full" role="main">
        <PageHero
          eyebrow="Species Guide"
          title="Shark species of Cozumel & the Caribbean"
          description="The shark species documented through BiodiversityOS field research — identification features, conservation status, and behavioral patterns."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Species Guide" },
          ]}
        />

        <section className="edSection">
          <div className="ed edWide">
            <div className={styles.grid}>
              {speciesData.map((species) => (
                <Link
                  key={species.slug}
                  href={`/species/${species.slug}`}
                  className={styles.entry}
                >
                  <h2 className={styles.name}>{species.commonName}</h2>
                  <p className={styles.sci}>{species.scientificName}</p>
                  <p className={styles.desc}>
                    {species.description.slice(0, 150)}…
                  </p>
                  <div className={styles.meta}>
                    <span>
                      IUCN{" "}
                      <span className={styles.metaStrong}>
                        {species.iucnStatus}
                      </span>
                    </span>
                    <span>
                      <span className={styles.metaStrong}>
                        {species.frequency}
                      </span>{" "}
                      in Cozumel
                    </span>
                    <span>{species.maxLength}</span>
                  </div>
                  <span className="linkArrow">
                    View full profile <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Spotted a shark in Cozumel?"
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
