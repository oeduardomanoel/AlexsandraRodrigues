<script setup lang="ts">
import { waLink } from '#shared/business'

const steps = [
  {
    icon: 'chat',
    title: 'Você chama no WhatsApp',
    text: 'Conta o que está incomodando e escolhe o melhor horário da semana.',
  },
  {
    icon: 'search',
    title: 'Avaliação sem pressa',
    text: 'A Alexsandra examina pés e unhas, explica o que encontrou e qual o caminho do tratamento.',
  },
  {
    icon: 'sparkle',
    title: 'Tratamento e orientação',
    text: 'Você sai sabendo como cuidar dos pés em casa até a próxima visita.',
  },
]
</script>

<template>
  <section class="section exp" aria-labelledby="exp-title">
    <div class="container exp__grid">
      <div class="exp__copy">
        <p class="eyebrow" data-reveal>Como é o atendimento</p>
        <h2 id="exp-title" data-reveal style="--d: 100ms">
          O cafezinho já está <em>na bandeja.</em>
        </h2>
        <p class="lead" data-reveal style="--d: 180ms">
          Quem conhece o consultório fala de atendimento humanizado. Na prática é isso aqui: atendimento com calma, escuta de verdade
          e um tratamento feito do jeito que o seu pé precisa.
        </p>

        <ol class="steps">
          <li v-for="(s, i) in steps" :key="s.title" class="step" data-reveal :style="{ '--d': `${240 + i * 110}ms` }">
            <span class="step__icon"><UiIcon :name="s.icon" :size="22" /></span>
            <div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
            </div>
          </li>
        </ol>

        <a :href="waLink()" target="_blank" rel="noopener" class="btn" data-reveal style="--d: 600ms" data-track="whatsapp-experiencia">
          <UiIcon name="whatsapp" /> Marcar meu horário
        </a>
      </div>

      <figure class="exp__photo" data-reveal="mask" style="--d: 150ms">
        <div class="exp__photo-inner" data-parallax="0.07">
          <img
            src="/img/atendimento-cafezinho-1205.webp"
            srcset="/img/atendimento-cafezinho-600.webp 600w, /img/atendimento-cafezinho-1205.webp 1205w"
            sizes="(max-width: 900px) 92vw, 480px"
            width="1205"
            height="1600"
            alt="Alexsandra Rodrigues atendendo uma cliente na cadeira de podologia, com uma xícara de café servida em bandeja de vidro em primeiro plano"
            loading="lazy"
            decoding="async"
          >
        </div>
        <span class="exp__tag"><UiIcon name="coffee" :size="18" /> Momento real do consultório</span>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.exp {
  background: var(--mist);
  overflow: hidden;
}
.exp__grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(48px, 7vw, 110px);
  align-items: center;
}
.exp__copy {
  display: grid;
  gap: 22px;
  justify-items: start;
}
.steps {
  list-style: none;
  padding: 0;
  margin: 12px 0 10px;
  display: grid;
  gap: 4px;
  width: 100%;
  counter-reset: s;
}
.step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  padding: 20px 18px;
  border-radius: var(--radius-sm);
  transition:
    background 0.4s,
    transform 0.5s var(--ease);
}
.step:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: translateX(6px);
}
.step__icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid rgba(184, 146, 74, 0.5);
  color: var(--gold-deep);
  background: #fff;
  transition:
    background 0.4s,
    color 0.4s;
}
.step:hover .step__icon {
  background: var(--ink);
  color: var(--gold-light);
}
.step h3 {
  font-size: 1.45rem;
}
.step p {
  margin-top: 4px;
  color: var(--muted);
}
.exp__photo {
  position: relative;
  margin: 0;
  border-radius: 999px 999px var(--radius) var(--radius);
  overflow: hidden;
  aspect-ratio: 3 / 4;
  box-shadow: var(--shadow);
}
.exp__photo[data-reveal='mask'] {
  clip-path: inset(100% 0 0 0 round 999px 999px 22px 22px);
}
.exp__photo.is-in {
  clip-path: inset(0 0 0 0 round 999px 999px 22px 22px);
}
.exp__photo-inner {
  position: absolute;
  inset: -8% 0;
}
.exp__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.4s var(--ease);
}
.exp__photo:hover img {
  transform: scale(1.05);
}
.exp__tag {
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  padding: 9px 16px;
  border-radius: 999px;
  background: rgba(248, 244, 238, 0.94);
  color: var(--ink);
  font-size: 0.82rem;
}
.exp__tag svg {
  color: var(--gold-deep);
}

@media (max-width: 900px) {
  .exp__grid {
    grid-template-columns: 1fr;
  }
  .exp__photo {
    order: -1;
    width: min(100%, 420px);
    justify-self: center;
  }
}
</style>
