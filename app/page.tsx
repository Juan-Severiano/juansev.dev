"use client";

import { PortfolioNav } from "./components/PortfolioNav";
import { ProjectCard } from "./components/ProjectCard";
import { LabsSection } from "./components/LabsSection";
import { StickerContact } from "./components/StickerContact";
import { useLanguage } from "./components/LanguageProvider";
import { FooterContactMenu } from "./components/FooterContactMenu";
import { portfolioProjects } from "./data/projects";

// Ícones da devicon com versão fixa: o "latest" muda sem aviso e pode quebrar a faixa.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const tech = [
  ["python", "Python"], ["java", "Java"], ["spring", "Spring Boot"], ["typescript", "TypeScript"],
  ["react", "React e React Native"], ["nodejs", "Node.js"], ["postgresql", "PostgreSQL"], ["docker", "Docker"],
  ["swift", "Swift"], ["kotlin", "Kotlin"], ["pytorch", "PyTorch"], ["git", "Git"],
] as const;

export default function Home() {
  const { language } = useLanguage();
  const english = language === "en";
  const projects = portfolioProjects.slice(0, 6);
  return <main><PortfolioNav />
    <section className="hero hero-light" id="hero"><div className="shell hero-inner"><div className="hero-copy"><div><h1>Francisco Juan</h1><p>{english ? "Software engineer · AI, backend and mobile" : "Engenheiro de software · IA, backend e mobile"}<span className="cursor" /></p><p className="hero-lede">{english ? "I build software with AI and I like to measure it: public labs with the metric, the cost and the limits written down." : "Construo software com IA e gosto de medir o resultado: labs públicos com a métrica, o custo e os limites escritos."}</p></div><div className="hero-actions"><a className="button dark" href="#ia">{english ? "See the AI labs" : "Ver os labs de IA"} <b>↓</b></a><a className="button light" href="https://github.com/Juan-Severiano" target="_blank" rel="noreferrer">{english ? "View my GitHub" : "Veja meu GitHub"}</a><a className="button light" href="https://www.linkedin.com/in/juansev/" target="_blank" rel="noreferrer">{english ? "Let's talk" : "Vamos conversar"}</a></div></div><img className="profile-photo" src="/images/juan-profile.png" alt="Francisco Juan Severiano" /></div></section>
    <LabsSection />
    <section className="section shell projects" id="projetos"><h2>{english ? "Featured work" : "Trabalhos mais relevantes"}</h2><div className="project-grid">{projects.map((project) => <ProjectCard {...project} description={project.description[language]} key={project.id} />)}</div><a className="button dark full-button" href="/projects">{english ? "See all projects" : "Veja todos os meus projetos"}</a></section>
    <section className="section shell about" id="sobre"><div className="about-photo"><img src="/images/juan-profile.png" alt="Francisco Juan Severiano" /></div><div className="about-content"><p className="kicker">{english ? "A little about me" : "Um pouco sobre mim"}</p><h2>{english ? "Software engineer building with AI, on the JVM and on mobile." : "Engenheiro de software que constrói com IA, na JVM e no mobile."}</h2><div className="about-text"><p>{english ? "I have been building software since 2022: backends in Java and Spring Boot, apps in React Native and Swift, and integrations with LLMs. I work from interface to architecture, and I like to measure what I build." : "Construo software desde 2022: backends em Java e Spring Boot, apps em React Native e Swift e integrações com LLMs. Trabalho da interface à arquitetura e gosto de medir o que construo."}</p><p>{english ? "I work at Pulse Tecnologia (ERP and SaaS on the JVM), at Codify on JaPediu Delivery (apps and integrations) and at Bullean Technologies. I did the Amontada Valley residency, where I now mentor, and I am studying Technology in Artificial Intelligence at IFCE." : "Atuo na Pulse Tecnologia (ERP e SaaS na JVM), na Codify no JaPediu Delivery (apps e integrações) e na Bullean Technologies. Fiz a residência do Amontada Valley, onde hoje sou mentor, e estudo Tecnologia em Inteligência Artificial no IFCE."}</p></div><a className="button dark" href="/trajectory">{english ? "See my experience" : "Veja minha experiência"}</a></div></section>
    <section className="section technologies" id="tecnologias"><div className="shell"><h2>{english ? "Technologies I work with" : "Tecnologias em que tenho experiência"}</h2></div><div className="marquee"><div>{[...tech, ...tech].map(([id, name], index) => { const copy = index >= tech.length; return <img key={`${id}-${index}`} src={`${DEVICON}/${id}/${id}-original.svg`} alt={copy ? "" : name} title={name} aria-hidden={copy || undefined} />; })}</div></div></section>
    <StickerContact />
    <footer><div className="shell footer-inner"><div className="footer-left"><a className="name brand-lockup footer-brand" href="/"><img className="brand-logo" src="/images/ce-dev.png" alt="" aria-hidden="true" />Francisco Juan</a><div><a href="https://juansev.dev" target="_blank" rel="noreferrer">juansev.dev</a><FooterContactMenu /></div></div><div className="socials"><a href="https://www.linkedin.com/in/juansev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://github.com/Juan-Severiano" target="_blank" rel="noreferrer" aria-label="GitHub">⌘</a></div></div></footer>
  </main>;
}
