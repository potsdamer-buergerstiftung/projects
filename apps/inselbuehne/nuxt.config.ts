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
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],
  css: [
    "@fontsource/dm-sans/400.css",
    "@fontsource/dm-sans/500.css",
    "@fontsource/dm-sans/700.css",
    "@fontsource/dm-serif-display/400.css",
  ],
});
