<!-- pages/index.vue -->
<template>
  <div>
    <IntroSection title="Home" :displayHomeLink="false">
      <template #subtitle>
        <span
          >Dutch Digital Agencies (DDA) verenigt en verbindt
          <span>[nummer]</span> toonaangevende digitale bureaus. Samen maken we
          de wereld elke dag een beetje slimmer.</span
        >
      </template>
    </IntroSection>
    <CtaNav />
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
div {
  display: grid;
  place-items: center;
}
.cta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.cta a {
  margin: 0;
}
</style>