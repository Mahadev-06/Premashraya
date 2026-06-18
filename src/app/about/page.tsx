"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const TeamVideo = ({ src, alt }: { src: string; alt: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { margin: "-50px" });

  useEffect(() => {
    if (videoRef.current) {
      if (!isVideoInView) {
        // Only auto-pause when scrolled out of view.
        // We do NOT auto-play because there are multiple videos side-by-side.
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  return (
    <video
      ref={videoRef}
      src={src}
      preload="auto"
      controls
      controlsList="nodownload"
      disablePictureInPicture
      loop
      playsInline
      className="w-full h-full object-cover relative z-0"
    />
  );
};


const FacilityVideo = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { margin: "-50px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      preload="auto"
      loop
      muted
      controlsList="nodownload"
      disablePictureInPicture
      playsInline
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
};


export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const facilitiesRef = useRef(null);
  const facilitiesInView = useInView(facilitiesRef, {
    once: true,
    margin: "-100px",
  });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const tourVideoRef = useRef<HTMLVideoElement>(null);
  const isTourVideoInView = useInView(tourVideoRef, { margin: "-50px" });

  useEffect(() => {
    if (tourVideoRef.current) {
      if (!isTourVideoInView) {
        tourVideoRef.current.pause();
      }
    }
  }, [isTourVideoInView]);

  const teamMembers = [
    {
      name: "Binod Agarwal",
      image: "/images/dr-elena.png",
      video: "/videos/Vinod Agarwal.mp4",
    },
    {
      name: "Binod Agarwal and Satyanarayan Agarwal",
      image: "/images/_DSC9186.JPG",
    },
    {
      name: "Satyanarayan Agarwal",
      image: "/images/marcus.png",
      video: "/videos/Satyakant Agarwal.mp4",
    },
  ];

  const facilities = [
    {
      title: t("about.fac1Title"),
      description: t("about.fac1Desc"),
      image: "/images/hygiene.jpg",
      video: "/videos/Hygienic.mp4",
    },
    {
      title: t("about.fac2Title"),
      description: t("about.fac2Desc"),
      image: "/images/community.jpg",
      video: "/videos/download.mp4",
    },
    {
      title: t("about.fac3Title"),
      description: t("about.fac3Desc"),
      image: "/images/meals.jpg",
      video: "/videos/Daily Meals.mp4",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden bg-black"
      >
        <Image
          src="/images/hero.jpg"
          alt="Comfort Care Sanctuary"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            {t("about.label")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight"
          >
            {t("about.title")}
          </motion.h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-surface py-22 md:py-30">
        <div
          ref={missionRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
                {t("about.missionLabel")}
              </span >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-6 leading-tight">
                {t("about.missionTitle")}
              </h2>
              <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-6">
                {t("about.missionDesc")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] sm:h-[400px] rounded-sanctuary-lg overflow-hidden shadow-sanctuary-lg bg-surface-container-highest"
            >
              <Image
                src="/images/Gallery12.jpg"
                alt="Care facility"
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="bg-surface py-22 md:py-30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 text-center">
          <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
            {t("about.tourLabel")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-on-background mb-4">
            {t("about.tourTitle")}
          </h2>
          <p className="font-sans text-base text-on-surface-variant mb-10">
            {t("about.tourDesc")}
          </p>

          {/* Video Auto-play */}
          <div className="relative max-w-4xl mx-auto rounded-sanctuary-lg overflow-hidden shadow-sanctuary-lg aspect-video bg-surface-container-highest">
            <video
              ref={tourVideoRef}
              src="/videos/Premashraya 2.mp4"
              poster="/images/hero.jpg"
              preload="auto"
              loop
              controls
              controlsList="nodownload"
              disablePictureInPicture
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-surface-container-low py-22 md:py-30">
        <div
          ref={facilitiesRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
              {t("about.facilitiesLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-on-background">
              {t("about.facilitiesTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="group bg-surface-container-lowest rounded-sanctuary-lg overflow-hidden shadow-sanctuary transition-sanctuary hover:shadow-sanctuary-lg"
              >
                <div className="relative h-56 overflow-hidden bg-black">
                  {facility.video ? (
                    <FacilityVideo
                      src={facility.video}
                      poster={facility.image}
                    />
                  ) : (
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl font-semibold text-on-surface mb-3">
                    {facility.title}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-surface py-22 md:py-30">
        <div ref={teamRef} className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-5">
              The Hearts Behind the Care
            </h2>
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Our multidisciplinary team combines clinical excellence with deep
              personal empathy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="bg-surface-container-lowest rounded-sanctuary-lg overflow-hidden shadow-sanctuary text-center"
              >
                <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
                  {member.video ? (
                    <TeamVideo src={member.video} alt={member.name} />
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-on-surface">
                    {member.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
