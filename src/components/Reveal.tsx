"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  /** seconds */
  delay?: number;
  /** seconds */
  duration?: number;
  /** px slide distance on Y (use x to slide horizontally) */
  y?: number;
  x?: number;
  /** reveal only once (true = only first time) */
  once?: boolean;
  /** 0..1: visible portion needed to trigger */
  amount?: number;
  /** viewport rootMargin, e.g. "0px 0px -10% 0px" */
  margin?: string;
  /** set to true to respect OS “reduce motion”; default = false (force on) */
  respectReducedMotion?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 60,            // <-- bigger so you SEE it
  x,
  once = true,
  amount = 0.2,
  margin = "0px 0px -10% 0px",
  respectReducedMotion = false, // <-- FORCE animation by default
  className,
  style,
}: Props) {
  const prefersReduced = useReducedMotion();
  const reduce = respectReducedMotion && prefersReduced;

  const axis = typeof x === "number" ? "x" : "y";
  const offset = typeof x === "number" ? (x as number) : y;

  const initial = reduce ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, [axis]: offset };
  const animate = reduce
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 1, [axis]: 0, transition: { duration, delay, ease: [0.22, 0.8, 0.32, 1] } };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount, margin }}
      style={{ willChange: "transform, opacity", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
