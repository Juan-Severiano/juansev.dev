export type PortfolioProject = {
  id: string;
  title: string;
  image?: string;
  imageFit?: "contain";
  visual?: "pushlab";
  tags: string[];
  description: { pt: string; en: string };
  href?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "whispersnap",
    title: "WhisperSnap",
    image: "/images/project-assets/whispersnap-card.png",
    overlayIcon: "/images/project-assets/whispersnap.png",
    tags: ["SwiftUI", "Whisper", "Speech", "macOS"],
    description: {
      pt: "Aplicativo macOS de transcrição em tempo real, com captura de áudio, modelos Whisper, vocabulário personalizado e fluxo rápido pela barra de menu.",
      en: "A macOS real-time transcription companion with audio capture, Whisper models, custom vocabulary and a fast menu-bar workflow.",
    },
  },
  {
    id: "stash",
    title: "Stash",
    image: "/images/project-assets/stash-card.png",
    overlayIcon: "/images/project-assets/stash-app-icon.png",
    tags: ["Swift", "macOS", "Clipboard", "Privacy"],
    description: {
      pt: "Utilitário nativo para macOS que organiza histórico de clipboard e screenshots, com atalhos globais, filtros de conteúdo sensível e armazenamento local.",
      en: "A native macOS utility that organizes clipboard history and screenshots, with global shortcuts, sensitive-content filtering and local storage.",
    },
  },
  {
    id: "pushlab",
    title: "PushLab",
    visual: "pushlab",
    tags: ["SwiftUI", "APNs", "FCM", "Expo"],
    description: {
      pt: "Ferramenta open source para macOS criada para testar notificações push de apps Expo, APNs, FCM e Live Activities sem atrito no ciclo de desenvolvimento.",
      en: "An open-source macOS tool for frictionless testing of Expo, APNs, FCM and Live Activity push notifications during development.",
    },
    href: "https://github.com/Juan-Severiano/PushLab",
  },
  {
    id: "athenas-ai",
    title: "Athenas AI",
    image: "/images/project-assets/athenas-card.png",
    overlayIcon: "/images/project-assets/athenas.png",
    tags: ["TypeScript", "AI", "Monorepo", "NestJS"],
    description: {
      pt: "Ecossistema de IA em monorepo: web, admin, extensão, app desktop e API, reunindo workspaces, equipes, reuniões, skills, MCPs e métricas de uso.",
      en: "An AI monorepo ecosystem spanning web, admin, extension, desktop app and API for workspaces, teams, meetings, skills, MCPs and usage insights.",
    },
  },
  {
    id: "japediu",
    title: "JaPediu Delivery",
    image: "/images/juan-projects/japediu-placeholder.png",
    tags: ["React Native", "TypeScript", "iOS", "Android"],
    description: {
      pt: "Aplicativo do cliente JaPediu para pedidos e acompanhamento de delivery, desenvolvido em React Native para iOS e Android com releases automatizados.",
      en: "JaPediu’s consumer ordering and delivery-tracking app, built in React Native for iOS and Android with automated release workflows.",
    },
    href: "https://japediudelivery.com",
  },
  {
    id: "pedidojap",
    title: "PedidoJap",
    image: "/images/project-assets/pedidojap.png",
    tags: ["React Native", "Expo", "TypeScript", "CI/CD"],
    description: {
      pt: "Produto para parceiros do JaPediu, criado para operacionalizar pedidos e rotinas do delivery em múltiplas plataformas a partir de uma única base React Native.",
      en: "JaPediu’s partner product, built to run delivery ordering and operational routines across platforms from one React Native codebase.",
    },
  },
  {
    id: "japediu-express",
    title: "JaPediu Express",
    image: "/images/project-assets/japexpress.png",
    tags: ["NestJS", "Fastify", "Prisma", "MySQL"],
    description: {
      pt: "Serviço expresso do ecossistema JaPediu: interface web e API com autenticação JWT, documentação, banco MySQL em Docker e automação de deploy.",
      en: "JaPediu’s express-delivery service: web interface and API with JWT authentication, documentation, Dockerized MySQL and automated deployment.",
    },
  },
  {
    id: "kiteasy",
    title: "Kiteasy",
    image: "/images/project-assets/kiteasy.jpg",
    tags: ["NestJS", "React", "Prisma", "PostgreSQL"],
    description: {
      pt: "SaaS completo para gestão de escolas de esportes náuticos, com web, API, mobile para instrutores, permissões, PostgreSQL e deploy de produção.",
      en: "A complete SaaS for watersports-school management, with web, API, instructor mobile app, permissions, PostgreSQL and production deployment.",
    },
  },
  {
    id: "sys-eleicoes",
    title: "SysEleições",
    image: "/images/project-assets/syseleicoes.png",
    tags: ["Next.js", "React", "TypeScript", "Django REST"],
    description: {
      pt: "Sistema web para gestão de eleitores e campanhas, construído em Next.js e React e integrado a uma API Django REST.",
      en: "A web system for voter and campaign management, built with Next.js and React and integrated with a Django REST API.",
    },
  },
  {
    id: "bitdoglab",
    title: "BitDogLab",
    image: "/images/project-assets/bitdoglab.png",
    tags: ["React Native", "Expo Router", "TypeScript", "MicroPython"],
    description: {
      pt: "IDE mobile para criar, organizar e editar arquivos de projetos embarcados, com workspace, editor e suporte ao ecossistema de microcontroladores.",
      en: "A mobile IDE for creating, organizing and editing embedded-project files, with a workspace, editor and microcontroller ecosystem support.",
    },
  },
  {
    id: "totalprod",
    title: "Totalprod",
    image: "/images/project-assets/totalprod.png",
    tags: ["Grails", "Groovy", "ERP", "Docker"],
    description: {
      pt: "Sistema corporativo de produção e gestão comercial, com módulos de ERP, pedidos, lotes, contratos, faturamento e releases automatizados.",
      en: "A corporate production and commercial-management system with ERP, orders, batches, contracts, invoicing and automated releases.",
    },
    href: "https://sistema.totalprod.com.br",
  },
];

export const projectEngineering = {
  pt: {
    eyebrow: "Do produto ao ambiente de produção",
    title: "Full-stack também é entregar software rodando de verdade.",
    description: "Além das interfaces, desenho APIs, bancos e integrações; crio pipelines de CI/CD, empacoto serviços com Docker e preparo configurações de deploy, Nginx e servidores para cada produto ganhar escala com previsibilidade.",
    items: ["Web, iOS e Android", "APIs, bancos e integrações", "CI/CD e releases", "Docker, Nginx e servidores"],
  },
  en: {
    eyebrow: "From product to production",
    title: "Full-stack also means shipping software that runs for real.",
    description: "Beyond interfaces, I design APIs, databases and integrations; build CI/CD pipelines, package services with Docker and prepare deployment, Nginx and server configurations so each product can scale predictably.",
    items: ["Web, iOS and Android", "APIs, databases and integrations", "CI/CD and releases", "Docker, Nginx and servers"],
  },
};
