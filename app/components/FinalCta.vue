<script setup lang="ts">
import { waLink } from '#shared/business'
</script>

<template>
  <section class="final grain" aria-labelledby="final-title">
    <div class="final__mono" aria-hidden="true" data-parallax="0.12">
      <BrandMonogram :size="520" tone="light" />
    </div>
    <div class="container final__inner">
      <h2 id="final-title" data-reveal-group>
        <span class="split-line"><span>Seu próximo passo</span></span>
        <span class="split-line"><span style="--d: 120ms">pode ser <em>sem dor.</em></span></span>
      </h2>
      <p data-reveal style="--d: 200ms">
        Manda uma mensagem contando o que está sentindo. Você recebe os horários disponíveis e já sai com a avaliação marcada.
      </p>
      <a :href="waLink()" target="_blank" rel="noopener" class="btn btn--gold final__btn" data-reveal style="--d: 300ms" data-track="whatsapp-final">
        <UiIcon name="whatsapp" /> Chamar a Alexsandra no WhatsApp
      </a>
    </div>
  </section>
</template>

<style scoped>
.final {
  position: relative;
  overflow: hidden;
  background: var(--ink);
  color: rgba(248, 244, 238, 0.85);
  padding-block: clamp(90px, 12vw, 160px);
  text-align: center;
}
.final__mono {
  position: absolute;
  right: -80px;
  top: 50%;
  margin-top: -260px;
  opacity: 0.07;
  pointer-events: none;
}
.final__inner {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 26px;
}
.final h2 {
  color: #fff;
  font-size: clamp(2.8rem, 7vw, 5.4rem);
}
.final h2 em {
  color: var(--gold-light);
}
.final p {
  max-width: 52ch;
  font-size: 1.12rem;
}
.final__btn {
  min-height: 62px;
  padding-inline: 34px;
  font-size: 1.05rem;
}
@media (max-width: 520px) {
  .final__btn {
    width: 100%;
    white-space: normal;
    text-align: center;
  }
}
</style>
