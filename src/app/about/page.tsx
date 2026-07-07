"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const TeamVideo = ({ src, alt }: { src: string; alt: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { margin: "-50px" });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
    <>
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-surface-container-lowest">
          <div className="w-10 h-10 border-4 border-surface-container-highest border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        controls
        controlsList="nodownload"
        disablePictureInPicture
        loop
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
        className={`w-full h-full object-cover relative z-0 transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
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
  const tourVideoRef = useRef<HTMLVideoElement>(null);

  const { t } = useLanguage();
  const [videoLang, setVideoLang] = useState<"en" | "or" | "hi">("or");

  const videoSrc =
    videoLang === "or"
      ? "/videos/Premashraya odia.mp4"
      : videoLang === "hi"
      ? "/videos/Premashraya hindi.mp4"
      : "/videos/Premashraya 2.mp4";

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
    <>
      {/* Hero Section */}
      <section className="relative bg-surface pt-28 pb-20 md:pt-40 md:pb-30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 to-transparent" />
        <div
          ref={heroRef}
          className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 sm:mb-6">
              {t("about.label")}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-on-background leading-[1.15] md:leading-[1.1] mb-4 md:mb-6">
              {t("about.title")}
            </h1>
            <p className="font-sans text-base md:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              {t("about.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-surface-container-low py-22 md:py-30">
        <div
          ref={missionRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                {t("about.missionLabel")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-on-background mb-6 leading-tight">
                {t("about.missionTitle")}
              </h2>
              <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
                {t("about.missionDesc")}
              </p>

              <div className="space-y-6">
                <div className="bg-surface-container-lowest rounded-sanctuary-md p-6 shadow-sanctuary">
                  <h3 className="font-serif text-lg font-semibold text-on-surface mb-2">
                    {t("about.safeTitle")}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant">
                    {t("about.safeDesc")}
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-sanctuary-md p-6 shadow-sanctuary">
                  <h3 className="font-serif text-lg font-semibold text-on-surface mb-2">
                    {t("about.careTitle")}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant">
                    {t("about.careDesc")}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[320px] sm:h-[400px] md:h-[600px] rounded-sanctuary-lg overflow-hidden shadow-sanctuary-lg">
                <Image
                  src="/images/mission.jpg"
                  alt="Premashraya signboard - A Home for Cancer Patients"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
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
          <div className="relative max-w-4xl mx-auto p-2 sm:p-3 rounded-[2rem] shadow-sanctuary bg-white/60 backdrop-blur-sm group">
            <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden shadow-inner bg-black/5">
              {/* Language Switcher Overlay — pointer-events-none on wrapper so video surface clicks pass through */}
              <div 
                className="absolute z-20 bg-black/60 backdrop-blur-md p-1 rounded-full flex gap-1 border border-white/10 shadow-lg pointer-events-none"
                style={{ top: '20px', right: '20px', left: 'auto' }}
              >
                <button
                  onClick={() => setVideoLang("en")}
                  className={`pointer-events-auto px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-200 ${
                    videoLang === "en"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setVideoLang("hi")}
                  className={`pointer-events-auto px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-200 ${
                    videoLang === "hi"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  हिन्दी
                </button>
                <button
                  onClick={() => setVideoLang("or")}
                  className={`pointer-events-auto px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-200 ${
                    videoLang === "or"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  ଓଡ଼ିଆ
                </button>
              </div>

              <video
                key={videoSrc}
                ref={tourVideoRef}
                src={videoSrc}
                poster="/images/hero.jpg"
                preload="auto"
                loop
                controls
                playsInline
                className="relative z-10 w-full h-full object-contain bg-black"
              />
            </div>
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
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              {t("about.facilitiesLabel")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-5">
              {t("about.facilitiesTitle")}
            </h2>
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
              {t("about.facilitiesDesc")}
            </p>
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
                    <video
                      src={facility.video}
                      poster={facility.image}
                      preload="auto"
                      autoPlay
                      loop
                      muted
                      controlsList="nodownload"
                      disablePictureInPicture
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  {member.video && teamInView ? (
                    <TeamVideo src={member.video} alt={member.name} />
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

    </>
  );
}
