<script setup lang="ts">
import { business } from '#shared/business'
</script>

<template>
  <section id="sobre" class="section about" aria-labelledby="about-title">
    <div class="container about__grid">
      <div class="about__media">
        <figure class="about__photo" data-reveal="mask">
          <div data-parallax="0.05" class="about__photo-inner">
            <img
              src="/img/sala-atendimento-1280.webp"
              srcset="/img/sala-atendimento-800.webp 800w, /img/sala-atendimento-1280.webp 1280w"
              sizes="(max-width: 900px) 92vw, 560px"
              width="1280"
              height="959"
              alt="Sala de atendimento do consultório de podologia com cadeira clínica azul, lustre e parede de certificados"
              loading="lazy"
              decoding="async"
            >
          </div>
          <figcaption>A sala de atendimento e a parede de certificados</figcaption>
        </figure>
        <div class="about__badge" data-reveal="zoom" style="--d: 300ms">
          <BrandMonogram :size="54" />
          <span>1ª de Itapema<br>com formação<br>superior</span>
        </div>
      </div>

      <div class="about__copy">
        <p class="eyebrow" data-reveal>Quem cuida de você</p>
        <h2 id="about-title" data-reveal style="--d: 100ms">
          Prazer, <em>Alexsandra Rodrigues.</em>
        </h2>
        <p data-reveal style="--d: 180ms">
          São {{ business.yearsExperience }} anos de profissão. A Alexsandra é a primeira podóloga de Itapema com formação de nível
          superior em Podologia, pela {{ business.university }}, em {{ business.universityCity }}, e tem especializações na área.
        </p>
        <p data-reveal style="--d: 210ms">
          Hoje ela atende em Meia Praia, no Centro de Bem-Estar e Podologia que leva o nome dela. O espaço novo foi inaugurado
          em 2024, e foi assim que ela contou a novidade no Instagram:
        </p>

        <blockquote class="quote" data-reveal style="--d: 240ms">
          <p>“Quando um ciclo acaba, outro começa. E nessa nova etapa grande serão os desafios, mas imensos são os sonhos!!”</p>
          <cite>{{ business.instagramHandle }}</cite>
        </blockquote>

        <p data-reveal style="--d: 300ms">
          Na sala de atendimento, uma parede inteira guarda os certificados dos cursos que ela fez ao longo da carreira.
          Quem senta na cadeira dela costuma comentar outra coisa: o tempo que ela dedica pra entender o que você sente.
        </p>

        <ul class="facts" data-reveal style="--d: 360ms">
          <li>
            <strong>{{ business.rating.value }}</strong>
            <span>nota no Google</span>
          </li>
          <li>
            <strong>{{ business.rating.count }}</strong>
            <span>avaliações de clientes</span>
          </li>
          <li>
            <strong>{{ business.yearsExperience }} anos</strong>
            <span>de profissão</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(48px, 7vw, 110px);
  align-items: center;
}
.about__media {
  position: relative;
}
.about__photo {
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  aspect-ratio: 4 / 4.4;
  box-shadow: var(--shadow);
}
.about__photo-inner {
  position: absolute;
  inset: -6% 0;
}
.about__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 40% 50%;
  transition: transform 1.4s var(--ease);
}
.about__photo:hover img {
  transform: scale(1.05);
}
.about__photo figcaption {
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(248, 244, 238, 0.92);
  font-size: 0.82rem;
  color: var(--ink);
}
.about__badge {
  position: absolute;
  right: -24px;
  top: -28px;
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--ink);
  color: var(--cream);
  display: grid;
  place-items: center;
  align-content: center;
  gap: 4px;
  text-align: center;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  line-height: 1.35;
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(220, 192, 134, 0.5);
  transition: transform 0.6s var(--ease);
}
.about__badge:hover {
  transform: rotate(-10deg) scale(1.05);
}
.about__copy {
  display: grid;
  gap: 22px;
}
.about__copy > p:not(.eyebrow) {
  color: var(--muted);
  font-size: 1.08rem;
}
.quote {
  margin: 6px 0;
  padding: 6px 0 6px 26px;
  border-left: 2px solid var(--gold);
}
.quote p {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.45rem, 2.4vw, 1.9rem);
  line-height: 1.25;
  color: var(--ink);
}
.quote cite {
  display: block;
  margin-top: 10px;
  font-style: normal;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  color: var(--gold-deep);
}
.facts {
  list-style: none;
  margin: 10px 0 0;
  padding: 26px 0 0;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.facts li {
  display: grid;
  gap: 2px;
}
.facts strong {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  color: var(--ink);
  line-height: 1;
}
.facts span {
  font-size: 0.86rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
  .about__badge {
    right: -6px;
    top: -36px;
    width: 120px;
    font-size: 0.6rem;
  }
}
@media (max-width: 480px) {
  .facts {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
