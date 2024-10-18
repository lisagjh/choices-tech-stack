<script setup lang="ts">
useHead({
  title: "Dutch Digital Agencies",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>