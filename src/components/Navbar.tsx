"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/donate", label: t("nav.donate") },
    { href: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check if user has seen tooltip
    const hasSeenTooltip = localStorage.getItem("hasSeenLangTooltip");
    if (!hasSeenTooltip) {
      const showTimer = setTimeout(() => setShowTooltip(true), 1500);
      const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav shadow-sanctuary py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (window.innerWidth >= 768) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 md:gap-3 group shrink-0"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white flex items-center justify-center p-1 shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.webp"
              alt="Premashraya Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-on-surface tracking-wide group-hover:text-primary transition-colors duration-300 truncate">
            Premashraya
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 relative ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          {/* Language Switcher Desktop */}
          <div 
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              onClick={() => {
                setLanguage(language === "en" ? "or" : "en");
                setShowTooltip(false);
                localStorage.setItem("hasSeenLangTooltip", "true");
              }}
              className="ml-4 px-3 py-1.5 rounded-full border border-outline-variant font-sans text-xs font-semibold hover:bg-surface-container transition-colors flex items-center gap-2"
            >
              <span className={language === "en" ? "text-primary" : "text-on-surface-variant"}>EN</span>
              <span className="text-outline-variant">|</span>
              <span className={language === "or" ? "text-primary font-oriya" : "text-on-surface-variant font-oriya"}>ଓଡ଼ିଆ</span>
            </button>
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[120%] right-0 w-48 bg-primary text-white p-3 rounded-xl shadow-xl pointer-events-none z-50 origin-top-right"
                >
                  {/* Arrow */}
                  <div className="absolute -top-1.5 right-6 w-3 h-3 bg-primary transform rotate-45" />
                  <p className="font-sans text-xs font-medium text-center leading-relaxed">
                    Click here to change language
                  </p>
                  <p className="font-oriya text-xs font-medium text-center leading-relaxed mt-1 border-t border-white/20 pt-1">
                    ଭାଷା ପରିବର୍ତ୍ତନ କରିବାକୁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Language Switcher Mobile */}
          <div 
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              onClick={() => {
                setLanguage(language === "en" ? "or" : "en");
                setShowTooltip(false);
                localStorage.setItem("hasSeenLangTooltip", "true");
              }}
              className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full border border-outline-variant font-sans text-[10px] sm:text-xs font-semibold flex items-center gap-1 sm:gap-1.5 hover:bg-surface-container transition-colors"
            >
              <span className={language === "en" ? "text-primary" : "text-on-surface-variant"}>EN</span>
              <span className="text-outline-variant">|</span>
              <span className={language === "or" ? "text-primary font-oriya" : "text-on-surface-variant font-oriya"}>ଓଡ଼ିଆ</span>
            </button>
            
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[130%] right-0 w-44 bg-primary text-white p-2.5 rounded-lg shadow-xl pointer-events-none z-50 origin-top-right"
                >
                  <div className="absolute -top-1.5 right-6 w-3 h-3 bg-primary transform rotate-45" />
                  <p className="font-sans text-[10px] font-medium text-center leading-relaxed">
                    Click here to change language
                  </p>
                  <p className="font-oriya text-[10px] font-medium text-center leading-relaxed mt-1 border-t border-white/20 pt-1">
                    ଭାଷା ପରିବର୍ତ୍ତନ କରିବାକୁ ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1 sm:gap-1.5 p-1.5 sm:p-2 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 sm:w-6 h-0.5 bg-on-surface block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 sm:w-6 h-0.5 bg-on-surface block"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              className="w-5 sm:w-6 h-0.5 bg-on-surface block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-nav overflow-hidden"
          >
            <nav className="flex flex-col px-4 sm:px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-sans text-base font-medium block py-3 px-2 rounded-lg transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-primary bg-primary-container/20"
                        : "text-on-surface-variant active:bg-surface-container-high"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
