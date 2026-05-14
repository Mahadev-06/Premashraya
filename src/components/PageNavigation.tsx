"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pageOrder = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function PageNavigation() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const currentIndex = pageOrder.findIndex((p) => p.href === pathname);
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const nextPage =
    currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      // Show when user is within 200px of the bottom
      const nearBottom = scrollTop + winHeight >= docHeight - 200;
      setIsVisible(nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check once on mount in case page is short
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Don't render if page not found in our order
  if (currentIndex === -1) return null;
  // Don't render if there's nothing to show
  if (!prevPage && !nextPage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-20 left-4 right-4 z-[85] lg:hidden"
        >
          <div className="flex items-stretch gap-2.5 max-w-sm mx-auto">
            {/* Previous Page */}
            {prevPage && (
              <Link
                href={prevPage.href}
                className="flex-1 flex items-center gap-1.5 bg-white/50 backdrop-blur-md border border-outline-variant/20 rounded-full px-3.5 py-2 shadow-sm active:scale-[0.96] transition-transform duration-150"
              >
                <ChevronLeft
                  size={14}
                  strokeWidth={2.5}
                  className="text-primary flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-sans text-[9px] uppercase tracking-wider text-on-surface-variant/70 leading-none mb-px">
                    Previous
                  </p>
                  <p className="font-sans text-xs font-semibold text-on-surface truncate">
                    {prevPage.label}
                  </p>
                </div>
              </Link>
            )}

            {/* Next Page */}
            {nextPage && (
              <Link
                href={nextPage.href}
                className="flex-1 flex items-center justify-end gap-1.5 bg-primary/70 backdrop-blur-md rounded-full px-3.5 py-2 shadow-sm active:scale-[0.96] transition-transform duration-150"
              >
                <div className="min-w-0 text-right">
                  <p className="font-sans text-[9px] uppercase tracking-wider text-on-primary/60 leading-none mb-px">
                    Next
                  </p>
                  <p className="font-sans text-xs font-semibold text-on-primary truncate">
                    {nextPage.label}
                  </p>
                </div>
                <ChevronRight
                  size={14}
                  strokeWidth={2.5}
                  className="text-on-primary flex-shrink-0"
                />
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
