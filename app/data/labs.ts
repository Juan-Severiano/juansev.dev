// Cada número desta página vem do README do repositório do lab (conferido em 06/11/2026).
// Se um número mudar no repositório, mude aqui também; o teste em tests/ trava os valores publicados.

export type Localized = { pt: string; en: string };

export type LabLink = { label: Localized; href: string };

export type Lab = {
  id: string;
  title: string;
  area: Localized;
  metric: Localized;
  metricLabel: Localized;
  description: Localized;
  limit: Localized;
  tags: string[];
  links: LabLink[];
};

const repository: Localized = { pt: "Repositório", en: "Repository" };

export const labs: Lab[] = [
  {
    id: "delivery-routing-lab",
    title: "delivery-routing-lab",
    area: { pt: "Simulação e aprendizado de máquina", en: "Simulation and machine learning" },
    metric: { pt: "80,6% → 91,2%", en: "80.6% → 91.2%" },
    metricLabel: {
      pt: "de entregas no prazo em 20 dias simulados, com preparo e tempo de viagem aprendidos, contra o mesmo planejador com regras fixas",
      en: "on-time deliveries over 20 simulated days with learned prep and travel times, against the same planner with fixed rules",
    },
    description: {
      pt: "Despacho de entregadores sobre as ruas reais de Itapipoca (OpenStreetMap), com demanda sintética. O Jev, um modelo linear próprio, escolhe a próxima parada e mostra o peso de cada fator; o loop de treino, a perda e o Adam foram escritos no projeto, e o PyTorch entra só com o autograd.",
      en: "Courier dispatch on the real streets of Itapipoca (OpenStreetMap), with synthetic demand. Jev, a small linear model of my own, picks the next stop and shows the weight of each factor; the training loop, loss and Adam are written in the project, and PyTorch only supplies autograd.",
    },
    limit: {
      pt: "Dados sintéticos. O Jev escolhe a mesma parada da referência privilegiada em 95,3% de 129.013 decisões, mas, dirigindo a frota, ficou em 91,3%, sem ganho demonstrado sobre o planejador com preparo aprendido.",
      en: "Synthetic data. Jev picks the same stop as the privileged reference in 95.3% of 129,013 decisions, but driving the fleet it reached 91.3%, with no demonstrated gain over the learned-prep planner.",
    },
    tags: ["Python", "PyTorch autograd", "OpenStreetMap"],
    links: [
      { label: repository, href: "https://github.com/Juan-Severiano/delivery-routing-lab" },
      { label: { pt: "Demo", en: "Demo" }, href: "https://juan-severiano.github.io/delivery-routing-lab/" },
    ],
  },
  {
    id: "menu-reader-lab",
    title: "menu-reader-lab",
    area: { pt: "Avaliação de LLMs com visão", en: "Evaluating vision LLMs" },
    metric: { pt: "1.560 de 1.561", en: "1,560 of 1,561" },
    metricLabel: {
      pt: "itens lidos certos em 60 cardápios sintéticos, a US$ 0,00089 por cardápio (gpt-6-luna)",
      en: "items read correctly across 60 synthetic menus, at US$ 0.00089 per menu (gpt-6-luna)",
    },
    description: {
      pt: "Mede qualidade, custo e latência de leitores de cardápio por IA contra um gabarito, para achar a leitura mais barata que ainda passa na conferência. O avaliador foi validado com leitores de ruído conhecido e todo gasto com API passa por um teto obrigatório.",
      en: "Measures quality, cost and latency of AI menu readers against ground truth, to find the cheapest reading that still passes the check. The evaluator was validated with readers of known noise, and every paid API call goes through a mandatory spend cap.",
    },
    limit: {
      pt: "Só modelos da OpenAI e só cardápios sintéticos: 7 modelos em 10 cardápios e 2 nos 60. Nos 10, o mais barato custou cerca de 1/15 da régua gpt-4.1 (US$ 0,00077 contra US$ 0,01202).",
      en: "OpenAI models only and synthetic menus only: 7 models on 10 menus and 2 on the 60. On the 10, the cheapest cost about 1/15 of the gpt-4.1 baseline (US$ 0.00077 against US$ 0.01202).",
    },
    tags: ["Python", "OpenAI", "Vision", "Evals"],
    links: [{ label: repository, href: "https://github.com/Juan-Severiano/menu-reader-lab" }],
  },
  {
    id: "reviews-sentiment-pt",
    title: "reviews-sentiment-pt",
    area: { pt: "Ajuste fino de modelo (NLP)", en: "Model fine-tuning (NLP)" },
    metric: { pt: "0,9585", en: "0.9585" },
    metricLabel: {
      pt: "de F1 macro do BERTimbau ajustado, contra 0,9423 do baseline TF-IDF, em 112 mil avaliações em português",
      en: "macro F1 for fine-tuned BERTimbau, against 0.9423 for a TF-IDF baseline, on 112k Portuguese reviews",
    },
    description: {
      pt: "Sentimento de avaliações de e-commerce, com divisão por produto para evitar vazamento. Os erros caem de 551 para 390 (-29%); o custo é a latência, cerca de 87 vezes maior por avaliação. O modelo está publicado no Hugging Face.",
      en: "Sentiment of e-commerce reviews, split by product to avoid leakage. Errors drop from 551 to 390 (-29%); the cost is latency, about 87 times higher per review. The model is published on Hugging Face.",
    },
    limit: {
      pt: "Ajustado com 20 mil das 89 mil avaliações de treino (2 épocas, 17,5 minutos); com mais dados o ganho pode ser maior, mas isso não foi medido.",
      en: "Fine-tuned on 20k of the 89k training reviews (2 epochs, 17.5 minutes); more data might widen the gain, but that was not measured.",
    },
    tags: ["Python", "Hugging Face", "BERTimbau", "TF-IDF"],
    links: [
      { label: repository, href: "https://github.com/Juan-Severiano/reviews-sentiment-pt" },
      { label: { pt: "Modelo no Hugging Face", en: "Model on Hugging Face" }, href: "https://huggingface.co/codevjuan/bertimbau-b2w-sentiment" },
    ],
  },
  {
    id: "steam-price-forecast",
    title: "steam-price-forecast",
    area: { pt: "Previsão com incerteza", en: "Forecasting with uncertainty" },
    metric: { pt: "-29,8%", en: "-29.8%" },
    metricLabel: {
      pt: "de erro de probabilidade (Brier) a 90 dias, contra a régua simples mais forte, em 1.160 jogos da Steam",
      en: "probability error (Brier score) at 90 days, against the strongest simple baseline, across 1,160 Steam games",
    },
    description: {
      pt: "Qual a chance de achar um preço menor se eu esperar 30 ou 90 dias? Gradient boosting contra regras simples, em avaliação temporal, com quantis P10, P50 e P90 do menor preço.",
      en: "What is the chance of finding a lower price if I wait 30 or 90 days? Gradient boosting against simple rules, in a time-split backtest, with P10, P50 and P90 quantiles of the lowest price.",
    },
    limit: {
      pt: "É redução de perda no backtest, não taxa de acerto nem prova de desempenho futuro. A 30 dias o ganho sobre a régua mais forte cai para 17,9%. A demo usa só dados sintéticos.",
      en: "This is loss reduction in a backtest, not an accuracy rate or proof of future performance. At 30 days the gain over the strongest baseline falls to 17.9%. The demo uses synthetic data only.",
    },
    tags: ["Python", "Gradient boosting", "Time-split backtest"],
    links: [
      { label: repository, href: "https://github.com/Juan-Severiano/steam-price-forecast" },
      { label: { pt: "Demo", en: "Demo" }, href: "https://juan-severiano.github.io/steam-price-forecast/" },
    ],
  },
];

