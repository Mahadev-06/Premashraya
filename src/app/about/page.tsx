"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Dr. Elena Thorne",
    role: "Medical Director",
    bio: "Pioneering palliative care with a focus on holistic resident autonomy.",
    image: "/images/dr-elena.png",
  },
  {
    name: "Sarah Jenkins",
    role: "Lead Caregiver",
    bio: "Dedicated to the daily rhythms that make life beautiful and dignified.",
    image: "/images/sarah.png",
  },
  {
    name: "Marcus Vane",
    role: "Wellness Specialist",
    bio: "Specializing in therapeutic movement and mindfulness practices.",
    image: "/images/marcus.png",
  },
  {
    name: "Amara Okafor",
    role: "Resident Advocate",
    bio: "Ensuring every resident's voice is heard and their wishes honored.",
    image: "/images/dr-elena.png",
  },
];

const facilities = [
  {
    title: "The Wellness Suite",
    description:
      "A space dedicated to hydrotherapy, soft aromatics, and gentle movement.",
    image: "/images/wellness.png",
  },
  {
    title: "Healing Gardens",
    description:
      "Accessible trails and private alcoves within three acres of restored botanical grounds.",
    image: "/images/garden.png",
  },
  {
    title: "Communal Hearth",
    description:
      "Where family meals are shared in a professional kitchen that smells of home-baked bread.",
    image: "/images/hearth.png",
  },
];

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface pt-34 pb-22 md:pt-40 md:pb-30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 to-transparent" />
        <div
          ref={heroRef}
          className="relative max-w-[1280px] mx-auto px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">
              About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-on-background leading-[1.1] mb-6">
              Our journey of dignity and care.
            </h1>
            <p className="font-sans text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              At Premashraya, we believe every moment is an
              opportunity for connection, comfort, and profound respect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-surface-container-low py-22 md:py-30">
        <div
          ref={missionRef}
          className="max-w-[1280px] mx-auto px-6 md:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-on-background mb-6 leading-tight">
                To nurture the spirit through compassionate care.
              </h2>
              <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
                We provide a refuge that honors the individual, offering medical
                excellence wrapped in the warmth of a home. Our focus is not
                just on the clinical, but on the emotional and spiritual
                well-being of every resident.
              </p>

              <div className="space-y-6">
                <div className="bg-surface-container-lowest rounded-sanctuary-md p-6 shadow-sanctuary">
                  <h3 className="font-serif text-lg font-semibold text-on-surface mb-2">
                    A world where end-of-life care is synonymous with peace.
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant">
                    Redefining the standard of palliative environments into true
                    sanctuaries of life.
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-sanctuary-md p-6 shadow-sanctuary">
                  <h3 className="font-serif text-lg font-semibold text-on-surface mb-2">
                    Home-Like Philosophy
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant">
                    We strip away the clinical rigidity, replacing it with the
                    gentle embrace of familiar textures, natural light, and the
                    freedom to feel at home.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] md:h-[600px] rounded-sanctuary-lg overflow-hidden shadow-sanctuary-lg">
                <Image
                  src="/images/hero.png"
                  alt="Premashraya exterior"
                  fill
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
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
            Virtual Tour
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-on-background mb-4">
            Experience the Sanctuary
          </h2>
          <p className="font-sans text-base text-on-surface-variant mb-10">
            A 2-minute journey through our care philosophy
          </p>

          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto rounded-sanctuary-lg overflow-hidden shadow-sanctuary-lg aspect-video bg-surface-container-highest">
            <Image
              src="/images/hero.png"
              alt="Video thumbnail - tour of Premashraya"
              fill
              className="object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-20 h-20 rounded-full bg-surface/90 backdrop-blur-[12px] flex items-center justify-center shadow-sanctuary-lg hover:scale-110 transition-transform duration-300"
                aria-label="Play video tour"
                id="play-video-tour"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8 5v14l11-7L8 5z" fill="#556956" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-surface-container-low py-22 md:py-30">
        <div
          ref={facilitiesRef}
          className="max-w-[1280px] mx-auto px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Our Spaces
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-on-background mb-5">
              Designed for Emotional Safeguarding
            </h2>
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Every corner of the sanctuary is designed to lower cortisol and
              invite quiet reflection.
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
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
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
        <div ref={teamRef} className="max-w-[1280px] mx-auto px-6 md:px-10">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-on-surface mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
