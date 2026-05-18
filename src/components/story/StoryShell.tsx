"use client";

import { useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import StoryBackground from "./StoryBackground";
import StoryParticles from "./StoryParticles";
import StoryShark from "./StoryShark";

/**
 * Single source of truth for the dive. All scroll-derived values are written
 * to CSS variables imperatively (the reliable path here) so the fixed water
 * and shark layers can be plain divs that just read the vars.
 */
export default function StoryShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();

  // Text ink: dark on the bright surface, light in the deep.
  const ink = useTransform(
    scrollYProgress,
    [0, 0.34, 0.42, 1],
    ["#0F2854", "#0F2854", "#EAF6FB", "#EAF6FB"],
  );
  const inkMuted = useTransform(
    scrollYProgress,
    [0, 0.34, 0.42, 1],
    ["#1C4D8D", "#1C4D8D", "#BDE8F5", "#BDE8F5"],
  );

  // Halo opposite to the ink, peaking during the crossover for legibility.
  const glowColor = useTransform(
    scrollYProgress,
    [0, 0.34, 0.42, 1],
    ["#FFFFFF", "#FFFFFF", "#06182F", "#06182F"],
  );
  const glowAlpha = useTransform(scrollYProgress, [0.26, 0.38, 0.5], [0, 0.6, 0]);

  // Always-on faint halo opposite the ink — readable rim on bright surface
  // AND in the deep, not only at the crossover.
  const inkContrast = useTransform(
    scrollYProgress,
    [0, 0.34, 0.42, 1],
    ["#FFFFFF", "#FFFFFF", "#06182F", "#06182F"],
  );

  // Bright surface fades into the deep over a short, aligned window.
  const surface = useTransform(scrollYProgress, [0.32, 0.44], [1, 0]);
  const rayAlpha = useTransform(scrollYProgress, [0, 0.28, 0.44], [0.35, 0.22, 0]);
  const rayShift = useTransform(scrollYProgress, [0, 0.44], [0, 40]);

  // Shark lives only in the blue water: invisible on the bright surface,
  // it coalesces out of the deep as the background turns blue, holds, then
  // eases off at the very bottom.
  const shark = useTransform(
    scrollYProgress,
    [0, 0.44, 0.56, 0.85, 1],
    [0, 0, 0.85, 0.78, 0.42],
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
  useMotionValueEvent(shark, "change", set("--story-shark"));

  return (
    <>
      <StoryBackground />
      <StoryParticles />
      <StoryShark />
      {children}
    </>
  );
}
