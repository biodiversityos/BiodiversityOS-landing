import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Return to BiodiversityOS to explore marine biodiversity data and conservation tools.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className="flex-1 w-full flex items-center"
        role="main"
        style={{ minHeight: "70vh", background: "#ffffff" }}
      >
        <div className="ed" style={{ padding: "5rem 1.5rem" }}>
          <p className="eyebrow">Error 404</p>
          <h1 className="edTitle">Lost at sea</h1>
          <p className="lede" style={{ marginBottom: "2.5rem" }}>
            The page you&apos;re looking for has drifted away. Let&apos;s
            navigate you back to charted waters.
          </p>

          <div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <Link href="/" className="btnSolid">
              ← Back to home
            </Link>
            <Link href="/species" className="btnGhost">
              Explore species
            </Link>
          </div>

          <nav
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(15,40,84,0.1)",
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
            }}
            aria-label="Quick navigation"
          >
            {[
              { href: "/features", label: "Features" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "var(--story-ink-muted,#4988c4)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
