<!-- pages/index.vue -->
<template>
  <div>
    <IntroSection title="Vacatures">
      <template #subtitle>
       Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan.
      </template>
    </IntroSection>
  </div>
</template>

<script>
import IntroSection from "../components/IntroSection.vue";

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