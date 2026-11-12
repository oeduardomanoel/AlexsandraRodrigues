# Alexsandra Rodrigues · Podóloga em Itapema

Site one-page em Nuxt 4, pré-renderizado (HTML estático), pronto pra Vercel.

## Rodar local

```bash
npm install
npm run dev
```

## Deploy na Vercel

1. Suba esta pasta num repositório no GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório. O framework (Nuxt) é detectado sozinho.
3. Em **Environment Variables**, crie `NUXT_PUBLIC_SITE_URL` com o domínio final, sem barra no fim (ex.: `https://alexsandrarodrigues.com.br`).
4. Deploy. Depois, conecte o domínio em **Settings → Domains**.

Se o domínio mudar, troque só a variável e faça redeploy: canonical, Open Graph, schema.org, `sitemap.xml`, `robots.txt` e `llms.txt` se atualizam juntos.

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefone, endereço, horário, tratamentos, FAQ, depoimentos | `shared/business.ts` |
| Cores, fontes, animações globais | `app/assets/css/main.css` |
| Seções da página | `app/components/*Section.vue` |
| Title, description, schema.org | `app/pages/index.vue` |
| robots.txt / sitemap.xml / llms.txt | `server/routes/` |

## SEO e GEO incluídos

- Title e meta description com "podóloga em Itapema", Open Graph e Twitter Card com imagem 1200×630.
- Schema.org em `@graph`: `Podiatrist` (LocalBusiness com endereço, geo, horário, catálogo de tratamentos), `Person`, `WebSite`, `WebPage` e `FAQPage`.
- `robots.txt` liberando Google, Bing e crawlers de IA (GPTBot, ClaudeBot, PerplexityBot etc.).
- `sitemap.xml` com image sitemap.
- `llms.txt` com o resumo factual da clínica pra assistentes de IA citarem certo.
- HTML semântico, `alt` descritivo em todas as fotos, imagens WebP responsivas, mapa carregado sob demanda.

## Rastreamento

Todo botão de WhatsApp tem `data-track="whatsapp-<local>"`. Dá pra criar acionadores de clique no GTM por esse atributo e medir qual seção mais converte.
