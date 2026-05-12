"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-surface overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Premashraya - serene care home surrounded by botanical gardens"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-surface/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 py-34 md:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 bg-primary-container/40 px-4 py-2 rounded-full">
              Welcome to The Sanctuary
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-on-background leading-[1.1] mb-6"
          >
            A Place of Care,{" "}
            <span className="text-primary">Comfort</span> & Hope
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="font-sans text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl"
          >
            A supportive residential sanctuary focused on dignity, emotional
            support, and peaceful healing. Experience care that feels like home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >

            <Link
              href="/about"
              className="bg-surface-container-lowest/80 text-on-surface px-8 py-4 rounded-full font-sans font-medium text-base text-center shadow-sanctuary hover:bg-surface-container-highest transition-all duration-300"
              id="hero-learn-more"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
