<script setup lang="ts">
import { waLink } from '#shared/business'

const signs = [
  'Formigamento ou dormência nos pés',
  'Pele muito seca, com rachaduras',
  'Feridas que demoram a fechar',
  'Unhas grossas, escurecidas ou encravando',
]
</script>

<template>
  <section id="pe-diabetico-info" class="section diab" aria-labelledby="diab-title">
    <div class="container diab__card wall">
      <div class="diab__copy">
        <p class="eyebrow eyebrow--light" data-reveal>Pé diabético</p>
        <h2 id="diab-title" data-reveal style="--d: 100ms">
          Tem diabetes? <em>Seus pés pedem mais atenção.</em>
        </h2>
        <p data-reveal style="--d: 180ms">
          Com a glicose alta, a sensibilidade e a circulação dos pés podem diminuir. Um machucado pequeno passa despercebido
          e demora a cicatrizar. Por isso o acompanhamento com podóloga faz parte da prevenção.
        </p>
        <p data-reveal style="--d: 240ms">
          A Alexsandra atende pessoas com diabetes com cuidados específicos e explica o que observar no dia a dia.
        </p>
        <a
          :href="waLink('Oi, Alexsandra! Tenho diabetes e queria agendar uma avaliação dos pés.')"
          target="_blank"
          rel="noopener"
          class="btn btn--gold"
          data-reveal
          style="--d: 320ms"
          data-track="whatsapp-diabetes"
        >
          <UiIcon name="whatsapp" /> Agendar avaliação preventiva
        </a>
      </div>

      <div class="diab__list" data-reveal="right" style="--d: 200ms">
        <p class="diab__list-title">Fique de olho se notar:</p>
        <ul>
          <li v-for="s in signs" :key="s"><UiIcon name="shield" :size="20" /> {{ s }}</li>
        </ul>
        <p class="diab__note">Feridas abertas ou sinais de infecção também precisam de avaliação médica.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.diab {
  padding-top: 0;
}
.diab__card {
  border-radius: clamp(24px, 3vw, 40px);
  padding: clamp(40px, 6vw, 80px);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(32px, 5vw, 70px);
  align-items: center;
  color: rgba(255, 255, 255, 0.92);
  overflow: hidden;
  max-width: calc(var(--container) - 2 * var(--gutter));
}
.diab__copy {
  position: relative;
  display: grid;
  gap: 20px;
  justify-items: start;
}
.diab h2 {
  color: #fff;
}
.diab h2 em {
  color: #f6e7c4;
}
.diab__copy p:not(.eyebrow) {
  font-size: 1.08rem;
}
.diab__list {
  position: relative;
  padding: 32px;
  border-radius: var(--radius);
  background: rgba(248, 244, 238, 0.96);
  color: var(--ink);
  box-shadow: 0 30px 60px -30px rgba(10, 35, 45, 0.55);
}
.diab__list-title {
  font-family: var(--serif);
  font-size: 1.6rem;
  margin-bottom: 14px;
}
.diab__list ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
}
.diab__list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 6px;
  border-bottom: 1px solid var(--line);
  transition:
    padding 0.4s var(--ease),
    color 0.3s;
}
.diab__list li:hover {
  padding-left: 14px;
  color: var(--gold-deep);
}
.diab__list li svg {
  color: var(--gold);
  flex: none;
}
.diab__note {
  margin-top: 16px;
  font-size: 0.85rem;
  color: var(--muted);
}
@media (max-width: 880px) {
  .diab__card {
    grid-template-columns: 1fr;
    margin-inline: var(--gutter);
    width: auto;
  }
}
@media (max-width: 520px) {
  .diab__list {
    padding: 22px;
  }
}
</style>
