import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://biodiversityos.org";
  const now = new Date();

  const speciesSlugs = [
    "caribbean-reef-shark",
    "nurse-shark",
    "bull-shark",
    "whale-shark",
    "great-hammerhead",
    "blacktip-shark",
    "lemon-shark",
    "tiger-shark",
  ];

  const blogSlugs = [
    "citizen-science-transforming-marine-conservation-cozumel",
    "understanding-shark-behavior-data-reveals",
    "technology-behind-biodiversityos-open-data-desci",
    "beginners-guide-species-identification-caribbean",
    "why-open-biodiversity-data-matters-future",
  ];

  return [
    // Core pages
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/species`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },

    // Species pages
    ...speciesSlugs.map((slug) => ({
      url: `${baseUrl}/species/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Blog articles
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
