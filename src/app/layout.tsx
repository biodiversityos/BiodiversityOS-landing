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
  "BiodiversityOS — Open Marine Biodiversity Data Platform | Shark Tracking & Conservation";
const siteDescription =
  "Community-driven platform for collecting, structuring, and visualizing marine biodiversity data. Track shark sightings in Cozumel, explore interactive maps, and contribute to open conservation science.";
const siteKeywords = [
  "biodiversity data platform",
  "marine biodiversity",
  "shark tracking",
  "shark sightings Cozumel",
  "ocean conservation",
  "marine species monitoring",
  "biodiversity monitoring",
  "open science",
  "citizen science",
  "decentralized science",
  "DeSci",
  "marine ecosystem data",
  "species identification",
  "biodiversity intelligence",
  "conservation technology",
  "ocean data visualization",
  "interactive biodiversity map",
  "Mar Sustentable",
  "Mexican Caribbean marine life",
  "community-driven conservation",
  "georeferenced biodiversity data",
  "marine research platform",
  "wildlife observation app",
  "marine conservation tools",
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
        alt: "BiodiversityOS — Marine Biodiversity Data Platform with interactive shark tracking map",
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
    foundingDate: "2024",
    sameAs: [
      "https://app.biodiversityos.org",
    ],
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
      "Species identification tools",
      "Behavioral analysis",
      "Community verification system",
      "Georeferenced data exports",
    ],
  };

  const researchProjectSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: "BiodiversityOS Marine Biodiversity Initiative",
    description:
      "Field research initiative documenting shark presence and marine biodiversity in the Mexican Caribbean, led by Mar Sustentable.",
    url: siteUrl,
    funder: {
      "@type": "Organization",
      name: "Mar Sustentable",
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
      <body className="min-h-full flex flex-col">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };

              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                  }
                });
              }, observerOptions);

              document.addEventListener('DOMContentLoaded', () => {
                const elements = document.querySelectorAll('.reveal-on-scroll');
                elements.forEach(el => observer.observe(el));
              });

              // Also handle dynamic content if needed
              const mutationObserver = new MutationObserver((mutations) => {
                mutations.forEach(mutation => {
                  mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList.contains('reveal-on-scroll')) {
                      observer.observe(node);
                    }
                    if (node.nodeType === 1) {
                      node.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
                    }
                  });
                });
              });

              mutationObserver.observe(document.body, { childList: true, subtree: true });
            `,
          }}
        />
      </body>
    </html>
  );
}
