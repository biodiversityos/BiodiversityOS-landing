"use client";

import { useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import StoryBackground from "./StoryBackground";
import StoryParticles from "./StoryParticles";
import StoryShark from "./StoryShark";

/**
 * Single source of truth for the dive. Progress is anchored to the
 * VIEWPORT (not total page height) so the bright surface always lasts
 * exactly through the hero — the water turns blue right after the
 * "Dive in" cue — regardless of how long the rest of the page is.
 *
 * `dive` (0 → 1): 0 at the top, ~0.30 at the end of the hero, ~0.50 once
 * the water has gone fully blue, then 1 deep in the abyss. Everything —
 * background, ink, shark — keys off this one value.
 */
export default function StoryShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();
  // Anchor the dive to the real hero element, not window.innerHeight: the
  // hero is taller than one viewport (padding + content), so we keep the
  // surface bright until the hero is actually scrolling away and the water
  // turns blue right after the "Dive in" cue.
  const [{ heroH, vh, docMax }, setMetrics] = useState({
    heroH: 900,
    vh: 800,
    docMax: 4000,
  });

  useEffect(() => {
    const measure = () => {
      const hero = document.getElementById("hero");
      setMetrics({
        heroH: hero?.offsetHeight ?? window.innerHeight,
        vh: window.innerHeight,
        docMax:
          document.documentElement.scrollHeight - window.innerHeight,
      });
    };
    measure();
    const t = setTimeout(measure, 250); // after fonts/layout settle
    window.addEventListener("resize", measure);
    const hero = document.getElementById("hero");
    const ro = new ResizeObserver(measure);
    if (hero) ro.observe(hero);
    ro.observe(document.body);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // Bright while the hero owns the screen; the surface→blue crossover
  // happens as the hero scrolls away (just past "Dive in"); the deep then
  // stretches across the WHOLE rest of the page so the shark only scatters
  // right at the very bottom — not at a fixed offset past the hero.
  const s1 = Math.max(heroH - 0.45 * vh, vh * 0.4); // surface starts to go
  const s2 = heroH + 0.1 * vh; // fully blue, hero gone
  const diveEnd = Math.max(docMax, s2 + 2 * vh);
  const dive = useTransform(
    scrollY,
    [0, s1, s2, diveEnd],
    [0, 0.3, 0.5, 1],
    { clamp: true },
  );

  // Text ink: dark on the bright surface, light in the blue/deep.
  const ink = useTransform(
    dive,
    [0, 0.32, 0.46, 1],
    ["#0F2854", "#0F2854", "#EAF6FB", "#EAF6FB"],
  );
  const inkMuted = useTransform(
    dive,
    [0, 0.32, 0.46, 1],
    ["#1C4D8D", "#1C4D8D", "#BDE8F5", "#BDE8F5"],
  );

  // Halo opposite to the ink, peaking during the crossover for legibility.
  const glowColor = useTransform(
    dive,
    [0, 0.32, 0.46, 1],
    ["#FFFFFF", "#FFFFFF", "#06182F", "#06182F"],
  );
  const glowAlpha = useTransform(dive, [0.26, 0.4, 0.54], [0, 0.6, 0]);

  // Always-on faint halo opposite the ink.
  const inkContrast = useTransform(
    dive,
    [0, 0.32, 0.46, 1],
    ["#FFFFFF", "#FFFFFF", "#06182F", "#06182F"],
  );

  // Bright surface holds through the hero, then dissolves into the blue.
  const surface = useTransform(dive, [0.3, 0.48], [1, 0]);
  const rayAlpha = useTransform(dive, [0, 0.2, 0.48], [0.35, 0.22, 0]);
  const rayShift = useTransform(dive, [0, 0.48], [0, 40]);

  // Underwater depth: 0 at the surface → 1 in the abyss (vignette / pressure).
  const deep = useTransform(dive, [0.42, 0.7, 1], [0, 0.7, 1]);

  // Shark lives only in the blue water: invisible on the bright surface,
  // it coalesces out of the deep, holds, then eases off near the bottom.
  const shark = useTransform(
    dive,
    [0, 0.48, 0.6, 0.92, 1],
    [0, 0, 0.85, 0.82, 0.3],
  );

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--story-ink", ink.get());
    r.style.setProperty("--story-ink-muted", inkMuted.get());
    r.style.setProperty("--story-glow", glowColor.get());
    r.style.setProperty("--story-glow-a", String(glowAlpha.get()));
    r.style.setProperty("--story-ink-contrast", inkContrast.get());
    r.style.setProperty("--story-surface", String(surface.get()));
    r.style.setProperty("--story-ray-a", String(rayAlpha.get()));
    r.style.setProperty("--story-ray-y", `${rayShift.get()}%`);
    r.style.setProperty("--story-deep", String(deep.get()));
    r.style.setProperty("--story-shark", String(shark.get()));
  }, [
    ink,
    inkMuted,
    glowColor,
    glowAlpha,
    inkContrast,
    surface,
    rayAlpha,
    rayShift,
    deep,
    shark,
  ]);

  const set = (name: string) => (v: string | number) =>
    document.documentElement.style.setProperty(name, String(v));

  useMotionValueEvent(ink, "change", set("--story-ink"));
  useMotionValueEvent(inkMuted, "change", set("--story-ink-muted"));
  useMotionValueEvent(glowColor, "change", set("--story-glow"));
  useMotionValueEvent(glowAlpha, "change", set("--story-glow-a"));
  useMotionValueEvent(inkContrast, "change", set("--story-ink-contrast"));
  useMotionValueEvent(surface, "change", set("--story-surface"));
  useMotionValueEvent(rayAlpha, "change", set("--story-ray-a"));
  useMotionValueEvent(rayShift, "change", (v) =>
    document.documentElement.style.setProperty("--story-ray-y", `${v}%`),
  );
  useMotionValueEvent(deep, "change", set("--story-deep"));
  useMotionValueEvent(shark, "change", set("--story-shark"));

  return (
    <>
      <StoryBackground />
      <StoryParticles />
      <StoryShark dive={dive} />
      {children}
    </>
  );
}
