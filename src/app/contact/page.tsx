"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";

const contactInfo = [
  {
    label: "Phone",
    value: "(555) 234-8900",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          fill="#556956"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "care@healingsanctuary.org",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          fill="#556956"
        />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Premashrya Charitable Trust, Kendriya Vihar, Near Dhananjay Residency, Gohiriya, Bhubaneswar – 751028, Odisha, India",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          fill="#556956"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwzgkvl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface pt-28 pb-20 md:pt-40 md:pb-30">
        <div
          ref={heroRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 sm:mb-6">
              CONTACT US
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-on-background leading-[1.15] md:leading-[1.1] mb-4 md:mb-6">
              We’re Here to Support Patients & Families
            </h1>
            <p className="font-sans text-base md:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              For stay inquiries, accommodation availability, or any questions related to Premashraya,
              please reach out to our team. We are here to help patients and attendants during their
              treatment journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-surface-container-low py-16 md:py-30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-surface-container-lowest rounded-sanctuary-lg p-6 sm:p-8 md:p-10 shadow-sanctuary"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-on-surface mb-2">
                Inquiry Form
              </h2>
              <p className="font-sans text-sm text-on-surface-variant mb-6">
                Please share your details and our team will get in touch with you.
              </p>

              <div className="bg-surface-container-high border-l-4 border-primary p-4 mb-8 rounded-r-sanctuary-sm">
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                  Eligibility / Note
                </h3>
                <p className="font-sans text-sm leading-relaxed tracking-wide text-on-surface-variant mb-2">
                  Premashraya provides free accommodation for cancer patients undergoing treatment and one attendant, subject to availability.
                </p>
                <p className="font-sans text-sm leading-relaxed tracking-wide text-on-surface-variant font-medium">
                  * Premashraya is not a hospital or medical treatment center.
                </p>
              </div>

              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-6">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                        fill="#3a6161"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-on-surface mb-2">
                    Message Sent
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant mb-6">
                    Thank you for reaching out. Our team will respond within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="font-sans text-sm text-primary font-medium hover:underline"
                    id="send-another-message"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full bg-surface-container-high rounded-sanctuary-sm px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full bg-surface-container-high rounded-sanctuary-sm px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-surface-container-high rounded-sanctuary-sm px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-surface-container-high rounded-sanctuary-sm px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-surface-container-high rounded-sanctuary-sm px-5 py-3.5 font-sans text-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 resize-none"
                      placeholder="Share your thoughts or questions with us..."
                    />
                  </div>

                  {formState === "error" && (
                    <p className="font-sans text-sm text-error">
                      Something went wrong. Please try again or contact us
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="btn-primary-gradient w-full px-8 py-4 rounded-full font-sans font-medium text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    id="submit-contact-form"
                  >
                    {formState === "loading"
                      ? "Sending..."
                      : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, y: 30 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-on-surface mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                        {info.label}
                      </p>
                      <p className="font-sans text-base text-on-surface">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="mt-10 relative h-64 rounded-sanctuary-lg overflow-hidden shadow-sanctuary bg-surface-container-highest">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=Premashraya+Charitable+Trust,+Kendriya+Vihar,+Near+Dhananjay+Residency,+Gohiriya,+Bhubaneswar+,+Odisha+751028&output=embed"
                ></iframe>
              </div>

              <p className="font-sans text-xs text-on-surface-variant mt-4">
                Directions from the foothills
              </p>
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
}
