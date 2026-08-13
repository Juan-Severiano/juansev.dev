"use client";

import { PortfolioNav } from "../components/PortfolioNav";
import { ProjectCard } from "../components/ProjectCard";
import { StickerContact } from "../components/StickerContact";
import { useLanguage } from "../components/LanguageProvider";
import { portfolioProjects, projectEngineering } from "../data/projects";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const english = language === "en";
  const engineering = projectEngineering[language];

  return <main><PortfolioNav />
    <section className="projects-hero shell"><p>{english ? "Selected products" : "Produtos selecionados"}</p><h1>{english ? "Products built across native, mobile, web and infrastructure." : "Produtos construídos entre nativo, mobile, web e infraestrutura."}</h1><span>{english ? "A curated selection of products and systems built from real codebases, from native desktop utilities to production SaaS platforms." : "Uma seleção de produtos e sistemas construídos a partir de bases de código reais, de utilitários nativos a plataformas SaaS em produção."}</span></section>
    <section className="shell all-projects"><div className="project-grid">{portfolioProjects.map((project) => <ProjectCard key={project.id} {...project} description={project.description[language]} />)}</div></section>
    <section className="engineering shell"><div><p className="kicker">{engineering.eyebrow}</p><h2>{engineering.title}</h2></div><div><p>{engineering.description}</p><ul>{engineering.items.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <StickerContact />
  </main>;
}
