<!-- pages/index.vue -->
<template>
  <div>
    <IntroSection title="Onze Leden" :displayHomeLink="false">
      <template #subtitle>
        De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch
        Digital Agencies. Zet de juiste filters aan en zoek contact met het
        bureau dat het beste bij past bij jouw vraagstuk en uitdaging.  Ook DDA
        lid worden? Ga dan naar deze pagina voor meer informatie.
      </template>
    </IntroSection>
  </div>
</template>

<script>
import IntroSection from "~/components/IntroSection.vue";

export default {
  name: "IndexPage",
  components: {
    IntroSection,
  },
};
</script>

<style>
/* Your styles here */
</style>