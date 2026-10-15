<script setup>
// Platzhalter: hier später echte Fotos eintragen, z. B. { src: '/referenzen/1.jpg', alt: '…', caption: '…' }
const references = [1, 2, 3]
</script>

<template>
  <section id="referenzen" style="padding-top: 0">
    <div class="wrap">
      <h2>Anlagen aus der Region</h2>
      <p class="intro">Hier sehen Sie, was wir in den letzten Jahren eingebaut haben.</p>
      <div class="refs">
        <div v-for="n in references" :key="n" class="ph">
          Referenzfoto {{ n }}<br />mit Ort und Anlagentyp
        </div>
      </div>
      <a class="more" href="#">Alle Referenzen ansehen</a>
    </div>
  </section>
</template>
