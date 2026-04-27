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
              BiodiversityOS stems from years of field research in the Mexican Caribbean led by Mar Sustentable. What began as a project to document shark presence in Cozumel has evolved into a global vision for open biodiversity intelligence.
            </p>
            <p>
              We are a mission-driven initiative building open infrastructure to map and protect life across all ecosystems, uniting science, community, and technology.
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
