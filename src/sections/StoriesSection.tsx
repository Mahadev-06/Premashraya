"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "The moment we walked through the doors, the anxiety lifted. This isn't just a care facility; it's a home that breathes with life and love.",
    name: "Eleanor Richards",
    role: "Resident Family Member",
  },
  {
    quote:
      "The focus on wellness and art helped my father find joy again. We are forever grateful for the dignity he was afforded every single day.",
    name: "Mark Thompson",
    role: "Resident Family Member",
  },
];

export default function StoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-surface py-16 md:py-30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background">
            Words from Families We’ve Supported
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="bg-surface-container-lowest rounded-sanctuary-lg p-6 sm:p-8 md:p-10 shadow-sanctuary relative"
            >
              {/* Quote mark */}
              <div className="text-primary-container text-6xl font-serif leading-none mb-4 select-none">
                &ldquo;
              </div>

              <blockquote className="font-serif text-lg md:text-xl text-on-surface leading-relaxed mb-8 italic">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-on-primary-container">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-on-surface">
                    {t.name}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
