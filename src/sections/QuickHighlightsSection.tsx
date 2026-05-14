"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

const highlights = [
  {
    title: "Clean & Supportive Accommodation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    title: "28 Comfortable Rooms",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M2 4v16"></path>
        <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
        <path d="M2 17h20"></path>
        <path d="M6 8v9"></path>
      </svg>
    ),
  },
  {
    title: "Free Stay for Patients + 1 Attendant",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Nutritious & Hygienic Meals",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
        <path d="M7 2v20"></path>
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
      </svg>
    ),
  },
  {
    title: "Bhajans & Light Yoga Sessions",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    ),
  },
];

function HighlightPill({ item }: { item: (typeof highlights)[0] }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 bg-surface-container-lowest px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-sm border border-outline-variant/20 flex-shrink-0">
      <span className="flex-shrink-0 bg-primary-container/40 p-2 rounded-full">
        {item.icon}
      </span>
      <span className="font-sans font-medium text-on-surface text-xs sm:text-sm md:text-base whitespace-nowrap">
        {item.title}
      </span>
    </div>
  );
}

export default function QuickHighlightsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 0.5; // px per frame

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll logic for mobile
  const startAutoScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || !isMobile) return;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;

        // When we've scrolled past the first set of items, reset to the start seamlessly
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile, isPaused]);

  useEffect(() => {
    const cleanup = startAutoScroll();
    return cleanup;
  }, [startAutoScroll]);

  // Pause on touch, resume after release
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    // Resume after a brief delay so the swipe momentum finishes
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section className="bg-surface py-6 sm:py-8 md:py-16 border-b border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-0 sm:px-6 md:px-10">
        {/* Mobile: auto-scrolling horizontal strip */}
        {isMobile ? (
          <div
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex gap-3 overflow-x-auto px-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Duplicate items for seamless infinite loop */}
            {[...highlights, ...highlights].map((item, index) => (
              <HighlightPill key={`pill-${index}`} item={item} />
            ))}
          </div>
        ) : (
          /* Tablet/Desktop: wrapped centered layout */
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <HighlightPill item={item} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
