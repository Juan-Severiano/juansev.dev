"use client";

import { useLanguage } from "./LanguageProvider";

type ProjectVisual = "pushlab";
type ProjectCardProps = { image?: string; imageFit?: "contain"; overlayIcon?: string; visual?: ProjectVisual; title: string; tags: string[]; description: string; href?: string; upcoming?: boolean; download?: string };

export function ProjectCard({ image, imageFit, overlayIcon, visual, title, tags, description, href, upcoming, download }: ProjectCardProps) {
  const { t } = useLanguage();
  return <article className="project-card"><div className={`card-image ${imageFit === "contain" ? "card-image-contain" : ""} ${visual ? `visual-${visual}` : ""}`}>{image ? <img src={image} alt={`Screenshot do projeto ${title}`} /> : <div className="product-visual" aria-hidden="true"><span>PushLab</span><i>APNs · FCM · Expo</i><b>↗</b></div>}{overlayIcon && <img className="card-overlay-icon" src={overlayIcon} alt="" aria-hidden="true" />}{upcoming && <span>{t.card.comingSoon}</span>}</div><div className="card-body"><div><h3>{title}</h3><div className="tags">{tags.map((tag) => <small key={tag}>{tag}</small>)}</div><p>{description}</p></div><div className="card-links">{upcoming ? <em>{t.card.comingSoon}</em> : href ? <a href={href} target="_blank" rel="noreferrer">{t.card.more} <b>→</b></a> : null}{download && <a href={download} target="_blank" rel="noreferrer">Download <b>↗</b></a>}</div></div></article>;
}
