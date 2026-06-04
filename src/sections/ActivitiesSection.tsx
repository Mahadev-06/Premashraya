"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Utensils, Sparkles, Users, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const activities = [
  {
    id: "act1",
    image: "/images/Gallery12.jpg",
    icon: <Flower2 className="w-[18px] h-[18px]" />,
  },
  {
    id: "act2",
    image: "/images/Gallery9.jpg",
    icon: <Utensils className="w-[18px] h-[18px]" />,
  },
  {
    id: "act3",
    image: "/images/Gallery10.jpg",
    icon: <Sparkles className="w-[18px] h-[18px]" />,
  },
  {
    id: "act4",
    image: "/images/Gallery11.jpg",
    icon: <Users className="w-[18px] h-[18px]" />,
  },
  {
    id: "act5",
    image: "/images/Gallery8.jpg",
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
  const { t } = useLanguage();

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
      className="group relative bg-surface-container-lowest rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-sanctuary transition-sanctuary hover:shadow-sanctuary-md"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={activity.image}
          alt={t(`activities.items.${activity.id}.title`)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Glass overlay with icon */}
        <div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-[12px] px-4 py-2 rounded-full flex items-center gap-2">
          <span className="text-secondary flex items-center justify-center">{activity.icon}</span>
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface">
            {t(`activities.items.${activity.id}.title`)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
          {t(`activities.items.${activity.id}.desc`)}
        </p>
      </div>
    </motion.div>
  );
}

export default function ActivitiesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="bg-surface bg-motif-pattern py-16 md:py-30">
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
            {t("activities.label")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-5">
            {t("activities.title")}
          </h2>
        </motion.div>

        {/* Activities Grid - asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
