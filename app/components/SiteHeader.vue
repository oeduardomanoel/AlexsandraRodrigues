<script setup lang="ts">
import { waLink } from '#shared/business'

const scrolled = ref(false)
const open = ref(false)
const links = [
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Como chegar' },
]

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 24)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

watch(open, (v) => {
  document.documentElement.style.overflow = v ? 'hidden' : ''
})
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled, 'is-open': open }">
    <div class="container header__inner">
      <a href="#inicio" class="brand" aria-label="Alexsandra Rodrigues, início" @click="open = false">
        <BrandMonogram :size="42" />
        <span class="brand__text">
          <strong>Alexsandra Rodrigues</strong>
          <small>Centro de Bem-Estar e Podologia</small>
        </span>
      </a>

      <nav class="nav" aria-label="Principal">
        <a v-for="l in links" :key="l.href" :href="l.href" class="nav__link" @click="open = false">{{ l.label }}</a>
      </nav>

      <a
        :href="waLink()"
        target="_blank"
        rel="noopener"
        class="btn btn--gold header__cta"
        data-track="whatsapp-header"
      >
        <UiIcon name="whatsapp" />
        <span>Agendar</span>
      </a>

      <button
        class="burger"
        type="button"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
        @click="open = !open"
      >
        <UiIcon :name="open ? 'close' : 'menu'" :size="26" />
      </button>
    </div>

    <div id="mobile-menu" class="mobile" :aria-hidden="!open">
      <nav class="mobile__nav" aria-label="Menu mobile">
        <a
          v-for="(l, i) in links"
          :key="l.href"
          :href="l.href"
          :style="{ '--i': i }"
          :tabindex="open ? 0 : -1"
          @click="open = false"
        >{{ l.label }}</a>
      </nav>
      <a :href="waLink()" target="_blank" rel="noopener" class="btn btn--gold" :tabindex="open ? 0 : -1">
        <UiIcon name="whatsapp" /> Agendar pelo WhatsApp
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition:
    background 0.4s,
    box-shadow 0.4s,
    padding 0.4s var(--ease);
  padding-block: 18px;
}
.header.is-scrolled {
  background: rgba(248, 244, 238, 0.86);
  backdrop-filter: saturate(1.4) blur(14px);
  -webkit-backdrop-filter: saturate(1.4) blur(14px);
  box-shadow: 0 1px 0 var(--line);
  padding-block: 10px;
}
.header__inner {
  display: flex;
  align-items: center;
  gap: 24px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: auto;
}
.brand__text {
  display: grid;
  line-height: 1.1;
}
.brand__text strong {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.32rem;
  color: var(--ink);
  letter-spacing: 0.01em;
}
.brand__text small {
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-deep);
}
.nav {
  display: flex;
  gap: 30px;
}
.nav__link {
  position: relative;
  font-size: 0.94rem;
  color: var(--ink);
  padding-block: 6px;
}
.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s var(--ease);
}
.nav__link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
.header__cta {
  min-height: 46px;
  padding-inline: 22px;
}
.burger {
  display: none;
  border: 0;
  background: transparent;
  color: var(--ink);
  padding: 6px;
  margin-right: -6px;
}

.mobile {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: var(--cream);
  padding: 120px var(--gutter) 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.4s,
    visibility 0.4s;
}
.is-open .mobile {
  opacity: 1;
  visibility: visible;
}
.mobile__nav {
  display: grid;
  gap: 6px;
}
.mobile__nav a {
  font-family: var(--serif);
  font-size: 2.4rem;
  color: var(--ink);
  border-bottom: 1px solid var(--line);
  padding-block: 10px;
  transform: translateY(20px);
  opacity: 0;
  transition:
    transform 0.6s var(--ease),
    opacity 0.6s;
  transition-delay: calc(var(--i) * 60ms + 100ms);
}
.is-open .mobile__nav a {
  transform: none;
  opacity: 1;
}

@media (max-width: 980px) {
  .nav {
    display: none;
  }
}
@media (max-width: 640px) {
  .header__cta {
    display: none;
  }
  .burger {
    display: inline-flex;
  }
  .brand__text strong {
    font-size: 1.15rem;
  }
  .brand__text small {
    font-size: 0.55rem;
    letter-spacing: 0.14em;
  }
}
@media (min-width: 641px) {
  .mobile {
    display: none;
  }
}
</style>
