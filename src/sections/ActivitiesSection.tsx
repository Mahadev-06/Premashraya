"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Utensils, Sparkles, Users, HeartHandshake } from "lucide-react";

const activities = [
  {
    title: "BHAJANS & LIGHT YOGA",
    description:
      "Gentle evening activities that encourage calmness, relaxation, and emotional well-being.",
    image: "/images/yoga.png",
    icon: <Flower2 className="w-[18px] h-[18px]" />,
  },
  {
    title: "DAILY MEALS",
    description:
      "Fresh and hygienic meals prepared daily for patients and attendants staying at Premashraya.",
    image: "/images/dining.png",
    icon: <Utensils className="w-[18px] h-[18px]" />,
  },
  {
    title: "HYGIENIC ENVIRONMENT",
    description: "Rooms, washrooms, and common areas are sanitized regularly to maintain cleanliness and comfort.",
    image: "/images/room-suite.png",
    icon: <Sparkles className="w-[18px] h-[18px]" />,
  },
  {
    title: "COMMON SPACES",
    description: "Shared spaces for rest, conversation, television, and quiet moments with family members.",
    image: "/images/community.png",
    icon: <Users className="w-[18px] h-[18px]" />,
  },
  {
    title: "SAFE & SUPPORTIVE STAY",
    description:
      "A respectful environment where families can focus on treatment without worrying about accommodation.",
    image: "/images/garden-walk.png",
    icon: <HeartHandshake className="w-[18px] h-[18px]" />,
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
          <span className="text-secondary flex items-center justify-center">{activity.icon}</span>
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
    <section className="bg-surface py-16 md:py-30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
            DAILY LIFE AT PREMASHRAYA
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-5">
            Simple comforts that make difficult journeys easier
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
