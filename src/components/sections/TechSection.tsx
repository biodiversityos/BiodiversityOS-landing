import { LockKeyholeOpen, Leaf, Boxes } from "lucide-react";
import styles from "./TechSection.module.css";
import Reveal from "../story/Reveal";

const pillars = [
  {
    icon: LockKeyholeOpen,
    title: "Open access",
    body: "Data is available to support scientific research, conservation planning, and public understanding of biodiversity.",
  },
  {
    icon: Leaf,
    title: "Community knowledge",
    body: "We recognize local ecological knowledge and ensure all contributions are properly attributed, respected, and used ethically.",
  },
  {
    icon: Boxes,
    title: "Decentralized integrity",
    body: "Designed for data traceability and long-term accessibility, with attribution built into every contribution.",
  },
];

export default function TechSection() {
  return (
    <section
      id="tech"
      aria-label="Open Data Technology — Decentralized Science Infrastructure"
    >
      <div className="chapter">
        <Reveal className={styles.intro}>
          <p className={styles.kicker}>How it stays open</p>
          <h2 className={styles.title}>Open, verifiable, and decentralized.</h2>
          <p className={styles.lead}>
            BiodiversityOS integrates decentralized technologies so biodiversity
            data is transparent, traceable, and openly accessible.
          </p>
        </Reveal>

        <div className={styles.pillars}>
          {pillars.map(({ icon: Icon, title, body }) => (
            <Reveal key={title} className={styles.pillar}>
              <Icon size={28} strokeWidth={1.25} className={styles.icon} />
              <h3 className={styles.pillarTitle}>{title}</h3>
              <p className={styles.pillarBody}>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
