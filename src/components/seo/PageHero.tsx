import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <header
      style={{
        background: "#ffffff",
        padding: "1.5rem 0 clamp(2.5rem, 6vw, 4.5rem)",
        borderBottom: "1px solid rgba(15,40,84,0.08)",
      }}
    >
      <div className="ed edWide">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow && (
          <p className="eyebrow" style={{ marginTop: "1.75rem" }}>
            {eyebrow}
          </p>
        )}
        <h1
          className="edTitle"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            maxWidth: "16ch",
            marginBottom: description ? "1.25rem" : 0,
          }}
        >
          {title}
        </h1>
        {description && (
          <p className="lede" style={{ maxWidth: "60ch" }}>
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
