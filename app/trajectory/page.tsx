"use client";

import { PortfolioNav } from "../components/PortfolioNav";
import { StickerContact } from "../components/StickerContact";
import { useLanguage } from "../components/LanguageProvider";

type Localized = { pt: string; en: string };
type Entry = { period: Localized; title: Localized; org?: string; text: Localized; tags?: string[] };

// Fatos conferidos contra a base de currículo (base-curriculo.md). Nada de cliente, dado fiscal ou segredo.
const experience: Entry[] = [
  {
    period: { pt: "2026 - hoje", en: "2026 - today" },
    title: { pt: "Engenheiro Backend", en: "Backend Engineer" },
    org: "Pulse Tecnologia",
    text: {
      pt: "ERP SaaS de alimentação coletiva e SaaS multi-tenant de laboratório, na JVM (Java 21, Spring Boot, Grails), com PostgreSQL, Flyway, testes de integração e CI. No ERP, o código de boot caiu de 1.354 para 381 linhas (-72%) com 20 migrations Flyway versionadas. Implementou a leitura de boletim de campo por foto, com visão e saída estruturada atrás de um adapter por provedor (Claude e OpenAI); a interface está em stand-by.",
      en: "Collective-catering ERP SaaS and a multi-tenant laboratory SaaS on the JVM (Java 21, Spring Boot, Grails), with PostgreSQL, Flyway, integration tests and CI. In the ERP, bootstrap code dropped from 1,354 to 381 lines (-72%) with 20 versioned Flyway migrations. Built field-sheet reading from photos, with vision and structured output behind a per-provider adapter (Claude and OpenAI); the UI is on standby.",
    },
    tags: ["Java", "Spring Boot", "PostgreSQL", "LLMs"],
  },
  {
    period: { pt: "2025 - hoje", en: "2025 - today" },
    title: { pt: "Engenheiro de Software, Mobile, Arquitetura e DevOps", en: "Software Engineer, Mobile, Architecture and DevOps" },
    org: "Codify, JaPediu Delivery",
    text: {
      pt: "Maior contribuidor do app do cliente (840 de 1.254 commits), com Live Activities de rastreio de entrega em SwiftUI. No PedidoJap, a abertura do detalhe do pedido caiu de 350 ms para 110 ms (-69%). Implementou a importação de cardápio por IA: o lojista envia fotos, PDF ou texto, e a saída em JSON Schema estrito passa por conferência no servidor antes de gravar.",
      en: "Top contributor to the consumer app (840 of 1,254 commits), with SwiftUI Live Activities for delivery tracking. In PedidoJap, opening the order detail dropped from 350 ms to 110 ms (-69%). Built AI menu import: the merchant sends photos, a PDF or text, and strict JSON Schema output goes through server-side checks before anything is saved.",
    },
    tags: ["React Native", "SwiftUI", "NestJS", "LLMs"],
  },
  {
    period: { pt: "2023 - hoje", en: "2023 - today" },
    title: { pt: "Engenheiro de Software, Full Stack, Mobile e Automação (liderança técnica)", en: "Software Engineer, Full Stack, Mobile and Automation (technical lead)" },
    org: "Bullean Technologies",
    text: {
      pt: "Kite Easy (SaaS de escolas de esportes náuticos, 226 de 259 commits), BullPDV (PDV Android em Kotlin com integração Stone e painel web, único contribuidor) e o app e a API da ABK (React Native e Java com Spring Boot). No SysEleições, idealizou a arquitetura e liderou o backend Django.",
      en: "Kite Easy (watersports-school SaaS, 226 of 259 commits), BullPDV (Android point of sale in Kotlin with Stone integration and a web panel, sole contributor) and the ABK app and API (React Native and Java with Spring Boot). On SysEleições, designed the architecture and led the Django backend.",
    },
    tags: ["NestJS", "Kotlin", "React Native", "Spring Boot"],
  },
  {
    period: { pt: "2023 - hoje", en: "2023 - today" },
    title: { pt: "Residência em Engenharia de Software e mentoria", en: "Software Engineering residency and mentoring" },
    org: "Amontada Valley",
    text: {
      pt: "Líder técnico do time vencedor do Hackathon M. Dias Branco (2024), com arquitetura, planejamento e revisões de código. Hoje é voluntário e mentor: deu aulas de Git (2023) e um aulão de DevOps (out/2026).",
      en: "Technical lead of the winning team at the M. Dias Branco Hackathon (2024), covering architecture, planning and code review. Now a volunteer and mentor: taught Git classes (2023) and a DevOps session (Oct 2026).",
    },
    tags: ["Mentoring", "DevOps", "Tech lead"],
  },
];

