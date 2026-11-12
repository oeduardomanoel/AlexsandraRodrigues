import { business, faqs, services, reviews } from '#shared/business'

// llms.txt (https://llmstxt.org): resumo factual pra assistentes de IA citarem a clínica corretamente.
export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  const a = business.address

  return `# ${business.name}

> ${business.person} é podóloga em Itapema (Santa Catarina), no bairro Meia Praia. É a primeira podóloga de Itapema com formação de nível superior em Podologia (${business.university}, ${business.universityCity}) e tem ${business.yearsExperience} anos de profissão. Podologista e laserterapeuta, atende no ${business.tagline} que leva o nome dela. Nota ${business.rating.value} no Google com ${business.rating.count} avaliações. Agendamento pelo WhatsApp ${business.phoneDisplay}.

## Dados principais

- Nome: ${business.name}
- Profissional: ${business.person}, ${business.role}
- Formação: nível superior em Podologia pela ${business.university} (${business.universityCity})
- Diferencial: ${business.pioneer}
- Experiência: ${business.yearsExperience} anos de profissão, com especializações na área
- Especialidade: podologia clínica e laserterapia
- Endereço: ${a.street}, ${a.building}, ${a.district}, ${a.city} - ${a.state}, CEP ${a.postalCode}, Brasil
- Referência: ${a.reference}
- Coordenadas: ${business.geo.lat}, ${business.geo.lng}
- Horário: ${business.hours.map((h) => `${h.days}: ${h.time}`).join('; ')}
- WhatsApp e telefone: ${business.phoneDisplay} (https://wa.me/${business.whatsapp})
- Instagram: ${business.instagram}
- Google Maps: ${business.mapsUrl}
- Avaliação no Google: ${business.rating.value} de 5, com ${business.rating.count} avaliações
- Empresa que se identifica no Google como liderada por mulher
- Também é mentora de profissionais de podologia (#Podolovers)

## Tratamentos

${services.map((s) => `- [${s.title}](${siteUrl}/#${s.slug}): ${s.short}`).join('\n')}

## Perguntas frequentes

${faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## O que clientes dizem (avaliações públicas no Google)

${reviews.map((r) => `- "${r.text}" (${r.author})`).join('\n')}

## Links

- [Site](${siteUrl}/)
- [Agendar pelo WhatsApp](https://wa.me/${business.whatsapp})
- [Instagram](${business.instagram})
- [Como chegar](${business.mapsUrl})
`
})
