"use client";

import { useRef } from "react";
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.42"],
  });
  const eased = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    restDelta: 0.001,
  });

  const opacity = useTransform(eased, [0, 1], [0, 1]);
  const y = useTransform(eased, [0, 1], [70, 0]);
  const blur = useTransform(eased, [0, 1], ["blur(8px)", "blur(0px)"]);

  if (reducedMotion) {
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
