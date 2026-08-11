"use client";

import { useLanguage } from "./LanguageProvider";

type ProjectCardProps = { image: string; title: string; tags: string[]; description: string; href?: string; upcoming?: boolean; download?: string };
const englishDescriptions: Record<string, string> = {
  "M. Dias Branco Innovation": "Winning platform at Amontada Valley's third Hackathon, developed in partnership with M. Dias Branco.",
  "JaPediu Delivery": "Delivery app with real-time tracking, Live Activities and Clean Code/MVVM architecture, used daily by thousands of people.",
  "SysEleições": "Campaign management platform with web, offline mobile and secure synchronization for candidates and teams.",
  "Cetra": "Offline-first app for farmer registration, with intelligent synchronization and scalable architecture.",
  "PedidoJap": "Administrative delivery application built from scratch, with native notification and performance foundations.",
  "BitDogLab REPL": "Mobile IDE for Raspberry Pi with native Swift and Kotlin modules, made in partnership with Unicamp.",
};

export function ProjectCard({ image, title, tags, description, href, upcoming, download }: ProjectCardProps) {
  const { t, language } = useLanguage();
  return <article className="project-card"><div className="card-image"><img src={`/images/${image}`} alt={`Screenshot do projeto ${title}`} />{upcoming && <span>{t.card.comingSoon}</span>}</div><div className="card-body"><div><h3>{title}</h3><div className="tags">{tags.map((tag) => <small key={tag}>{tag === "Vencedor" && language === "en" ? "Winner" : tag}</small>)}</div><p>{language === "en" ? englishDescriptions[title] ?? description : description}</p></div><div className="card-links">{upcoming ? <em>{t.card.comingSoon}</em> : <a href={href}>{t.card.more} <b>→</b></a>}{download && <a href={download} target="_blank" rel="noreferrer">Download <b>↗</b></a>}</div></div></article>;
}
