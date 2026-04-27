import styles from "./SupportSection.module.css";
import Link from "next/link";

export default function SupportSection() {
  return (
    <section id="support" className={`${styles.section} relative z-0 overflow-hidden`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={styles.iconBg}>🏛️</div>
            <h3 className={styles.title}>Institutional Collaboration</h3>
            <p className={styles.description}>
              BiodiversityOS is designed to complement and connect with existing scientific and conservation efforts. By linking local data with broader initiatives, we contribute to a more complete understanding of biodiversity across scales.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>✓ Academic institutions</li>
              <li className={styles.listItem}>✓ Conservation organizations</li>
              <li className={styles.listItem}>✓ Protected area managers</li>
              <li className={styles.listItem}>✓ Research networks</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBg}>🤝</div>
            <h3 className={styles.title}>Support the Network</h3>
            <p className={styles.description}>
              BiodiversityOS is an open and collaborative initiative. Your support helps expand data collection, strengthen community participation, and develop tools for biodiversity monitoring in underrepresented regions.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>✓ Contribute to the project</li>
              <li className={styles.listItem}>✓ Partner as an institution</li>
            </ul>
            <div style={{ marginTop: 'auto' }}>
              <Link href="#contact" className={styles.btn}>Support the Project</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
