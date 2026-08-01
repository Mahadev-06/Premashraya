"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-end bg-surface bg-motif-pattern overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-container-low/60 to-primary-container/20 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-container/30 rounded-full blur-3xl pointer-events-none" />

      {/* Content positioned bottom-left */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 pt-28 pb-16 md:pb-24">
        <div className="max-w-3xl text-left">
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
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-on-background leading-[1.15] md:leading-[1.1] mb-8"
          >
            {t("hero.title")}
            <span className="text-primary">{t("hero.titleHighlight")}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="btn-primary-gradient inline-flex items-center justify-center px-8 py-4 rounded-full font-sans font-semibold text-base shadow-sanctuary transition-transform active:scale-95"
              id="hero-learn-more"
            >
              {t("hero.cta")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-6 right-6 sm:right-10 z-10 hidden sm:block"
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

