/**
 * Survey figures for the landing page.
 *
 * Read live from the indexer so the page cannot drift from the registry, with
 * a fallback snapshot so a marketing page never breaks because an API is down.
 * Revalidated hourly — these numbers move a few times a month at most.
 */
const INDEXER_URL =
  process.env.INDEXER_INTERNAL_URL ??
  process.env.NEXT_PUBLIC_INDEXER_URL ??
  "https://indexer.biodiversityos.org/graphql";

const REVALIDATE_SECONDS = 3600;

export interface SpeciesTally {
  key: string;
  label: string;
  scientific: string;
  sightings: number;
  individuals: number;
}

export interface SurveyStats {
  sightings: number;
  individuals: number;
  species: number;
  sites: number;
  firstYear: number;
  lastYear: number;
  byMonth: number[];
  byYear: { year: number; sightings: number }[];
  topSpecies: SpeciesTally[];
  live: boolean;
}

const SPECIES_META: Record<string, { label: string; scientific: string }> = {
  nurse_shark:                { label: "Nurse shark",                scientific: "Ginglymostoma cirratum" },
  caribbean_reef_shark:       { label: "Caribbean reef shark",       scientific: "Carcharhinus perezi" },
  great_hammerhead_shark:     { label: "Great hammerhead",           scientific: "Sphyrna mokarran" },
  hammerhead_shark:           { label: "Hammerhead",                 scientific: "Sphyrna sp." },
  scalloped_hammerhead_shark: { label: "Scalloped hammerhead",       scientific: "Sphyrna lewini" },
  bull_shark:                 { label: "Bull shark",                 scientific: "Carcharhinus leucas" },
  tiger_shark:                { label: "Tiger shark",                scientific: "Galeocerdo cuvier" },
  whale_shark:                { label: "Whale shark",                scientific: "Rhincodon typus" },
  sandbar_shark:              { label: "Sandbar shark",              scientific: "Carcharhinus plumbeus" },
  unknown:                    { label: "Unidentified",               scientific: "" },
};

/** Last known-good figures, used when the indexer cannot be reached. */
const FALLBACK: SurveyStats = {
  sightings: 743,
  individuals: 1165,
  species: 9,
  sites: 66,
  firstYear: 2019,
  lastYear: 2026,
  byMonth: [50, 85, 80, 79, 47, 27, 51, 78, 72, 60, 53, 59],
  byYear: [
    { year: 2019, sightings: 13 },
    { year: 2020, sightings: 6 },
    { year: 2021, sightings: 37 },
    { year: 2022, sightings: 106 },
    { year: 2023, sightings: 254 },
    { year: 2024, sightings: 213 },
    { year: 2025, sightings: 92 },
    { year: 2026, sightings: 20 },
  ],
  topSpecies: [
    { key: "nurse_shark",            label: "Nurse shark",          scientific: "Ginglymostoma cirratum", sightings: 485, individuals: 671 },
    { key: "caribbean_reef_shark",   label: "Caribbean reef shark", scientific: "Carcharhinus perezi",    sightings: 186, individuals: 421 },
    { key: "great_hammerhead_shark", label: "Great hammerhead",     scientific: "Sphyrna mokarran",       sightings: 31,  individuals: 31 },
    { key: "hammerhead_shark",       label: "Hammerhead",           scientific: "Sphyrna sp.",            sightings: 23,  individuals: 23 },
    { key: "bull_shark",             label: "Bull shark",           scientific: "Carcharhinus leucas",    sightings: 11,  individuals: 12 },
    { key: "whale_shark",            label: "Whale shark",          scientific: "Rhincodon typus",        sightings: 3,   individuals: 3 },
  ],
  live: false,
};

interface IndexerRecord {
  species: string;
  count: number;
  observedAt: string | null;
}

export async function getSurveyStats(): Promise<SurveyStats> {
  try {
    const res = await fetch(INDEXER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query { records(limit: 1000) { total items { species count observedAt } } sites }`,
      }),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return FALLBACK;

    const json = await res.json();
    const items: IndexerRecord[] = json?.data?.records?.items ?? [];
    const sites: string[] = json?.data?.sites ?? [];
    if (items.length === 0) return FALLBACK;

    const byMonth = Array(12).fill(0) as number[];
    const yearCounts = new Map<number, number>();
    const speciesSightings = new Map<string, number>();
    const speciesIndividuals = new Map<string, number>();
    let individuals = 0;

    for (const item of items) {
      individuals += item.count;
      speciesSightings.set(item.species, (speciesSightings.get(item.species) ?? 0) + 1);
      speciesIndividuals.set(item.species, (speciesIndividuals.get(item.species) ?? 0) + item.count);

      if (item.observedAt) {
        const date = new Date(item.observedAt);
        byMonth[date.getUTCMonth()] += 1;
        const year = date.getUTCFullYear();
        yearCounts.set(year, (yearCounts.get(year) ?? 0) + 1);
      }
    }

    const byYear = [...yearCounts.entries()]
      .map(([year, sightings]) => ({ year, sightings }))
      .sort((a, b) => a.year - b.year);

    const topSpecies = [...speciesSightings.entries()]
      .filter(([key]) => key !== "unknown")
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([key, sightings]) => ({
        key,
        label: SPECIES_META[key]?.label ?? key,
        scientific: SPECIES_META[key]?.scientific ?? "",
        sightings,
        individuals: speciesIndividuals.get(key) ?? 0,
      }));

    return {
      sightings: json.data.records.total ?? items.length,
      individuals,
      species: speciesSightings.size,
      sites: sites.length,
      firstYear: byYear[0]?.year ?? FALLBACK.firstYear,
      lastYear: byYear[byYear.length - 1]?.year ?? FALLBACK.lastYear,
      byMonth,
      byYear,
      topSpecies,
      live: true,
    };
  } catch {
    return FALLBACK;
  }
}
