<script setup lang="ts">
import { business, reviews, reviewHighlights } from '#shared/business'

const results = [
  {
    src: '/img/resultado-unha-1-899.webp',
    srcset: '/img/resultado-unha-1-600.webp 600w, /img/resultado-unha-1-899.webp 899w',
    w: 899,
    h: 1599,
    alt: 'Close de unha do dedão saudável e bem cuidada após atendimento de podologia',
  },
  {
    src: '/img/resultado-unhas-2-1599.webp',
    srcset: '/img/resultado-unhas-2-800.webp 800w, /img/resultado-unhas-2-1599.webp 1599w',
    w: 1599,
    h: 899,
    alt: 'Unhas dos pés limpas e alinhadas depois do cuidado podológico',
  },
  {
    src: '/img/tratamento-unhas-1599.webp',
    srcset: '/img/tratamento-unhas-800.webp 800w, /img/tratamento-unhas-1599.webp 1599w',
    w: 1599,
    h: 899,
    alt: 'Pés de cliente durante atendimento de podologia no consultório',
  },
]

// contador 0,0 → 5,0
const counter = ref('0,0')
const statEl = ref<HTMLElement | null>(null)
onMounted(() => {
  if (!statEl.value) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    counter.value = business.rating.value
    return
  }
  const io = new IntersectionObserver(([e]) => {
    if (!e?.isIntersecting) return
    io.disconnect()
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      counter.value = (5 * eased).toFixed(1).replace('.', ',')
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.6 })
  io.observe(statEl.value)
})
</script>

