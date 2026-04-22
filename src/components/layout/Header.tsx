import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4 text-white font-bold text-xl tracking-tighter">
          <span className="text-xl opacity-40">BIOS</span>
          <div className="w-px h-6 bg-white/10"></div>
          <span>BiodiversityOS</span>
        </div>
        <a
          href={process.env.NEXT_PUBLIC_APP_URL ?? "https://app.biodiversityos.org"}
          className="text-xs font-bold uppercase tracking-widest text-white bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-900/20 backdrop-blur-md border border-emerald-400/20"
        >
          Launch App
        </a>
      </div>
    </header>
  );
}
