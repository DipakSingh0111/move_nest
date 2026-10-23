"use client";

import { MotionConfig, motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom" | "fade";

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
    case "zoom":
      return { scale: 0.9 };
    default:
      return {};
  }
};

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number;
  className?: string;
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 40,
  amount = 0.2,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: Math.min(amount, 0.15), margin: "0px 0px -40px 0px" }}
      transition={{ duration, delay, ease }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  amount = 0.15,
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  hoverLift?: boolean;
};

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 40,
  hoverLift = false,
}: StaggerItemProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset(direction, distance) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      whileHover={hoverLift ? { y: -8, transition: { duration: 0.25 } } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  className,
  distance = 10,
  duration = 4,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ProgressBar({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease }}
    />
  );
}

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
