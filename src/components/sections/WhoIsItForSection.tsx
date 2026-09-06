import { Microscope, Users, Leaf, Network } from "lucide-react";
import styles from "./WhoIsItForSection.module.css";
import Reveal from "../story/Reveal";

const audiences = [
  {
    icon: Microscope,
    title: "Researchers & scientists",
    body: "Georeferenced sightings with species, counts, depth, dive site and the observer's own field note — downloadable, citable, and free.",
  },
  {
    icon: Users,
    title: "Local communities",
    body: "Dive operations and guides who log what they see, and keep credit for it. The record grows from working days, not expeditions.",
  },
  {
    icon: Leaf,
    title: "Conservation organizations",
    body: "Seven years of presence data across a national park, by site and by season — the kind of baseline that is usually missing.",
  },
  {
    icon: Network,
    title: "Web3 / DeSci community",
    body: "A live registry with real observations behind it, not a demo. The contracts, the indexer and the app are all open.",
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
            The people in the water see it first.
          </h2>
          <p className={styles.lead}>
            A research vessel visits a reef for a season. A dive guide is there
            four times a week, for years. That difference is the whole point.
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
