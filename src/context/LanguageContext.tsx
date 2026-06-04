"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "../i18n/en";
import { or } from "../i18n/or";

type Language = "en" | "or";
type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load from local storage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("premashraya_lang") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "or")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("premashraya_lang", lang);
  };

  // Translation helper function
  const t = (path: string): string => {
    const dictionary = language === "or" ? or : en;
    const keys = path.split(".");
    
    let current: any = dictionary;
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path}`);
        // Fallback to English if Odia is missing
        let fallback: any = en;
        for (const k of keys) {
          if (fallback[k] === undefined) return path;
          fallback = fallback[k];
        }
        return fallback as string;
      }
      current = current[key];
    }
    
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
