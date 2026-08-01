"use client";

import { motion } from "framer-motion";

/* ── Clean, elegant SVG shapes (hearts, sparkles, home, cross) ── */

function FloatingHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function FloatingSparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </svg>
  );
}

function FloatingHome({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function FloatingCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

function FloatingCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function FloatingSun({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.25" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
    </svg>
  );
}

/* ── Float animation variants (smooth continuous drift) ── */
const floatVariants = {
  float1: {
    y: [0, -20, 0, 15, 0],
    x: [0, 10, 0, -8, 0],
    rotate: [0, 6, 0, -6, 0],
  },
  float2: {
    y: [0, 18, 0, -22, 0],
    x: [0, -10, 0, 8, 0],
    rotate: [0, -8, 0, 8, 0],
  },
  float3: {
    y: [0, -15, 0, 20, 0],
    x: [0, 8, -6, 0, 0],
    rotate: [0, 10, 0, -10, 0],
  },
};

export type FloatingTheme =
  | "hero"
  | "founder"
  | "rooms"
  | "activities"
  | "caregiver";

interface FloatingItem {
  Shape: React.ComponentType<{ className?: string }>;
  position: string; // Outer margins only so it never overlaps content
  size: string;     // Clean size
  color: string;    // Soft translucent color
  variant: keyof typeof floatVariants;
  duration: number;
  delay: number;
}

const presets: Record<FloatingTheme, FloatingItem[]> = {
  hero: [
    { Shape: FloatingHeart, position: "top-[10%] right-[3%] md:right-[5%]", size: "w-8 h-8 md:w-14 md:h-14", color: "text-primary/20", variant: "float1", duration: 12, delay: 0 },
    { Shape: FloatingSparkle, position: "top-[45%] right-[1%] md:right-[2%]", size: "w-6 h-6 md:w-10 md:h-10", color: "text-secondary/25", variant: "float2", duration: 14, delay: 1.5 },
    { Shape: FloatingSun, position: "top-[15%] left-[2%] md:left-[3%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-secondary/20", variant: "float3", duration: 15, delay: 2 },
    { Shape: FloatingCross, position: "bottom-[15%] right-[8%] md:right-[12%]", size: "w-6 h-6 md:w-10 md:h-10", color: "text-primary/18", variant: "float1", duration: 16, delay: 3 },
  ],
  founder: [
    { Shape: FloatingHeart, position: "top-[8%] left-[2%] md:left-[4%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-primary/20", variant: "float2", duration: 12, delay: 0 },
    { Shape: FloatingSparkle, position: "bottom-[10%] right-[2%] md:right-[4%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-secondary/25", variant: "float3", duration: 13, delay: 1 },
    { Shape: FloatingCircle, position: "top-[40%] right-[2%] md:right-[3%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-tertiary/20", variant: "float1", duration: 14, delay: 2 },
  ],
  rooms: [
    { Shape: FloatingHome, position: "top-[6%] right-[2%] md:right-[4%]", size: "w-10 h-10 md:w-14 md:h-14", color: "text-primary/20", variant: "float1", duration: 14, delay: 0 },
    { Shape: FloatingHeart, position: "bottom-[8%] left-[2%] md:left-[4%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-primary/20", variant: "float3", duration: 12, delay: 1.5 },
    { Shape: FloatingSparkle, position: "top-[30%] left-[1%] md:left-[2%]", size: "w-6 h-6 md:w-10 md:h-10", color: "text-secondary/25", variant: "float2", duration: 13, delay: 2 },
  ],
  activities: [
    { Shape: FloatingSparkle, position: "top-[15%] right-[2%] md:right-[4%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-secondary/25", variant: "float1", duration: 11, delay: 1 },
    { Shape: FloatingHeart, position: "bottom-[10%] right-[3%] md:right-[5%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-primary/20", variant: "float3", duration: 15, delay: 2 },
    { Shape: FloatingCircle, position: "top-[50%] left-[1%] md:left-[3%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-primary/18", variant: "float2", duration: 16, delay: 0.5 },
  ],
  caregiver: [
    { Shape: FloatingHeart, position: "top-[8%] right-[2%] md:right-[4%]", size: "w-10 h-10 md:w-14 md:h-14", color: "text-primary/20", variant: "float1", duration: 13, delay: 0 },
    { Shape: FloatingCross, position: "bottom-[12%] left-[2%] md:left-[4%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-primary/20", variant: "float3", duration: 12, delay: 1.5 },
    { Shape: FloatingSun, position: "bottom-[6%] right-[3%] md:right-[6%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-secondary/25", variant: "float2", duration: 10, delay: 2 },
  ],
};

/* ── Main Component ── */
export default function FloatingGraphics({ theme }: { theme: FloatingTheme }) {
  const items = presets[theme];

  return (
    <div
      className="absolute inset-0 max-w-full overflow-hidden pointer-events-none z-0"
      style={{ overflowX: "hidden" }}
      aria-hidden="true"
    >
      {items.map((item, i) => {
        const { Shape, position, size, color, variant, duration, delay } = item;
        return (
          <motion.div
            key={`${theme}-float-${i}`}
            className={`absolute ${position}`}
            animate={floatVariants[variant]}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Shape className={`${size} ${color}`} />
          </motion.div>
        );
      })}
    </div>
  );
}
