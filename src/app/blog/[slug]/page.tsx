import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/seo/CTABanner";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { blogPosts } from "../page";

type PageParams = { params: Promise<{ slug: string }> };

// Full article content
const articleContent: Record<string, string[]> = {
  "citizen-science-transforming-marine-conservation-cozumel": [
    "The warm turquoise waters of Cozumel have long attracted divers from around the world, drawn by the island's spectacular coral reefs and diverse marine life. But beneath the surface of this popular tourist destination, a quiet revolution is taking place — one where everyday ocean enthusiasts are becoming vital contributors to scientific research.",
    "Citizen science, the practice of involving non-professional scientists in data collection and research, has emerged as one of the most powerful tools in modern conservation. In Cozumel, this approach is transforming how we understand and protect marine biodiversity, particularly shark populations that are essential to healthy reef ecosystems.",
    "## The Power of Community Data",
    "Every day, dozens of dive operators guide hundreds of divers through Cozumel's reefs. Each dive represents an opportunity to observe and document marine life. Through BiodiversityOS, these casual encounters become structured, georeferenced data points that scientists can analyze to understand species distribution, behavior patterns, and population trends.",
    "Since the platform's launch, community members have contributed over 500 verified shark sightings, covering species from the common Caribbean Reef Shark to rare encounters with Great Hammerhead Sharks. This volume of data would be impossible for a small research team to collect alone.",
    "## How It Works",
    "The process is simple: after a dive, participants log their sightings through the BiodiversityOS web application. They record the species observed, the location, date, behavior, and any photographic evidence. The platform guides users through the submission process, making it accessible to anyone regardless of their scientific background.",
    "Each observation then passes through a community verification system that combines local ecological knowledge with scientific validation. This ensures data quality while recognizing the expertise of long-time local divers and fishers who know these waters intimately.",
    "## Impact on Conservation",
    "The data collected through citizen science in Cozumel has already yielded important insights. Seasonal patterns in bull shark presence have been mapped, helping dive operators and marine managers plan activities that minimize disturbance to these magnificent predators. Distribution maps of nurse shark resting areas have informed the placement of mooring buoys to protect sensitive habitats.",
    "Perhaps most importantly, the data provides a baseline against which future changes can be measured. As climate change and human activity continue to pressure marine ecosystems, having robust, community-verified data is essential for effective conservation planning.",
    "## Join the Effort",
    "Whether you're a professional diver, a weekend snorkeler, or simply someone who cares about ocean health, there's a place for you in this movement. Every observation matters, every data point contributes to a larger picture of marine biodiversity that will guide conservation efforts for generations to come.",
    "Visit BiodiversityOS to report your next sighting and become part of the citizen science community that's transforming marine conservation in the Caribbean.",
  ],
  "understanding-shark-behavior-data-reveals": [
    "After two years of community-driven data collection in the Mexican Caribbean, BiodiversityOS has accumulated a rich dataset of shark sightings that reveals fascinating patterns in behavior, distribution, and ecology. This analysis represents one of the most comprehensive citizen-science-based studies of Caribbean shark populations.",
    "## Seasonal Migration Patterns",
    "Our data clearly shows seasonal variation in shark species composition around Cozumel. Bull sharks (Carcharhinus leucas) appear predominantly between November and March, with peak sightings in January and February. This aligns with known migration patterns but provides more granular data on timing and specific locations within the Cozumel channel.",
    "Caribbean Reef Sharks, by contrast, maintain a relatively stable presence year-round, with slight increases during summer months when water temperatures peak. This suggests resident populations rather than migratory visitors.",
    "## Depth and Habitat Preferences",
    "Analysis of sighting depths reveals clear species-specific preferences. Nurse sharks are most frequently observed at shallow depths (5-15 meters), often resting on sandy patches between reef structures. Caribbean Reef Sharks show a preference for reef walls and drop-offs at 15-30 meters, particularly near cleaning stations.",
    "Bull sharks tend to be observed in deeper water, typically below 25 meters, often in or near the main Cozumel channel where currents are strongest. These depth preferences have important implications for dive site management and conservation zoning.",
    "## Behavioral Observations",
    "Community contributors have documented a remarkable range of behaviors. Feeding events account for approximately 15% of sightings, with hunting behavior most commonly observed during dawn and dusk dives. Resting behavior is the most frequently reported (40%), particularly for nurse sharks.",
    "Interestingly, cleaning station visits represent nearly 10% of all Caribbean Reef Shark sightings, highlighting the importance of these ecological interactions. Social behavior, including loose aggregations of 3 or more individuals, has been documented in 20% of reef shark observations.",
    "## What This Means for Conservation",
    "These behavioral patterns provide actionable insights for conservation. The identification of key resting areas, cleaning stations, and feeding corridors allows marine managers to implement targeted protections. Understanding seasonal patterns helps minimize human disturbance during critical periods.",
    "As our dataset grows, we expect to identify even more nuanced patterns, including individual site fidelity, inter-annual trends, and responses to environmental changes. This is the power of sustained, community-driven monitoring — it reveals the stories that brief research expeditions cannot capture.",
  ],
  "technology-behind-biodiversityos-open-data-desci": [
    "BiodiversityOS isn't just a data collection tool — it's a full-stack platform built on principles of openness, transparency, and decentralization. In this article, we dive deep into the technology choices that power our platform and explain how decentralized science (DeSci) principles ensure the long-term integrity of biodiversity data.",
    "## Modern Web Architecture",
    "BiodiversityOS is built with Next.js, a React-based framework that provides server-side rendering for optimal SEO and performance. This means our species guides, blog posts, and data visualizations are all rendered on the server, making them fully accessible to search engines and fast-loading for users worldwide.",
    "For interactive mapping, we use Leaflet with custom tile layers optimized for marine environments. The map component supports real-time filtering by species, date range, behavior type, and depth — enabling researchers to explore the data spatially with granular control.",
    "## The DeSci Approach",
    "Decentralized Science (DeSci) is an emerging movement that applies blockchain and distributed systems principles to scientific research. For BiodiversityOS, this translates into several concrete benefits:",
    "**Data Provenance**: Every observation is linked to its contributor with transparent attribution. The chain of verification — from initial submission to community review — is recorded and traceable.",
    "**Immutability**: Once verified, biodiversity records cannot be silently altered. Any modifications create a transparent changelog, ensuring the scientific integrity of historical data.",
    "**Permanence**: By distributing data across decentralized storage, we protect against the loss of critical biodiversity records due to server failures, organizational changes, or funding gaps.",
    "**Open Access**: All data is freely accessible through our platform and (upcoming) API. We believe biodiversity data is a public good that should be available to anyone working toward conservation.",
    "## Data Quality Through Design",
    "Our platform implements several layers of data quality assurance. Structured submission forms ensure consistent data format. Geolocation validation flags impossible coordinates. Photo AI assists with preliminary species identification. Community verification provides the final quality check.",
    "This multi-layered approach means that even data from first-time contributors can meet research-grade standards, dramatically expanding the pool of potential contributors without sacrificing quality.",
    "## Looking Forward",
    "We're actively developing an open API that will allow researchers and developers to programmatically access BiodiversityOS data. Future plans include machine learning models for automated species identification from underwater photos, and integration with global biodiversity databases like GBIF and OBIS.",
    "The technology is a means to an end — our goal is always to make biodiversity data more accessible, trustworthy, and useful for conservation. Every technical decision is guided by this mission.",
  ],
  "beginners-guide-species-identification-caribbean": [
    "Whether you're a first-time snorkeler or an experienced diver, learning to identify marine species adds a whole new dimension to your underwater experiences. This guide will help you identify the most common shark species you might encounter in the Caribbean, with practical tips for field identification.",
    "## Before You Dive: Preparation Tips",
    "Successful species identification starts before you enter the water. Familiarize yourself with the species you're most likely to encounter in your specific diving area. In Cozumel and the wider Mexican Caribbean, you can expect to see Caribbean Reef Sharks, Nurse Sharks, and occasionally Bull Sharks, with seasonal appearances of Whale Sharks.",
    "Consider bringing an underwater slate or using a waterproof camera — photos are incredibly valuable for later identification and can be submitted to BiodiversityOS as evidence for your sightings.",
    "## Caribbean Reef Shark (Carcharhinus perezi)",
    "The most commonly seen shark on Caribbean reefs. Key identification features include a streamlined, gray body with white underside, a moderately rounded snout, and no distinctive markings on fins. They typically measure 1.5-2.5 meters and are often seen patrolling reef walls at 15-30 meters depth.",
    "Often confused with: Blacktip Reef Shark (which has obvious black fin tips) and Silky Shark (more slender, more rounded first dorsal fin).",
    "## Nurse Shark (Ginglymostoma cirratum)",
    "Perhaps the easiest shark to identify underwater. Look for a broad, flat head, small eyes, prominent barbels (whisker-like projections) near the mouth, and a tan to yellowish-brown coloration. They can grow quite large (up to 4 meters) and are usually seen resting on sandy bottoms or in caves.",
    "Distinctive behavior: Unlike most sharks, nurse sharks can rest motionless on the bottom, actively pumping water over their gills. You'll often see multiple nurse sharks resting together.",
    "## Bull Shark (Carcharhinus leucas)",
    "A heavy-bodied shark with a blunt, wide snout. Gray on top with a white belly. Notably thick and muscular compared to other requiem sharks. In Cozumel, typically encountered in deeper water (25+ meters) in the channel, especially between November and March.",
    "Key distinction: The combination of heavy body, blunt snout, and lack of fin markings distinguishes bull sharks from other large gray sharks in the area.",
    "## Whale Shark (Rhincodon typus)",
    "Unmistakable: the world's largest fish species with a distinctive pattern of white spots and stripes on a dark gray-blue body. Enormous size (typically 6-12 meters for those seen near Mexico), wide flat head, and terminal mouth (at the front of the head rather than underneath).",
    "Best encountered during the seasonal aggregation near Isla Holbox and Isla Mujeres (May-September). These gentle giants are filter feeders and completely harmless to humans.",
    "## Reporting Your Sightings",
    "Once you've identified a species, report your sighting on BiodiversityOS! Include the species name, location, date, approximate depth, any behavior you observed, and photos if possible. Even uncertain identifications are valuable — our community can help confirm species through the verification system.",
    "Every sighting you report contributes to our understanding of Caribbean marine biodiversity. Happy diving!",
  ],
  "why-open-biodiversity-data-matters-future": [
    "In an era of accelerating biodiversity loss, the availability of accurate, accessible data about species and ecosystems has never been more critical. Open biodiversity data — information that is freely available for anyone to access, use, and share — is becoming a cornerstone of effective conservation in the 21st century.",
    "## The Biodiversity Data Gap",
    "Despite decades of research, our knowledge of global biodiversity remains remarkably incomplete. The IUCN estimates that only a fraction of known species have been assessed for conservation status, and millions of species remain undiscovered. In marine environments, this knowledge gap is even more pronounced — we know more about the surface of Mars than about the deep ocean.",
    "This data gap has real consequences. Without baseline data on species distribution and abundance, it's impossible to measure the impact of conservation interventions, track the effects of climate change, or identify priority areas for protection.",
    "## Why Open Matters",
    "Traditional scientific data has often been locked behind institutional barriers — stored in proprietary databases, published in paywalled journals, or simply sitting in researchers' hard drives. This fragmentation means that conservation decisions are often made with incomplete information.",
    "Open data changes this equation fundamentally. When biodiversity observations are freely accessible, they can be combined across sources, analyzed at larger scales, and used by anyone from government agencies to local conservation groups. The whole becomes far greater than the sum of its parts.",
    "## The BiodiversityOS Approach",
    "BiodiversityOS was built on the principle that biodiversity data is a public good. Every observation submitted to our platform is openly accessible. Our use of decentralized science (DeSci) technologies ensures that this openness is not just a policy but a technical guarantee — the data cannot be silently restricted or removed.",
    "We also ensure proper attribution. Contributors receive full credit for their observations, creating an incentive structure that rewards data sharing rather than hoarding. This is particularly important for engaging local communities whose ecological knowledge has historically been undervalued.",
    "## Real-World Impact",
    "Open biodiversity data is already making a difference. Global databases like GBIF (Global Biodiversity Information Facility) aggregate billions of occurrence records that inform conservation policy worldwide. Platforms like iNaturalist demonstrate the power of community-driven data collection at scale.",
    "BiodiversityOS contributes to this ecosystem with a focus on marine environments and a commitment to decentralized data integrity. Our shark tracking data from Cozumel is helping local marine managers make evidence-based decisions about reef protection and dive site management.",
    "## The Future is Open",
    "As biodiversity loss accelerates, the need for comprehensive, accessible data will only grow. Technologies like AI-powered species identification, satellite monitoring, and environmental DNA (eDNA) analysis will generate unprecedented volumes of biodiversity data. The challenge will be making this data open, structured, and useful.",
    "At BiodiversityOS, we're building the infrastructure for this open future — one observation at a time. Join us in creating a world where the data needed to protect biodiversity is available to everyone who needs it.",
  ],
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
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
        {/* Article Header */}
        <section
          style={{
            background: "linear-gradient(180deg, #E8F4FD 0%, #FFFFFF 100%)",
            padding: "2rem 0 3rem",
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title },
              ]}
            />

            <div style={{ marginTop: "1.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "1rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  background: `${post.categoryColor}15`,
                  color: post.categoryColor,
                  marginBottom: "1rem",
                }}
              >
                {post.category}
              </span>

              <h1
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#0F2854",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}
              >
                {post.title}
              </h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "0.9rem",
                  color: "#4988C4",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontWeight: 600 }}>{post.author}</span>
                <span style={{ color: "#CBD5E1" }}>·</span>
                <span>{formatDate(post.date)}</span>
                <span style={{ color: "#CBD5E1" }}>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "3rem 2rem 4rem",
          }}
        >
          {content.map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#0F2854",
                    marginTop: "2.5rem",
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }

            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return null; // Skip standalone bold lines (handled inline)
            }

            // Handle paragraphs with bold text
            const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);

            return (
              <p
                key={i}
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "#374151",
                  marginBottom: "1.5rem",
                }}
              >
                {parts.map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <strong key={j} style={{ color: "#0F2854", fontWeight: 600 }}>
                        {part.slice(2, -2)}
                      </strong>
                    );
                  }
                  return <span key={j}>{part}</span>;
                })}
              </p>
            );
          })}

          {/* Navigation */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #E8EFF5",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "white",
                color: "#1C4D8D",
                border: "1.5px solid #E2E8F0",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              ← All Articles
            </Link>
            <Link
              href="/species"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "#1C4D8D",
                color: "white",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
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
