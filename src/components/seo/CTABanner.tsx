import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Ready to Explore Marine Biodiversity?",
  description = "Join our community-driven platform and contribute to ocean conservation through open science and data.",
  primaryLabel = "Explore the Map",
  primaryHref = "https://app.biodiversityos.org/",
  secondaryLabel = "Learn More",
  secondaryHref = "/about",
}: CTABannerProps) {
  const isExternal = (href: string) => href.startsWith("http");

  return (
    <section
      style={{
        background: "linear-gradient(180deg,#143A6B 0%,#0F2854 100%)",
        padding: "clamp(3.5rem, 8vw, 6rem) 0",
      }}
    >
      <div className="ed" style={{ textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: "#EAF6FB",
            margin: "0 0 1rem",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "#BDE8F5",
            margin: "0 auto 2.5rem",
            maxWidth: "52ch",
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href={primaryHref}
            target={isExternal(primaryHref) ? "_blank" : undefined}
            rel={isExternal(primaryHref) ? "noopener noreferrer" : undefined}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.9rem 2rem",
              background: "#EAF6FB",
              color: "#0F2854",
              borderRadius: "999px",
              fontWeight: 650,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            target={isExternal(secondaryHref) ? "_blank" : undefined}
            rel={isExternal(secondaryHref) ? "noopener noreferrer" : undefined}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.9rem 2rem",
              background: "transparent",
              color: "#EAF6FB",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              border: "1px solid rgba(189,232,245,0.35)",
            }}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
