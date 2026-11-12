export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  // Buscadores e assistentes de IA liberados: o objetivo é ser encontrado e citado.
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Bingbot',
    'meta-externalagent',
  ]

  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /_nuxt/builds/',
    '',
    ...aiBots.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
    `# Resumo para modelos de linguagem: ${siteUrl}/llms.txt`,
    '',
  ].join('\n')
})
