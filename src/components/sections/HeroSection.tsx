import Link from "next/link";
import styles from "./HeroSection.module.css";
import SharkIcon from "../ui/SharkIcon";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className={styles.hero}
      aria-label="BiodiversityOS — seven years of shark sightings in Cozumel"
    >
      <div className={styles.content}>
        <h1 className={styles.title}>
          Divers in Cozumel have been counting
          <br />
          <span className={styles.highlight}>sharks for seven years.</span>
        </h1>
        <p className={styles.description}>
          743 sightings across 66 dive sites, almost all of them logged on
          ordinary recreational dives. Every record is public, georeferenced and
          permanent — an open reef survey anyone can check, and add to.
        </p>
        <div className={styles.actions}>
          <Link
            href="https://app.biodiversityos.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <SharkIcon size={20} color="white" />
            Explore the record
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
