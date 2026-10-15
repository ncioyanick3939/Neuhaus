<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { company, navItems } from '../data/content.js'

const open = ref(false)
const burger = ref(null)

function close() {
  open.value = false
}

// Scrollen der Seite sperren, solange das Handy-Menü offen ist
watch(open, (isOpen) => {
  document.body.classList.toggle('menu-open', isOpen)
})

function onKey(e) {
  if (e.key === 'Escape' && open.value) {
    close()
    burger.value?.focus()
  }
}
onMounted(() => document.addEventListener('keydown', onKey))
onUnmounted(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <header>
    <div class="wrap bar">
      <a class="brand" href="#"><i aria-hidden="true"></i>{{ company.brand }}</a>

      <nav id="hauptmenue" aria-label="Hauptnavigation" @click="$event.target.closest('a') && close()">
        <button class="menu-close" type="button" aria-label="Menü schliessen" @click="close">
          <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M5 5l18 18M23 5L5 23" /></svg>
        </button>
        <ul>
          <li v-for="item in navItems" :key="item.label">
            <a :href="item.href" :aria-current="item.current ? 'page' : undefined">{{ item.label }}</a>
          </li>
        </ul>
        <a class="menu-call" :href="company.phones[0].href">{{ company.phones[0].label }}</a>
      </nav>

      <a class="call" :href="company.phones[0].href">{{ company.phones[0].label }}</a>

      <button
        ref="burger"
        class="menu-btn"
        type="button"
        aria-label="Menü öffnen"
        :aria-expanded="open"
        aria-controls="hauptmenue"
        @click="open = true"
      >
        <svg viewBox="0 0 28 28" aria-hidden="true"><path d="M4 8h20M4 14h20M4 20h20" /></svg>
      </button>
    </div>
  </header>
</template>
