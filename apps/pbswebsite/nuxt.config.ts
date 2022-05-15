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
  css: [
    "@fontsource/space-grotesk/700.css",
    "@fontsource/space-grotesk/400.css",
  ],
  experimental: {
    reactivityTransform: true,
  },
});
