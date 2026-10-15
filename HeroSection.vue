<script setup>
import { company } from '../data/content.js'
import HouseDiagram from './HouseDiagram.vue'
</script>

<template>
  <div class="hero">
    <div class="wrap">
      <div>
        <h1>Eine neue Heizung, die zu Ihrem Haus passt.</h1>
        <p class="lead">
          Wärmepumpe, Erdsonde oder Pelletheizung: Wir planen, installieren und übergeben Ihre
          Anlage. Aus Heitenried, für den ganzen Sensebezirk.
        </p>
        <div class="btns">
          <a class="btn primary" href="#offerte">Offerte anfordern</a>
          <a class="btn ghost" :href="company.phones[0].href">Direkt anrufen</a>
        </div>
        <ul class="facts">
          <li>Planung bis Übergabe aus einer Hand</li>
          <li>Inbetriebnahme durch den Hersteller</li>
          <li>Kombinierbar mit Solaranlage</li>
        </ul>
      </div>
      <HouseDiagram />
    </div>
  </div>
</template>
