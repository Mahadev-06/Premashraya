"use client";

import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="bg-surface-container-lowest rounded-sanctuary-xl p-10 md:p-14 shadow-sanctuary-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container via-primary to-primary-container opacity-50" />
          
          <span className="block font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">
            Founder&apos;s Thought
          </span>
          
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-on-surface leading-tight mb-8">
            “We rise by lifting others.”
          </h3>
          
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
