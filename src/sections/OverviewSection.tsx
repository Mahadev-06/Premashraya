"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, HeartHandshake } from "lucide-react";

export default function OverviewSection() {
  const { t, language } = useLanguage();

  return (
    <section className="bg-surface py-10 md:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="bg-surface-container-low rounded-sanctuary-xl p-6 sm:p-10 md:p-14 shadow-sanctuary border border-outline-variant/25 relative overflow-hidden"
        >
          {/* Top subtle accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-primary to-secondary" />

          {/* Subtitle Badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-sans text-xs font-bold uppercase tracking-[0.18em] mb-6">
            <HeartHandshake className="w-4 h-4 text-secondary" />
            {t("overview.label")}
          </span>

          {/* Description Text */}
          {language === "en" ? (
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-on-surface leading-relaxed font-normal mb-8 max-w-4xl mx-auto">
              Premashraya is a registered charitable trust providing{" "}
              <span className="font-semibold text-primary underline decoration-primary/30 underline-offset-4">
                FREE
              </span>{" "}
              hygienic accommodation, nutritious meals, counselling, and
              compassionate support for cancer patients and one attendant during
              treatment in Bhubaneswar and Cuttack.
            </h2>
          ) : (
            <h2 className="font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl text-on-surface leading-relaxed font-medium mb-8 max-w-4xl mx-auto">
              {t("overview.text")}
            </h2>
          )}

          {/* Notice Pill - "We are a shelter, not a hospital" */}
          <div className="inline-flex items-center gap-2.5 bg-primary-container/40 border border-primary/20 px-5 py-2.5 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="font-sans font-semibold text-xs sm:text-sm md:text-base text-on-primary-container tracking-wide">
              {t("overview.notice")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
