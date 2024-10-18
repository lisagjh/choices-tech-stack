// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  alias: {
    '@': 'resolve(__dirname, "/"'
  },
  css: [
    "~/assets/styles/global.css"
  ]
})
