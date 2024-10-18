<!-- pages/index.vue -->
<template>
  <div>
    <IntroSection title="Over Ons" :displayHomeLink="true">
      <template #subtitle>
        Dutch Digital Agencies (DDA) verenigt en vertegenwoordigt de [nummer] beste digitale bureaus van Nederland. Samen maken we de wereld om ons heen steeds een beetje slimmer. Stap voor stap, klik na klik.
      </template>
    </IntroSection>
  </div>
</template>

<script>
import IntroSection from "~/components/IntroSection.vue";

export default {
  name: 'IndexPage',
  components: {
    IntroSection,
  }
}
</script>

<style>
/* Your styles here */
</style>