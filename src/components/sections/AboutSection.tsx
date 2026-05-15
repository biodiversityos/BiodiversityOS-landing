import Link from "next/link";
import styles from "./AboutSection.module.css";
import SharkParticles from "../SharkParticles";

export default function AboutSection() {
  return (
    <section id="about" className={`${styles.section} relative z-0 overflow-hidden`} aria-label="About BiodiversityOS — Marine Research in Cozumel">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>About Us</div>
          <h2 className={styles.title}>Rooted in real data and communities.</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] text-lg">
            <p>
              BiodiversityOS stems from years of field research in the Mexican Caribbean led by{" "}
              <a
                href="https://www.marsustentable.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Mar Sustentable
              </a>
              . What began as a project to document shark presence in Cozumel has evolved into open infrastructure for biodiversity data.
            </p>
            <p>
              The research uses fishers&apos; Local Ecological Knowledge alongside geospatial tools to document shark diversity across coral reef and mangrove habitats. BiodiversityOS is the open data infrastructure built on top of this fieldwork.
            </p>
          </div>
        </div>
        
        <div className={`${styles.videoContainer} min-h-[400px]`}>
          <SharkParticles />
        </div>
      </div>
    </section>
  );
}
