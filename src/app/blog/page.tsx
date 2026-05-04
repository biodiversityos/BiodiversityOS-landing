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
  categoryColor: string;
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
    categoryColor: "#059669",
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
    categoryColor: "#2563EB",
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
    categoryColor: "#7C3AED",
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
    categoryColor: "#EA580C",
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
    categoryColor: "#059669",
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
          title="Stories from the Ocean"
          description="Research updates, conservation insights, and technical deep-dives from the BiodiversityOS team."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />

        <section className={styles.blogSection}>
          {/* Featured Post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
              <div className={styles.featuredContent}>
                <div className={styles.featuredMeta}>
                  <span
                    className={styles.categoryBadge}
                    style={{ background: `${featured.categoryColor}15`, color: featured.categoryColor }}
                  >
                    {featured.category}
                  </span>
                  <span className={styles.featuredLabel}>Featured</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Post Grid */}
          <div className={styles.postsGrid}>
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                <div className={styles.postContent}>
                  <span
                    className={styles.categoryBadge}
                    style={{ background: `${post.categoryColor}15`, color: post.categoryColor }}
                  >
                    {post.category}
                  </span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner
          title="Want to Stay Updated?"
          description="Follow our blog for the latest marine conservation research and BiodiversityOS platform updates."
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
