"use client";

import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="bg-surface-container-low py-12 md:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="bg-surface-container-lowest rounded-sanctuary-xl p-6 sm:p-8 md:p-14 shadow-sanctuary-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container via-primary to-primary-container opacity-50" />
          
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">
            A MESSAGE FROM THE FOUNDER
          </span>
          
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-on-surface leading-tight mb-6 sm:mb-8">
            “No family should struggle for dignity, rest, and care while fighting cancer.”
          </h3>
          
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Premashraya was created to provide patients and their loved ones with a safe, clean, and compassionate place to stay during treatment journeys.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-[1px] bg-outline-variant mb-6" />
            <p className="font-sans text-lg font-semibold text-on-surface-variant">
              Mr. Binod Agarwal
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