const education: Entry[] = [
  {
    period: { pt: "2026.2 -", en: "2026.2 -" },
    title: { pt: "Tecnologia em Inteligência Artificial", en: "Technology in Artificial Intelligence" },
    org: "IFCE (EaD)",
    text: { pt: "Curso tecnólogo a distância, com início em 2026.2.", en: "Distance-learning technologist degree, starting in 2026.2." },
  },
  {
    period: { pt: "previsão 2029", en: "expected 2029" },
    title: { pt: "Bacharelado em Ciência da Computação", en: "B.Sc. in Computer Science" },
    org: "UniFanor Wyden",
    text: { pt: "Em andamento.", en: "In progress." },
  },
  {
    period: { pt: "2025", en: "2025" },
    title: { pt: "Apple Developer Academy, Bootcamp iOS", en: "Apple Developer Academy, iOS Bootcamp" },
    org: "IFCE",
    text: { pt: "Desenvolvimento iOS em Swift e SwiftUI.", en: "iOS development with Swift and SwiftUI." },
  },
  {
    period: { pt: "2024", en: "2024" },
    title: { pt: "Técnico em Redes de Computadores", en: "Computer Networks technician" },
    org: "EEEP Luiz Gonzaga Fonseca Mota",
    text: { pt: "Primeiros códigos em C++ e Python.", en: "First code in C++ and Python." },
  },
];

const highlights: Entry[] = [
  {
    period: { pt: "2026", en: "2026" },
    title: { pt: "Vencedor do Apple Swift Student Challenge", en: "Apple Swift Student Challenge winner" },
    text: { pt: "Com o app Ancestra, uma árvore genealógica em SwiftUI.", en: "With Ancestra, a family-tree app in SwiftUI." },
  },
  {
    period: { pt: "2026", en: "2026" },
    title: { pt: "Pull requests mergeados em código aberto", en: "Merged pull requests in open source" },
    text: {
      pt: "mozilla-ai/cq (testes do servidor FastAPI) e luizomf/omxterm (pacotes nativos x64 NSIS para Windows).",
      en: "mozilla-ai/cq (FastAPI server tests) and luizomf/omxterm (native x64 NSIS packages for Windows).",
    },
  },
  {
    period: { pt: "2026", en: "2026" },
    title: { pt: "Modelo publicado no Hugging Face", en: "Model published on Hugging Face" },
    text: {
      pt: "bertimbau-b2w-sentiment, com F1 macro de 0,9585 contra 0,9423 do baseline.",
      en: "bertimbau-b2w-sentiment, with macro F1 of 0.9585 against 0.9423 for the baseline.",
    },
  },
];

function Group({ label, entries, language }: { label: string; entries: Entry[]; language: "pt" | "en" }) {
  return <section className="trajectory-list shell"><p className="trajectory-group">{label}</p>{entries.map((entry) => <article key={entry.title.en}><p>{entry.period[language]}</p><div><h2>{entry.title[language]}</h2>{entry.org && <b className="org">{entry.org}</b>}<span>{entry.text[language]}</span>{entry.tags && <div className="case-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}</div></article>)}</section>;
}

export default function TrajectoryPage() {
  const { language } = useLanguage(); const english = language === "en";
  return <main><PortfolioNav /><section className="trajectory-hero"><div className="shell"><p>{english ? "Experience" : "Trajetória"}</p><h1>{english ? "I like building useful, fast and easy-to-use products." : "Eu gosto de construir produtos úteis, rápidos e fáceis de usar."}</h1></div></section>
    <Group label={english ? "Experience" : "Experiência"} entries={experience} language={language} />
    <Group label={english ? "Education" : "Formação"} entries={education} language={language} />
    <Group label={english ? "Highlights" : "Destaques"} entries={highlights} language={language} />
    <StickerContact /></main>;
}
