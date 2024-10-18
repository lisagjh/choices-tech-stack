<!-- components/IntroSection.vue -->
<template>
  <section class="intro-section">
    <NuxtLink v-if="displayHomeLink" to="/" class="back-to-home">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 12H18M6 12L11 7M6 12L11 17"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>TERUG NAAR HOME</span>
    </NuxtLink>

    <h1>{{ title }}</h1>
    <p>
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    displayHomeLink: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
  .intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.75em;
    margin: 10% 15% 10% 15%;
  }

  h1 {
    text-transform: uppercase;
  }
</style>