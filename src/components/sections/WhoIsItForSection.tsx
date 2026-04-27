import { Microscope, Users, Leaf, Network } from "lucide-react";
import styles from "./WhoIsItForSection.module.css";
import WaveTransition from "../ui/WaveTransition";

export default function WhoIsItForSection() {
  return (
    <WaveTransition>
      <section
        id="who-is-it-for"
        className={`${styles.section} relative z-0 overflow-hidden`}
        aria-label="Community & Impact — Researchers, Conservation Organizations, DeSci"
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
              Impact & Community
            </div>
            <h2 className={styles.title}>Who Is It For?</h2>
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
                margin: "0 auto 2rem",
                color: "var(--color-text-muted)",
              }}
            >
              Join a global network to close biodiversity data gaps and turn
              observations into impact.
            </p>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconCircle} ${styles.bgBlue}`}>
                  <Microscope size={28} className={styles.iconBlue} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Researchers & Scientists</h3>
                <p className={styles.cardDesc}>
                  Access structured, georeferenced biodiversity data to support
                  research and conservation.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconCircle} ${styles.bgTeal}`}>
                  <Users size={28} className={styles.iconTeal} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Local Communities</h3>
                <p className={styles.cardDesc}>
                  Contribute observations, share knowledge, and participate in
                  documenting ecosystems.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconCircle} ${styles.bgGreen}`}>
                  <Leaf size={28} className={styles.iconGreen} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Conservation Orgs</h3>
                <p className={styles.cardDesc}>
                  Use spatial insights to inform protection strategies and
                  identify priority areas.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconCircle} ${styles.bgIndigo}`}>
                  <Network size={28} className={styles.iconIndigo} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Web3 / DeSci Community</h3>
                <p className={styles.cardDesc}>
                  Support and co-create open scientific infrastructure through
                  decentralized technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WaveTransition>
  );
}
