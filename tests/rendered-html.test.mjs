import assert from "node:assert/strict";
import test from "node:test";

// Renderiza as páginas pelo worker que o `npm run build` gera em dist/server.
async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200, `${path} deve responder 200`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("a home se apresenta como engenheiro de IA, backend e mobile", async () => {
  const html = await render("/");
  assert.match(html, /<title>[^<]*Engenheiro de software: IA, backend e mobile<\/title>/);
  assert.match(html, /Engenheiro de software · IA, backend e mobile/);
  assert.doesNotMatch(html, /iOS (&amp;|&) Full-Stack Developer/);
  assert.doesNotMatch(html, /Há mais de 5 anos/);
  assert.doesNotMatch(html, /—/, "o estilo do Juan é hífen simples, sem travessão");
});

test("os números dos labs publicados batem com os READMEs dos repositórios", async () => {
  const html = await render("/");
  assert.match(html, /id="ia"/);
  // delivery-routing-lab
  assert.match(html, /80,6% → 91,2%/);
  assert.match(html, /95,3% de 129\.013 decisões/);
  // menu-reader-lab
  assert.match(html, /1\.560 de 1\.561/);
  assert.match(html, /US\$ 0,00089 por cardápio/);
  assert.match(html, /US\$ 0,00077 contra US\$ 0,01202/);
  // reviews-sentiment-pt
  assert.match(html, /0,9585/);
  assert.match(html, /0,9423/);
  assert.match(html, /551 para 390/);
  // steam-price-forecast
  assert.match(html, /-29,8%/);
  assert.match(html, /17,9%/);
  assert.match(html, /1\.160 jogos/);
});

test("todo lab diz o que o número não prova e aponta para um repositório público", async () => {
  const html = await render("/");
  const cards = html.match(/<article class="lab-card">/g) ?? [];
  assert.equal(cards.length, 4);
  assert.equal((html.match(/<strong>Limites:<\/strong>/g) ?? []).length, cards.length);
  for (const repo of ["delivery-routing-lab", "menu-reader-lab", "reviews-sentiment-pt", "steam-price-forecast"]) {
    assert.match(html, new RegExp(`href="https://github\\.com/Juan-Severiano/${repo}"`));
  }
  assert.match(html, /href="https:\/\/huggingface\.co\/codevjuan\/bertimbau-b2w-sentiment"/);
});

test("a faixa de tecnologias usa ícones com versão fixa e inclui Python e Java", async () => {
  const html = await render("/");
  assert.doesNotMatch(html, /devicon@latest/);
  assert.match(html, /devicon@v2\.16\.0\/icons\/python\/python-original\.svg/);
  assert.match(html, /devicon@v2\.16\.0\/icons\/java\/java-original\.svg/);
});

test("a trajetória não repete os erros antigos e traz a Pulse", async () => {
  const html = await render("/trajectory");
  assert.match(html, /Pulse Tecnologia/);
  assert.match(html, /UniFanor Wyden/);
  assert.match(html, /Tecnologia em Inteligência Artificial/);
  assert.doesNotMatch(html, /Ciência da Computação · IFCE/);
  assert.doesNotMatch(html, /2024 — agora/);
  assert.doesNotMatch(html, /—/);
});

test("a página de projetos abre com o que é de IA e JVM", async () => {
  const html = await render("/projects");
  const athenas = html.indexOf("Athenas AI");
  const whisper = html.indexOf("WhisperSnap");
  assert.ok(athenas > -1 && whisper > -1 && athenas < whisper);
  assert.match(html, /RAG/);
});
