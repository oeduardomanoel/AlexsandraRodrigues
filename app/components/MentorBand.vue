<script setup lang="ts">
import { business } from '#shared/business'
</script>

<template>
  <section class="mentor" aria-labelledby="mentor-title">
    <div class="container"><div class="mentor__inner" data-reveal>
      <div class="mentor__icon"><UiIcon name="graduation" :size="30" /></div>
      <div class="mentor__copy">
        <p class="mentor__kicker">Para profissionais da podologia</p>
        <h2 id="mentor-title">É podóloga? Conheça a mentoria <em>#Podolovers.</em></h2>
        <p>A Alexsandra também é mentora de outras profissionais. Cursos e mentoria ficam no destaque “Cursos” do Instagram dela.</p>
      </div>
      <a :href="business.instagram" target="_blank" rel="noopener" class="btn btn--ghost" data-track="instagram-mentoria">
        <UiIcon name="instagram" /> Ver no Instagram
      </a>
    </div></div>
  </section>
</template>

<style scoped>
.mentor {
  padding-bottom: clamp(70px, 9vw, 120px);
}
.mentor__inner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 28px;
  align-items: center;
  padding: 34px 38px;
  border-radius: var(--radius);
  border: 1px dashed rgba(184, 146, 74, 0.6);
  background: #fff;
  transition:
    box-shadow 0.5s var(--ease),
    transform 0.5s var(--ease);
}
.mentor__inner:hover {
  box-shadow: var(--shadow-soft);
}
.mentor__icon {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--sand);
  color: var(--gold-deep);
}
.mentor__kicker {
  font-size: 0.74rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-deep);
}
.mentor h2 {
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  margin: 6px 0 8px;
}
.mentor p:last-child {
  color: var(--muted);
}
@media (max-width: 820px) {
  .mentor__inner {
    grid-template-columns: 1fr;
    padding: 28px 24px;
  }
}
</style>
