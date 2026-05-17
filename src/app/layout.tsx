import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://biodiversityos.org";
const siteName = "BiodiversityOS";
const siteTitle =
  "BiodiversityOS — Marine Biodiversity Data Platform";
const siteDescription =
  "Open platform for marine biodiversity data, built on field research in the Mexican Caribbean. Explore shark sightings in Cozumel, contribute observations, and access georeferenced species data.";
const siteKeywords = [
  "biodiversity data platform",
  "marine biodiversity",
  "shark tracking",
  "shark sightings Cozumel",
  "Cozumel shark research",
  "ocean conservation",
  "marine species monitoring",
  "biodiversity monitoring",
  "open science",
  "open biodiversity data",
  "citizen science",
  "decentralized science",
  "DeSci",
  "marine ecosystem data",
  "fisher ecological knowledge",
  "conservation technology",
  "ocean data visualization",
  "interactive biodiversity map",
  "Mar Sustentable",
  "Mexican Caribbean marine life",
  "community-driven conservation",
  "georeferenced biodiversity data",
  "marine research platform",
];

export const viewport: Viewport = {
  themeColor: "#1C4D8D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [
    { name: "BiodiversityOS Team" },
    { name: "Mar Sustentable" },
  ],
  creator: "BiodiversityOS",
  publisher: "BiodiversityOS",
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Science & Technology",

  icons: {
    icon: [
      { url: "/assets/image.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/image.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/assets/image.png", sizes: "180x180", type: "image/png" }],
  },

  // Open Graph — for Facebook, LinkedIn, Discord, etc.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/ocean_bg_premium.png",
        width: 1200,
        height: 630,
        alt: "BiodiversityOS — Marine Biodiversity Data Platform",
        type: "image/png",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/ocean_bg_premium.png"],
    creator: "@biodiversityos",
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Alternate languages (expandable later)
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD Structured Data
function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BiodiversityOS",
    url: siteUrl,
    logo: `${siteUrl}/assets/image.png`,
    description: siteDescription,
    sameAs: [
      "https://www.marsustentable.org",
      "https://app.biodiversityos.org",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Mar Sustentable",
      url: "https://www.marsustentable.org",
    },
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BiodiversityOS",
    applicationCategory: "EnvironmentApplication",
    operatingSystem: "Web",
    url: "https://app.biodiversityos.org",
    description:
      "Interactive platform for marine biodiversity data collection, visualization, and open science collaboration. Features real-time maps, species filtering, and community-driven shark tracking.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Interactive biodiversity map",
      "Real-time shark sighting tracking",
      "Temporal data filtering",
      "Community verification system",
      "Georeferenced data exports",
      "Sighting submission",
    ],
  };

  const researchProjectSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: "BiodiversityOS Marine Biodiversity Initiative",
    description:
      "Field research documenting shark presence and marine biodiversity in the Mexican Caribbean, ongoing since 2015. Led by Mar Sustentable using fishers' Local Ecological Knowledge and geospatial methods.",
    url: siteUrl,
    startDate: "2015",
    funder: {
      "@type": "Organization",
      name: "Mar Sustentable",
      url: "https://www.marsustentable.org",
    },
    about: {
      "@type": "Thing",
      name: "Marine Biodiversity Conservation",
    },
    areaServed: {
      "@type": "Place",
      name: "Cozumel, Mexican Caribbean",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(researchProjectSchema),
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
