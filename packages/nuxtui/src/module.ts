import { resolve } from "path";
import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addPlugin,
  addComponentsDir,
  installModule,
} from "@nuxt/kit";

export interface ModuleOptions {
  /* addPlugin: boolean; */
  addComponents: boolean;
  addTailwind: boolean;
  addFonts: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxtui",
    configKey: "ui",
  },
  defaults: {
    /* addPlugin: true, */
    addComponents: true,
    addTailwind: true,
    addFonts: true,
  },
  setup(options, nuxt) {
    if (options.addTailwind) {
      const componentsDir = fileURLToPath(
        new URL("./components", import.meta.url)
      );
      const tailwindDir = fileURLToPath(new URL("./tailwind", import.meta.url));
      installModule("@nuxtjs/tailwindcss", {
        viewer: false,
        config: {
          content: [resolve(componentsDir, "**/*.{vue,js,ts}")],
          cssPath: resolve(tailwindDir, "tailwind.css"),
          plugins: [
            require("@tailwindcss/aspect-ratio"),
            require("@tailwindcss/forms"),
            require("@tailwindcss/line-clamp"),
            require("@tailwindcss/typography"),
          ],
          theme: {
            fontFamily: {
              header: ["Space Grotesk", "sans-serif"],
            },
          },
        },
      });
    }

    if (options.addFonts) {
      nuxt.options.css.push(
        "@fontsource/space-grotesk/700.css",
        "@fontsource/space-grotesk/400.css"
      );
    }

    /* if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
      nuxt.options.build.transpile.push(runtimeDir);
      addPlugin(resolve(runtimeDir, "plugin"));
    } */

    if (options.addComponents) {
      const componentsDir = fileURLToPath(
        new URL("./components", import.meta.url)
      );
      nuxt.options.build.transpile.push(componentsDir);
      addComponentsDir({ watch: true, path: componentsDir, prefix: "pbs" });
    }
  },
});
