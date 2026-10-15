<script setup>
import { steps } from '../data/content.js'
</script>

<template>
  <section class="process" id="ablauf">
    <div class="wrap">
      <h2>So läuft Ihr Heizungsersatz ab</h2>
      <p class="intro">Fünf Schritte, ein Ansprechpartner. Sie wissen jederzeit, wo Ihr Projekt steht.</p>
      <ol class="steps">
        <li v-for="step in steps" :key="step.title">
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
