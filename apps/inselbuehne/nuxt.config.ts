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
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@fontsource/dm-sans", "@fontsource/dm-serif-display"],
});
