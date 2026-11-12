export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public
  const today = new Date().toISOString().slice(0, 10)
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const images = [
    ['img/alexsandra-consultorio-1077.webp', 'Alexsandra Rodrigues, podóloga em Itapema, no consultório'],
    ['img/sala-atendimento-1280.webp', 'Sala de atendimento de podologia em Meia Praia, Itapema'],
    ['img/atendimento-cafezinho-1205.webp', 'Atendimento de podologia com cafezinho servido'],
    ['img/resultado-unha-1-899.webp', 'Resultado de tratamento de unha do pé'],
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
${images
  .map(
    ([src, title]) => `    <image:image>
      <image:loc>${siteUrl}/${src}</image:loc>
      <image:title>${title}</image:title>
    </image:image>`,
  )
  .join('\n')}
  </url>
  <url>
    <loc>${siteUrl}/llms.txt</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
`
})
