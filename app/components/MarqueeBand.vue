<script setup lang="ts">
const items = [
  'Unha encravada',
  'Fungos nas unhas',
  'Laserterapia',
  'Pé diabético',
  'Calos e calosidades',
  'Rachaduras',
  'Podologia clínica',
  'Meia Praia · Itapema',
]
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="marquee__track">
      <template v-for="n in 2" :key="n">
        <span v-for="item in items" :key="`${n}-${item}`" class="marquee__item">
          {{ item }}
          <BrandMonogram :size="22" tone="light" />
        </span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  background: var(--ink);
  color: var(--cream);
  overflow: hidden;
  padding-block: 22px;
  border-block: 1px solid rgba(220, 192, 134, 0.25);
}
.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee 38s linear infinite;
}
.marquee:hover .marquee__track {
  animation-play-state: paused;
}
.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: 34px;
  padding-right: 34px;
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  white-space: nowrap;
}
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
</style>
