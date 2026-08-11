import { PortfolioNav } from "./components/PortfolioNav";
import { ProjectCard } from "./components/ProjectCard";
import { StickerContact } from "./components/StickerContact";

const projects = [
  { image: "gympsi-card.png", title: "Gympsi", tags: ["iOS", "SwiftUI", "SwiftData", "Publicado"], description: "Esqueça as fichas manuais e treinos não registrados. Com Gympsi, sua rotina em uma vida mais saudável ganha outra visão.", href: "/projects/gympsi" },
  { image: "lazarus-card.png", title: "Lazarus, Into the Dungeon", tags: ["iOS", "Swift", "Godot"], description: "Você foi abandonado por seus companheiros em uma masmorra cheia de perigos. Recrute aliados e desça às profundezas da masmorra. Você buscará a paz ou vingança contra aqueles que te traíram?", href: "/projects/lazarus-into-the-dungeon", download: "https://apps.apple.com/us/app/lazarus-into-the-dungeon/id6754764904" },
  { image: "eyebound-card.png", title: "Eyebound", tags: ["iOS", "SwiftUI", "Card Game"], description: "Prepare-se para desafiar inimigos de outro plano. Combine cartas para causar o máximo de dano aos seus oponentes e ajudá-los a encontrar o descanso eterno.", upcoming: true },
  { image: "walk-hatch-card.png", title: "Walk & Hatch", tags: ["iOS", "SwiftUI", "HealthKit", "CoreData"], description: "Uma nova forma de descobrir as caminhadas. Faça companheiros e descubra uma nova maneira de se manter saudável.", upcoming: true },
  { image: "dojodoro-card.png", title: "Dojodoro", tags: ["iOS", "SwiftUI", "Coordinator"], description: "Cultive plantas enquanto foca em seus objetivos. Dojodoro traz uma experiência calma e relaxante para quem busca foco e leveza.", upcoming: true },
  { image: "nirva-card.png", title: "Nirva", tags: ["iPadOS", "Design", "Machine Learning"], description: "Aproveite uma vida mais plena com alongamentos. Siga um programa guiado feito para você usando seu iPad.", upcoming: true },
];
const tech = ["swift", "kotlin", "dart", "react", "javascript", "git", "github", "figma"];

export default function Home() {
  return <main><PortfolioNav />
    <section className="hero hero-light" id="hero"><div className="shell hero-inner"><div className="hero-copy"><div><h1>Daniel Nobre</h1><p>Engenheiro de Software Mobile<span className="cursor" /></p></div><div className="hero-actions"><a className="button dark" href="https://www.linkedin.com/in/dan-nobre/" target="_blank" rel="noreferrer">Vamos conversar <b>→</b></a><a className="button light" href="/portfolio.pdf" target="_blank">Baixe meu portfólio</a></div></div><img className="profile-photo" src="/images/profile.png" alt="Foto de Daniel Nobre" /></div></section>
    <section className="section shell projects" id="projetos"><h2>Trabalhos mais relevantes</h2><div className="project-grid">{projects.map((project) => <ProjectCard {...project} key={project.title} />)}</div><a className="button dark full-button" href="/projects">Veja todos os meus projetos</a></section>
    <section className="section shell about" id="sobre"><div className="about-photo"><img src="/images/about-photo.jpg" alt="Daniel Nobre" /></div><div className="about-content"><p className="kicker">Um pouco sobre mim</p><h2>Um engenheiro de Software Mobile que ama Design</h2><div className="about-text"><p>Cientista da computação em formação, com foco em desenvolvimento mobile nativo (iOS e Android). Uso design não como estética, mas como ferramenta de solução: cada decisão de interface existe para tornar o produto mais útil e a experiência mais fluida. Já passei por todo o ciclo de desenvolvimento, do brainstorm à manutenção em produção.</p><p>Fora do código, você me encontra assistindo animes, escutando artistas novos ou desenhando no estilo mangá/pixel art.</p></div><a className="button dark" href="/trajectory">Veja minha experiência</a></div></section>
    <section className="section technologies" id="tecnologias"><div className="shell"><h2>Tecnologias em que tenho experiência</h2></div><div className="marquee"><div>{[...tech, ...tech].map((technology, index) => <img key={`${technology}-${index}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology}/${technology}-original.svg`} alt={technology} title={technology} />)}</div></div></section>
    <StickerContact />
    <footer><div className="shell footer-inner"><div className="footer-left"><a className="name" href="/">Daniel Nobre</a><div><a href="/portfolio.pdf" target="_blank">Baixe meu portfólio</a><a href="/#contato">Entre em contato</a></div></div><div className="socials"><a href="https://www.linkedin.com/in/dan-nobre/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://github.com/Dan-Nobre" target="_blank" rel="noreferrer" aria-label="GitHub">⌘</a></div></div></footer>
  </main>;
}
