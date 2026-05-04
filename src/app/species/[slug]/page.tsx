import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/seo/CTABanner";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { speciesData } from "../page";

type PageParams = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return speciesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const species = speciesData.find((s) => s.slug === slug);
  if (!species) return {};

  return {
    title: `${species.commonName} (${species.scientificName}) — Species Profile`,
    description: `Learn about the ${species.commonName} in Cozumel: ${species.description.slice(0, 150)}. IUCN Status: ${species.iucnStatus}. Habitat, behavior, and conservation data from BiodiversityOS.`,
    keywords: [
      species.commonName,
      species.scientificName,
      `${species.commonName} Cozumel`,
      `${species.commonName} Caribbean`,
      `${species.commonName} conservation`,
      `${species.commonName} identification`,
      "shark species Mexico",
    ],
    alternates: {
      canonical: `https://biodiversityos.org/species/${slug}`,
    },
  };
}

export default async function SpeciesDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const species = speciesData.find((s) => s.slug === slug);

  if (!species) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${species.commonName} (${species.scientificName}) — Species Profile`,
    description: species.description,
    url: `https://biodiversityos.org/species/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "BiodiversityOS",
      url: "https://biodiversityos.org",
    },
    about: {
      "@type": "Thing",
      name: species.scientificName,
      alternateName: species.commonName,
      description: species.description,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1 w-full" role="main">
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(180deg, #E8F4FD 0%, #FFFFFF 100%)",
            padding: "2rem 0 3rem",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Species Guide", href: "/species" },
                { label: species.commonName },
              ]}
            />

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "3rem" }}>{species.emoji}</span>
              <div>
                <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#0F2854", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.25rem" }}>
                  {species.commonName}
                </h1>
                <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#4988C4", margin: 0 }}>
                  {species.scientificName}
                </p>
              </div>
            </div>

            {/* Status badges */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
              <span style={{ padding: "0.375rem 1rem", borderRadius: "2rem", fontSize: "0.8rem", fontWeight: 700, background: `${species.iucnColor}15`, color: species.iucnColor }}>
                IUCN: {species.iucnStatus}
              </span>
              <span style={{
                padding: "0.375rem 1rem", borderRadius: "2rem", fontSize: "0.8rem", fontWeight: 700,
                background: species.frequency === "Common" ? "#ECFDF5" : species.frequency === "Occasional" ? "#FFF7ED" : "#FEF2F2",
                color: species.frequency === "Common" ? "#059669" : species.frequency === "Occasional" ? "#EA580C" : "#DC2626",
              }}>
                {species.frequency} in Cozumel
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>
          {/* Quick Facts */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
            {[
              { label: "Maximum Length", value: species.maxLength },
              { label: "Primary Habitat", value: species.habitat },
              { label: "Diet", value: species.diet },
              { label: "Sighting Frequency", value: species.frequency },
            ].map((fact, i) => (
              <div key={i} style={{ background: "#F8FBFF", border: "1.5px solid #E8EFF5", borderRadius: "1rem", padding: "1.25rem" }}>
                <span style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#94A3B8", marginBottom: "0.375rem" }}>
                  {fact.label}
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#0F2854" }}>
                  {fact.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F2854", marginBottom: "1rem" }}>
              About the {species.commonName}
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#4988C4" }}>
              {species.description}
            </p>
          </section>

          {/* Behavior */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F2854", marginBottom: "1rem" }}>
              Behavior & Ecology
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#4988C4" }}>
              {species.behavior}
            </p>
          </section>

          {/* Conservation */}
          <section style={{ background: "#FEF2F2", borderRadius: "1rem", padding: "2rem", marginBottom: "2.5rem", border: "1px solid #FECACA" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#991B1B", marginBottom: "0.75rem" }}>
              Conservation Status: {species.iucnStatus}
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#B91C1C", margin: 0 }}>
              The {species.commonName} is classified as <strong>{species.iucnStatus}</strong> by the International Union for Conservation of Nature (IUCN). 
              Reporting sightings through BiodiversityOS helps researchers monitor population trends and identify critical habitats for protection.
            </p>
          </section>

          {/* Back link */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/species" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "white", color: "#1C4D8D", border: "1.5px solid #E2E8F0", borderRadius: "0.75rem", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
              ← All Species
            </Link>
            <Link href="https://app.biodiversityos.org/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "#1C4D8D", color: "white", borderRadius: "0.75rem", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
              Report a {species.commonName} Sighting
            </Link>
          </div>
        </article>

        <CTABanner
          title={`Help Track ${species.commonName} Populations`}
          description="Every sighting contributes to conservation research. Report your observations on BiodiversityOS."
          primaryLabel="Report a Sighting"
          primaryHref="https://app.biodiversityos.org/"
          secondaryLabel="View All Species"
          secondaryHref="/species"
        />
      </main>
      <Footer />
    </>
  );
}
