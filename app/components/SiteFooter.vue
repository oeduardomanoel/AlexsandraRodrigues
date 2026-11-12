<script setup lang="ts">
import { business, services, waLink } from '#shared/business'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <BrandMonogram :size="56" tone="light" />
        <p class="footer__name">Alexsandra Rodrigues</p>
        <p class="footer__tag">Centro de Bem-Estar e Podologia</p>
        <p class="footer__desc">Podóloga em Itapema (SC), no bairro Meia Praia. Podologista e laserterapeuta.</p>
      </div>
      <nav aria-label="Tratamentos">
        <h2 class="footer__title">Tratamentos</h2>
        <ul>
          <li v-for="s in services" :key="s.slug"><a :href="`#${s.slug}`">{{ s.title }}</a></li>
        </ul>
      </nav>
      <div>
        <h2 class="footer__title">Contato</h2>
        <ul>
          <li><a :href="waLink()" target="_blank" rel="noopener">WhatsApp {{ business.phoneDisplay }}</a></li>
          <li><a :href="business.instagram" target="_blank" rel="noopener">Instagram {{ business.instagramHandle }}</a></li>
          <li><a :href="business.mapsUrl" target="_blank" rel="noopener">Ver no Google Maps</a></li>
        </ul>
      </div>
      <div>
        <h2 class="footer__title">Endereço</h2>
        <p>{{ business.address.street }}<br>{{ business.address.district }}, {{ business.address.city }} · {{ business.address.state }}</p>
        <p class="footer__hours">Seg a sáb · 9h às 18h</p>
      </div>
    </div>
    <div class="container footer__bottom">
      <p>© {{ year }} Alexsandra Rodrigues · Podóloga em Itapema/SC</p>
      <p>As informações deste site não substituem uma consulta.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0c2a37;
  color: rgba(248, 244, 238, 0.72);
  padding-top: clamp(60px, 8vw, 100px);
  font-size: 0.95rem;
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
}
.footer__name {
  margin-top: 16px;
  font-family: var(--serif);
  font-size: 1.6rem;
  color: #fff;
}
.footer__tag {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-light);
}
.footer__desc {
  margin-top: 14px;
  max-width: 32ch;
}
.footer__title {
  font-family: var(--sans);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 16px;
}
.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}
.footer a {
  transition:
    color 0.3s,
    padding 0.4s var(--ease);
}
.footer ul a:hover {
  color: #fff;
  padding-left: 6px;
}
.footer__hours {
  margin-top: 10px;
}
.footer__bottom {
  margin-top: 60px;
  padding-block: 26px calc(26px + env(safe-area-inset-bottom));
  border-top: 1px solid rgba(248, 244, 238, 0.12);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.82rem;
}
@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 520px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
