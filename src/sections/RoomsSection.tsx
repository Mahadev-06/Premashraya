"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const rooms = [
  {
    title: "Comfortable Rooms",
    description:
      "Clean and well-maintained accommodation for cancer patients and one attendant.",
    image: "/images/room-suite.png",
    video: "/videos/Comfortable Rooms.mp4",
  },
  {
    title: "Peaceful Common Areas",
    description:
      "Quiet spaces for rest, evening bhajans, light yoga, and emotional well-being.",
    image: "/images/garden.png",
    video: "/videos/Common Space.mp4",
  },
  {
    title: "Nutritious Daily Meals",
    description:
      "Fresh, hygienic meals prepared daily to support patients and their families during their stay.",
    image: "/images/dining.png",
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
      className="group bg-surface-container-lowest rounded-sanctuary-lg overflow-hidden shadow-sanctuary transition-sanctuary hover:shadow-sanctuary-lg"
    >
      <div className="relative h-64 md:h-72 overflow-hidden bg-black">
        {room.video ? (
          <video
            src={room.video}
            poster={room.image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Image
            src={room.image}
            alt={room.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-serif text-xl font-semibold text-on-surface mb-3">
          {room.title}
        </h3>
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
          {room.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function RoomsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

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
            OUR FACILITIES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-5">
            Clean, Comfortable Spaces for Patients & Families
          </h2>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Premashraya is designed to provide a peaceful and hygienic environment where patients and attendants can rest with comfort and dignity during treatment.
          </p>
        </motion.div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.title} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
