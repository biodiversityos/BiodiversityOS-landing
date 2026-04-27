"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface WaveTransitionProps {
  children: React.ReactNode;
  color?: string;
}

export default function WaveTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 170%", "center start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40, // Much lower stiffness for "heavy" water feel
    damping: 20, // Adjusted damping for smoothness
    restDelta: 0.001,
  });

  // Color Palette
  const colors = ["#0F2854", "#1C4D8D", "#4988C4", "#BDE8F5"];

  // Content effects - appearing MUCH sooner and without blur
  const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.5],
    [0, 0.4, 1],
  );
  const contentScale = useTransform(
    smoothProgress,
    [0, 0.2, 0.5],
    [0.98, 0.99, 1],
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden min-h-[50vh]"
    >
      {/* 4 Layers of Waves - making them very translucent */}
      {colors.map((color, index) => {
        const y = useTransform(
          smoothProgress,
          [0, 1],
          [`${100 + index * 10}%`, `${-120 - index * 15}%`],
        );

        return (
          <motion.div
            key={color}
            className="absolute inset-0 pointer-events-none"
            style={{ y, zIndex: 40 + index, willChange: "transform" }}
          >
            <div className="absolute bottom-0 left-0 w-full h-[150%] flex flex-col">
              <WaveSVG
                color={color}
                opacity={0.2 + index * 0.1} // Reduced opacity for peaks
                className="-mb-1"
                flip={index % 2 === 0}
              />
              <div
                className="w-full flex-1"
                style={{
                  backgroundColor: color,
                  opacity: 0, // EXTREMELY low opacity for the body
                }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* The Section Content */}
      <motion.div
        style={{
          opacity: contentOpacity,
          scale: contentScale,
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}

function WaveSVG({
  color,
  opacity,
  className,
  flip = false,
}: {
  color: string;
  opacity: number;
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 320"
      className={`w-full h-auto min-w-[1440px] ${className} ${flip ? "scale-x-[-1]" : ""}`}
      preserveAspectRatio="none"
    >
      <path
        fill={color}
        fillOpacity={opacity}
        d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  );
}
