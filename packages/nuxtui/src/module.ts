import { fileURLToPath } from "url";
import {
  defineNuxtModule,
  addPlugin,
  addComponentsDir,
  addAutoImportDir,
  installModule,
  createResolver,
} from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export interface ModuleOptions {
  /* addPlugin: boolean; */
  addComponents: boolean;
  addTailwind: boolean;
  addFonts: boolean;
  addComposables: boolean;
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
    addComposables: true,
  },
  setup(options, nuxt) {
    if (options.addTailwind) {
      const componentsDir = resolve("./components");
      const tailwindDir = resolve("./tailwind");
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

    /* if (options.addComposables) {
      const composablesDir = resolve("./composables");
      nuxt.options.build.transpile.push(composablesDir);
      addAutoImportDir(composablesDir);
    } */

    if (options.addComponents) {
      const componentsDir = resolve("./components");
      nuxt.options.build.transpile.push(componentsDir);
      addComponentsDir({ prefix: "pbs", watch: true, path: componentsDir });
    }
  },
});
