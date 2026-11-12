<script setup lang="ts">
import { business, waLink } from '#shared/business'
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero__bg wall" aria-hidden="true" />
    <div class="container hero__grid">
      <div class="hero__copy">
        <p class="eyebrow eyebrow--light hero__eyebrow" data-reveal>Meia Praia · Itapema · SC</p>

        <h1 class="hero__title" data-reveal-group>
          <span class="hero__kicker split-line"><span style="--d: 80ms">Podóloga em Itapema</span></span>
          <span class="split-line"><span style="--d: 160ms">Seus pés merecem</span></span>
          <span class="split-line"><span style="--d: 260ms"><em>pisar leve</em> de novo.</span></span>
        </h1>

        <p class="hero__lead" data-reveal style="--d: 420ms">
          Unha encravada, fungos, calos e pé diabético. A Alexsandra Rodrigues atende com hora marcada,
          tempo pra ouvir e um tratamento pensado pro seu caso.
        </p>

        <div class="hero__actions" data-reveal style="--d: 540ms">
          <a :href="waLink()" target="_blank" rel="noopener" class="btn btn--gold" data-track="whatsapp-hero">
            <UiIcon name="whatsapp" />
            Agendar avaliação
          </a>
          <a href="#tratamentos" class="btn btn--light">
            Ver tratamentos
            <UiIcon name="arrow" class="arrow" />
          </a>
        </div>

        <a
          :href="business.reviewsUrl"
          target="_blank"
          rel="noopener"
          class="rating"
          data-reveal
          style="--d: 660ms"
          aria-label="Nota 5,0 com 45 avaliações no Google"
        >
          <span class="rating__stars" aria-hidden="true">
            <UiIcon v-for="i in 5" :key="i" name="star" :size="16" />
          </span>
          <span class="rating__text"><strong>{{ business.rating.value }}</strong> · {{ business.rating.count }} avaliações no Google</span>
        </a>
      </div>

      <div class="hero__visual">
        <div class="arch" data-reveal="mask" style="--d: 200ms">
          <div class="arch__img" data-parallax="0.06">
            <img
              src="/img/alexsandra-retrato-860.webp"
              srcset="/img/alexsandra-retrato-480.webp 480w, /img/alexsandra-retrato-860.webp 860w"
              sizes="(max-width: 900px) 80vw, 460px"
              width="854"
              height="1069"
              alt="Alexsandra Rodrigues, podóloga, sorrindo em frente ao monograma dourado AR do seu consultório em Itapema"
              fetchpriority="high"
              decoding="async"
            >
          </div>
        </div>

        <div class="float-card float-card--a" data-reveal="right" style="--d: 700ms">
          <UiIcon name="laser" :size="22" />
          <span><strong>Podologista</strong> e laserterapeuta</span>
        </div>
        <div class="float-card float-card--b" data-reveal="left" style="--d: 820ms">
          <UiIcon name="graduation" :size="22" />
          <span>Mentora <strong>#Podolovers</strong></span>
        </div>

        <svg class="hero__swash" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="196" fill="none" stroke="url(#heroGold)" stroke-width="1" stroke-dasharray="2 8" />
          <defs>
            <linearGradient id="heroGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#f3e6c6" />
              <stop offset="1" stop-color="#b8924a" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <a href="#tratamentos" class="scroll-cue" aria-label="Rolar para os tratamentos">
      <span />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: 110px;
  padding-bottom: 80px;
  color: var(--cream);
  overflow: hidden;
  isolation: isolate;
}
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}
.hero__bg::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 140px;
  background: linear-gradient(to bottom, transparent, rgba(18, 59, 76, 0.25));
}
.hero__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: center;
}
.hero__eyebrow {
  margin-bottom: 26px;
  color: #fff;
  text-shadow: 0 1px 12px rgba(18, 59, 76, 0.35);
}
.hero__title {
  color: #fff;
  font-size: clamp(2.9rem, 5.6vw, 4.9rem);
  text-shadow: 0 2px 30px rgba(18, 59, 76, 0.18);
}
.hero__title em {
  color: #f6e7c4;
}
.hero__kicker {
  font-family: var(--sans);
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 18px;
}
.hero__kicker > span {
  display: inline-block;
  background: rgba(248, 244, 238, 0.92);
  padding: 8px 16px;
  border-radius: 999px;
}
.hero__lead {
  margin-top: 24px;
  max-width: 50ch;
  font-size: clamp(1.05rem, 1.5vw, 1.22rem);
  color: rgba(255, 255, 255, 0.94);
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}
.rating {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 34px;
  padding: 10px 18px 10px 14px;
  border-radius: 999px;
  background: rgba(18, 59, 76, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
  font-size: 0.92rem;
  transition:
    background 0.4s,
    transform 0.4s var(--ease);
}
.rating:hover {
  background: rgba(18, 59, 76, 0.45);
  transform: translateY(-2px);
}
.rating__stars {
  display: flex;
  gap: 2px;
  color: #f2cf7a;
}
.rating__text strong {
  font-weight: 600;
}

/* visual */
.hero__visual {
  position: relative;
  justify-self: center;
  width: min(100%, 460px);
}
.arch {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 999px 999px var(--radius) var(--radius);
  overflow: hidden;
  box-shadow: 0 50px 80px -40px rgba(10, 35, 45, 0.6);
  border: 6px solid rgba(248, 244, 238, 0.9);
  --radius: 28px;
}
.arch[data-reveal='mask'] {
  clip-path: inset(100% 0 0 0 round 999px 999px 28px 28px);
}
.arch.is-in {
  clip-path: inset(0 0 0 0 round 999px 999px 28px 28px);
}
.arch__img {
  position: absolute;
  inset: -8% 0;
}
.arch__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 30%;
  transition: transform 1.6s var(--ease);
}
.arch:hover .arch__img img {
  transform: scale(1.04);
}
.hero__swash {
  position: absolute;
  inset: -12%;
  width: 124%;
  height: 124%;
  z-index: -1;
  animation: spin 60s linear infinite;
  pointer-events: none;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 18px;
  background: rgba(248, 244, 238, 0.95);
  color: var(--ink);
  font-size: 0.92rem;
  line-height: 1.25;
  box-shadow: var(--shadow-soft);
  transition: transform 0.5s var(--ease);
}
.float-card:hover {
  transform: translateY(-4px) !important;
}
.float-card svg {
  color: var(--gold);
  flex: none;
}
.float-card strong {
  font-weight: 600;
}
.float-card--a {
  top: 18%;
  right: -16%;
}
.float-card--b {
  bottom: 12%;
  left: -18%;
}

.scroll-cue {
  position: absolute;
  left: 50%;
  bottom: 28px;
  width: 26px;
  height: 42px;
  margin-left: -13px;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
}
.scroll-cue span {
  position: absolute;
  left: 50%;
  top: 8px;
  width: 4px;
  height: 8px;
  margin-left: -2px;
  border-radius: 4px;
  background: #fff;
  animation: cue 1.8s var(--ease) infinite;
}
@keyframes cue {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  70% {
    transform: translateY(14px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .hero {
    padding-top: 110px;
  }
  .hero__grid {
    grid-template-columns: 1fr;
  }
  .hero__visual {
    width: min(78%, 380px);
    margin-top: 10px;
  }
  .float-card--a {
    right: -14%;
  }
  .float-card--b {
    left: -14%;
  }
  .scroll-cue {
    display: none;
  }
}
@media (max-width: 520px) {
  .hero__actions .btn {
    width: 100%;
  }
  .float-card {
    padding: 10px 14px;
    font-size: 0.8rem;
  }
  .float-card--a {
    right: -10%;
  }
  .float-card--b {
    left: -10%;
  }
}
</style>
