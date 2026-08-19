"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Heart,
  ShieldCheck,
  Copy,
  Check,
  QrCode,
  Lock,
  Soup,
  Bed,
  HeartHandshake,
  Landmark,
  CreditCard,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function DonatePage() {
  const { language, t } = useLanguage();

  /* ── State ── */
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [activeMethod, setActiveMethod] = useState<"upi" | "bank">("upi");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  /* ── Refs / InView ── */
  const heroRef   = useRef(null);
  const impactRef = useRef(null);
  const formRef   = useRef(null);
  const trustRef  = useRef(null);

  const heroInView   = useInView(heroRef,   { once: true });
  const impactInView = useInView(impactRef, { once: true, margin: "-60px" });
  const formInView   = useInView(formRef,   { once: true, margin: "-60px" });
  const trustInView  = useInView(trustRef,  { once: true, margin: "-60px" });

  /* ── Helpers ── */
  const upiId = "mab.037136000240031@axisbank";

  const copyField = (val: string, id: string) => {
    navigator.clipboard.writeText(val);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSelectTier = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    const element = document.getElementById("donate-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const displayAmount =
    selectedAmount === "custom" ? Number(customAmount || 0) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  /* ── Data ── */
  const amountOptions = [500, 1000, 2500, 5000];

  const impactItems = [
    { amount: 500,  icon: <Soup            className="w-6 h-6" />, color: "text-orange-500", bg: "bg-orange-50",  num: "₹500",   label: language === "en" ? "Feeds a patient & attendant for a day" : "ରୋଗୀ ଓ ସମ୍ପର୍କୀୟଙ୍କ ଦିନକର ଭୋଜନ" },
    { amount: 1000, icon: <Bed             className="w-6 h-6" />, color: "text-sky-500",    bg: "bg-sky-50",     num: "₹1,000", label: language === "en" ? "Covers 2 days of shelter & meals"        : "୨ ଦିନର ସ୍ୱଚ୍ଛ ରହଣି ଓ ଭୋଜନ" },
    { amount: 2500, icon: <HeartHandshake  className="w-6 h-6" />, color: "text-violet-500", bg: "bg-violet-50",  num: "₹2,500", label: language === "en" ? "Supports 5 days of accommodation & care" : "୫ ଦିନର ଆଶ୍ରୟ, ଭୋଜନ ଓ ସହାୟତା" },
    { amount: 5000, icon: <Heart           className="w-6 h-6" />, color: "text-rose-500",   bg: "bg-rose-50",    num: "₹5,000", label: language === "en" ? "Sponsors 1 full week of complete stay"   : "ସମ୍ପୂର୍ଣ ଏକ ସପ୍ତାହର ମାଗଣା ସେବା" },
  ];

  const bankFields = [
    { id: "accName", label: language === "en" ? "Account Name"   : "ଖାତା ନାମ",   value: "Premashraya Charitable Trust", copy: false },
    { id: "bank",    label: language === "en" ? "Bank"           : "ବ୍ୟାଙ୍କ",    value: "Axis Bank Ltd",               copy: false },
    { id: "accNo",   label: language === "en" ? "Account Number" : "ଖାତା ନମ୍ବର", value: "922020055038264",             copy: true  },
    { id: "ifsc",    label: language === "en" ? "IFSC Code"      : "IFSC କୋଡ",   value: "UTIB0000024",                copy: true  },
  ];

  const donateHeroImageJSX = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={heroInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.75, delay: 0.2 }}
      className="relative w-full"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-surface-container-high">
        <Image
          src="/images/meals.webp"
          alt="Nutritious meals provided free for patients"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="font-serif text-lg md:text-xl font-semibold mb-1">
            {language === "en" ? "100% Free Food & Shelter" : "୧୦୦% ମାଗଣା ଖାଦ୍ୟ ଓ ରହିବା ସୁବିଧା"}
          </p>
          <p className="font-sans text-xs md:text-sm text-white/80">
            {language === "en"
              ? "Serving cancer patients & attendants with love and dignity every day."
              : "ପ୍ରତିଦିନ ସ୍ନେହ ଏବଂ ସମ୍ମାନ ସହିତ କର୍କଟ ରୋଗୀ ଓ ସମ୍ପର୍କୀୟଙ୍କ ସେବା।"}
          </p>
        </div>
      </div>
    </motion.div>
  );

  /* ──────────────────────────────────────────
     RENDER
  ──────────────────────────────────────────── */
  return (
    <>
      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/10 pointer-events-none" />

        <div
          ref={heroRef}
          className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 pt-24 pb-10 md:pt-36 md:pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* ── Copy & Mobile Layout ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75 }}
            >
              <span className="inline-flex items-center gap-2 font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
                <Heart className="w-3 h-3 fill-secondary" />
                {t("donate.label")}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-6xl font-semibold text-on-background leading-[1.12] mb-4 md:mb-6">
                {t("donate.heroHeadline")}
              </h1>

              <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed mb-6 md:mb-8">
                {t("donate.heroSupporting")}
              </p>

              {/* Mobile Hero Image (rendered BEFORE Donate Now button on phone view) */}
              <div className="block lg:hidden my-6">
                {donateHeroImageJSX}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#donate-form"
                  className="bg-primary text-on-primary font-sans font-semibold text-base px-7 py-4 rounded-xl shadow-md hover:bg-primary/90 transition-all text-center"
                >
                  {t("donate.heroCTA")}
                </a>
              </div>
            </motion.div>

            {/* ── Desktop Hero Image Card (Right column on lg screens) ── */}
            <div className="hidden lg:block">
              {donateHeroImageJSX}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          DONATION SECTION (TIERS + PAYMENT)
      ═══════════════════════════════════ */}
      <section id="donate-form" className="bg-surface-container-low py-14 md:py-24">
        <div
          ref={formRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 md:mb-3">
              {t("donate.whyTitle")}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-on-background mb-3">
              {language === "en" ? "See Your Donation in Action" : "ଆପଣଙ୍କ ଦାନ ସଂଖ୍ୟକ ଦେଖନ୍ତୁ"}
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
              {t("donate.whyDesc")}
            </p>
          </motion.div>

          {/* Interactive Tier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 md:mb-14">
            {impactItems.map((item, i) => {
              const isSelected = selectedAmount === item.amount;
              return (
                <motion.button
                  key={item.num}
                  type="button"
                  onClick={() => handleSelectTier(item.amount)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group text-left relative bg-surface-container-lowest rounded-2xl p-5 md:p-6 border transition-all duration-300 shadow-sanctuary cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-primary ring-2 ring-primary/40 shadow-sanctuary-lg bg-primary/5"
                      : "border-outline-variant/30 hover:border-primary/50 hover:shadow-sanctuary-lg"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-colors ${
                        isSelected
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-high text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary"
                      }`}>
                        {language === "en" ? "Donate" : "ଦାନ କରନ୍ତୁ"}
                      </span>
                    </div>
                    <p className="font-serif text-2xl md:text-3xl font-bold text-on-surface mb-1">{item.num}</p>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed mb-4">{item.label}</p>
                  </div>

                  <div className="pt-3 border-t border-outline-variant/10 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform">
                    <span>{language === "en" ? `Donate ${item.num}` : `${item.num} ଦାନ କରନ୍ତୁ`}</span>
                    <span>→</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Payment Form & Custom Amount Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">

            {/* ── Amount Picker ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="w-full lg:col-span-5 space-y-4 md:space-y-6"
            >
              {/* Selected Amount Summary */}
              <div className="bg-primary-container/20 border border-primary/20 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sanctuary">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-primary text-on-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Heart className="w-6 h-6 fill-on-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider font-bold text-on-surface-variant">
                      {language === "en" ? "Selected Contribution" : "ଆପଣଙ୍କ ମନୋନୀତ ଦାନ"}
                    </p>
                    <p className="font-serif text-2xl md:text-3xl font-bold text-primary">
                      ₹{displayAmount.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">
                  {language === "en" ? "Or Enter Custom Amount (₹)" : "ଅନ୍ୟ ରାଶି ଲେଖନ୍ତୁ (₹)"}
                </label>
                <div className="flex items-center px-4 bg-surface-container-lowest rounded-xl focus-within:ring-2 focus-within:ring-primary/30 transition-all border border-outline-variant/20">
                  <span className="font-sans font-semibold text-on-surface-variant text-xl mr-2">₹</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    value={customAmount}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (v === "" || /^\d+$/.test(v)) {
                        setCustomAmount(v);
                        setSelectedAmount("custom");
                      }
                    }}
                    className="w-full bg-transparent py-4 font-sans text-base font-semibold text-on-surface placeholder:text-outline-variant focus:outline-none"
                    placeholder={language === "en" ? "Enter custom amount" : "ରାଶି ଲେଖନ୍ତୁ"}
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Payment Methods ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full lg:col-span-7 bg-surface-container-lowest rounded-2xl md:rounded-[1.75rem] border border-outline-variant/20 shadow-sanctuary overflow-hidden"
            >
              {/* Accent top bar */}
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />

              <div className="p-4 sm:p-6 md:p-8">
                {showThankYou ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-5">
                      <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary/20" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-on-surface mb-3">
                      {language === "en" ? "Thank You!" : "ଧନ୍ୟବାଦ!"}
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant max-w-xs mx-auto mb-6 leading-relaxed">
                      {t("donate.thankYou")}
                    </p>
                    <button
                      onClick={() => { setShowThankYou(false); setSelectedAmount(1000); setCustomAmount(""); }}
                      className="font-sans text-sm text-primary font-semibold"
                    >
                      {language === "en" ? "Make another donation" : "ଆଉ ଥରେ ଦାନ କରନ୍ତୁ"}
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Method Tabs */}
                    <div className="flex border-b border-outline-variant/20 mb-5 gap-0.5">
                      {([
                        { id: "upi",  icon: <QrCode  className="w-4 h-4" />, label: language === "en" ? "UPI / QR Code"  : "UPI / QR କୋଡ" },
                        { id: "bank", icon: <Landmark className="w-4 h-4" />, label: language === "en" ? "Bank Transfer"  : "ବ୍ୟାଙ୍କ ହସ୍ତାନ୍ତର" },
                      ] as { id: "upi" | "bank"; icon: React.ReactNode; label: string }[]).map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveMethod(tab.id)}
                          className={`flex items-center gap-1.5 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold font-sans border-b-2 transition-all duration-200 -mb-px ${
                            activeMethod === tab.id
                              ? "border-primary text-primary"
                              : "border-transparent text-on-surface-variant hover:text-on-surface"
                          }`}
                        >
                          {tab.icon}
                          <span>{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* ── UPI Tab ── */}
                    {activeMethod === "upi" && (
                      <motion.div
                        key="upi"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                      >
                        {/* Mobile: QR centred on top, text below. Desktop: side-by-side */}
                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
                          {/* QR code */}
                          <div className="w-40 h-40 sm:w-44 sm:h-44 flex-shrink-0 bg-white rounded-2xl shadow-md border border-outline-variant/10 p-2.5 flex items-center justify-center">
                            <Image
                              src="/images/upi_qr.webp"
                              alt="UPI QR Code"
                              width={160}
                              height={160}
                              className="object-contain"
                            />
                          </div>

                          <div className="flex-1 w-full text-center sm:text-left">
                            <h3 className="font-serif text-lg md:text-xl font-semibold text-on-surface mb-1">
                              {t("donate.upiTitle")}
                            </h3>
                            <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-4 leading-relaxed">
                              {t("donate.upiDesc")}
                            </p>

                            {/* UPI ID chip */}
                            <div className="flex items-center gap-2 bg-surface-container rounded-xl p-3 border border-outline-variant/25 w-full">
                              <div className="flex-1 overflow-hidden text-left">
                                <p className="font-sans text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-0.5">UPI ID</p>
                                <p className="font-mono text-xs sm:text-sm font-bold text-on-surface truncate">{upiId}</p>
                              </div>
                              <button
                                onClick={() => copyField(upiId, "upi")}
                                className="p-2.5 bg-surface-container-lowest rounded-lg border border-outline-variant/30 hover:bg-primary-container/30 transition-colors flex-shrink-0"
                                aria-label="Copy UPI ID"
                              >
                                {copiedField === "upi" ? <Check size={15} className="text-primary" /> : <Copy size={15} className="text-on-surface-variant" />}
                              </button>
                            </div>

                            {copiedField === "upi" && (
                              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sans text-xs text-primary mt-2 text-left">
                                {language === "en" ? "Copied!" : "କପି ହୋଇଗଲା!"}
                              </motion.p>
                            )}

                            <p className="font-sans text-xs text-on-surface-variant mt-3 opacity-70 text-left">
                              {language === "en" ? "Works with GPay, PhonePe, Paytm & all UPI apps" : "GPay, PhonePe, Paytm ଓ ସବୁ UPI ଆପ ସହ କାମ କରେ"}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ── Bank Transfer Tab ── */}
                    {activeMethod === "bank" && (
                      <motion.div
                        key="bank"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                      >
                        {/* Bank header */}
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-outline-variant/15">
                          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#97144D]/10 flex items-center justify-center flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <rect width="24" height="24" rx="5" fill="#97144D" />
                              <path d="M4 8h16M4 12h10M4 16h7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-sans text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Beneficiary Bank</p>
                            <p className="font-serif text-sm md:text-base font-semibold text-on-surface">Axis Bank Ltd</p>
                          </div>
                          <div className="ml-auto flex items-center gap-1 bg-primary-container/25 px-2 py-1 rounded-full">
                            <ShieldCheck size={11} className="text-primary" />
                            <span className="font-sans text-[10px] font-bold text-primary">Verified</span>
                          </div>
                        </div>

                        {/* Fields — stacked on mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                          {bankFields.map((f) => (
                            <div
                              key={f.id}
                              className="bg-surface-container rounded-xl px-3 md:px-4 py-3 border border-outline-variant/20 flex items-center justify-between gap-2"
                            >
                              <div className="overflow-hidden">
                                <p className="font-sans text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-0.5">{f.label}</p>
                                <p className="font-mono text-sm font-bold text-on-surface truncate">{f.value}</p>
                              </div>
                              {f.copy && (
                                <button
                                  onClick={() => copyField(f.value, f.id)}
                                  className="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:bg-primary-container/30 transition-colors flex-shrink-0"
                                  aria-label={`Copy ${f.label}`}
                                >
                                  {copiedField === f.id ? <Check size={14} className="text-primary" /> : <Copy size={14} className="text-on-surface-variant" />}
                                </button>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex items-start gap-2.5 bg-secondary-container/20 border border-secondary/15 rounded-xl p-3.5">
                          <Heart size={13} className="text-secondary flex-shrink-0 mt-0.5" />
                          <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                            {language === "en"
                              ? "After transferring, share the transaction screenshot via WhatsApp or email so we can acknowledge your donation and issue your 80G receipt."
                              : "ହସ୍ତାନ୍ତର ପରେ WhatsApp ବା ଇମେଲ ଦ୍ୱାରା ସ୍କ୍ରିନଶଟ ପଠାନ୍ତୁ — ଆମେ 80G ରସିଦ ପଠାଇ ଦେବୁ।"}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* ── Razorpay CTA ── */}
                    <div className="mt-5 pt-4 border-t border-outline-variant/15">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-sans text-xs md:text-sm font-semibold text-on-surface">{t("donate.razorpayTitle")}</p>
                          <p className="font-sans text-[10px] md:text-xs text-on-surface-variant">{t("donate.razorpayDesc")}</p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <button
                          type="submit"
                          className="btn-primary-gradient w-full py-4 rounded-xl font-sans font-semibold text-base shadow-sanctuary transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                          <Heart className="w-4 h-4" />
                          {`${t("donate.razorpayBtn")} — ₹${displayAmount.toLocaleString("en-IN")}`}
                        </button>
                      </form>

                      <div className="flex items-center gap-1.5 mt-3 justify-center">
                        <Lock size={11} className="text-on-surface-variant/60" />
                        <span className="font-sans text-[10px] md:text-xs text-on-surface-variant/60">
                          {language === "en" ? "Payments are processed securely through Razorpay" : "ଦେୟ ସୁରକ୍ଷିତ ଭାବରେ Razorpay ମାଧ୍ୟମରେ ପ୍ରକ୍ରିୟାକରଣ କରାଯାଏ"}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TRUST & REGISTRATION
      ═══════════════════════════════════════ */}
      <section className="bg-surface-container-low py-10 md:py-20">
        <div
          ref={trustRef}
          className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={trustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-surface-container-lowest rounded-2xl md:rounded-[2rem] border border-outline-variant/20 shadow-sanctuary-lg overflow-hidden"
          >
            <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-tertiary" />

            <div className="p-5 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

                {/* Left */}
                <div>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary-container flex items-center justify-center mb-4 md:mb-5">
                    <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl md:text-3xl font-bold text-on-surface mb-2 md:mb-3">
                    {t("donate.trustTitle")}
                  </h3>
                  <p className="font-sans text-sm font-semibold text-primary mb-2 md:mb-3">
                    {t("donate.taxBenefit")}
                  </p>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {language === "en"
                      ? "Premashraya is operated by the Premashraya Charitable Trust, a registered non-profit in India. All donations are tax-exempt under Section 80G and CSR-eligible."
                      : "ପ୍ରେମାଶ୍ରୟ ଚାରିଟେବୁଲ ଟ୍ରଷ୍ଟ ଦ୍ୱାରା ପରିଚାଳିତ। ସମସ୍ତ ଦାନ 80G ଅନ୍ତର୍ଗତ ଟ୍ୟାକ୍ସ-ମୁକ୍ତ ଏବଂ CSR ଯୋଗ୍ୟ।"}
                  </p>
                </div>

                {/* Right: registration numbers + badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-surface-container p-4 md:p-5 rounded-2xl border border-outline-variant/25">
                    <p className="font-sans text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">
                      {t("donate.reg80g")}
                    </p>
                    <p className="font-mono text-xs md:text-sm font-bold text-on-surface break-all">AAFTP0666A25HY02</p>
                  </div>
                  <div className="bg-surface-container p-4 md:p-5 rounded-2xl border border-outline-variant/25">
                    <p className="font-sans text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">
                      {t("donate.regCsr")}
                    </p>
                    <p className="font-mono text-xs md:text-sm font-bold text-on-surface break-all">CSR00088849</p>
                  </div>

                  {/* Trust badges */}
                  <div className="sm:col-span-2 flex flex-wrap gap-2 md:gap-3">
                    {[
                      { icon: <Lock size={13} />,        label: "SSL Secured" },
                      { icon: <ShieldCheck size={13} />, label: "80G Registered" },
                      { icon: <Heart size={13} />,       label: "100% to Patients" },
                    ].map((badge) => (
                      <div
                        key={badge.label}
                        className="flex items-center gap-1.5 bg-primary-container/20 border border-primary/15 rounded-full px-3 py-1.5 text-primary"
                      >
                        {badge.icon}
                        <span className="font-sans text-xs font-semibold">{badge.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={trustInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-sans text-center text-[10px] md:text-xs text-on-surface-variant/60 mt-5 md:mt-6 px-2"
          >
            {language === "en"
              ? "* 100% of public donations are directly used to finance accommodation, nutrition, and support services for cancer patients."
              : "* ସମସ୍ତ ସାଧାରଣ ଦାନ ସିଧାସଳଖ ରୋଗୀଙ୍କ ଆଶ୍ରୟ, ଭୋଜନ ଓ ସହାୟତା ସେବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।"}
          </motion.p>
        </div>
      </section>

    </>
  );
}
