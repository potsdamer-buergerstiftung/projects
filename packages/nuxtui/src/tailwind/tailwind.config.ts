import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);
const componentsDir = resolve("../components");
const tailwindDir = resolve("./");

export default ({ srcDir }) => ({
  theme: {
    fontFamily: {
      header: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  cssPath: resolve(tailwindDir, "tailwind.css"),
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  content: [
    resolve(componentsDir, "**/*.{vue,js,ts}"),
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    // TODO: This makes issues with import protection
    // Split in two files to avoid watching issues (https://github.com/nuxt-community/tailwindcss-module/issues/359)
    // `${rootDir}/nuxt.config.js`,
    // `${rootDir}/nuxt.config.ts`
  ],
});
