<script setup lang="ts">
import { faqs, waLink } from '#shared/business'
</script>

<template>
  <section id="duvidas" class="section faq" aria-labelledby="faq-title">
    <div class="container faq__grid">
      <div class="faq__head">
        <p class="eyebrow" data-reveal>Dúvidas frequentes</p>
        <h2 id="faq-title" data-reveal style="--d: 100ms">
          Antes de agendar, <em>talvez você queira saber.</em>
        </h2>
        <p class="lead" data-reveal style="--d: 180ms">Não achou sua pergunta? Manda no WhatsApp que a Alexsandra responde.</p>
        <a :href="waLink('Oi, Alexsandra! Tenho uma dúvida antes de agendar.')" target="_blank" rel="noopener" class="link-underline" data-reveal style="--d: 240ms">
          Tirar dúvida no WhatsApp <UiIcon name="arrow" :size="18" />
        </a>
      </div>

      <div class="faq__list">
        <details v-for="(f, i) in faqs" :key="f.q" class="faq__item" data-reveal :style="{ '--d': `${i * 60}ms` }" :open="i === 0">
          <summary>
            <h3>{{ f.q }}</h3>
            <span class="faq__toggle" aria-hidden="true"><UiIcon name="plus" :size="20" /></span>
          </summary>
          <div class="faq__answer">
            <p>{{ f.a }}</p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--sand);
}
.faq__grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(40px, 7vw, 100px);
  align-items: start;
}
.faq__head {
  position: sticky;
  top: 120px;
  display: grid;
  gap: 20px;
  justify-items: start;
}
.faq__list {
  display: grid;
  gap: 12px;
}
.faq__item {
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid transparent;
  transition:
    background 0.4s,
    border-color 0.4s,
    box-shadow 0.5s var(--ease);
}
.faq__item:hover {
  background: #fff;
  border-color: rgba(184, 146, 74, 0.35);
}
.faq__item[open] {
  background: #fff;
  box-shadow: var(--shadow-soft);
}
.faq__item summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 24px;
}
.faq__item summary::-webkit-details-marker {
  display: none;
}
.faq__item h3 {
  font-family: var(--sans);
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.4;
  color: var(--ink);
}
.faq__toggle {
  flex: none;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--line);
  color: var(--ink);
  transition:
    transform 0.5s var(--ease),
    background 0.4s,
    color 0.4s;
}
.faq__item:hover .faq__toggle {
  border-color: var(--gold);
}
.faq__item[open] .faq__toggle {
  transform: rotate(45deg);
  background: var(--ink);
  color: var(--gold-light);
}
.faq__answer {
  padding: 0 24px 24px;
  color: var(--muted);
  animation: faqIn 0.5s var(--ease);
}
@keyframes faqIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
}
@media (max-width: 860px) {
  .faq__grid {
    grid-template-columns: 1fr;
  }
  .faq__head {
    position: static;
  }
}
</style>
