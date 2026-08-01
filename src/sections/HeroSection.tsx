"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Utensils, Bed, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import FloatingGraphics from "@/components/FloatingGraphics";

/* ── Slideshow image data ─────────────────────────── */
const slides = [
  { src: "/images/Gallery1.webp", alt: "Clean and comfortable patient rooms at Premashraya" },
  { src: "/images/Gallery5.webp", alt: "Nutritious meals served daily at Premashraya" },
  { src: "/images/Gallery3.webp", alt: "Welcoming common areas at Premashraya shelter" },
  { src: "/images/Gallery8.webp", alt: "Hygienic facilities at Premashraya" },
  { src: "/images/Gallery10.webp", alt: "Community activities at Premashraya" },
  { src: "/images/Gallery12.webp", alt: "Peaceful healing environment at Premashraya" },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function HeroSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  /* Auto-advance timer with progress bar */
  useEffect(() => {
    if (isPaused) return;
    const interval = 50; // update progress every 50ms
    const timer = setInterval(() => {
      setProgress((p) => {
        const nextP = p + (interval / SLIDE_DURATION) * 100;
        if (nextP >= 100) {
          next();
          return 0;
        }
        return nextP;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="relative min-h-[90vh] md:min-h-[92vh] flex items-center bg-surface overflow-hidden">
      {/* ── Background ambient blobs ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-container-low/60 to-primary-container/20 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary-container/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-container/30 rounded-full blur-3xl pointer-events-none" />
      <FloatingGraphics theme="hero" />

      {/* ── Main split layout ── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 pt-28 pb-12 md:pt-32 md:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ═══════ LEFT — Text & CTA ═══════ */}
          <div className="w-full lg:w-[48%] text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="inline-block font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5 bg-primary-container/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full leading-tight border border-primary/10">
                {t("hero.subtitle")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-on-background leading-[1.15] md:leading-[1.1] mb-8"
            >
              <span className="block text-on-background">{t("hero.brandName")}</span>
              <span className="block text-primary my-1">{t("hero.title")}</span>
              <span className="block text-on-background">{t("hero.titleHighlight")}</span>
            </motion.h1>

            {/* ── Quick highlight pills ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {[
                { icon: <Bed className="w-3.5 h-3.5" />, text: "Free Shelter" },
                { icon: <Utensils className="w-3.5 h-3.5" />, text: "Free Meals" },
                { icon: <Heart className="w-3.5 h-3.5" />, text: "Free Care" },
              ].map((pill) => (
                <span
                  key={pill.text}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-on-primary-container bg-primary-container/60 px-3 py-1.5 rounded-full border border-primary/8"
                >
                  {pill.icon}
                  {pill.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary-gradient inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-base shadow-sanctuary transition-transform active:scale-95"
                id="hero-learn-more"
              >
                {t("hero.cta")}
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-primary/30 text-primary hover:bg-primary-container/40 transition-all active:scale-95"
                id="hero-donate"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Link>
            </motion.div>
          </div>

          {/* ═══════ RIGHT — Image Slideshow ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="w-full lg:w-[52%]"
          >
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group aspect-[4/3] bg-surface-container"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* ── Slides ── */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 52vw"
                    priority={current === 0}
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>




              {/* ── Navigation arrows ── */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full backdrop-blur-md bg-white/70 flex items-center justify-center text-on-background hover:bg-white/90 transition-all shadow-md active:scale-90"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full backdrop-blur-md bg-white/70 flex items-center justify-center text-on-background hover:bg-white/90 transition-all shadow-md active:scale-90"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* ── Pause/Play button ── */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="absolute top-4 left-4 md:top-6 md:left-6 z-20 w-8 h-8 rounded-full backdrop-blur-md bg-white/70 flex items-center justify-center text-on-background hover:bg-white/90 transition-all shadow-md opacity-0 group-hover:opacity-100 active:scale-90"
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>

              {/* ── Slide dots ── */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-6 pb-4">

                {/* Slide dots */}
                <div className="flex justify-center gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrent(i);
                        setProgress(0);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Slideshow caption below image ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center font-sans text-xs text-on-surface-variant mt-3 opacity-70"
            >
              A glimpse of life at Premashraya — shelter, meals, and care for cancer patients
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full ghost-border flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
