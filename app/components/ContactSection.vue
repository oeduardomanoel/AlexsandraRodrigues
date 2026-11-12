<script setup lang="ts">
import { business, waLink } from '#shared/business'

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent('Alexsandra Rodrigues Podóloga, Av. Nereu Ramos 4848, Meia Praia, Itapema SC')}&z=17&output=embed`
const showMap = ref(false)
</script>

<template>
  <section id="contato" class="section contact" aria-labelledby="contact-title">
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow" data-reveal>Como chegar</p>
        <h2 id="contact-title" data-reveal style="--d: 100ms">
          Em Meia Praia, <em>na Av. Nereu Ramos.</em>
        </h2>
      </div>

      <div class="contact__grid">
        <address class="info" data-reveal="left">
          <div class="info__row">
            <span class="info__icon"><UiIcon name="pin" /></span>
            <div>
              <h3>Endereço</h3>
              <p>
                {{ business.address.street }}<br>
                {{ business.address.building }}<br>
                {{ business.address.district }}, {{ business.address.city }} · {{ business.address.state }}, {{ business.address.postalCode }}
              </p>
              <p class="info__hint">{{ business.address.reference }}</p>
            </div>
          </div>
          <div class="info__row">
            <span class="info__icon"><UiIcon name="clock" /></span>
            <div>
              <h3>Horário</h3>
              <p v-for="h in business.hours" :key="h.days">{{ h.days }}: {{ h.time }}</p>
              <p class="info__hint">Atendimento com hora marcada</p>
            </div>
          </div>
          <div class="info__row">
            <span class="info__icon"><UiIcon name="phone" /></span>
            <div>
              <h3>WhatsApp e telefone</h3>
              <p><a :href="`tel:${business.phoneE164}`" class="link-underline">{{ business.phoneDisplay }}</a></p>
            </div>
          </div>
          <div class="info__row">
            <span class="info__icon"><UiIcon name="instagram" /></span>
            <div>
              <h3>Instagram</h3>
              <p><a :href="business.instagram" target="_blank" rel="noopener" class="link-underline">{{ business.instagramHandle }}</a></p>
            </div>
          </div>
          <div class="info__actions">
            <a :href="waLink()" target="_blank" rel="noopener" class="btn btn--gold" data-track="whatsapp-contato">
              <UiIcon name="whatsapp" /> Agendar
            </a>
            <a :href="business.mapsUrl" target="_blank" rel="noopener" class="btn btn--ghost" data-track="rota-maps">
              Abrir rota <UiIcon name="arrow-up-right" />
            </a>
          </div>
        </address>

        <div class="map" data-reveal="right" style="--d: 120ms">
          <iframe
            v-if="showMap"
            :src="mapEmbed"
            title="Mapa do consultório Alexsandra Rodrigues Podóloga em Meia Praia, Itapema"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
          <button v-else type="button" class="map__facade wall" @click="showMap = true">
            <span class="map__pin"><UiIcon name="pin" :size="34" /></span>
            <strong>Av. Nereu Ramos, 4848</strong>
            <span>Meia Praia · Itapema</span>
            <span class="map__load">Carregar mapa interativo</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;
  align-items: stretch;
}
.info {
  font-style: normal;
  padding: clamp(28px, 4vw, 44px);
  border-radius: var(--radius);
  background: #fff;
  border: 1px solid var(--line);
  display: grid;
  gap: 26px;
}
.info__row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
}
.info__icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--mist);
  color: var(--ink);
  transition:
    background 0.4s,
    color 0.4s,
    transform 0.5s var(--ease);
}
.info__row:hover .info__icon {
  background: var(--ink);
  color: var(--gold-light);
  transform: scale(1.06);
}
.info h3 {
  font-family: var(--sans);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-deep);
  margin-bottom: 6px;
}
.info p {
  color: var(--ink);
}
.info__hint {
  margin-top: 4px;
  font-size: 0.88rem;
  color: var(--muted) !important;
}
.info__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 4px;
}
.map {
  position: relative;
  min-height: 460px;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}
.map iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.map__facade {
  position: absolute;
  inset: 0;
  border: 0;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 6px;
  color: #fff;
  text-align: center;
}
.map__facade strong {
  font-family: var(--serif);
  font-weight: 500;
  font-size: 2rem;
  position: relative;
}
.map__facade span {
  position: relative;
}
.map__pin {
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(248, 244, 238, 0.95);
  color: var(--gold-deep);
  margin-bottom: 10px;
  animation: bob 2.6s ease-in-out infinite;
}
@keyframes bob {
  50% {
    transform: translateY(-8px);
  }
}
.map__load {
  margin-top: 18px;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition:
    background 0.4s,
    color 0.4s;
}
.map__facade:hover .map__load {
  background: #fff;
  color: var(--ink);
}
@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
  .map {
    min-height: 360px;
  }
}
</style>
