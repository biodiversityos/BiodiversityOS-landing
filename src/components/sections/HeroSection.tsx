import React from "react";
import Image from "next/image";
import HeroWater from "../hero/HeroWater";
import sharkLogo from "../../../public/assets/logoShark.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[#0a4d5c]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_bg.png"
          alt="Deep ocean water"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-25"
        />
        {/* Much softer background transition to ensure perfect match at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a4d5c]/20 via-[#0a4d5c]/60 to-[#0a4d5c]"></div>
        <div className="absolute inset-0 hero-gradient opacity-20"></div>
      </div>

      {/* WebGL Water Effect Layer */}
      <HeroWater />

      {/* Content Layer */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-48 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-400">
                BiodiversityOS · v1.0 Node
              </span>
            </div>
            <h1 className="text-6xl md:text-Huge font-bold text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
              Collective <br />
              <span className="text-emerald-400 italic font-serif">
                Intelligence.
              </span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-emerald-50/80 max-w-xl leading-relaxed drop-shadow-md font-light">
              A community-driven operating system for the ocean. Tag sightings,
              track movements, and protect the apex predators through collective
              intelligence.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href={process.env.NEXT_PUBLIC_APP_URL ?? "https://app.oceanwatch.xyz"}
                className="group relative inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-10 py-5 rounded-full transition-all hover:scale-105 shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
              >
                Launch Live Map
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-3 text-white hover:text-emerald-100 font-semibold px-10 py-5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                Learn Safety Rules
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square animate-float group">
              {/* Shark Image (Transparent PNG) - Added versioning to bypass cache */}
              <Image
                src={sharkLogo}
                alt="Shark tracking visualization"
                fill
                sizes="(max-width: 768px) 100vw, 512px"
                className="object-contain select-none pointer-events-none"
                draggable="false"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider - Unified with #0a4d5c */}
      <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px] block"
        >
          <path
            d="M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,80 L1440,120 L0,120 Z"
            fill="#0a4d5c"
          />
        </svg>
      </div>
    </section>
  );
}
