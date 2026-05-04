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
        className="flex-1 w-full flex items-center justify-center"
        role="main"
        style={{
          minHeight: "70vh",
          background:
            "linear-gradient(180deg, #BDE8F5 0%, #FFFFFF 50%, #F0F9FF 100%)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "4rem 2rem",
            maxWidth: "600px",
          }}
        >
          {/* Animated wave decoration */}
          <div
            style={{
              fontSize: "6rem",
              lineHeight: 1,
              marginBottom: "1.5rem",
              filter: "drop-shadow(0 4px 12px rgba(28,77,141,0.15))",
            }}
          >
            🌊
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#0F2854",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Lost at Sea
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#4988C4",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            The page you&apos;re looking for has drifted away. Let&apos;s
            navigate you back to charted waters.
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
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                background: "#1C4D8D",
                color: "white",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 14px rgba(28,77,141,0.3)",
              }}
            >
              ← Back to Home
            </Link>
            <Link
              href="/species"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                background: "white",
                color: "#1C4D8D",
                borderRadius: "0.75rem",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                border: "1px solid #E2E8F0",
                transition: "all 0.2s ease",
              }}
            >
              Explore Species
            </Link>
          </div>

          {/* Quick links */}
          <nav
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
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
                  color: "#4988C4",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  borderBottom: "1px solid transparent",
                  transition: "border-color 0.2s ease",
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
