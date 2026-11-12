<script setup lang="ts">
import { business, faqs, services } from '#shared/business'

const { public: { siteUrl } } = useRuntimeConfig()

const title = 'Podóloga em Itapema | Alexsandra Rodrigues · Meia Praia'
const description =
  'Podóloga em Itapema (Meia Praia) com nota 5,0 no Google. Unha encravada, fungos, calos, pé diabético e laserterapia. Agende pelo WhatsApp (47) 99731-9955.'
const ogImage = `${siteUrl}/og-image.jpg`

useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogLocale: 'pt_BR',
  ogSiteName: 'Alexsandra Rodrigues Podóloga',
  ogTitle: title,
  ogDescription: description,
  ogUrl: siteUrl + '/',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Alexsandra Rodrigues, podóloga em Itapema, no seu consultório',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  author: business.person,
})

const orgId = `${siteUrl}/#podologa`
const personId = `${siteUrl}/#alexsandra`

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Podiatrist', 'MedicalBusiness', 'LocalBusiness'],
      '@id': orgId,
      name: business.name,
      alternateName: `${business.brand} ${business.tagline}`,
      description,
      url: siteUrl + '/',
      image: [`${siteUrl}/img/alexsandra-consultorio-1077.webp`, `${siteUrl}/img/sala-atendimento-1280.webp`],
      logo: `${siteUrl}/icon-512.png`,
      telephone: business.phoneE164,
      currenciesAccepted: 'BRL',
      medicalSpecialty: 'Podiatric',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${business.address.street}, ${business.address.building}`,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.postalCode,
        addressCountry: business.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
      hasMap: business.mapsUrl,
      areaServed: [
        { '@type': 'City', name: 'Itapema' },
        { '@type': 'City', name: 'Porto Belo' },
        { '@type': 'City', name: 'Balneário Camboriú' },
        { '@type': 'City', name: 'Bombinhas' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: business.openingHoursSpec.days,
          opens: business.openingHoursSpec.opens,
          closes: business.openingHoursSpec.closes,
        },
      ],
      sameAs: [business.instagram, business.instagramClinic, business.mapsUrl],
      founder: { '@id': personId },
      employee: { '@id': personId },
      knowsAbout: ['Podologia', 'Laserterapia', 'Unha encravada', 'Onicomicose', 'Pé diabético', 'Calos', 'Rachaduras nos pés'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tratamentos de podologia',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: s.title,
            description: s.short,
            url: `${siteUrl}/#${s.slug}`,
          },
        })),
      },
      potentialAction: {
        '@type': 'ReserveAction',
        target: `https://wa.me/${business.whatsapp}`,
        name: 'Agendar avaliação pelo WhatsApp',
      },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: business.person,
      jobTitle: business.role,
      worksFor: { '@id': orgId },
      image: `${siteUrl}/img/alexsandra-retrato-860.webp`,
      sameAs: [business.instagram],
      knowsAbout: ['Podologia', 'Laserterapia', 'Pé diabético'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl + '/',
      name: 'Alexsandra Rodrigues Podóloga',
      inLanguage: 'pt-BR',
      publisher: { '@id': orgId },
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl + '/',
      name: title,
      description,
      inLanguage: 'pt-BR',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': orgId },
      primaryImageOfPage: `${siteUrl}/og-image.jpg`,
      dateModified: new Date().toISOString().slice(0, 10),
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

useHead({
  link: [
    { rel: 'canonical', href: siteUrl + '/' },
    { rel: 'alternate', hreflang: 'pt-BR', href: siteUrl + '/' },
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }],
  noscript: [{ innerHTML: '<style>[data-reveal],[data-reveal-group] .split-line>span{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}</style>' }],
})
</script>

<template>
  <div>
    <a href="#conteudo" class="skip-link">Pular para o conteúdo</a>
    <SiteHeader />
    <main id="conteudo">
      <HeroSection />
      <MarqueeBand />
      <PainSection />
      <ServicesSection />
      <LaserSection />
      <AboutSection />
      <ExperienceSection />
      <ReviewsSection />
      <DiabetesSection />
      <MentorBand />
      <FaqSection />
      <ContactSection />
      <FinalCta />
    </main>
    <SiteFooter />
    <WhatsFab />
  </div>
</template>
