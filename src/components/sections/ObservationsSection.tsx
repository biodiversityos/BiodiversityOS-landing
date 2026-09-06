import Reveal from "../story/Reveal";
import styles from "./ObservationsSection.module.css";
import { getSurveyStats } from "@/lib/stats";

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default async function ObservationsSection() {
  const stats = await getSurveyStats();

  const peakMonth = stats.byMonth.indexOf(Math.max(...stats.byMonth));
  const quietMonth = stats.byMonth.indexOf(Math.min(...stats.byMonth));
  const monthMax = Math.max(...stats.byMonth, 1);
  const speciesMax = Math.max(...stats.topSpecies.map((s) => s.sightings), 1);

  const figures: { value: string; label: string; wide?: boolean }[] = [
    { value: stats.sightings.toLocaleString("en-US"), label: "sightings recorded" },
    { value: stats.individuals.toLocaleString("en-US"), label: "individual sharks" },
    { value: String(stats.species), label: "species" },
    { value: String(stats.sites), label: "dive sites" },
    // A span, not a count: 2019-2026 is eight calendar years but seven elapsed,
    // and picking either invites the reader to catch you being loose.
    { value: `${stats.firstYear}–${stats.lastYear}`, label: "years on record", wide: true },
  ];

  return (
    <section id="observations" aria-label="What the record shows — Cozumel shark sightings">
      <div className="chapter">
        <Reveal className={styles.intro}>
          <p className={styles.kicker}>The record</p>
          <h2 className={styles.title}>
            {stats.sightings.toLocaleString("en-US")} sightings, one island,
            every one of them logged by hand.
          </h2>
          <p className={styles.lead}>
            Almost all of it was logged on ordinary recreational dives — guides and
            divers writing down what they saw at the end of a working day, dive after
            dive, since {stats.firstYear}.
          </p>
        </Reveal>

        <Reveal className={styles.figures}>
          {figures.map(({ value, label, wide }) => (
            <div key={label} className={styles.figure}>
              <span className={`${styles.figureValue} ${wide ? styles.figureWide : ""}`}>
                {value}
              </span>
              <span className={styles.figureLabel}>{label}</span>
            </div>
          ))}
        </Reveal>

        <div className={styles.panels}>
          <Reveal className={styles.panel}>
            <h3 className={styles.panelTitle}>What is out there</h3>
            <p className={styles.panelNote}>
              Sightings by species. The reef is dominated by two of them; the
              hammerheads and the whale sharks are the rare days.
            </p>

            <ul className={styles.species}>
              {stats.topSpecies.map((s) => (
                <li key={s.key} className={styles.speciesRow}>
                  <div className={styles.speciesHead}>
                    <span className={styles.speciesLabel}>
                      <span className={styles.speciesName}>{s.label}</span>
                      <span className={styles.speciesSci}>{s.scientific}</span>
                    </span>
                    <span className={styles.speciesCount}>{s.sightings}</span>
                  </div>
                  <div
                    className={styles.bar}
                    role="img"
                    aria-label={`${s.label}: ${s.sightings} sightings, ${s.individuals} individuals`}
                  >
                    <span
                      className={styles.barFill}
                      style={{ width: `${(s.sightings / speciesMax) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.panel}>
            <h3 className={styles.panelTitle}>When they show up</h3>
            <p className={styles.panelNote}>
              Sightings by month across every year on record. {MONTH_NAMES[peakMonth]}{" "}
              is the busiest; {MONTH_NAMES[quietMonth]} the quietest.
            </p>

            <div className={styles.months} role="img"
                 aria-label={`Sightings by month, peaking in ${MONTH_NAMES[peakMonth]}`}>
              {stats.byMonth.map((n, i) => (
                <div key={i} className={styles.month}>
                  <div className={styles.monthTrack}>
                    <span
                      className={`${styles.monthFill} ${i === peakMonth ? styles.monthPeak : ""}`}
                      style={{ height: `${(n / monthMax) * 100}%` }}
                    />
                  </div>
                  <span className={styles.monthCount}>{n}</span>
                  <span className={styles.monthLabel}>{MONTHS[i]}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className={styles.footnote}>
          <p>
            Every record carries its coordinates, date, species, count and the
            note the observer wrote at the time. Dive sites were standardised
            against a catalogue of 87 official sites in the Cozumel Reefs
            National Park, so a sighting logged as &ldquo;cedral bajo&rdquo; and
            one logged as &ldquo;Paso del Cedral&rdquo; end up in the same place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
