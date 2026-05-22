"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Premashraya Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold text-on-surface tracking-wide group-hover:text-primary transition-colors duration-300">
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

        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-on-surface block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-on-surface block"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            className="w-6 h-0.5 bg-on-surface block"
          />
        </button>
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
