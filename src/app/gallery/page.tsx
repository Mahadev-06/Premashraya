"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const TestimonialVideo = ({ num }: { num: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { margin: "-50px" });

  useEffect(() => {
    if (videoRef.current) {
      if (!isVideoInView) {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  return (
    <video
      ref={videoRef}
      src={`/videos/testimonial ${num}.mp4`}
      controls
      preload="auto"
      controlsList="nodownload"
      disablePictureInPicture
      playsInline
      className="w-full h-full object-cover relative z-0"
    />
  );
};

const galleryCategories = ["All", "Rooms & Facilities", "Daily Life"];

const galleryItems = [
  {
    title: "Premashraya Gallery 1",
    image: "/images/hero.jpg",
    category: "Rooms & Facilities",
    span: "col-span-1 md:col-span-2 row-span-2",
    height: "h-80 md:h-[500px]",
  },
  {
    title: "Premashraya Gallery 2",
    image: "/images/pathway.jpeg",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-60",
  },
  {
    title: "Premashraya Gallery 3",
    image: "/images/gallery13.jpg.jpeg",
    category: "Daily Life",
    span: "col-span-1",
    height: "h-60 md:h-60",
  },
  {
    title: "Premashraya Gallery 4",
    image: "/images/Gallery1.jpg",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 5",
    image: "/images/Gallery3.jpg",
    category: "Daily Life",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 6",
    image: "/images/Gallery2.jpg",
    category: "Rooms & Facilities",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 7",
    image: "/images/Gallery4.jpg",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 8",
    image: "/images/Gallery5.jpg",
    category: "Daily Life",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 9",
    image: "/images/Gallery6.jpg",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 10",
    image: "/images/Gallery7.jpg",
    category: "Daily Life",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 11",
    image: "/images/Gallery8.jpg",
    category: "Rooms & Facilities",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 12",
    image: "/images/Gallery9.jpg",
    category: "Daily Life",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 13",
    image: "/images/Gallery10.jpg",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 14",
    image: "/images/Gallery11.jpg",
    category: "Daily Life",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 15",
    image: "/images/Gallery12.jpg",
    category: "Rooms & Facilities",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 16",
    image: "/images/gallery14.jpg.jpeg",
    category: "Daily Life",
    span: "col-span-1 md:col-span-2",
    height: "h-60 md:h-72",
  },
  {
    title: "Premashraya Gallery 17",
    image: "/images/gallery15.jpg.jpeg",
    category: "Rooms & Facilities",
    span: "col-span-1",
    height: "h-60 md:h-72",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const { t } = useLanguage();

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
              {t("gallery.label")}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-on-background leading-[1.15] md:leading-[1.1] mb-4 md:mb-6">
              {t("gallery.title")}
            </h1>
            <p className="font-sans text-base md:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              {t("gallery.description")}
            </p>
          </motion.div>
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

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-surface py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background">
              Hear From Our Guests
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <motion.div
                key={`testimonial-${num}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-2 sm:p-3 relative rounded-[2rem] shadow-sanctuary bg-white/60 backdrop-blur-sm aspect-[4/5] sm:aspect-video"
              >
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-inner bg-black/5">
                  <TestimonialVideo num={num} />
                </div>
              </motion.div>
            ))}
          </div>
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
