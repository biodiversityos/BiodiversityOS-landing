import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  gradient?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  gradient = "linear-gradient(180deg, #E8F4FD 0%, #FFFFFF 100%)",
}: PageHeroProps) {
  return (
    <section
      style={{
        background: gradient,
        padding: "2rem 0 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative element */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(28,77,141,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        <Breadcrumbs items={breadcrumbs} />

        {eyebrow && (
          <div
            style={{
              color: "#1C4D8D",
              fontWeight: 600,
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            {eyebrow}
          </div>
        )}

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 800,
            color: "#0F2854",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: description ? "1rem" : 0,
            maxWidth: "800px",
          }}
        >
          {title}
        </h1>

        {description && (
          <p
            style={{
              fontSize: "1.125rem",
              color: "#4988C4",
              lineHeight: 1.6,
              maxWidth: "640px",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
