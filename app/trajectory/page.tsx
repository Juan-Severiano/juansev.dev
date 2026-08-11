import { PortfolioNav } from "../components/PortfolioNav";
import { StickerContact } from "../components/StickerContact";

const history = [
  ["2025 — agora", "Mentor Android", "Mentoria em desenvolvimento Android com Kotlin e Jetpack Compose, com foco em Clean Architecture e código escalável."],
  ["2024 — agora", "iOS Developer", "Desenvolvimento e publicação de aplicativos iOS com Swift, SwiftUI, UIKit, CoreData e APIs RESTful."],
  ["2023 — agora", "Ciência da Computação", "Bacharelado em Ciência da Computação no Instituto Federal de Educação, Ciência e Tecnologia do Ceará."],
];

export default function TrajectoryPage() {
  return <main><PortfolioNav /><section className="trajectory-hero"><video src="/images/trajectory-hero.mp4" autoPlay muted loop playsInline /><div className="shell"><p>Trajetória</p><h1>Eu gosto de construir produtos que as pessoas escolhem usar.</h1></div></section><section className="trajectory-list shell">{history.map(([period, title, description]) => <article key={title}><p>{period}</p><div><h2>{title}</h2><span>{description}</span><div className="case-tags"><span>Mobile</span><span>Produto</span><span>Design</span></div></div></article>)}</section><StickerContact /></main>;
}
