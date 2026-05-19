"use client";

import { useState } from "react";
import { useReducedMotion, type MotionValue } from "framer-motion";
import SharkParticles from "../SharkParticles";

/**
 * The shark only lives in the blue water. Wrapper opacity is driven by the
 * --story-shark CSS var (set in StoryShell); the particle simulation reads
 * the same viewport-anchored `dive` MotionValue, so it stays in sync with
 * the surface→blue crossover. One persistent canvas, never remounted.
 */
export default function StoryShark({ dive }: { dive: MotionValue<number> }) {
  const reducedMotion = useReducedMotion() ?? false;
  const [count] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 640 ? 3500 : 8000,
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 flex items-start justify-center md:justify-end"
    >
      <div
        style={{
          opacity: reducedMotion ? 0.5 : "var(--story-shark, 0)",
          transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}
        className="mt-[14vh] h-[min(60vh,560px)] w-full max-w-[760px] md:mr-[2vw]"
      >
        <SharkParticles
          progress={dive}
          particleCount={count}
          interactive={false}
          staticAssembled={reducedMotion}
        />
      </div>
    </div>
  );
}
