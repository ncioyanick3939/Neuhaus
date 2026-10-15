<script setup>
import { systems } from '../data/content.js'
</script>

<template>
  <section id="systeme">
    <div class="wrap">
      <h2>Drei Wege, Ihr Haus zu heizen</h2>
      <p class="intro">
        Welche Lösung passt, hängt von Gebäude, Grundstück und Budget ab. Wir schauen vor Ort an,
        was bei Ihnen sinnvoll ist, und sagen Ihnen auch, wenn etwas nicht passt.
      </p>

      <article v-for="system in systems" :key="system.title" class="system">
        <div class="pic">{{ system.photo }}</div>
        <div>
          <h3>{{ system.title }}</h3>
          <p>{{ system.text }}</p>
        </div>
        <dl>
          <div v-for="[label, value] in system.facts" :key="label">
            <dt>{{ label }}</dt>
            <dd>{{ value }}</dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>
