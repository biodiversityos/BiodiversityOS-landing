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

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
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

  const facts = [
    { label: "Maximum Length", value: species.maxLength },
    { label: "Primary Habitat", value: species.habitat },
    { label: "Diet", value: species.diet },
    { label: "Sighting Frequency", value: species.frequency },
  ];

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
                { label: "Species Guide", href: "/species" },
                { label: species.commonName },
              ]}
            />
            <p className="eyebrow" style={{ marginTop: "1.75rem" }}>
              Species Profile
            </p>
            <h1 className="edTitle" style={{ marginBottom: "0.4rem" }}>
              {species.commonName}
            </h1>
            <p
              className="lede"
              style={{ fontStyle: "italic", marginBottom: "1.25rem" }}
            >
              {species.scientificName}
            </p>
            <div className="metaRow">
              <span>
                IUCN{" "}
                <strong style={{ color: "var(--story-ink,#0f2854)" }}>
                  {species.iucnStatus}
                </strong>
              </span>
              <span className="sep">·</span>
              <span>
                <strong style={{ color: "var(--story-ink,#0f2854)" }}>
                  {species.frequency}
                </strong>{" "}
                in Cozumel
              </span>
            </div>
          </div>
        </header>

        <article className="ed" style={{ padding: "0" }}>
          <section className="edSection">
            <dl className="defGrid">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="edSection prose">
            <h2>About the {species.commonName}</h2>
            <p>{species.description}</p>
            <h2>Behavior &amp; Ecology</h2>
            <p>{species.behavior}</p>
          </section>

          <section className="edSection">
            <div
              style={{
                borderLeft: "3px solid var(--color-primary)",
                paddingLeft: "1.5rem",
              }}
            >
              <p className="eyebrow">
                Conservation status — {species.iucnStatus}
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--story-ink-muted,#4988c4)",
                  margin: 0,
                }}
              >
                The {species.commonName} is classified as{" "}
                <strong style={{ color: "var(--story-ink,#0f2854)" }}>
                  {species.iucnStatus}
                </strong>{" "}
                by the International Union for Conservation of Nature (IUCN).
                Reporting sightings through BiodiversityOS helps researchers
                monitor population trends and identify critical habitats for
                protection.
              </p>
            </div>
          </section>

          <section
            className="edSection"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <Link href="/species" className="btnGhost">
              ← All species
            </Link>
            <Link
              href="https://app.biodiversityos.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btnSolid"
            >
              Report a {species.commonName} sighting
            </Link>
          </section>
        </article>

        <CTABanner
          title={`Help track ${species.commonName} populations`}
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
