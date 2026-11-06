"use client";

import { useLanguage } from "./LanguageProvider";
import { labs, labsMore } from "../data/labs";

export function LabsSection() {
  const { language, t } = useLanguage();
  return <section className="section shell labs" id="ia">
    <h2>{t.labs.title}</h2>
    <p className="labs-intro">{t.labs.intro}</p>
    <div className="lab-grid">{labs.map((lab) => <article className="lab-card" key={lab.id}>
      <p className="lab-area">{lab.area[language]}</p>
      <h3>{lab.title}</h3>
      <p className="lab-metric">{lab.metric[language]}</p>
      <p className="lab-metric-label">{lab.metricLabel[language]}</p>
      <p className="lab-text">{lab.description[language]}</p>
      <p className="lab-limit"><strong>{t.labs.limits}</strong> {lab.limit[language]}</p>
      <div className="tags">{lab.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
      <div className="card-links">{lab.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label[language]} <b>→</b></a>)}</div>
    </article>)}</div>
    <div className="lab-more"><h3>{t.labs.more}</h3><ul>{labsMore.map((item) => <li key={item.id}><a href={item.href} target="_blank" rel="noreferrer"><b>{item.title}</b><span>{item.description[language]}</span></a></li>)}</ul></div>
  </section>;
}
