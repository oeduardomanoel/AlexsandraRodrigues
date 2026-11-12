<script setup lang="ts">
import { services, waLink } from '#shared/business'
</script>

<template>
  <section id="tratamentos" class="section services" aria-labelledby="services-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow" data-reveal>Tratamentos</p>
        <h2 id="services-title" data-reveal style="--d: 100ms">
          Cada pé chega com <em>uma história diferente.</em>
        </h2>
        <p class="lead" data-reveal style="--d: 200ms">
          Na avaliação a Alexsandra olha o pé inteiro, entende sua rotina e explica o que vai ser feito antes de começar.
          Estes são os cuidados mais procurados no consultório.
        </p>
      </div>

      <div class="cards">
        <article
          v-for="(s, i) in services"
          :id="s.slug"
          :key="s.slug"
          class="card"
          data-reveal
          :style="{ '--d': `${(i % 3) * 110}ms` }"
        >
          <div class="card__icon"><UiIcon :name="s.icon" :size="28" /></div>
          <h3 class="card__title">{{ s.title }}</h3>
          <p class="card__text">{{ s.short }}</p>
          <a
            :href="waLink(`Oi, Alexsandra! Vim pelo site e queria agendar uma avaliação sobre ${s.title.toLowerCase()}.`)"
            target="_blank"
            rel="noopener"
            class="card__link"
            :aria-label="`Agendar avaliação para ${s.title}`"
            :data-track="`whatsapp-servico-${s.slug}`"
          >
            Agendar
            <span class="card__arrow"><UiIcon name="arrow-up-right" :size="18" /></span>
          </a>
          <span class="card__index" aria-hidden="true">0{{ i + 1 }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: linear-gradient(to bottom, var(--cream), var(--sand));
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 34px 30px 30px;
  min-height: 300px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--line);
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.6s var(--ease),
    box-shadow 0.6s var(--ease),
    color 0.4s,
    border-color 0.4s;
}
.card::before {
  /* parede turquesa sobe no hover */
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(160deg, #5c9ec0, #123b4c 85%);
  clip-path: circle(0% at 85% 0%);
  transition: clip-path 0.8s var(--ease);
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow);
  border-color: transparent;
}
.card:hover::before {
  clip-path: circle(150% at 85% 0%);
}
.card__icon {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--mist);
  color: var(--ink);
  transition:
    background 0.5s,
    color 0.5s,
    transform 0.6s var(--ease);
}
.card:hover .card__icon {
  background: var(--gold-light);
  color: var(--ink);
  transform: rotate(-8deg) scale(1.06);
}
.card__title {
  margin-top: 8px;
  transition: color 0.4s;
}
.card__text {
  color: var(--muted);
  transition: color 0.4s;
}
.card:hover .card__title {
  color: #fff;
}
.card:hover .card__text {
  color: rgba(255, 255, 255, 0.82);
}
.card__link {
  margin-top: auto;
  padding-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: var(--ink);
  transition: color 0.4s;
}
.card__link::after {
  /* área clicável no card inteiro */
  content: '';
  position: absolute;
  inset: 0;
}
.card__arrow {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid currentColor;
  transition:
    transform 0.5s var(--ease),
    background 0.4s,
    border-color 0.4s;
}
.card:hover .card__link {
  color: var(--gold-light);
}
.card:hover .card__arrow {
  transform: rotate(45deg);
  background: var(--gold-light);
  border-color: var(--gold-light);
  color: var(--ink);
}
.card__index {
  position: absolute;
  top: 22px;
  right: 26px;
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.2rem;
  color: var(--gold);
  transition: color 0.4s;
}
.card:hover .card__index {
  color: var(--gold-light);
}

@media (max-width: 980px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .cards {
    grid-template-columns: 1fr;
  }
  .card {
    min-height: 0;
  }
}
</style>
