"use client";

import { useReducedMotion } from "framer-motion";

/**
 * One continuous ocean behind the whole page. Two readable regimes — a bright
 * sunlit surface (dark text) and the deep (light text) — with a single quick
 * crossover. Opacities are driven by CSS vars set in StoryShell, so this is
 * just plain divs (no MotionValue style bindings, which don't flush here).
 */
export default function StoryBackground() {
  const reducedMotion = useReducedMotion() ?? false;

  if (reducedMotion) {
    return (
      <div
        aria-hidden
        className="fixed inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg,#EAF6FB 0%,#BDE8F5 22%,#1C4D8D 58%,#0F2854 85%,#081A30 100%)",
        }}
      />
    );
  }

  return (
    <div aria-hidden className="fixed inset-0 -z-20 overflow-hidden">
      {/* The deep — always-present base, sinking to a near-black abyss */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,#1C4D8D 0%,#143A6B 45%,#0F2854 78%,#081A30 100%)",
        }}
      />

      {/* Sunlit surface — fades into the deep across the crossover */}
      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--story-surface, 1)",
          transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
          background:
            "linear-gradient(180deg,#EFF8FC 0%,#E4F4FA 55%,#D2ECF6 100%)",
        }}
      />

      {/* God rays — soft parallax light from the surface */}
      <div
        className="absolute inset-x-0 -top-1/4 h-[150%]"
        style={{
          opacity: "var(--story-ray-a, 0.35)",
          transform: "translateY(var(--story-ray-y, 0%))",
          transition:
            "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          className="animate-blob absolute -left-1/4 top-0 h-full w-1/2 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side,rgba(255,255,255,0.5),transparent 70%)",
          }}
        />
        <div
          className="animate-blob animation-delay-4000 absolute right-0 top-0 h-full w-1/2 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side,rgba(189,232,245,0.45),transparent 70%)",
          }}
        />
      </div>

      {/* Abyss vignette — the water closes in as you sink (pressure/depth) */}
      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--story-deep, 0)",
          transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
          background:
            "radial-gradient(130% 95% at 50% 26%, rgba(3,12,28,0) 34%, rgba(3,11,26,0.5) 74%, rgba(1,7,18,0.82) 100%)",
        }}
      />

      {/* A slow drifting shaft of deep light for a touch of life */}
      <div
        className="animate-blob absolute left-1/3 top-0 h-full w-1/3 blur-3xl"
        style={{
          opacity: "var(--story-deep, 0)",
          transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1)",
          background:
            "radial-gradient(closest-side,rgba(56,123,196,0.16),transparent 72%)",
        }}
      />
    </div>
  );
}
