import Link from "next/link";
import styles from "./HeroSection.module.css";
import HeroWater from "../hero/HeroWater";
import SharkIcon from "../ui/SharkIcon";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className={styles.hero}
      aria-label="BiodiversityOS — Community-Driven Marine Biodiversity Platform"
    >
      {/* Surface ripples — the water you float on before the dive */}
      <HeroWater />

      <div className={styles.content}>
        <h1 className={styles.title}>
          A community-driven platform for understanding and protecting
          <br />
          <span className={styles.highlight}>biodiversity.</span>
        </h1>
        <p className={styles.description}>
          Transforming real-world observations into open, verifiable knowledge.
          Starting with shark data in Cozumel, we are building a global network
          of biodiversity intelligence.
        </p>
        <div className={styles.actions}>
          <Link
            href="https://app.biodiversityos.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <SharkIcon size={20} color="white" />
            Explore Data
          </Link>
          <Link
            href="https://app.biodiversityos.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            <SharkIcon size={20} color="var(--color-primary)" />
            Contribute
          </Link>
        </div>

        <div className={styles.scrollCue} aria-hidden>
          <span>Dive in</span>
          <span className={styles.scrollLine} />
        </div>
      </div>
    </section>
  );
}
