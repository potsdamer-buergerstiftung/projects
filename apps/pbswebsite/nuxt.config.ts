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
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "nuxt-directus",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxtui",
  ],
  css: [
    "@fontsource/space-grotesk/700.css",
    "@fontsource/space-grotesk/400.css",
  ],
  experimental: {
    reactivityTransform: true,
  },
  directus: {
    url: "https://cms.potsdamer-buergerstiftung.org",
  },
});
