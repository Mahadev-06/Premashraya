"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Soup, 
  Bed, 
  HeartHandshake, 
  Heart, 
  ShieldCheck, 
  Copy, 
  Check, 
  QrCode, 
  CreditCard,
  Lock
} from "lucide-react";

export default function DonatePage() {
  const { language, t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | string>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [showDemoFeedback, setShowDemoFeedback] = useState(false);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const paymentRef = useRef(null);
  const paymentInView = useInView(paymentRef, { once: true, margin: "-100px" });
  const trustRef = useRef(null);
  const trustInView = useInView(trustRef, { once: true, margin: "-100px" });
  const transparencyRef = useRef(null);
  const transparencyInView = useInView(transparencyRef, { once: true, margin: "-100px" });

  const upiId = "premashrayatrust@sbi";

  const copyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePredefinedAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount("custom");
    }
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDemoFeedback(true);
  };

  const scrollToDonation = () => {
    document.getElementById("donation-methods")?.scrollIntoView({ behavior: "smooth" });
  };

  const impactCards = [
    {
      title: t("donate.nutritionTitle"),
      desc: t("donate.nutritionDesc"),
      icon: <Soup className="text-primary w-6 h-6" />,
      colorClass: "bg-primary-container/20 border-primary/10"
    },
    {
      title: t("donate.accommodationTitle"),
      desc: t("donate.accommodationDesc"),
      icon: <Bed className="text-secondary w-6 h-6" />,
      colorClass: "bg-secondary-container/20 border-secondary/10"
    },
    {
      title: t("donate.counsellingTitle"),
      desc: t("donate.counsellingDesc"),
      icon: <HeartHandshake className="text-tertiary w-6 h-6" />,
      colorClass: "bg-tertiary-container/20 border-tertiary/10"
    },
    {
      title: t("donate.careTitle"),
      desc: t("donate.careDesc"),
      icon: <Heart className="text-primary w-6 h-6" />,
      colorClass: "bg-primary-container/20 border-primary/10"
    }
  ];

  const feedbackMsg = language === "en"
    ? "Thank you for your generous support! Premashraya's payment gateway is currently in demonstration mode. To complete your donation, you can use the UPI QR code or contact us."
    : "ଆପଣଙ୍କର ଉଦାର ସହାୟତା ପାଇଁ ଧନ୍ୟବାଦ! ପ୍ରେମାଶ୍ରୟର ପେମେଣ୍ଟ ଗେଟୱେ ବର୍ତ୍ତମାନ ପ୍ରଦର୍ଶନ ମୋଡ୍‌ରେ ଅଛି। ଆପଣଙ୍କର ଦାନ ସମ୍ପୂର୍ଣ୍ଣ କରିବାକୁ ଆପଣ UPI QR କୋଡ୍ ବ୍ୟବହାର କରିପାରିବେ କିମ୍ବା ଆମ ସହ ଯୋଗାଯୋଗ କରିପାରିବେ।";

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface pt-28 pb-20 md:pt-40 md:pb-30 overflow-hidden min-h-[85vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 to-transparent" />
        <div
          ref={heroRef}
          className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
          >
            <span className="inline-block font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 sm:mb-6">
              {t("donate.label")}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-on-background leading-[1.15] md:leading-[1.1] mb-6 md:mb-8">
              {t("donate.heroHeadline")}
            </h1>
            <p className="font-sans text-base md:text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-10">
              {t("donate.heroSupporting")}
            </p>
            <button
              onClick={scrollToDonation}
              className="btn-primary-gradient px-8 py-4 rounded-full font-sans font-medium text-base inline-block shadow-sanctuary transition-transform active:scale-95 cursor-pointer"
            >
              {t("donate.heroCTA")}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div
          ref={whyRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              {t("donate.whyTitle")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-on-background mb-4">
              {t("donate.title")}
            </h2>
            <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto">
              {t("donate.whyDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className={`bg-surface-container-lowest rounded-sanctuary-lg p-6 sm:p-8 shadow-sanctuary hover:shadow-sanctuary-lg transition-sanctuary border ${card.colorClass}`}
              >
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-on-surface mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section id="donation-methods" className="bg-surface py-16 md:py-24">
        <div
          ref={paymentRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Razorpay Donation Form Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={paymentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-surface-container-low rounded-sanctuary-lg p-6 sm:p-8 md:p-10 shadow-sanctuary border border-outline-variant/15"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                  <CreditCard className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-on-surface">
                    {t("donate.razorpayTitle")}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant">
                    {t("donate.razorpayDesc")}
                  </p>
                </div>
              </div>

              {showDemoFeedback ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-surface-container-lowest border border-outline-variant/30 rounded-sanctuary-md p-6 text-center py-10 md:py-16 shadow-inner"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mx-auto mb-5">
                    <Heart className="text-primary w-8 h-8 fill-primary/10" />
                  </div>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-on-surface mb-6 max-w-md mx-auto">
                    {feedbackMsg}
                  </p>
                  <button
                    onClick={() => {
                      setShowDemoFeedback(false);
                      setCustomAmount("");
                      setSelectedAmount(1000);
                    }}
                    className="font-sans text-sm text-primary font-semibold hover:underline"
                  >
                    {language === "en" ? "Go Back" : "ପଛକୁ ଯାଆନ୍ତୁ"}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleDonateSubmit} className="space-y-6 mt-6">
                  {/* Amount Grid */}
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3 block">
                      {language === "en" ? "Select Contribution Amount" : "ଯୋଗଦାନ ରାଶି ଚୟନ କରନ୍ତୁ"}
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[500, 1000, 2500, 5000].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => handlePredefinedAmountClick(amt)}
                          className={`py-3.5 px-4 rounded-xl font-sans font-semibold text-sm transition-all duration-300 border ${
                            selectedAmount === amt
                              ? "bg-primary text-on-primary border-primary shadow-sm"
                              : "bg-surface-container-lowest text-on-surface border-outline-variant/40 hover:bg-surface-container-high"
                          }`}
                        >
                          ₹{amt.toLocaleString("en-IN")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount Input */}
                  <div>
                    <label
                      htmlFor="customAmount"
                      className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block"
                    >
                      {language === "en" ? "Or Enter Custom Amount (₹)" : "କିମ୍ବା ଅନ୍ୟ ରାଶି ପ୍ରବେଶ କରନ୍ତୁ (₹)"}
                    </label>
                    <div className="flex items-center px-5 bg-surface-container-lowest rounded-sanctuary-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all border border-outline-variant/10 overflow-hidden">
                      <span className="font-sans font-medium text-on-surface-variant/80 text-lg mr-2">
                        ₹
                      </span>
                      <input
                        type="text"
                        id="customAmount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="w-full bg-transparent py-4 font-sans text-base font-semibold text-on-surface placeholder:text-outline-variant focus:outline-none"
                        placeholder={language === "en" ? "Enter amount" : "ରାଶି ପ୍ରବେଶ କରନ୍ତୁ"}
                      />
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center gap-2 text-outline-variant border-t border-outline-variant/15 pt-4">
                    <Lock size={14} className="text-primary/70" />
                    <span className="font-sans text-xs text-on-surface-variant/80">
                      {language === "en"
                        ? "Secure 256-bit SSL connection. Payments processed via Razorpay."
                        : "ସୁରକ୍ଷିତ 256-ବିଟ୍ SSL ସଂଯୋଗ। Razorpay ମାଧ୍ୟମରେ ଦେୟ ପ୍ରକ୍ରିୟାକରଣ।"}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary-gradient w-full px-8 py-4 rounded-full font-sans font-semibold text-base transition-transform active:scale-[0.98] shadow-sanctuary flex items-center justify-center gap-2"
                  >
                    <span>
                      {selectedAmount === "custom"
                        ? `${t("donate.razorpayBtn")} (₹${Number(customAmount || 0).toLocaleString("en-IN")})`
                        : `${t("donate.razorpayBtn")} (₹${Number(selectedAmount).toLocaleString("en-IN")})`}
                    </span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* UPI QR Code Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={paymentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-5 bg-surface-container-low rounded-sanctuary-lg p-8 lg:p-10 shadow-sanctuary border border-outline-variant/15 text-center flex flex-col items-center justify-center h-full"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-5">
                <QrCode className="text-secondary w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-on-surface mb-3">
                {t("donate.upiTitle")}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant max-w-sm mb-8 leading-relaxed">
                {t("donate.upiDesc")}
              </p>

              {/* QR Code Container */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 shrink-0 bg-white p-4 rounded-3xl shadow-md border border-outline-variant/10 overflow-hidden flex items-center justify-center mx-auto mb-8">
                <Image
                  src="/images/qr_placeholder.png"
                  alt="UPI QR Code Placeholder"
                  width={200}
                  height={200}
                  className="object-contain"
                  priority
                />
              </div>

              {/* UPI ID Info with Copy Button */}
              <div className="shrink-0 flex justify-center w-full max-w-full mt-4">
                <div className="bg-surface-container-lowest rounded-2xl p-2 pl-4 sm:pl-5 border border-outline-variant/20 flex items-center justify-between gap-6 shadow-inner w-auto max-w-full">
                  <div className="text-left overflow-hidden">
                    <span className="font-sans text-[10px] sm:text-xs uppercase font-bold text-on-surface-variant block tracking-wider leading-none mb-1">
                      {t("donate.upiIdLabel")}
                    </span>
                    <span className="font-sans text-sm sm:text-base font-semibold text-on-surface block truncate">
                      {upiId}
                    </span>
                  </div>
                  <button
                    onClick={copyUPI}
                    className="p-3 bg-surface-container hover:bg-surface-container-high active:bg-surface-container rounded-xl transition-colors border border-outline-variant/30 flex-shrink-0"
                    title={language === "en" ? "Copy UPI ID" : "UPI ID କପି କରନ୍ତୁ"}
                  >
                    {copied ? (
                      <Check size={18} className="text-primary" />
                    ) : (
                      <Copy size={18} className="text-on-surface-variant" />
                    )}
                  </button>
                </div>
              </div>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-sans text-xs text-primary font-medium mt-3 block"
                >
                  {language === "en" ? "Copied to clipboard!" : "କ୍ଲିପବୋର୍ଡରେ କପି ହୋଇଗଲା!"}
                </motion.span>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Exemptions Card Section */}
      <section className="bg-surface-container-low py-16">
        <div
          ref={trustRef}
          className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={trustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-surface-container-lowest border-2 border-primary/30 rounded-sanctuary-lg p-6 sm:p-8 md:p-10 shadow-sanctuary-lg relative overflow-hidden"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-tertiary" />

            <div className="flex flex-col items-center text-center gap-8">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="w-full max-w-3xl space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-on-surface">
                    {t("donate.trustTitle")}
                  </h3>
                  <p className="font-sans text-sm md:text-base font-semibold text-primary">
                    {t("donate.taxBenefit")}
                  </p>
                </div>

                <p className="font-sans text-base md:text-lg leading-relaxed text-on-surface-variant max-w-2xl mx-auto">
                  {language === "en"
                    ? "Premashraya is run by the Premashrya Charitable Trust, a registered non-profit organization in India. All donations are tax-exempt under Section 80G and compliant with CSR regulations."
                    : "ପ୍ରେମାଶ୍ରୟ ଚାରିଟେବୁଲ୍ ଟ୍ରଷ୍ଟ ଦ୍ୱାରା ପରିଚାଳିତ, ଯାହା ଭାରତରେ ଏକ ପଞ୍ଜୀକୃତ ଅଣ-ଲାଭକାରୀ ସଂଗଠନ। ସମସ୍ତ ଦାନ ଆୟକର ଅଧିନିୟମର ଧାରା 80G ଅନ୍ତର୍ଗତ କରମୁକ୍ତ ଏବଂ CSR ନିୟମ ଅନୁଯାୟୀ ଯୋଗ୍ୟ।"}
                </p>

                {/* Registration Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6">
                  <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/35 shadow-inner">
                    <span className="font-sans text-[10px] uppercase font-bold text-on-surface-variant block tracking-wider mb-2">
                      {t("donate.reg80g")}
                    </span>
                    <span className="font-mono text-sm md:text-base font-bold text-on-surface">
                      AAFTP0666A25HY02
                    </span>
                  </div>
                  <div className="bg-surface-container p-5 rounded-xl border border-outline-variant/35 shadow-inner">
                    <span className="font-sans text-[10px] uppercase font-bold text-on-surface-variant block tracking-wider mb-2">
                      {t("donate.regCsr")}
                    </span>
                    <span className="font-mono text-sm md:text-base font-bold text-on-surface">
                      CSR00088849
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-surface py-16">
        <div
          ref={transparencyRef}
          className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={transparencyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-on-background">
              {t("donate.transparencyTitle")}
            </h2>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              {t("donate.transparencyDesc")}
            </p>
            <p className="font-sans text-xs text-outline-variant font-medium">
              {language === "en"
                ? "* We strictly audit our funds and guarantee that 100% of public donations directly finance facilities and resources for cancer patients."
                : "* ଆମେ ଆମର ପାଣ୍ଠିକୁ କଡାକଡି ଭାବରେ ଅଡିଟ୍ କରୁ ଏବଂ ନିଶ୍ଚିତ କରୁ ଯେ ସମସ୍ତ ସାଧାରଣ ଦାନ ସିଧାସଳଖ କର୍କଟ ରୋଗୀଙ୍କ ସୁବିଧା ଏବଂ ସମ୍ବଳ ପାଇଁ ବ୍ୟବହୃତ ହୁଏ।"}
            </p>
          </motion.div>
        </div>
      </section>

    </>
  );
}
