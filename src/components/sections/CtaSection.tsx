import Link from "next/link";
import styles from "./CtaSection.module.css";
import SharkIcon from "../ui/SharkIcon";
import Reveal from "../story/Reveal";

export default function CtaSection() {
  return (
    <section id="cta" aria-label="Start contributing to BiodiversityOS">
      <div className="chapter">
        <Reveal className={styles.inner}>
          <h2 className={styles.title}>Add your observation to the map.</h2>
          <p className={styles.lead}>
            Every sighting deepens our shared picture of marine life. Explore
            the open data or contribute what you have seen.
          </p>
          <div className={styles.actions}>
            <Link
              href="https://app.biodiversityos.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <SharkIcon size={20} color="var(--color-primary)" />
              Explore the Map
            </Link>
            <Link
              href="https://app.biodiversityos.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGhost}
            >
              Report a Sighting
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
