<script setup lang="ts">
// Releitura do monograma "AR" dourado da parede do consultório.
withDefaults(defineProps<{ size?: number; tone?: 'gold' | 'light' }>(), { size: 44, tone: 'gold' })
const uid = useId()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    role="img"
    aria-label="Monograma Alexsandra Rodrigues"
    class="monogram"
  >
    <defs>
      <linearGradient :id="`g-${uid}`" x1="0" y1="0" x2="1" y2="1">
        <template v-if="tone === 'gold'">
          <stop offset="0" stop-color="#8a6a2c" />
          <stop offset=".45" stop-color="#dcc086" />
          <stop offset=".7" stop-color="#b8924a" />
          <stop offset="1" stop-color="#8a6a2c" />
        </template>
        <template v-else>
          <stop offset="0" stop-color="#f3e6c6" />
          <stop offset="1" stop-color="#dcc086" />
        </template>
      </linearGradient>
    </defs>
    <text
      x="14"
      y="72"
      font-family="Cormorant Garamond, serif"
      font-size="78"
      font-weight="500"
      :fill="`url(#g-${uid})`"
    >A</text>
    <text
      x="44"
      y="72"
      font-family="Cormorant Garamond, serif"
      font-size="78"
      font-weight="500"
      :fill="`url(#g-${uid})`"
    >R</text>
    <path
      d="M64 70 C 70 84, 78 92, 92 92"
      fill="none"
      :stroke="`url(#g-${uid})`"
      stroke-width="2.4"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped>
.monogram {
  display: block;
  overflow: visible;
}
</style>
