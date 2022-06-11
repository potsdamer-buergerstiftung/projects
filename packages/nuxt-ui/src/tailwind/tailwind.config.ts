import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);
const componentsDir = resolve("../components");
const formkitDir = resolve("../formkit");
const tailwindDir = resolve("./");

export default ({ srcDir, rootDir }) => ({
  theme: {
    fontFamily: {
      header: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  cssPath: resolve(tailwindDir, "tailwind.css"),
  plugins: [
    require("@formkit/themes/tailwindcss"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  content: [
    `${componentsDir}/**/*.{vue,js,ts}`,
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${rootDir}/nuxt.config.ts`,
  ],
});
