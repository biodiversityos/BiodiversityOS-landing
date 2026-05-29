import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/seo/PageHero";

const LAST_UPDATED = "May 29, 2026";
const SITE_URL = "https://biodiversityos.org";

export const metadata: Metadata = {
  title: "Privacy Policy — BiodiversityOS",
  description:
    "How BiodiversityOS handles information on its public website: what we collect, what we don't, and how to contact us about your data.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

function PrivacyJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy — BiodiversityOS",
    url: `${SITE_URL}/privacy`,
    description:
      "How BiodiversityOS handles information on its public website.",
    isPartOf: {
      "@type": "WebSite",
      name: "BiodiversityOS",
      url: SITE_URL,
    },
    inLanguage: "en",
    datePublished: "2026-05-29",
    dateModified: "2026-05-29",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyJsonLd />
      <Header />
      <main className="flex-1 w-full" role="main">
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description="This policy explains what information this public website collects and how we handle it. We aim to collect as little as possible."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        <section className="edSection">
          <div className="ed prose">
            <p>
              <em>Last updated: {LAST_UPDATED}</em>
            </p>

            <h2>1. Scope of This Policy</h2>
            <p>
              This Privacy Policy applies to{" "}
              <strong>https://biodiversityos.org</strong> — the public
              informational website of BiodiversityOS. The interactive
              biodiversity platform at{" "}
              <a
                href="https://app.biodiversityos.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                app.biodiversityos.org
              </a>{" "}
              is a separate service that handles user-submitted sighting data
              and is governed by its own privacy practices.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              The website is a static information site. It does not require
              an account, does not include forms that collect personal data,
              and does not run third-party analytics or advertising scripts.
            </p>
            <p>
              When you visit the site, our hosting provider may record
              standard server log entries (such as IP address, request URL,
              user agent, and timestamp) for security and reliability
              purposes. These logs are kept for a limited period and are not
              used to build personal profiles.
            </p>

            <h2>3. How We Use Information</h2>
            <p>Information from server logs is used only to:</p>
            <ul>
              <li>Operate, secure, and maintain the website.</li>
              <li>
                Detect, investigate, and prevent abuse, fraud, or technical
                problems.
              </li>
              <li>
                Produce aggregate statistics about traffic patterns (for
                example, total visits per page) with no individual
                identification.
              </li>
            </ul>

            <h2>4. Cookies and Similar Technologies</h2>
            <p>
              This website does not set tracking cookies and does not use
              local storage to identify visitors. A browser may, by default,
              store a small amount of technical state (such as cached assets
              for performance), but no identifiers are written by us.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              The site is built with{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>{" "}
              and is delivered through a static hosting provider. Fonts are
              self-hosted at build time, so visiting the site does not, by
              itself, send requests to font-hosting CDNs.
            </p>
            <p>
              The site links to external services and partners — including{" "}
              <a
                href="https://app.biodiversityos.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                app.biodiversityos.org
              </a>{" "}
              and{" "}
              <a
                href="https://www.marsustentable.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                marsustentable.org
              </a>
              . When you follow such a link you leave this site, and the
              external service&apos;s own privacy policy applies.
            </p>

            <h2>6. External Links</h2>
            <p>
              We are not responsible for the privacy practices of third-party
              sites linked from this website. We recommend reading the
              privacy policies of any external service you visit.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              Server logs are retained only for as long as needed to fulfil
              the purposes described above — typically a short rolling
              window — and are then deleted or aggregated.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              Depending on where you live, you may have rights under data
              protection laws such as the EU General Data Protection
              Regulation (GDPR) or the California Consumer Privacy Act
              (CCPA), including the rights to access, correct, or delete
              personal data we hold about you, and to object to or restrict
              certain processing.
            </p>
            <p>
              Because this website is informational and does not require an
              account, we typically hold no personal data about you. If you
              believe we hold information about you and want to exercise
              your rights, you can reach us using the contact details below.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              This website is not directed to children under 13 and we do
              not knowingly collect personal information from children. If
              you believe a child has provided personal information through
              this site, please contact us and we will take appropriate
              steps.
            </p>

            <h2>10. Security</h2>
            <p>
              We take reasonable technical measures to protect the
              integrity and availability of the website. No internet
              transmission is ever completely secure, but our static
              architecture and minimal data collection limit the scope of
              any incident.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or in applicable law. When we make
              material changes, we will update the &quot;last updated&quot;
              date at the top of this page. We encourage you to review the
              policy periodically.
            </p>

            <h2>12. Contact</h2>
            <p>
              BiodiversityOS is developed in collaboration with{" "}
              <a
                href="https://www.marsustentable.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mar Sustentable
              </a>
              . For questions about this Privacy Policy or about how
              information is handled on this website, please use the
              contact channels listed at{" "}
              <a
                href="https://www.marsustentable.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                marsustentable.org
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
