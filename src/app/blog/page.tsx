import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/seo/PageHero";
import CTABanner from "@/components/seo/CTABanner";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog — Marine Conservation Research & Biodiversity Insights",
  description:
    "Explore articles on marine conservation, shark behavior research, citizen science methodology, decentralized science technology, and biodiversity monitoring from the BiodiversityOS team.",
  keywords: [
    "marine conservation blog",
    "shark research articles",
    "citizen science blog",
    "biodiversity news",
    "DeSci articles",
    "ocean conservation technology",
    "Caribbean marine life research",
    "Cozumel shark research blog",
  ],
  alternates: {
    canonical: "https://biodiversityos.org/blog",
  },
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "citizen-science-transforming-marine-conservation-cozumel",
    title: "How Citizen Science is Transforming Marine Conservation in Cozumel",
    excerpt:
      "Discover how local divers, fishers, and community members in Cozumel are contributing to groundbreaking shark research through BiodiversityOS — and how you can join the effort.",
    category: "Conservation",
    date: "2026-04-15",
    readTime: "8 min read",
    author: "BiodiversityOS Team",
    featured: true,
  },
  {
    slug: "understanding-shark-behavior-data-reveals",
    title: "Understanding Shark Behavior: What Our Data Reveals",
    excerpt:
      "Analysis of over 500 shark sightings in the Mexican Caribbean reveals fascinating behavioral patterns, seasonal migrations, and insights into reef shark ecology.",
    category: "Research",
    date: "2026-03-28",
    readTime: "12 min read",
    author: "BiodiversityOS Team",
  },
  {
    slug: "technology-behind-biodiversityos-open-data-desci",
    title: "The Technology Behind BiodiversityOS: Open Data & DeSci",
    excerpt:
      "A deep dive into how BiodiversityOS uses Next.js, interactive mapping, and decentralized science technologies to create a transparent, community-driven biodiversity platform.",
    category: "Technology",
    date: "2026-03-10",
    readTime: "10 min read",
    author: "BiodiversityOS Team",
  },
  {
    slug: "beginners-guide-species-identification-caribbean",
    title: "A Beginner's Guide to Species Identification in the Caribbean",
    excerpt:
      "Learn how to identify common shark species in the Caribbean Sea with this comprehensive guide covering key features, distinguishing marks, and field tips for divers and snorkelers.",
    category: "Education",
    date: "2026-02-20",
    readTime: "15 min read",
    author: "BiodiversityOS Team",
  },
  {
    slug: "why-open-biodiversity-data-matters-future",
    title: "Why Open Biodiversity Data Matters for the Future",
    excerpt:
      "Exploring the critical importance of open, accessible biodiversity data for conservation planning, climate adaptation, and scientific research — and how BiodiversityOS is leading the way.",
    category: "Conservation",
    date: "2026-02-05",
    readTime: "7 min read",
    author: "BiodiversityOS Team",
  },
];

function BlogJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "BiodiversityOS Blog",
    description:
      "Articles on marine conservation, shark research, citizen science, and decentralized science technology.",
    url: "https://biodiversityos.org/blog",
    publisher: {
      "@type": "Organization",
      name: "BiodiversityOS",
      url: "https://biodiversityos.org",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
      url: `https://biodiversityos.org/blog/${post.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <BlogJsonLd />
      <Header />
      <main className="flex-1 w-full" role="main">
        <PageHero
          eyebrow="Blog & Insights"
          title="Stories from the ocean"
          description="Research updates, conservation insights, and technical deep-dives from the BiodiversityOS team."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />

        <section className="edSection">
          <div className="ed edWide">
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className={styles.featured}
              >
                <div className={styles.fHead}>
                  <span className="tag">{featured.category}</span>
                  <span className={styles.fLabel}>Featured</span>
                </div>
                <h2 className={styles.fTitle}>{featured.title}</h2>
                <p className={styles.fExcerpt}>{featured.excerpt}</p>
                <div className="metaRow" style={{ marginBottom: "1rem" }}>
                  <span>{formatDate(featured.date)}</span>
                  <span className="sep">·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="linkArrow">
                  Read article <span aria-hidden>→</span>
                </span>
              </Link>
            )}

            <div className={styles.list}>
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.post}
                >
                  <div className={styles.pHead}>
                    <span className="tag">{post.category}</span>
                  </div>
                  <h3 className={styles.pTitle}>{post.title}</h3>
                  <p className={styles.pExcerpt}>{post.excerpt}</p>
                  <div className="metaRow">
                    <span>{formatDate(post.date)}</span>
                    <span className="sep">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Want to stay updated?"
          description="Follow our work for the latest marine conservation research and BiodiversityOS platform updates."
          primaryLabel="Explore the Map"
          primaryHref="https://app.biodiversityos.org/"
          secondaryLabel="View All Species"
          secondaryHref="/species"
        />
      </main>
      <Footer />
    </>
  );
}
