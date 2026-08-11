type ProjectCardProps = { image: string; title: string; tags: string[]; description: string; href?: string; upcoming?: boolean; download?: string };

export function ProjectCard({ image, title, tags, description, href, upcoming, download }: ProjectCardProps) {
  return <article className="project-card"><div className="card-image"><img src={`/images/${image}`} alt={`Screenshot do projeto ${title}`} />{upcoming && <span>Em breve</span>}</div><div className="card-body"><div><h3>{title}</h3><div className="tags">{tags.map((tag) => <small key={tag}>{tag}</small>)}</div><p>{description}</p></div><div className="card-links">{upcoming ? <em>Em breve</em> : <a href={href}>Ver mais <b>→</b></a>}{download && <a href={download} target="_blank" rel="noreferrer">Baixar <b>↗</b></a>}</div></div></article>;
}
