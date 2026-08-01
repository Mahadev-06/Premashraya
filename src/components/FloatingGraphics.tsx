"use client";

import { motion } from "framer-motion";

/* ── Themed SVG shapes with rich detail & stroke/fill ── */

function FloatingHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function FloatingLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.71c.99.22 1.99.34 3.03.34C15.49 19.63 21 15.21 21 8c0-1.1-.9-2-2-2h-2zM9.69 17.63c-.78 0-1.56-.09-2.31-.27l2.44-6.97C12.07 10.08 14.1 10 17 10c-.34 3.87-3.86 7.63-7.31 7.63z" />
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
    y: [0, -25, 0, 18, 0],
    x: [0, 12, 0, -10, 0],
    rotate: [0, 8, 0, -8, 0],
    scale: [1, 1.06, 1, 0.95, 1],
  },
  float2: {
    y: [0, 22, 0, -28, 0],
    x: [0, -14, 0, 12, 0],
    rotate: [0, -12, 0, 12, 0],
    scale: [1, 0.94, 1, 1.08, 1],
  },
  float3: {
    y: [0, -18, 0, 24, 0],
    x: [0, 10, -8, 0, 0],
    rotate: [0, 15, 0, -15, 0],
    scale: [1, 1.05, 1, 0.96, 1],
  },
  float4: {
    y: [0, 28, 0, -20, 0],
    x: [0, -12, 10, 0, 0],
    rotate: [0, -10, 0, 10, 0],
    scale: [1, 0.95, 1, 1.05, 1],
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
  position: string; // Safe absolute positioning
  size: string;     // Tailwind size classes (increased for prominent visibility)
  color: string;    // Increased opacity for clear, vibrant visibility
  variant: keyof typeof floatVariants;
  duration: number;
  delay: number;
}

const presets: Record<FloatingTheme, FloatingItem[]> = {
  hero: [
    { Shape: FloatingHeart, position: "top-[12%] right-[4%] md:right-[6%]", size: "w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20", color: "text-primary/30 drop-shadow-md", variant: "float1", duration: 10, delay: 0 },
    { Shape: FloatingSparkle, position: "top-[48%] right-[2%] md:right-[3%]", size: "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16", color: "text-secondary/40 drop-shadow-sm", variant: "float2", duration: 12, delay: 1.5 },
    { Shape: FloatingLeaf, position: "bottom-[18%] left-[2%] md:left-[4%]", size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20", color: "text-tertiary/35 drop-shadow-md", variant: "float3", duration: 14, delay: 0.5 },
    { Shape: FloatingSun, position: "top-[28%] left-[3%] md:left-[5%]", size: "w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18", color: "text-secondary/35", variant: "float4", duration: 11, delay: 2 },
    { Shape: FloatingCross, position: "bottom-[38%] right-[12%] md:right-[15%]", size: "w-8 h-8 md:w-12 md:h-12", color: "text-primary/25", variant: "float1", duration: 15, delay: 3 },
  ],
  founder: [
    { Shape: FloatingHeart, position: "top-[8%] left-[3%] md:left-[6%]", size: "w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20", color: "text-primary/30 drop-shadow-md", variant: "float2", duration: 12, delay: 0 },
    { Shape: FloatingSparkle, position: "bottom-[12%] right-[3%] md:right-[5%]", size: "w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18", color: "text-secondary/35 drop-shadow-sm", variant: "float3", duration: 13, delay: 1 },
    { Shape: FloatingCircle, position: "top-[42%] right-[2%] md:right-[4%]", size: "w-12 h-12 md:w-16 md:h-16", color: "text-tertiary/30", variant: "float1", duration: 14, delay: 2 },
    { Shape: FloatingSun, position: "bottom-[25%] left-[2%] md:left-[4%]", size: "w-10 h-10 md:w-14 md:h-14", color: "text-secondary/30", variant: "float4", duration: 16, delay: 0.5 },
  ],
  rooms: [
    { Shape: FloatingHome, position: "top-[6%] right-[3%] md:right-[5%]", size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20", color: "text-primary/30 drop-shadow-md", variant: "float1", duration: 14, delay: 0 },
    { Shape: FloatingHeart, position: "bottom-[10%] left-[3%] md:left-[5%]", size: "w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18", color: "text-primary/35 drop-shadow-md", variant: "float3", duration: 12, delay: 1.5 },
    { Shape: FloatingSparkle, position: "top-[32%] left-[2%] md:left-[4%]", size: "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16", color: "text-secondary/40", variant: "float4", duration: 13, delay: 2 },
    { Shape: FloatingCross, position: "bottom-[30%] right-[3%] md:right-[6%]", size: "w-10 h-10 md:w-14 md:h-14", color: "text-tertiary/30", variant: "float1", duration: 15, delay: 1 },
  ],
  activities: [
    { Shape: FloatingLeaf, position: "top-[8%] left-[2%] md:left-[4%]", size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20", color: "text-tertiary/35 drop-shadow-md", variant: "float2", duration: 13, delay: 0 },
    { Shape: FloatingSparkle, position: "top-[18%] right-[3%] md:right-[5%]", size: "w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18", color: "text-secondary/35 drop-shadow-sm", variant: "float1", duration: 11, delay: 1 },
    { Shape: FloatingHeart, position: "bottom-[12%] right-[4%] md:right-[7%]", size: "w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18", color: "text-primary/30 drop-shadow-md", variant: "float3", duration: 15, delay: 2 },
    { Shape: FloatingCircle, position: "top-[52%] left-[2%] md:left-[4%]", size: "w-12 h-12 md:w-16 md:h-16", color: "text-primary/25", variant: "float4", duration: 16, delay: 0.5 },
  ],
  caregiver: [
    { Shape: FloatingHeart, position: "top-[10%] right-[3%] md:right-[5%]", size: "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20", color: "text-primary/35 drop-shadow-md", variant: "float1", duration: 13, delay: 0 },
    { Shape: FloatingCross, position: "bottom-[16%] left-[3%] md:left-[5%]", size: "w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18", color: "text-primary/30", variant: "float3", duration: 12, delay: 1.5 },
    { Shape: FloatingLeaf, position: "top-[40%] left-[2%] md:left-[4%]", size: "w-10 h-10 md:w-14 md:h-14", color: "text-tertiary/35", variant: "float2", duration: 14, delay: 0.5 },
    { Shape: FloatingSun, position: "bottom-[8%] right-[4%] md:right-[8%]", size: "w-10 h-10 md:w-14 md:h-14", color: "text-secondary/35", variant: "float4", duration: 10, delay: 2 },
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
