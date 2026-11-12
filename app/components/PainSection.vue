<script setup lang="ts">
import { waLink } from '#shared/business'

const pains = [
  'Escolhe o sapato pensando na dor, e não no que combina com a roupa.',
  'Deixa a sandália no armário ou esconde a unha quando vai pra praia.',
  'Já cortou a unha encravada em casa e ela voltou pior.',
  'Tem diabetes e fica na dúvida sobre como cuidar dos pés.',
]
</script>

<template>
  <section class="section pain" aria-labelledby="pain-title">
    <div class="container pain__grid">
      <div class="pain__head">
        <p class="eyebrow" data-reveal>Você se reconhece?</p>
        <h2 id="pain-title" data-reveal style="--d: 100ms">
          Em Itapema o pé fica à mostra <em>o ano inteiro.</em>
        </h2>
        <p class="lead" data-reveal style="--d: 200ms">
          Areia, chinelo, caminhada na orla. Quando alguma coisa incomoda, ela aparece em cada passo.
        </p>
      </div>

      <ul class="pain__list">
        <li v-for="(p, i) in pains" :key="p" class="pain__item" data-reveal :style="{ '--d': `${i * 90}ms` }">
          <span class="pain__num">0{{ i + 1 }}</span>
          <p>{{ p }}</p>
        </li>
        <li class="pain__answer" data-reveal style="--d: 380ms">
          <p>Isso tem tratamento. E o primeiro passo é uma avaliação com calma.</p>
          <a :href="waLink('Oi, Alexsandra! Estou com um incômodo nos pés e queria agendar uma avaliação.')" target="_blank" rel="noopener" class="link-underline">
            Quero minha avaliação <UiIcon name="arrow" :size="18" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.pain__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(40px, 7vw, 110px);
  align-items: start;
}
.pain__head {
  position: sticky;
  top: 120px;
  display: grid;
  gap: 20px;
}
.pain__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}
.pain__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 22px;
  align-items: center;
  padding: 26px 28px;
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--line);
  font-size: 1.08rem;
  color: var(--ink);
  transition:
    transform 0.5s var(--ease),
    box-shadow 0.5s var(--ease),
    border-color 0.4s;
}
.pain__item:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-soft);
  border-color: rgba(184, 146, 74, 0.45);
}
.pain__num {
  font-family: var(--serif);
  font-size: 2rem;
  font-style: italic;
  color: var(--gold);
  line-height: 1;
}
.pain__answer {
  margin-top: 10px;
  padding: 30px 28px;
  border-radius: var(--radius);
  background: var(--mist);
  display: grid;
  gap: 16px;
}
.pain__answer p {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 2.4vw, 1.8rem);
  line-height: 1.2;
  color: var(--ink);
}

@media (max-width: 860px) {
  .pain__grid {
    grid-template-columns: 1fr;
  }
  .pain__head {
    position: static;
  }
  .pain__item {
    padding: 20px;
    gap: 16px;
  }
}
</style>
