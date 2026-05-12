"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const activities = [
  {
    title: "Yoga & Meditation",
    description:
      "Guided morning sessions to calm the mind and strengthen the spirit in our glass-walled studio.",
    image: "/images/yoga.png",
    icon: "🧘",
  },
  {
    title: "Art Therapy",
    description:
      "Expression through color and form in our bright community atelier.",
    image: "/images/art-therapy.png",
    icon: "🎨",
  },
  {
    title: "Garden Walks",
    description: "Gentle strolls through our therapeutic botanical paths.",
    image: "/images/garden-walk.png",
    icon: "🌿",
  },
  {
    title: "Outdoor Connection",
    description: "Find solitude or community in nature's quiet corners.",
    image: "/images/nature.png",
    icon: "🌳",
  },
  {
    title: "Community Circles",
    description:
      "Evening gatherings for storytelling, music, and shared experiences.",
    image: "/images/community.png",
    icon: "🤝",
  },
];

function ActivityCard({
  activity,
  index,
}: {
  activity: (typeof activities)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group relative bg-surface-container-lowest rounded-sanctuary-lg overflow-hidden shadow-sanctuary transition-sanctuary hover:shadow-sanctuary-md"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Glass overlay with icon */}
        <div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-[12px] px-4 py-2 rounded-full flex items-center gap-2">
          <span className="text-lg">{activity.icon}</span>
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface">
            {activity.title}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
          {activity.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ActivitiesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-surface py-22 md:py-30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
            Daily Life
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-5">
            The Rhythm of Daily Care
          </h2>
        </motion.div>

        {/* Activities Grid - asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.title}
              activity={activity}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
