"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Content rises out of the water as it enters the viewport — scroll-driven,
 * not a one-shot fade. Replaces the old per-section WaveTransition wrappers.
 */
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  // Render plain on the server / first paint so the SSR markup matches the
  // client (no hydration mismatch); attach scroll-driven motion after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.62"],
  });
  const eased = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const opacity = useTransform(eased, [0, 0.5], [0, 1]);
  const y = useTransform(eased, [0, 1], [48, 0]);
  const blur = useTransform(eased, [0, 0.4], ["blur(6px)", "blur(0px)"]);

  if (reducedMotion || !mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, filter: blur, willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
