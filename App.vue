<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SystemsSection from './components/SystemsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ComboSection from './components/ComboSection.vue'
import ReferencesSection from './components/ReferencesSection.vue'
import OfferSection from './components/OfferSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <SystemsSection />
    <ProcessSection />
    <ComboSection />
    <ReferencesSection />
    <OfferSection />
  </main>
  <SiteFooter />
</template>
