import Reveal from "../story/Reveal";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About BiodiversityOS — Marine Research in Cozumel"
    >
      <div className="chapter">
        <Reveal className={styles.lede}>
          <p className={styles.kicker}>The origin</p>
          <h2 className={styles.title}>
            It began with a spreadsheet and a dive log.
          </h2>
        </Reveal>

        <Reveal className={styles.body}>
          <p>
            Since 2019, dive guides, instructors and researchers working out of
            Cozumel have written down the sharks they met — species, how many,
            where, and whatever else was worth noting. The fieldwork is led by{" "}
            <a
              href="https://www.marsustentable.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Mar Sustentable
            </a>
            , drawing on the local ecological knowledge of the people who are in
            the water every day. More than forty dive operations have contributed.
          </p>
          <p>
            That kind of record is fragile. It lives in one file, in one
            spreadsheet, under one person&apos;s name, and dive-site names drift
            between logs — the same reef written five different ways. Before
            anything else could happen, all 743 records were standardised against
            a catalogue of 87 official sites in the Cozumel Reefs National Park,
            and every one of them was given real coordinates.
          </p>
          <p>
            BiodiversityOS is what that record became: open, addressable, and no
            longer dependent on a single file surviving.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
