"use client";

import { PortfolioNav } from "./components/PortfolioNav";
import { ProjectCard } from "./components/ProjectCard";
import { StickerContact } from "./components/StickerContact";
import { useLanguage } from "./components/LanguageProvider";
import { FooterContactMenu } from "./components/FooterContactMenu";
import { portfolioProjects } from "./data/projects";
const tech = ["swift", "react", "typescript", "nodejs", "kotlin", "postgresql", "git", "figma"];

export default function Home() {
  const { language } = useLanguage();
  const english = language === "en";
  const projects = portfolioProjects.slice(0, 6);
  return <main><PortfolioNav />
    <section className="hero hero-light" id="hero"><div className="shell hero-inner"><div className="hero-copy"><div><h1>Francisco Juan</h1><p>iOS &amp; Full-Stack Developer<span className="cursor" /></p></div><div className="hero-actions"><a className="button dark" href="https://www.linkedin.com/in/juansev/" target="_blank" rel="noreferrer">{english ? "Let's talk" : "Vamos conversar"} <b>→</b></a><a className="button light" href="https://github.com/Juan-Severiano" target="_blank" rel="noreferrer">{english ? "View my GitHub" : "Veja meu GitHub"}</a></div></div><img className="profile-photo" src="/images/juan-profile.png" alt="Francisco Juan Severiano" /></div></section>
    <section className="section shell projects" id="projetos"><h2>{english ? "Featured work" : "Trabalhos mais relevantes"}</h2><div className="project-grid">{projects.map((project) => <ProjectCard {...project} description={project.description[language]} key={project.id} />)}</div><a className="button dark full-button" href="/projects">{english ? "See all projects" : "Veja todos os meus projetos"}</a></section>
    <section className="section shell about" id="sobre"><div className="about-photo"><img src="/images/juan-profile.png" alt="Francisco Juan Severiano" /></div><div className="about-content"><p className="kicker">{english ? "A little about me" : "Um pouco sobre mim"}</p><h2>{english ? "iOS and Full-Stack developer turning ideas into products." : "Desenvolvedor iOS e Full-Stack que transforma ideias em produto."}</h2><div className="about-text"><p>{english ? "For over five years, I have built mobile and web applications with React, React Native, Swift and Node.js. I work from interface to architecture, delivering fast and clear experiences for real people." : "Há mais de 5 anos, crio aplicações mobile e web com React, React Native, Swift e Node.js. Trabalho da interface à arquitetura, buscando experiências rápidas, claras e prontas para pessoas reais."}</p><p>{english ? "I currently build products at Codify Tecnologia and JaPediu Delivery, with experience at Bullean Technologies, CoffeeStack and IFCE projects." : "Atualmente desenvolvo produtos na Codify Tecnologia e no JaPediu Delivery, com passagens por Bullean Technologies, CoffeeStack e projetos do IFCE."}</p></div><a className="button dark" href="/trajectory">{english ? "See my experience" : "Veja minha experiência"}</a></div></section>
    <section className="section technologies" id="tecnologias"><div className="shell"><h2>{english ? "Technologies I work with" : "Tecnologias em que tenho experiência"}</h2></div><div className="marquee"><div>{[...tech, ...tech].map((technology, index) => <img key={`${technology}-${index}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology}/${technology}-original.svg`} alt={technology} title={technology} />)}</div></div></section>
    <StickerContact />
    <footer><div className="shell footer-inner"><div className="footer-left"><a className="name brand-lockup footer-brand" href="/"><img className="brand-logo" src="/images/ce-dev.png" alt="" aria-hidden="true" />Francisco Juan</a><div><a href="https://juansev.dev" target="_blank" rel="noreferrer">juansev.dev</a><FooterContactMenu /></div></div><div className="socials"><a href="https://www.linkedin.com/in/juansev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://github.com/Juan-Severiano" target="_blank" rel="noreferrer" aria-label="GitHub">⌘</a></div></div></footer>
  </main>;
}
