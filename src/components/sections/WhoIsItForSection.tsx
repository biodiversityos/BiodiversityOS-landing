import { Microscope, Users, Leaf, Network } from "lucide-react";
import styles from "./WhoIsItForSection.module.css";
import Reveal from "../story/Reveal";

const audiences = [
  {
    icon: Microscope,
    title: "Researchers & scientists",
    body: "Access structured, georeferenced biodiversity data to support research and conservation.",
  },
  {
    icon: Users,
    title: "Local communities",
    body: "Contribute observations, share knowledge, and participate in documenting ecosystems.",
  },
  {
    icon: Leaf,
    title: "Conservation organizations",
    body: "Use spatial insights to inform protection strategies and identify priority areas.",
  },
  {
    icon: Network,
    title: "Web3 / DeSci community",
    body: "Engage with open biodiversity infrastructure and contribute to a community-governed data commons.",
  },
];

export default function WhoIsItForSection() {
  return (
    <section
      id="who-is-it-for"
      aria-label="Community & Impact — Researchers, Conservation Organizations, DeSci"
    >
      <div className="chapter">
        <Reveal className={styles.intro}>
          <p className={styles.kicker}>The network</p>
          <h2 className={styles.title}>
            One network closing biodiversity data gaps.
          </h2>
          <p className={styles.lead}>
            Biodiversity data gaps are significant. Observations from divers,
            fishers, and researchers help build a more complete picture.
          </p>
        </Reveal>

        <div className={styles.list}>
          {audiences.map(({ icon: Icon, title, body }) => (
            <Reveal key={title} className={styles.row}>
              <Icon
                size={26}
                strokeWidth={1.25}
                className={styles.icon}
                aria-hidden
              />
              <div>
                <h3 className={styles.rowTitle}>{title}</h3>
                <p className={styles.rowBody}>{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
