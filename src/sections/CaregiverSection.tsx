"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const carePoints = [
  "Shelter procedure and documentation assistance.",
  "Department guidance and timely access to treatment.",
  "Connecting patients with our support shelter.",
];

export default function CaregiverSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isVideoInView = useInView(videoRef, { margin: "-50px" });
  const { t } = useLanguage();

  useEffect(() => {
    if (videoRef.current) {
      if (!isVideoInView) {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  return (
    <section className="bg-surface-container-low py-16 md:py-30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="relative h-[320px] sm:h-[400px] md:h-[600px] rounded-sanctuary-lg overflow-hidden shadow-sanctuary-lg bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src="/videos/Debendra 3.mp4"
                preload="auto"
                controls
                controlsList="nodownload"
                disablePictureInPicture
                loop
                playsInline
                className="w-full h-full object-cover relative z-0"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-surface-container-lowest/90 backdrop-blur-[20px] rounded-sanctuary-md p-6 shadow-sanctuary-lg"
            >
              <p className="font-serif text-3xl font-bold text-primary mb-1">
                {t("caregiver.statNum")}
              </p>
              <p className="font-sans text-xs text-on-surface-variant uppercase tracking-wider">
                {t("caregiver.statLabel")}
              </p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              {t("caregiver.label")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-6 leading-tight">
              {t("caregiver.title")}
            </h2>
            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed mb-10">
              {t("caregiver.description")}
            </p>

            {/* Care Points */}
            <ul className="space-y-5">
              {[0, 1, 2].map((index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                        fill="#3a6161"
                      />
                    </svg>
                  </div>
                  <p className="font-sans text-base text-on-surface leading-relaxed">
                    {t(`caregiver.points.${index}`)}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
