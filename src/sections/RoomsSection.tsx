"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const rooms = [
  {
    id: "room1",
    image: "/images/Gallery1.jpg",
    video: "/videos/Comfortable Rooms.mp4",
  },
  {
    id: "room2",
    image: "/images/Gallery4.jpg",
    video: "/videos/Common Space.mp4",
  },
  {
    id: "room3",
    image: "/images/Gallery7.jpg",
    video: "/videos/Daily Meals.mp4",
  },
];

function RoomCard({
  room,
  index,
}: {
  room: (typeof rooms)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { margin: "-50px" });
  const { t } = useLanguage();

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group bg-surface-container-lowest rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-sanctuary transition-sanctuary hover:shadow-sanctuary-lg"
    >
      <div className="relative h-64 md:h-72 overflow-hidden bg-black">
        {room.video ? (
          <video
            ref={videoRef}
            src={room.video}
            poster={room.image}
            preload="auto"
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Image
            src={room.image}
            alt={t(`rooms.items.${room.id}.title`)}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-serif text-xl font-semibold text-on-surface mb-3">
          {t(`rooms.items.${room.id}.title`)}
        </h3>
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
          {t(`rooms.items.${room.id}.desc`)}
        </p>
      </div>
    </motion.div>
  );
}

export default function RoomsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="bg-surface-container-low py-16 md:py-30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
            {t("rooms.label")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-5">
            {t("rooms.title")}
          </h2>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("rooms.description")}
          </p>
        </motion.div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
