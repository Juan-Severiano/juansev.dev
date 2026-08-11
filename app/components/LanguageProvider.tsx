"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

type Language = "pt" | "en";

const copy = {
  pt: {
    nav: { home: "Início", projects: "Projetos", about: "Sobre mim", contact: "Contate-me", allProjects: "Todos os projetos", site: "Site" },
    card: { more: "Ver mais", comingSoon: "Em breve" },
    contact: { title: "Vamos trabalhar juntos?", cta: "Enviar e-mail", hint: "Clique direito para adicionar stickers · Arraste para mover" },
  },
  en: {
    nav: { home: "Home", projects: "Projects", about: "About me", contact: "Contact me", allProjects: "All projects", site: "Site" },
    card: { more: "See more", comingSoon: "Coming soon" },
    contact: { title: "Let’s work together?", cta: "Send email", hint: "Right-click to add stickers · Drag to move" },
  },
};

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; toggleLanguage: () => void; t: (typeof copy)[Language] };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  useEffect(() => { const stored = localStorage.getItem("portfolio-language"); if (stored === "en" || stored === "pt") setLanguage(stored); }, []);
  useEffect(() => { localStorage.setItem("portfolio-language", language); document.documentElement.lang = language === "pt" ? "pt-BR" : "en"; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, toggleLanguage: () => setLanguage((current) => current === "pt" ? "en" : "pt"), t: copy[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
