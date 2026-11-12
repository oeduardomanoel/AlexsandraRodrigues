<script setup lang="ts">
import { waLink } from '#shared/business'

const visible = ref(false)
onMounted(() => {
  const onScroll = () => (visible.value = window.scrollY > window.innerHeight * 0.7)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
</script>

<template>
  <a
    :href="waLink()"
    target="_blank"
    rel="noopener"
    class="fab"
    :class="{ 'is-visible': visible }"
    aria-label="Agendar pelo WhatsApp"
    data-track="whatsapp-flutuante"
  >
    <span class="fab__label">Agendar avaliação</span>
    <span class="fab__icon"><UiIcon name="whatsapp" :size="28" /></span>
  </a>
</template>

<style scoped>
.fab {
  position: fixed;
  right: max(18px, env(safe-area-inset-right));
  bottom: max(18px, env(safe-area-inset-bottom));
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 0;
  transform: translateY(120px);
  opacity: 0;
  transition:
    transform 0.6s var(--ease),
    opacity 0.4s;
}
.fab.is-visible {
  transform: none;
  opacity: 1;
}
.fab__icon {
  position: relative;
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  box-shadow: 0 14px 30px -10px rgba(37, 211, 102, 0.7);
  transition: transform 0.4s var(--ease);
}
.fab__icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #25d366;
  animation: ring 2.4s ease-out infinite;
}
@keyframes ring {
  to {
    transform: scale(1.6);
    opacity: 0;
  }
}
.fab__label {
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  padding: 12px 0;
  margin-right: -14px;
  border-radius: 999px 0 0 999px;
  background: var(--ink);
  color: var(--cream);
  font-size: 0.92rem;
  transition:
    max-width 0.6s var(--ease),
    padding 0.6s var(--ease);
}
.fab:hover .fab__label {
  max-width: 220px;
  padding: 12px 26px 12px 20px;
}
.fab:hover .fab__icon {
  transform: scale(1.06);
}
</style>