<template>
  <section id="depoimentos" class="section reviews" aria-labelledby="reviews-title">
    <div class="container">
      <div class="reviews__top">
        <div class="section-head">
          <p class="eyebrow" data-reveal>Depoimentos</p>
          <h2 id="reviews-title" data-reveal style="--d: 100ms">
            Quem cuida dos pés aqui <em>vira cliente.</em>
          </h2>
          <p class="lead" data-reveal style="--d: 180ms">
            Avaliações públicas deixadas no Google por quem já passou pelo consultório. Copiamos do jeito que foram escritas.
          </p>
        </div>

        <div ref="statEl" class="stat" data-reveal="zoom" style="--d: 200ms">
          <span class="stat__num">{{ counter }}</span>
          <span class="stat__stars" aria-hidden="true">
            <UiIcon v-for="i in 5" :key="i" name="star" :size="18" />
          </span>
          <span class="stat__label">{{ business.rating.count }} avaliações no Google</span>
          <span class="sr-only">Nota {{ business.rating.value }} de 5</span>
        </div>
      </div>

      <div class="quotes">
        <figure
          v-for="(r, i) in reviews"
          :key="r.author"
          class="qcard"
          data-reveal
          :style="{ '--d': `${i * 110}ms` }"
        >
          <span class="qcard__mark" aria-hidden="true">“</span>
          <blockquote>{{ r.text }}</blockquote>
          <figcaption>
            <span class="qcard__avatar" aria-hidden="true">{{ r.author.charAt(0).toUpperCase() }}</span>
            <span>
              <strong>{{ r.author }}</strong>
              <small>
                <UiIcon v-for="s in 5" :key="s" name="star" :size="12" />
                no Google
              </small>
            </span>
          </figcaption>
        </figure>
      </div>

      <ul class="chips" aria-label="Trechos de outras avaliações">
        <li v-for="(h, i) in reviewHighlights" :key="h" data-reveal :style="{ '--d': `${i * 90}ms` }">“{{ h }}”</li>
      </ul>

      <div class="reviews__cta" data-reveal>
        <a :href="business.reviewsUrl" target="_blank" rel="noopener" class="link-underline">
          Ler todas as avaliações no Google <UiIcon name="arrow-up-right" :size="18" />
        </a>
      </div>

      <div class="gallery">
        <p class="eyebrow gallery__eyebrow" data-reveal>Resultados do consultório</p>
        <div class="gallery__grid">
          <figure
            v-for="(img, i) in results"
            :key="img.src"
            class="gallery__item"
            :class="`gallery__item--${i}`"
            data-reveal="mask"
            :style="{ '--d': `${i * 120}ms` }"
          >
            <img
              :src="img.src"
              :srcset="img.srcset"
              sizes="(max-width: 760px) 92vw, 33vw"
              :width="img.w"
              :height="img.h"
              :alt="img.alt"
              loading="lazy"
              decoding="async"
            >
          </figure>
        </div>
        <p class="gallery__note">Fotos do perfil do consultório no Google. Cada caso tem seu próprio tempo de tratamento.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews__top {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: end;
  margin-bottom: clamp(36px, 5vw, 60px);
}
.reviews__top .section-head {
  margin-bottom: 0;
}
.stat {
  display: grid;
  justify-items: center;
  gap: 6px;
  padding: 28px 36px;
  border-radius: var(--radius);
  background: var(--ink);
  color: var(--cream);
  min-width: 230px;
  box-shadow: var(--shadow);
}
.stat__num {
  font-family: var(--serif);
  font-size: 4.6rem;
  line-height: 0.9;
  color: var(--gold-light);
  font-variant-numeric: tabular-nums;
}
.stat__stars {
  display: flex;
  gap: 3px;
  color: #f2cf7a;
}
.stat__label {
  font-size: 0.85rem;
  opacity: 0.85;
}
.quotes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.qcard {
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 36px 30px 28px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--line);
  transition:
    transform 0.6s var(--ease),
    box-shadow 0.6s var(--ease),
    border-color 0.4s;
}
.qcard:hover {
  transform: translateY(-6px) rotate(-0.4deg);
  box-shadow: var(--shadow);
  border-color: rgba(184, 146, 74, 0.4);
}
.qcard__mark {
  position: absolute;
  top: 6px;
  right: 22px;
  font-family: var(--serif);
  font-size: 6rem;
  line-height: 1;
  color: var(--gold-light);
  opacity: 0.6;
  transition:
    transform 0.6s var(--ease),
    opacity 0.4s;
}
.qcard:hover .qcard__mark {
  transform: translateY(-6px) scale(1.1);
  opacity: 1;
}
.qcard blockquote {
  margin: 0;
  font-size: 1.05rem;
  color: var(--text);
}
.qcard figcaption {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
}
.qcard figcaption strong {
  display: block;
  color: var(--ink);
  font-weight: 500;
}
.qcard figcaption small {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #c79a3a;
  font-size: 0.78rem;
}
.qcard figcaption small {
  color: var(--muted);
}
.qcard figcaption small svg {
  color: #e0b04a;
}
.qcard__avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--mist);
  color: var(--ink);
  font-family: var(--serif);
  font-size: 1.3rem;
}
.chips {
  list-style: none;
  padding: 0;
  margin: 26px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.chips li {
  padding: 12px 20px;
  border-radius: 999px;
  background: var(--sand);
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.15rem;
  color: var(--ink);
  transition:
    background 0.4s,
    color 0.4s,
    transform 0.5s var(--ease);
}
.chips li:hover {
  background: var(--ink);
  color: var(--cream);
  transform: translateY(-3px);
}
.reviews__cta {
  margin-top: 28px;
}
.gallery {
  margin-top: clamp(70px, 9vw, 120px);
}
.gallery__eyebrow {
  margin-bottom: 24px;
}
.gallery__grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  height: clamp(420px, 52vw, 640px);
}
.gallery__item {
  margin: 0;
  border-radius: var(--radius);
  overflow: hidden;
}
.gallery__item--0 {
  grid-row: span 2;
}
.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 1.2s var(--ease),
    filter 0.6s;
  filter: saturate(0.92);
}
.gallery__item:hover img {
  transform: scale(1.06);
  filter: saturate(1.05);
}
.gallery__note {
  margin-top: 14px;
  font-size: 0.85rem;
  color: var(--muted);
}

@media (max-width: 960px) {
  .reviews__top {
    grid-template-columns: 1fr;
  }
  .stat {
    justify-self: start;
  }
  .quotes {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .gallery__grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  .gallery__item--0 {
    grid-row: auto;
    grid-column: span 2;
    aspect-ratio: 4 / 5;
  }
  .gallery__item--1,
  .gallery__item--2 {
    aspect-ratio: 1;
  }
}
</style>
