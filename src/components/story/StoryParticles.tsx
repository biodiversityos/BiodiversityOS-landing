"use client";

import { useEffect, useRef } from "react";

/**
 * One fixed, full-viewport passive immersion layer — drifting "marine snow"
 * plus a few faint rising bubbles. Canvas2D (no WebGL context) so it stays
 * cheap alongside the shark canvas. Present across the whole scroll so the
 * water environment is continuous from hero to footer (no seam).
 */
type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  bubble: boolean;
};

export default function StoryParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);

    const build = () => {
      const isMobile = window.innerWidth < 640;
      const snowCount = isMobile ? 36 : 84;
      const bubbleCount = isMobile ? 4 : 8;
      particles = [];
      for (let i = 0; i < snowCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: rand(0.6, 2.2),
          vx: rand(-0.06, 0.06),
          vy: rand(0.08, 0.26),
          a: rand(0.15, 0.5),
          bubble: false,
        });
      }
      for (let i = 0; i < bubbleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: rand(2.5, 6),
          vx: rand(-0.05, 0.05),
          vy: -rand(0.12, 0.32),
          a: rand(0.05, 0.16),
          bubble: true,
        });
      }
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const depthAlpha = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--story-surface")
        .trim();
      const surface = v === "" ? 1 : Math.max(0, Math.min(1, parseFloat(v)));
      // A touch more present in the deep.
      return 0.55 + (1 - surface) * 0.45;
    };

    const drawParticle = (p: Particle, mul: number) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      if (p.bubble) {
        ctx.strokeStyle = `rgba(214, 240, 250, ${p.a * mul})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        ctx.fillStyle = `rgba(225, 244, 251, ${p.a * mul})`;
        ctx.fill();
      }
    };

    const step = () => {
      const mul = depthAlpha();
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > h + 8) {
          p.y = -8;
          p.x = Math.random() * w;
        } else if (p.y < -8) {
          p.y = h + 8;
          p.x = Math.random() * w;
        }
        if (p.x > w + 8) p.x = -8;
        else if (p.x < -8) p.x = w + 8;
        drawParticle(p, mul);
      }
    };

    let raf = 0;
    let running = true;
    const loop = () => {
      if (!running) return;
      step();
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        loop();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) {
      step(); // one static frame
    } else {
      loop();
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -15 }}
    />
  );
}
