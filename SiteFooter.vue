<script setup>
import { company } from '../data/content.js'
</script>

<template>
  <footer>
    <div class="wrap">
      <div>
        <h4>Büro</h4>
        <p>{{ company.office }}</p>
        <h4 style="margin-top: 14px">Lager und Werkstatt</h4>
        <p>{{ company.workshop }}</p>
      </div>
      <div>
        <h4>Kontakt</h4>
        <p v-for="phone in company.phones" :key="phone.href">
          <a :href="phone.href">{{ phone.label }}</a>
        </p>
        <p><a :href="`mailto:${company.email}`">{{ company.email }}</a></p>
      </div>
      <div>
        <h4>Mehr</h4>
        <p><a href="https://www.instagram.com/solartechnikneuhaus/">Instagram</a></p>
        <p><a href="#">Datenschutzerklärung</a></p>
        <p><a href="#">Barrierefreiheitserklärung</a></p>
      </div>
      <div class="copy">
        <span>© {{ company.year }} {{ company.legalNameFooter }}</span>
        <span>Entwurf zur Ansicht</span>
      </div>
    </div>
  </footer>
</template>
