<script setup>
import { reactive, ref } from 'vue'
import { company, offerOptions } from '../data/content.js'

const empty = () => ({
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  adresse: '',
  anliegen: '',
  nachricht: '',
})
const form = reactive(empty())
const sent = ref(false)

function submit() {
  // TODO: Hier an Formular-Dienst oder Backend senden (z. B. Formspree, Netlify Forms, eigene API).
  console.info('Offertanfrage (noch nicht versendet):', { ...form })
  sent.value = true
  Object.assign(form, empty())
}
</script>

<template>
  <section class="offer" id="offerte">
    <div class="wrap">
      <div>
        <h2>Offerte anfordern</h2>
        <p class="intro">
          Schreiben Sie uns kurz, worum es geht. Wir melden uns und vereinbaren einen Termin bei
          Ihnen vor Ort.
        </p>
        <div class="contact">
          <strong>{{ company.legalName }}</strong
          ><br />
          {{ company.office }}<br />
          <template v-for="(phone, i) in company.phones" :key="phone.href">
            <span v-if="i > 0"> · </span><a :href="phone.href">{{ phone.label }}</a>
          </template>
          <br />
          <a :href="`mailto:${company.email}`">{{ company.email }}</a>
          <small>Sie erreichen uns lieber persönlich? Rufen Sie einfach an.</small>
        </div>
      </div>

      <form @submit.prevent="submit">
        <div>
          <label for="vn">Vorname</label>
          <input id="vn" v-model="form.vorname" autocomplete="given-name" required />
        </div>
        <div>
          <label for="nn">Nachname</label>
          <input id="nn" v-model="form.nachname" autocomplete="family-name" required />
        </div>
        <div>
          <label for="em">E-Mail</label>
          <input id="em" v-model="form.email" type="email" autocomplete="email" required />
        </div>
        <div>
          <label for="tel">Telefon</label>
          <input id="tel" v-model="form.telefon" type="tel" autocomplete="tel" required />
        </div>
        <div class="full">
          <label for="ad">Adresse des Gebäudes</label>
          <input id="ad" v-model="form.adresse" autocomplete="street-address" required />
        </div>
        <div class="full">
          <label for="art">Wofür möchten Sie eine Offerte?</label>
          <select id="art" v-model="form.anliegen" required>
            <option value="" disabled>Bitte wählen</option>
            <option v-for="option in offerOptions" :key="option">{{ option }}</option>
          </select>
        </div>
        <div class="full">
          <label for="msg">Nachricht <span>(freiwillig)</span></label>
          <textarea
            id="msg"
            v-model="form.nachricht"
            placeholder="Zum Beispiel: aktuelle Heizung, Baujahr des Hauses"
          ></textarea>
        </div>
        <button class="btn primary" type="submit">Offerte anfordern</button>
        <p class="privacy">Ihre Angaben verwenden wir nur für diese Anfrage.</p>
        <p v-if="sent" class="full privacy" role="status">
          Danke für Ihre Anfrage. Wir melden uns bei Ihnen.
        </p>
      </form>
    </div>
  </section>
</template>
