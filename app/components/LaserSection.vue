<script setup lang="ts">
import { waLink } from '#shared/business'
</script>

<template>
  <section class="laser grain" aria-labelledby="laser-title">
    <div class="container laser__grid">
      <div class="laser__visual" data-reveal="zoom">
        <div class="laser__orb" data-parallax="0.05">
          <span v-for="n in 4" :key="n" class="laser__ring" :style="{ '--n': n }" />
          <UiIcon name="laser" :size="64" />
        </div>
      </div>
      <div class="laser__copy">
        <p class="eyebrow eyebrow--light" data-reveal>Laserterapia</p>
        <h2 id="laser-title" data-reveal style="--d: 100ms">
          Podologia clínica com <em>laser como aliado.</em>
        </h2>
        <p data-reveal style="--d: 200ms">
          Além de podologista, a Alexsandra é laserterapeuta. Em alguns tratamentos de unhas e da pele dos pés,
          o laser entra junto com a podologia clínica pra ajudar na recuperação.
        </p>
        <p data-reveal style="--d: 260ms">
          Ele não serve pra todo caso. Na avaliação ela diz com clareza se faz sentido pra você.
        </p>
        <a
          :href="waLink('Oi, Alexsandra! Queria saber se a laserterapia serve pro meu caso.')"
          target="_blank"
          rel="noopener"
          class="btn btn--gold"
          data-reveal
          style="--d: 340ms"
          data-track="whatsapp-laser"
        >
          <UiIcon name="whatsapp" /> Perguntar sobre o laser
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.laser {
  position: relative;
  background: radial-gradient(90% 120% at 15% 50%, #1d5873 0%, var(--ink) 60%);
  color: rgba(248, 244, 238, 0.86);
  padding-block: clamp(80px, 10vw, 130px);
  overflow: hidden;
}
.laser h2 {
  color: #fff;
}
.laser h2 em {
  color: var(--gold-light);
}
.laser__grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(40px, 7vw, 100px);
  align-items: center;
}
.laser__copy {
  display: grid;
  gap: 20px;
  justify-items: start;
  max-width: 600px;
}
.laser__copy p:not(.eyebrow) {
  font-size: 1.1rem;
}
.laser__copy .btn {
  margin-top: 12px;
}
.laser__visual {
  display: grid;
  place-items: center;
}
.laser__orb {
  position: relative;
  width: min(320px, 70vw);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  color: var(--gold-light);
}
.laser__orb::before {
  content: '';
  position: absolute;
  inset: 32%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(220, 192, 134, 0.55), rgba(220, 192, 134, 0) 70%);
  filter: blur(6px);
  animation: glow 4s ease-in-out infinite;
}
.laser__ring {
  position: absolute;
  inset: calc((var(--n) - 1) * 12%);
  border-radius: 50%;
  border: 1px solid rgba(220, 192, 134, calc(0.5 - var(--n) * 0.08));
  animation: pulse 5s var(--ease) infinite;
  animation-delay: calc(var(--n) * -1.2s);
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
@keyframes glow {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}
@media (max-width: 820px) {
  .laser__grid {
    grid-template-columns: 1fr;
  }
  .laser__orb {
    width: min(220px, 60vw);
  }
}
</style>
