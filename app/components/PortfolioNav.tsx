"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const sections = ["hero", "projetos", "sobre", "contato"] as const;
const labels = { hero: "home", projetos: "projects", sobre: "about", contato: "contact" } as const;

export function PortfolioNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState<keyof typeof labels>("hero");
  const [progress, setProgress] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const update = () => {
      const projects = document.getElementById("projetos");
      setCollapsed(Boolean(projects && projects.getBoundingClientRect().top <= 80));
      let current: keyof typeof labels = "hero";
      let currentElement: HTMLElement | null = null;
      sections.forEach((id) => { const element = document.getElementById(id); if (element && element.getBoundingClientRect().top <= 120) { current = id; currentElement = element; } });
      setActive(current);
      if (!currentElement) return setProgress(0);
      const end = current === "sobre" ? document.getElementById("tecnologias")?.offsetTop ?? currentElement.offsetTop + currentElement.offsetHeight : currentElement.offsetTop + currentElement.offsetHeight;
      setProgress(Math.max(0, Math.min(1, (window.scrollY + 120 - currentElement.offsetTop) / Math.max(1, end - currentElement.offsetTop))));
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const isIsland = collapsed && !expanded;
  const navItems = <><a className={active === "projetos" ? "selected" : ""} href="/#projetos">{t.nav.projects}</a><a className={active === "sobre" ? "selected" : ""} href="/#sobre">{t.nav.about}</a><a className={active === "contato" ? "selected" : ""} href="/#contato">{t.nav.contact}</a></>;
  return <header className="site-header"><nav className={`nav-desktop ${isIsland ? "is-island" : ""}`} aria-label="Navegação principal" onMouseEnter={() => collapsed && setExpanded(true)} onMouseLeave={() => { setExpanded(false); }}>
    {isIsland ? <><span className="island-title" key={active}>{t.nav[labels[active]]}</span>{active === "contato" ? <a className="island-chat" href="mailto:juan.developer@icloud.com" aria-label="Enviar mensagem"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5C21 16.19 16.97 20 12 20C10.68 20 9.42 19.72 8.28 19.22L3 20L4.42 15.94C3.53 14.6 3 12.99 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></a> : <span className="nav-ring" style={{ background: `conic-gradient(#22c55e ${progress * 360}deg, rgba(255,255,255,.18) 0deg)` }} />}</> : <><a className="name brand-lockup" href="/"><img className="brand-logo" src="/images/ce-dev.png" alt="" aria-hidden="true" />Francisco Juan</a><div className="nav-center">{navItems}</div><div className="nav-end"><button onClick={toggleLanguage} aria-label="Switch language">{language === "pt" ? "PT-BR" : "EN"}</button><a href="https://juansev.dev" target="_blank" rel="noreferrer">{t.nav.site}</a></div></>}
  </nav><nav className="nav-mobile" aria-label="Mobile navigation"><a className="name brand-lockup" href="/"><img className="brand-logo" src="/images/ce-dev.png" alt="" aria-hidden="true" />Francisco Juan</a><button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu" aria-expanded={mobileOpen}><i /><i /><i /></button>{mobileOpen && <div className="mobile-menu">{navItems}<button onClick={toggleLanguage}>{language === "pt" ? "English" : "Português"}</button><a href="/projects">{t.nav.allProjects}</a></div>}</nav></header>;
}
