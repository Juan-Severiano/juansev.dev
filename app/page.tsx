const projects = [
  {
    number: "01",
    title: "Atlas Finance",
    type: "Produto digital · 2025",
    className: "atlas",
  },
  {
    number: "02",
    title: "Casa Mínima",
    type: "Marca & e-commerce · 2024",
    className: "casa",
  },
  {
    number: "03",
    title: "Vértice Studio",
    type: "Direção de arte · 2024",
    className: "vertice",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav container" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Voltar ao início">
            <span>SN</span><i />
          </a>
          <div className="nav-links">
            <a href="#trabalhos">Trabalhos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>
          <a className="availability" href="mailto:ola@seudominio.com">
            <span /> Disponível para projetos
          </a>
        </nav>

        <div className="hero-content container">
          <p className="eyebrow">Designer independente · Brasil</p>
          <h1>Eu construo<br /><em>presença</em> digital.</h1>
          <div className="hero-foot">
            <p>Estratégia, identidade e experiências digitais<br />para marcas que querem ser lembradas.</p>
            <a className="round-link" href="#trabalhos" aria-label="Ver trabalhos">↓</a>
          </div>
        </div>

        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="hero-index" aria-hidden="true">01 — 04</div>
      </section>

      <section className="ticker" aria-label="Áreas de atuação">
        <div>
          <span>IDENTIDADE VISUAL</span><b>✦</b><span>DIREÇÃO DE ARTE</span><b>✦</b><span>DESIGN DIGITAL</span><b>✦</b><span>IDENTIDADE VISUAL</span><b>✦</b>
        </div>
      </section>

      <section className="work container" id="trabalhos">
        <div className="section-top">
          <p className="eyebrow">Projetos selecionados</p>
          <p>(2023—2025)</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.number}>
              <div className="project-art" aria-hidden="true">
                <span className="project-number">{project.number}</span>
                <div className="art-mark" />
              </div>
              <div className="project-meta">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.type}</p>
                </div>
                <a href="#contato" aria-label={`Ver projeto ${project.title}`}>↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="container about-grid">
          <p className="eyebrow">Sobre mim</p>
          <div>
            <h2>Uma boa ideia merece uma forma que ninguém esquece.</h2>
            <p className="about-copy">Sou <strong>Seu Nome</strong>, designer focado em transformar posicionamentos claros em identidades e interfaces que conectam pessoas e negócios.</p>
            <a className="text-link" href="mailto:ola@seudominio.com">Mais sobre meu processo <span>→</span></a>
          </div>
        </div>
      </section>

      <footer id="contato">
        <div className="container">
          <p className="eyebrow">Tem um projeto em mente?</p>
          <a className="contact-title" href="mailto:ola@seudominio.com">Vamos conversar <span>↗</span></a>
          <div className="footer-bottom">
            <p>© 2026 Seu Nome</p>
            <div><a href="#inicio">Instagram</a><a href="#inicio">LinkedIn</a></div>
            <p>Feito no Brasil</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
