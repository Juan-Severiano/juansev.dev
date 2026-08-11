"use client";

import { PortfolioNav } from "../components/PortfolioNav";
import { ProjectCard } from "../components/ProjectCard";
import { StickerContact } from "../components/StickerContact";
import { useLanguage } from "../components/LanguageProvider";

const projects = [
  { image: "juan-projects/mdias-placeholder.png", title: "M. Dias Branco Innovation", tags: ["React", "Nest.js", "PostgreSQL", "Vencedor"], description: "Plataforma vencedora do 3º Hackathon do Amontada Valley em parceria com M. Dias Branco.", href: "https://github.com/Juan-Severiano/mdiasbranco" },
  { image: "juan-projects/japediu-placeholder.png", title: "JaPediu Delivery", tags: ["React Native", "TypeScript", "Live Activities"], description: "Delivery com tracking em tempo real, APNs e arquitetura Clean Code/MVVM para milhares de usuários diários.", href: "https://japediudelivery.com" },
  { image: "juan-projects/bullean-syseleicoes.png", title: "SysEleições", tags: ["Next.js", "Expo", "Zustand"], description: "Plataforma de gerenciamento de campanhas eleitorais para candidatos, coordenadores e equipes.", href: "https://juansev.dev/projects/syseleicoes" },
  { image: "juan-projects/japediu-placeholder.png", title: "Cetra", tags: ["Expo", "SQLite", "Fastify"], description: "App offline-first de cadastramento de agricultores, com sincronização inteligente.", upcoming: true },
  { image: "juan-projects/mdias-placeholder.png", title: "PedidoJap", tags: ["React Native", "Firebase", "iOS"], description: "Aplicativo administrativo de delivery criado do zero e pronto para escalar.", upcoming: true },
  { image: "juan-projects/bullean-syseleicoes.png", title: "BitDogLab REPL", tags: ["Swift", "Kotlin", "Expo"], description: "IDE mobile para Raspberry Pi em parceria com a Unicamp.", upcoming: true },
];

export default function ProjectsPage() {
  const { language } = useLanguage(); const english = language === "en";
  return <main><PortfolioNav /><section className="projects-hero shell"><p>{english ? "Featured projects" : "Projetos em destaque"}</p><h1>{english ? "Applications that combine performance, design and real purpose." : "Aplicações que combinam performance, design e propósito real."}</h1><span>{english ? "Web, mobile and full-stack products built to solve concrete problems." : "Produtos web, mobile e full-stack construídos para resolver problemas concretos."}</span></section><section className="shell all-projects"><div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div></section><StickerContact /></main>;
}
