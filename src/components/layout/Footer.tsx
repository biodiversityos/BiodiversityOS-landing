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
              <p>© 2026 BiodiversityOS. Built with science and community.</p>
            </div>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <Link href="#hero">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#map">Map Explorer</Link>
            <Link href="#tech">Technology</Link>
            <Link href="#who-is-it-for">Community</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