export type LabMore = { id: string; title: string; description: Localized; href: string };

export const labsMore: LabMore[] = [
  {
    id: "openagents",
    title: "OpenAgents",
    description: {
      pt: "Orquestração self-hosted de agentes com vários LLMs (Anthropic, OpenAI, Gemini, Ollama): um orquestrador divide a tarefa e delega a agentes especialistas com skills.",
      en: "Self-hosted multi-LLM agent orchestration (Anthropic, OpenAI, Gemini, Ollama): an orchestrator splits the task and delegates to specialist agents with skills.",
    },
    href: "https://github.com/Juan-Severiano/OpenAgents",
  },
  {
    id: "handoff-mcp",
    title: "handoff-mcp",
    description: {
      pt: "Servidor MCP que funciona como memória compartilhada entre LLMs (Claude, Gemini, Copilot).",
      en: "MCP server that works as shared memory across LLMs (Claude, Gemini, Copilot).",
    },
    href: "https://github.com/Juan-Severiano/handoff-mcp",
  },
  {
    id: "cq",
    title: "mozilla-ai/cq",
    description: {
      pt: "PR mergeado com testes para o servidor FastAPI de um padrão aberto de aprendizado compartilhado entre agentes.",
      en: "Merged PR adding tests to the FastAPI server of an open standard for shared agent learning.",
    },
    href: "https://github.com/mozilla-ai/cq/pull/571",
  },
  {
    id: "omxterm",
    title: "luizomf/omxterm",
    description: {
      pt: "PR mergeado com pacotes nativos x64 NSIS para Windows.",
      en: "Merged PR adding native x64 NSIS packages for Windows.",
    },
    href: "https://github.com/luizomf/omxterm/pull/623",
  },
  {
    id: "kaggle",
    title: "Kaggle",
    description: {
      pt: "Titanic: 0,80143 no placar público (335 de 418). Name That LLM: em andamento.",
      en: "Titanic: 0.80143 on the public leaderboard (335 of 418). Name That LLM: in progress.",
    },
    href: "https://www.kaggle.com/juanseveriano",
  },
];
