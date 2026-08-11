"use client";

import { PortfolioNav } from "../components/PortfolioNav";
import { StickerContact } from "../components/StickerContact";
import { useLanguage } from "../components/LanguageProvider";

const history = [
  ["2025 — agora", "Full-Stack Developer · Codify", "Desenvolvimento de produtos web e mobile, com foco em experiências de entrega, arquitetura e performance."],
  ["2024 — agora", "Mobile Developer · JaPediu Delivery", "Apps de delivery com React Native, iOS, Live Activities, APNs e rastreamento em tempo real."],
  ["2023 — agora", "Ciência da Computação · IFCE", "Formação em ciência da computação, complementada por produtos reais, hackathons e projetos em mobile."],
];

export default function TrajectoryPage() {
  const { language } = useLanguage(); const english = language === "en";
  return <main><PortfolioNav /><section className="trajectory-hero"><video src="/images/trajectory-hero.mp4" autoPlay muted loop playsInline /><div className="shell"><p>{english ? "Experience" : "Trajetória"}</p><h1>{english ? "I like building useful, fast and easy-to-use products." : "Eu gosto de construir produtos úteis, rápidos e fáceis de usar."}</h1></div></section><section className="trajectory-list shell">{history.map(([period, title, description]) => <article key={title}><p>{period}</p><div><h2>{title}</h2><span>{description}</span><div className="case-tags"><span>Mobile</span><span>Full-Stack</span><span>{english ? "Product" : "Produto"}</span></div></div></article>)}</section><StickerContact /></main>;
}
