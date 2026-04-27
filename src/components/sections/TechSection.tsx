import { LockKeyholeOpen, Leaf, Boxes } from "lucide-react";
import styles from "./TechSection.module.css";
import WaveTransition from "../ui/WaveTransition";

export default function TechSection() {
  return (
    <WaveTransition>
      <section
        id="tech"
        className={`${styles.section} relative z-0 overflow-hidden`}
        aria-label="Open Data Technology — Decentralized Science Infrastructure"
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <div
              className={styles.eyebrow}
              style={{
                color: "var(--color-primary)",
                fontWeight: 600,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Data Sharing & Tech
            </div>
            <h2 className={styles.title}>
              Open, Verifiable, and Decentralized
            </h2>
            <div className={styles.waveIcon}>
              <svg
                width="32"
                height="12"
                viewBox="0 0 32 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6C4.5 6 4.5 1 8 1C11.5 1 11.5 6 15 6C18.5 6 18.5 1 22 1C25.5 1 25.5 6 29 6"
                  stroke="#4988C4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 11C4.5 11 4.5 6 8 6C11.5 6 11.5 11 15 11C18.5 11 18.5 6 22 6C25.5 6 25.5 11 29 11"
                  stroke="#4988C4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              style={{
                textAlign: "center",
                maxWidth: "600px",
                margin: "0 auto 3rem",
                color: "var(--color-text-muted)",
              }}
            >
              BiodiversityOS integrates decentralized technologies to ensure
              biodiversity data is transparent, traceable, and openly
              accessible.
            </p>
          </div>

          <div className={styles.steps}>
            <div className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconCircle} ${styles.bgTeal}`}>
                  <LockKeyholeOpen size={32} className={styles.iconTeal} />
                </div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Open Access</h3>
                <p className={styles.stepDesc}>
                  Data is available to support scientific research, conservation
                  planning, and public understanding of biodiversity.
                </p>
              </div>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconCircle} ${styles.bgGreen}`}>
                  <Leaf size={32} className={styles.iconGreen} />
                </div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Community Knowledge</h3>
                <p className={styles.stepDesc}>
                  We recognize local ecological knowledge and ensure all
                  contributions are properly attributed, respected, and used
                  ethically.
                </p>
              </div>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconCircle} ${styles.bgBlue}`}>
                  <Boxes size={32} className={styles.iconBlue} />
                </div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Decentralized Integrity</h3>
                <p className={styles.stepDesc}>
                  Built with decentralized technologies to strengthen data
                  traceability, attribution, and long-term accessibility of
                  biodiversity records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WaveTransition>
  );
}
