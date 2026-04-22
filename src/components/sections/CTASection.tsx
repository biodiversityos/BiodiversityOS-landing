import React from "react";

export default function CTASection() {
  return (
    <section className="relative py-48 overflow-hidden bg-gradient-to-b from-[#0a4d5c] to-[#083b47]">
      {/* Immersive Ocean Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Bathymetry Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 Q480,150 960,100 T1920,100"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M0,400 Q480,350 960,400 T1920,400"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>

        {/* Floating Marine Particles */}
        <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 bg-emerald-400/20 rounded-full blur-sm animate-float-slow"></div>
        <div className="absolute bottom-[30%] right-[25%] w-2 h-2 bg-emerald-400/10 rounded-full blur-md animate-float-delayed"></div>

        {/* Immersive radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] pointer-events-none"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10 reveal-on-scroll">
        <p className="mt-10 text-xl md:text-2xl text-emerald-50/20 max-w-2xl mx-auto leading-relaxed font-light mb-16">
          Join the first decentralized network for marine data intelligence.
          Start tracking today.
        </p>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL ?? "https://app.oceanwatch.xyz"}
            className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-white transition-all duration-300 bg-emerald-600 rounded-full hover:bg-emerald-500 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(16,185,129,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3 text-xl tracking-tight">
              Launch Application
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
