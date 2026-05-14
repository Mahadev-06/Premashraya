"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const galleryCategories = ["All", "Rooms & Facilities", "Daily Life"];

const galleryItems = [
  {
    title: "Morning Mists in the Courtyard",
    image: "/images/hero.png",
    category: "Rooms & Facilities",
    span: "col-span-1 md:col-span-2 row-span-2",
    height: "h-80 md:h-[500px]",
  },
  {
    title: "The Oak Suite",
    image: "/images/room-suite.png",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-60",
  },
  {
    title: "The Wellness Suite",
    image: "/images/wellness.png",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-60",
  },
  {
    title: "Arthur's Journey to Serenity",
    image: "/images/community.png",
    category: "Daily Life",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "The Forest Walkway",
    image: "/images/garden-walk.png",
    category: "Rooms & Facilities",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
  {
    title: "Healing Gardens",
    image: "/images/garden.png",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Art in the Atelier",
    image: "/images/art-therapy.png",
    category: "Daily Life",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Community Dining",
    image: "/images/dining.png",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Morning Yoga",
    image: "/images/yoga.png",
    category: "Daily Life",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface pt-28 pb-16 md:pt-40 md:pb-22">
        <div
          ref={headerRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4 sm:mb-6">
              Gallery
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-on-background leading-[1.15] md:leading-[1.1] mb-4 md:mb-6">
              A Glimpse of Life at Premashraya
            </h1>
            <p className="font-sans text-base md:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Explore our rooms, facilities, dining spaces, and peaceful environment created to support cancer patients and their families during treatment stays.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-surface pb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-dim"
                }`}
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-surface-container-low py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className={`${item.span} group cursor-pointer`}
                  onClick={() => setLightboxImage(item.image)}
                >
                  <div
                    className={`relative ${item.height} rounded-sanctuary-lg overflow-hidden shadow-sanctuary transition-sanctuary hover:shadow-sanctuary-lg`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-serif text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-white/70 uppercase tracking-wider mt-1">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-inverse-surface/90 backdrop-blur-[20px] flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-full aspect-[4/3] rounded-sanctuary-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Gallery image fullscreen view"
                fill
                className="object-contain"
              />
            </motion.div>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface/20 backdrop-blur-[12px] flex items-center justify-center text-white"
              aria-label="Close lightbox"
              id="close-lightbox"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
