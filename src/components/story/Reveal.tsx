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
 * Content emerges from the water as it enters the viewport. The motion has
 * the weight and drag of moving through water: a slow, overdamped rise that
 * trails the scroll slightly (buoyancy) while it sharpens from a soft murk
 * into focus. No bounce, no loop, no flashes — it simply settles, so it
 * never competes with reading.
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
    offset: ["start 0.96", "start 0.6"],
  });
  // Overdamped + soft: glides into place with water-like resistance,
  // never overshoots, and lags the scroll a touch (weight / buoyancy).
  const eased = useSpring(scrollYProgress, {
    stiffness: 38,
    damping: 22,
    restDelta: 0.0005,
  });

  const opacity = useTransform(eased, [0, 0.55], [0, 1]);
  const y = useTransform(eased, [0, 1], [34, 0]);
  const blur = useTransform(eased, [0, 0.5], ["blur(5px)", "blur(0px)"]);

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
