import {
  defineNuxtModule,
  addComponentsDir,
  installModule,
  createResolver,
} from "@nuxt/kit";
import tailwindConfig from "./tailwind/tailwind.config";

const { resolve } = createResolver(import.meta.url);

export interface ModuleOptions {
  addComponents: boolean;
  addTailwind: boolean;
  addFonts: boolean;
  addComposables: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-ui",
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
      installModule("@nuxtjs/tailwindcss", {
        viewer: false,
        config: tailwindConfig(nuxt.options),
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
