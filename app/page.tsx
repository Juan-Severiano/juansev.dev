"use client";

import { PortfolioNav } from "./components/PortfolioNav";
import { ProjectCard } from "./components/ProjectCard";
import { StickerContact } from "./components/StickerContact";
import { useLanguage } from "./components/LanguageProvider";
import { FooterContactMenu } from "./components/FooterContactMenu";

const projectsPt = [
  { image: "juan-projects/mdias-placeholder.png", title: "M. Dias Branco Innovation", tags: ["React", "Nest.js", "PostgreSQL", "Vencedor"], description: "Plataforma vencedora do 3º Hackathon do Amontada Valley em parceria com M. Dias Branco.", href: "https://github.com/Juan-Severiano/mdiasbranco" },
  { image: "juan-projects/japediu-placeholder.png", title: "JaPediu Delivery", tags: ["React Native", "TypeScript", "iOS", "APNs"], description: "Aplicativo de delivery com tracking em tempo real, Live Activities e arquitetura Clean Code/MVVM, usado diariamente por milhares de pessoas.", href: "https://japediudelivery.com" },
  { image: "juan-projects/bullean-syseleicoes.png", title: "SysEleições", tags: ["Next.js", "Expo", "Zustand"], description: "Plataforma de campanhas eleitorais com web, mobile offline e sincronização segura para candidatos e equipes.", href: "https://juansev.dev/projects/syseleicoes" },
  { image: "juan-projects/japediu-placeholder.png", title: "Cetra", tags: ["Expo", "SQLite", "Fastify"], description: "Aplicativo offline-first para cadastramento de agricultores, com sincronização inteligente e arquitetura escalável.", upcoming: true },
  { image: "juan-projects/mdias-placeholder.png", title: "PedidoJap", tags: ["React Native", "Firebase", "iOS"], description: "Aplicativo administrativo para delivery criado do zero, com notificações e performance nativa.", upcoming: true },
  { image: "juan-projects/bullean-syseleicoes.png", title: "BitDogLab REPL", tags: ["Swift", "Kotlin", "Expo"], description: "IDE mobile para Raspberry Pi com módulos nativos em Swift e Kotlin, feita em parceria com a Unicamp.", upcoming: true },
];
const projectsEn = [
  { image: "juan-projects/mdias-placeholder.png", title: "M. Dias Branco Innovation", tags: ["React", "Nest.js", "PostgreSQL", "Winner"], description: "Winning platform at Amontada Valley's third Hackathon, developed in partnership with M. Dias Branco.", href: "https://github.com/Juan-Severiano/mdiasbranco" },
  { image: "juan-projects/japediu-placeholder.png", title: "JaPediu Delivery", tags: ["React Native", "TypeScript", "iOS", "APNs"], description: "Delivery app with real-time tracking, Live Activities and Clean Code/MVVM architecture, used daily by thousands of people.", href: "https://japediudelivery.com" },
  { image: "juan-projects/bullean-syseleicoes.png", title: "SysEleições", tags: ["Next.js", "Expo", "Zustand"], description: "Campaign management platform with web, offline mobile and secure synchronization for candidates and teams.", href: "https://juansev.dev/projects/syseleicoes" },
  { image: "juan-projects/japediu-placeholder.png", title: "Cetra", tags: ["Expo", "SQLite", "Fastify"], description: "Offline-first app for farmer registration, with intelligent synchronization and scalable architecture.", upcoming: true },
  { image: "juan-projects/mdias-placeholder.png", title: "PedidoJap", tags: ["React Native", "Firebase", "iOS"], description: "Administrative delivery application built from scratch, with native notification and performance foundations.", upcoming: true },
  { image: "juan-projects/bullean-syseleicoes.png", title: "BitDogLab REPL", tags: ["Swift", "Kotlin", "Expo"], description: "Mobile IDE for Raspberry Pi with native Swift and Kotlin modules, made in partnership with Unicamp.", upcoming: true },
];
const tech = ["swift", "react", "typescript", "nodejs", "kotlin", "postgresql", "git", "figma"];

export default function Home() {
  const { language } = useLanguage();
  const english = language === "en";
  const projects = english ? projectsEn : projectsPt;
  return <main><PortfolioNav />
    <section className="hero hero-light" id="hero"><div className="shell hero-inner"><div className="hero-copy"><div><h1>Francisco Juan</h1><p>iOS &amp; Full-Stack Developer<span className="cursor" /></p></div><div className="hero-actions"><a className="button dark" href="https://www.linkedin.com/in/juansev/" target="_blank" rel="noreferrer">{english ? "Let's talk" : "Vamos conversar"} <b>→</b></a><a className="button light" href="https://github.com/Juan-Severiano" target="_blank" rel="noreferrer">{english ? "View my GitHub" : "Veja meu GitHub"}</a></div></div><img className="profile-photo" src="/images/juan-profile.png" alt="Francisco Juan Severiano" /></div></section>
    <section className="section shell projects" id="projetos"><h2>{english ? "Featured work" : "Trabalhos mais relevantes"}</h2><div className="project-grid">{projects.map((project) => <ProjectCard {...project} key={project.title} />)}</div><a className="button dark full-button" href="/projects">{english ? "See all projects" : "Veja todos os meus projetos"}</a></section>
    <section className="section shell about" id="sobre"><div className="about-photo"><img src="/images/juan-profile.png" alt="Francisco Juan Severiano" /></div><div className="about-content"><p className="kicker">{english ? "A little about me" : "Um pouco sobre mim"}</p><h2>{english ? "iOS and Full-Stack developer turning ideas into products." : "Desenvolvedor iOS e Full-Stack que transforma ideias em produto."}</h2><div className="about-text"><p>{english ? "For over five years, I have built mobile and web applications with React, React Native, Swift and Node.js. I work from interface to architecture, delivering fast and clear experiences for real people." : "Há mais de 5 anos, crio aplicações mobile e web com React, React Native, Swift e Node.js. Trabalho da interface à arquitetura, buscando experiências rápidas, claras e prontas para pessoas reais."}</p><p>{english ? "I currently build products at Codify Tecnologia and JaPediu Delivery, with experience at Bullean Technologies, CoffeeStack and IFCE projects." : "Atualmente desenvolvo produtos na Codify Tecnologia e no JaPediu Delivery, com passagens por Bullean Technologies, CoffeeStack e projetos do IFCE."}</p></div><a className="button dark" href="/trajectory">{english ? "See my experience" : "Veja minha experiência"}</a></div></section>
    <section className="section technologies" id="tecnologias"><div className="shell"><h2>{english ? "Technologies I work with" : "Tecnologias em que tenho experiência"}</h2></div><div className="marquee"><div>{[...tech, ...tech].map((technology, index) => <img key={`${technology}-${index}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology}/${technology}-original.svg`} alt={technology} title={technology} />)}</div></div></section>
    <StickerContact />
    <footer><div className="shell footer-inner"><div className="footer-left"><a className="name" href="/">Francisco Juan</a><div><a href="https://juansev.dev" target="_blank" rel="noreferrer">juansev.dev</a><FooterContactMenu /></div></div><div className="socials"><a href="https://www.linkedin.com/in/juansev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://github.com/Juan-Severiano" target="_blank" rel="noreferrer" aria-label="GitHub">⌘</a></div></div></footer>
  </main>;
}
