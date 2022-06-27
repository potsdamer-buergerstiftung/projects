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
  runtimeConfig: {},
  modules: [
    "@vueuse/motion/nuxt",
    "nuxt-directus",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-ui",
  ],
  experimental: {
    reactivityTransform: true,
  },
  directus: {
    url: "https://portal.potsdamer-buergerstiftung.org",
  },
  ui: {
    addTailwind: true,
  },
});
