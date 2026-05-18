"use client";

import { useState } from "react";
import { useScroll, useReducedMotion } from "framer-motion";
import SharkParticles from "../SharkParticles";

/**
 * The shark is a through-line, not a backdrop for every paragraph: present
 * while it assembles (hero → origin), then receding to a faint trace so it
 * never competes with the reading column. Wrapper opacity is driven by the
 * --story-shark CSS var (set in StoryShell); the particle simulation reads a
 * live scroll MotionValue imperatively. One persistent canvas, never remounted.
 */
export default function StoryShark() {
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
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
          progress={scrollYProgress}
          particleCount={count}
          interactive={false}
          staticAssembled={reducedMotion}
        />
      </div>
    </div>
  );
}
