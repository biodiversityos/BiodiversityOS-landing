import { LockKeyholeOpen, Leaf, Boxes } from "lucide-react";
import styles from "./TechSection.module.css";
import Reveal from "../story/Reveal";

const pillars = [
  {
    icon: LockKeyholeOpen,
    title: "Nobody owns the record",
    body: "Sightings are written to a public registry on Celo. There is no private database to lose, no login to grant, and no administrator who can quietly change what a record said.",
  },
  {
    icon: Leaf,
    title: "Every sighting keeps its author",
    body: "A record is attributed to the address that submitted it, and only that reporter can correct it. The observation stays credited to the person who was actually in the water.",
  },
  {
    icon: Boxes,
    title: "Check it yourself",
    body: "Anyone can replay the chain and rebuild the map from scratch. The map is a view of the record, not the record itself — which is what makes it worth trusting.",
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
          <h2 className={styles.title}>
            A record is only as good as your ability to check it.
          </h2>
          <p className={styles.lead}>
            Conservation data usually asks you to trust whoever holds the
            spreadsheet. This one does not.
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
