"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  { image: "gympsi-card.png", title: "Gympsi", tags: ["iOS", "SwiftUI", "SwiftData", "Publicado"], description: "Esqueça as fichas manuais e treinos não registrados. Com Gympsi, sua rotina em uma vida mais saudável ganha outra visão.", action: "Ver mais" },
  { image: "lazarus-card.png", title: "Lazarus, Into the Dungeon", tags: ["iOS", "Swift", "Godot"], description: "Você foi abandonado por seus companheiros em uma masmorra cheia de perigos. Recrute aliados e desça às profundezas da masmorra. Você buscará a paz ou vingança contra aqueles que te traíram?", action: "Ver mais", download: true },
  { image: "eyebound-card.png", title: "Eyebound", tags: ["iOS", "SwiftUI", "Card Game"], description: "Prepare-se para desafiar inimigos de outro plano. Combine cartas para causar o máximo de dano aos seus oponentes e ajudá-los a encontrar o descanso eterno.", upcoming: true },
  { image: "walk-hatch-card.png", title: "Walk & Hatch", tags: ["iOS", "SwiftUI", "HealthKit", "CoreData"], description: "Uma nova forma de descobrir as caminhadas. Faça companheiros e descubra uma nova maneira de se manter saudável.", upcoming: true },
  { image: "dojodoro-card.png", title: "Dojodoro", tags: ["iOS", "SwiftUI", "Coordinator"], description: "Cultive plantas enquanto foca em seus objetivos. Dojodoro traz uma experiência calma e relaxante para quem busca foco e leveza.", upcoming: true },
  { image: "nirva-card.png", title: "Nirva", tags: ["iPadOS", "Design", "Machine Learning"], description: "Aproveite uma vida mais plena com alongamentos. Siga um programa guiado feito para você usando seu iPad.", upcoming: true },
];

const tech = ["swift", "kotlin", "dart", "react", "javascript", "git", "github", "figma"];

function ParticleField() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const context = element.getContext("2d");
    if (!context) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    const dots = Array.from({ length: 72 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 1.65 + .35,
      dx: (Math.random() - .5) * .00018, dy: (Math.random() - .5) * .00018,
    }));
    const resize = () => {
      width = element.width = element.offsetWidth * devicePixelRatio;
      height = element.height = element.offsetHeight * devicePixelRatio;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      width = element.offsetWidth; height = element.offsetHeight;
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#ffffff";
      dots.forEach((dot) => {
        dot.x = (dot.x + dot.dx + 1) % 1; dot.y = (dot.y + dot.dy + 1) % 1;
        context.globalAlpha = .12 + dot.r / 7;
        context.beginPath(); context.arc(dot.x * width, dot.y * height, dot.r, 0, Math.PI * 2); context.fill();
      });
      context.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas className="particles" ref={canvas} aria-hidden="true" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [english, setEnglish] = useState(false);
  const title = english ? "Daniel Nobre" : "Daniel Nobre";

  return (
    <main>
      <header className="site-header">
        <nav className="nav-desktop" aria-label="Navegação principal">
          <a className="name" href="#hero">{title}</a>
          <div className="nav-center"><a href="#projetos">Projetos</a><a href="#sobre">Sobre mim</a><a href="#contato">Contate-me</a></div>
          <div className="nav-end"><button onClick={() => setEnglish(!english)} aria-label="Mudar idioma">{english ? "EN" : "PT-BR"}</button><a href="#blog">Blog</a></div>
        </nav>
        <nav className="nav-mobile" aria-label="Navegação mobile">
          <a className="name" href="#hero">Daniel Nobre</a>
          <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}><i /><i /><i /></button>
          {menuOpen && <div className="mobile-menu"><a onClick={() => setMenuOpen(false)} href="#projetos">Projetos</a><a onClick={() => setMenuOpen(false)} href="#sobre">Sobre mim</a><a onClick={() => setMenuOpen(false)} href="#contato">Contate-me</a><a href="#blog">Blog</a></div>}
        </nav>
      </header>

      <section className="hero" id="hero">
        <ParticleField />
        <div className="shell hero-inner">
          <div className="hero-copy"><div><h1>Daniel Nobre</h1><p>{english ? "Mobile Software Engineer" : "Engenheiro de Software Mobile"}<span className="cursor" /></p></div><div className="hero-actions"><a className="button dark" href="https://www.linkedin.com/in/dan-nobre/" target="_blank" rel="noreferrer">Vamos conversar <b>→</b></a><a className="button light" href="/portfolio.pdf" target="_blank">Baixe meu portfólio</a></div></div>
          <img className="profile-photo" src="/images/profile.png" alt="Foto de Daniel Nobre" />
        </div>
      </section>

      <section className="section shell projects" id="projetos">
        <h2>Trabalhos mais relevantes</h2>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.title}><div className="card-image"><img src={`/images/${project.image}`} alt={`Screenshot do projeto ${project.title}`} />{project.upcoming && <span>Em breve</span>}</div><div className="card-body"><div><h3>{project.title}</h3><div className="tags">{project.tags.map((tag) => <small key={tag}>{tag}</small>)}</div><p>{project.description}</p></div><div className="card-links">{project.upcoming ? <em>Em breve</em> : <a href="#contato">{project.action} <b>→</b></a>}{project.download && <a href="https://apps.apple.com/us/app/lazarus-into-the-dungeon/id6754764904" target="_blank" rel="noreferrer">Baixar <b>↗</b></a>}</div></div></article>)}
        </div>
        <a className="button dark full-button" href="#projetos">Veja todos os meus projetos</a>
      </section>

      <section className="section shell about" id="sobre">
        <div className="about-photo"><img src="/images/about-photo.jpg" alt="Daniel Nobre" /></div>
        <div className="about-content"><p className="kicker">Um pouco sobre mim</p><h2>Um engenheiro de Software Mobile que ama Design</h2><div className="about-text"><p>Cientista da computação em formação, com foco em desenvolvimento mobile nativo (iOS e Android). Uso design não como estética, mas como ferramenta de solução: cada decisão de interface existe para tornar o produto mais útil e a experiência mais fluida. Já passei por todo o ciclo de desenvolvimento, do brainstorm à manutenção em produção.</p><p>Fora do código, você me encontra assistindo animes, escutando artistas novos ou desenhando no estilo mangá/pixel art.</p></div><a className="button dark" href="#contato">Veja minha experiência</a></div>
      </section>

      <section className="section technologies" id="tecnologias"><div className="shell"><h2>Tecnologias em que tenho experiência</h2></div><div className="marquee"><div>{[...tech, ...tech].map((technology, index) => <img key={`${technology}-${index}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology}/${technology}-original.svg`} alt={technology} title={technology} />)}</div></div></section>

      <section className="contact shell" id="contato"><div className="contact-box"><div><h2>Vamos construir algo juntos?</h2><a className="button dark" href="mailto:danielaraujonobre10@gmail.com">Entre em contato</a></div></div></section>

      <footer><div className="shell footer-inner"><div className="footer-left"><a className="name" href="#hero">Daniel Nobre</a><div><a href="/portfolio.pdf" target="_blank">Baixe meu portfólio</a><a href="#contato">Entre em contato</a></div></div><div className="socials"><a href="https://www.linkedin.com/in/dan-nobre/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://github.com/Dan-Nobre" target="_blank" rel="noreferrer" aria-label="GitHub">⌘</a></div></div></footer>
    </main>
  );
}
