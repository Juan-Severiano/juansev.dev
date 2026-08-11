import { PortfolioNav } from "../components/PortfolioNav";
import { ProjectCard } from "../components/ProjectCard";
import { StickerContact } from "../components/StickerContact";

const projects = [
  { image: "gympsi-card.png", title: "Gympsi", tags: ["iOS", "SwiftUI", "SwiftData", "Publicado"], description: "Esqueça as fichas manuais e treinos não registrados. Com Gympsi, sua rotina em uma vida mais saudável ganha outra visão.", href: "/projects/gympsi" },
  { image: "lazarus-card.png", title: "Lazarus, Into the Dungeon", tags: ["iOS", "Swift", "Godot"], description: "Você foi abandonado por seus companheiros em uma masmorra cheia de perigos. Recrute aliados e desça às profundezas da masmorra.", href: "/projects/lazarus-into-the-dungeon", download: "https://apps.apple.com/us/app/lazarus-into-the-dungeon/id6754764904" },
  { image: "eyebound-card.png", title: "Eyebound", tags: ["iOS", "SwiftUI", "Card Game"], description: "Prepare-se para desafiar inimigos de outro plano. Combine cartas para causar o máximo de dano aos seus oponentes.", upcoming: true },
  { image: "walk-hatch-card.png", title: "Walk & Hatch", tags: ["iOS", "SwiftUI", "HealthKit", "CoreData"], description: "Uma nova forma de descobrir as caminhadas. Faça companheiros e descubra uma nova maneira de se manter saudável.", upcoming: true },
  { image: "dojodoro-card.png", title: "Dojodoro", tags: ["iOS", "SwiftUI", "Coordinator"], description: "Cultive plantas enquanto foca em seus objetivos. Dojodoro traz uma experiência calma e relaxante.", upcoming: true },
  { image: "nirva-card.png", title: "Nirva", tags: ["iPadOS", "Design", "Machine Learning"], description: "Aproveite uma vida mais plena com alongamentos. Siga um programa guiado feito para você usando seu iPad.", upcoming: true },
];

export default function ProjectsPage() {
  return <main><PortfolioNav /><section className="projects-hero shell"><p>Projetos em destaque</p><h1>Apps que constroem hábito, não fricção.</h1><span>Uma seleção do que envolvi de ponta a ponta — do problema real do usuário até o app na loja.</span></section><section className="shell all-projects"><div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div></section><StickerContact /></main>;
}
