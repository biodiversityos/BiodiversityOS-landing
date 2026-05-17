"use client";

import dynamic from "next/dynamic";
import styles from "./AppSection.module.css";
import SharkIcon from "../ui/SharkIcon";
import Reveal from "../story/Reveal";

// Dynamically import the Leaflet map to avoid SSR issues
const PreviewMap = dynamic(() => import("./PreviewMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-200/40 animate-pulse" />,
});

export default function AppSection() {
  return (
    <section
      id="map"
      aria-label="Interactive Biodiversity Map — Explore Marine Species Data"
    >
      <div className="chapter">
        <Reveal className={styles.intro}>
          <p className={styles.kicker}>The platform</p>
          <h2 className={styles.title}>Data that empowers action.</h2>
          <p className={styles.lead}>
            Every observation becomes a living map of species presence —
            structured, georeferenced, and open to anyone working to protect the
            ocean.
          </p>
        </Reveal>

        <Reveal className={styles.mapStage}>
          <div className={styles.mapMask}>
            {/* Filter Panel Mockup */}
            <div
              aria-hidden="true"
              className="absolute top-4 left-4 z-[1000] bg-white/95 backdrop-blur-md px-5 py-5 rounded-2xl shadow-2xl border border-white/20 w-[280px] text-left pointer-events-none"
            >
              <h3 className="text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                OceanWatch Map
              </h3>
              <p className="text-[10px] text-slate-500 font-medium mb-4">
                4 sightings in time range
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col w-full">
                    <label className="text-[9px] uppercase text-gray-500 font-bold mb-1">
                      From
                    </label>
                    <div className="text-[11px] p-1.5 border border-gray-200 rounded bg-white text-gray-700">
                      2024-01-01
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-[9px] uppercase text-gray-500 font-bold mb-1">
                      To
                    </label>
                    <div className="text-[11px] p-1.5 border border-gray-200 rounded bg-white text-gray-700">
                      2025-01-01
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex flex-col w-full">
                    <label className="text-[9px] uppercase text-gray-500 font-bold mb-1">
                      Species
                    </label>
                    <div className="text-[11px] p-1.5 border border-gray-200 rounded bg-white flex justify-between items-center text-gray-700">
                      Any Species
                      <span className="text-[8px] opacity-50">▼</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-[9px] uppercase text-gray-500 font-bold mb-1">
                      Behavior
                    </label>
                    <div className="text-[11px] p-1.5 border border-gray-200 rounded bg-white flex justify-between items-center text-gray-700">
                      Any Behavior
                      <span className="text-[8px] opacity-50">▼</span>
                    </div>
                  </div>
                </div>

                <div className="px-1 mt-1">
                  <div className="h-1.5 w-full bg-blue-100 rounded-full relative">
                    <div className="absolute left-[10%] right-[30%] h-1.5 bg-blue-500 rounded-full"></div>
                    <div className="absolute left-[10%] -top-1 w-3.5 h-3.5 bg-white border-2 border-blue-500 rounded-full shadow-sm"></div>
                    <div className="absolute right-[30%] -top-1 w-3.5 h-3.5 bg-white border-2 border-blue-500 rounded-full shadow-sm"></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-gray-400 mt-2 font-mono">
                    <span>Jan 1, 2024</span>
                    <span>Dec 31, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Sighting Button */}
            <div className="absolute top-4 right-4 z-[1000]">
              <button className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-lg pointer-events-none">
                <SharkIcon size={14} color="white" />
                Submit Sighting
              </button>
            </div>

            <div className={styles.mapArea}>
              <PreviewMap />
              <div className={styles.mapAttribution}>
                Leaflet | © OpenStreetMap contributors
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.principles}>
          <div className={styles.principle}>
            <h3>Georeferenced sighting map</h3>
            <p>
              Plot observations on an interactive map. Filter by species,
              behavior, and date range to explore distribution patterns.
            </p>
          </div>
          <div className={styles.principle}>
            <h3>Scientific integrity</h3>
            <p>
              Each observation follows a structured data schema. Community
              submissions are reviewed to maintain scientific reliability.
            </p>
          </div>
          <div className={styles.principle}>
            <h3>Community verification</h3>
            <p>
              Local ecological knowledge from fishers and divers is integrated
              with field research methods developed by Mar Sustentable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
