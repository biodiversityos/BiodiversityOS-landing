import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/assets/image.png"
                alt="BiodiversityOS Logo — Marine Biodiversity Data Platform"
                width={32}
                height={32}
                className={styles.logoImage}
              />
              <p>
                © {new Date().getFullYear()} BiodiversityOS. Research by{" "}
                <a
                  href="https://www.marsustentable.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  Mar Sustentable
                </a>
                .
              </p>
            </div>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/features">Features</Link>
            <Link href="/species">Species</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/privacy">Privacy</Link>
            <a
              href="https://app.biodiversityos.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Map Explorer
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
