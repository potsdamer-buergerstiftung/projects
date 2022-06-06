import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "de",
      },
    },
  },
  modules: [
    "@vueuse/motion/nuxt",
    "nuxt-directus",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxtui",
  ],
  experimental: {
    reactivityTransform: true,
  },
  directus: {
    url: "https://cms.potsdamer-buergerstiftung.org",
  },
});
