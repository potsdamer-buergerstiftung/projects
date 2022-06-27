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
    "@vueuse/motion/nuxt",
    "nuxt-ui",
  ],
  ui: {
    addFonts: false,
  },
  css: [
    "@fontsource/dm-sans/400.css",
    "@fontsource/dm-sans/500.css",
    "@fontsource/dm-sans/700.css",
    "@fontsource/dm-serif-display/400.css",
  ],
  dayjs: {
    locales: ["de"],
    defaultLocale: "de",
  },
  directus: {
    url: "https://portal.potsdamer-buergerstiftung.org",
  },
});
