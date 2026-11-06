# juansev.dev

Portfólio de Francisco Juan Severiano: engenheiro de software com foco em IA aplicada, backend na JVM e mobile. Publicado em [juansev.dev](https://juansev.dev).

## O que tem

- **IA aplicada, medida:** quatro labs públicos (`delivery-routing-lab`, `menu-reader-lab`, `reviews-sentiment-pt`, `steam-price-forecast`), cada um com o número principal, o que ele não prova e os links.
- **Projetos**, **trajetória** e contato, em português e em inglês (a escolha de idioma fica guardada no navegador).

## Como os números chegam à página

Os números dos labs ficam em `app/data/labs.ts` e vêm do README de cada repositório. O teste `tests/rendered-html.test.mjs` confere cada valor no HTML gerado: se um número mudar no repositório de um lab, atualize o arquivo de dados e o teste juntos.

A trajetória (`app/trajectory/page.tsx`) só traz fatos já conferidos; não tem nome de cliente, dado fiscal nem segredo.

## Rodar

Requer Node.js 22.13 ou mais novo.

```bash
npm install
npm run dev     # servidor local
npm test        # build estático + testes do HTML gerado
npm run build
```

## Stack

[vinext](https://github.com/cloudflare/vinext) (API do Next.js sobre Vite), React 19, Tailwind CSS 4 e TypeScript. O build gera HTML estático (`output: "export"`), servido pela Vercel.

## Estrutura

| Caminho | O que é |
| --- | --- |
| `app/page.tsx` | home: apresentação, labs de IA, projetos em destaque, sobre e tecnologias |
| `app/data/labs.ts` | dados e números dos labs, em PT e EN |
| `app/data/projects.ts` | projetos; a home mostra os 6 primeiros |
| `app/trajectory/page.tsx` | experiência, formação e destaques |
| `app/components/LanguageProvider.tsx` | textos da interface em PT e EN |
| `tests/rendered-html.test.mjs` | testes do HTML gerado pelo build |
