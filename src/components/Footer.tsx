"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const footerLinks = {
  sanctuary: [
    { key: "about", href: "/about" },
    { key: "gallery", href: "/gallery" },
    { key: "donate", href: "/donate" },
    { key: "contact", href: "/contact" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const hideCTA = pathname === "/gallery" || pathname === "/contact";

  return (
    <footer className="bg-surface-container-low">
      {/* CTA Section */}
      {!hideCTA && (
        <section className="bg-primary-container">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-22 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-on-primary-container mb-4">
            {t("footer.ctaTitle")}
          </h2>
          <p className="font-sans text-base md:text-lg text-on-primary-container/80 max-w-2xl mx-auto mb-8">
            {t("footer.ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary-gradient px-8 py-3.5 rounded-full font-sans font-medium text-sm inline-block shadow-sanctuary"
              id="footer-contact-us"
            >
              {t("footer.ctaBtn")}
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* Footer Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-1 shadow-sm overflow-hidden">
                <Image
                  src="/images/logo.webp"
                  alt="Premashraya Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-lg md:text-xl font-bold text-on-surface tracking-wide">
                Premashraya
              </span>
            </div>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              {t("footer.brandDesc")}
            </p>
          </div>

          {/* Sanctuary Links */}
          <div className="md:justify-self-end md:pr-10 lg:pr-20">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-on-surface-variant mb-5">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.sanctuary.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
                  >
                    {t(`footer.link${link.key.charAt(0).toUpperCase() + link.key.slice(1)}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(186, 186, 175, 0.15)" }}
        >
          <p className="font-sans text-xs text-on-surface-variant">
            © {new Date().getFullYear()} {t("footer.copy1")}
          </p>
          <p className="font-sans text-xs text-outline-variant">
            {t("footer.copy2")}
          </p>
        </div>
      </div>
    </footer>
  );
}
