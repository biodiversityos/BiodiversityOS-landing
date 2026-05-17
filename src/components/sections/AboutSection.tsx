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
            It began with the sharks of Cozumel.
          </h2>
        </Reveal>

        <Reveal className={styles.body}>
          <p>
            BiodiversityOS stems from years of field research in the Mexican
            Caribbean led by{" "}
            <a
              href="https://www.marsustentable.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Mar Sustentable
            </a>
            . What began as a project to document shark presence in Cozumel has
            evolved into open infrastructure for biodiversity data.
          </p>
          <p>
            The research uses fishers&apos; Local Ecological Knowledge alongside
            geospatial tools to document shark diversity across coral reef and
            mangrove habitats. BiodiversityOS is the open data infrastructure
            built on top of this fieldwork.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
