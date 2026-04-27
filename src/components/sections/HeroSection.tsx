import Link from "next/link";
import styles from "./HeroSection.module.css";
import HeroWater from "../hero/HeroWater";
import SharkIcon from "../ui/SharkIcon";

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero} aria-label="BiodiversityOS — Community-Driven Marine Biodiversity Platform">
      <div className={styles.background}>
        <HeroWater />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            A community-driven platform for understanding and protecting
            <br />
            <span className={styles.highlight}>biodiversity.</span>
          </h1>
          <p className={styles.description}>
            Transforming real-world observations into open, verifiable
            knowledge. Starting with shark data in Cozumel, we are building a
            global network of biodiversity intelligence.
          </p>
          <div className={styles.actions}>
            <Link
              href="https://app.biodiversityos.org/"
              target="_blank"
              className={styles.btnPrimary}
            >
              <SharkIcon size={20} color="white" className={styles.btnIcon} />
              Explore Data
            </Link>
            <Link
              href="https://app.biodiversityos.org/"
              target="_blank"
              className={styles.btnSecondary}
            >
              <SharkIcon
                size={20}
                color="var(--color-primary)"
                className={styles.btnIcon}
              />
              Contribute
            </Link>
          </div>
        </div>
      </div>

      {/* <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120H1440V60C1440 60 1150 -20 720 20C290 60 0 60 0 60V120Z" fill="#BDE8F5"/>
          <path d="M0 120H1440V80C1440 80 1150 0 720 40C290 80 0 80 0 80V120Z" fill="white" opacity="0.5"/>
        </svg>
      </div> */}
    </section>
  );
}
