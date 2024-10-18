// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  // Enable auto-import of components
  components: true,

  // Compatibility date for Nuxt features
  compatibilityDate: "2024-04-03",

  // Disable devtools in production
  devtools: { enabled: false },

  // Define path alias
  alias: {
    "@": resolve(__dirname, "./"), // Correct alias path resolution
  },

  // Global CSS imports
  css: ["~/assets/styles/global.css"],
});
