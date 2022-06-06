import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin, addComponentsDir } from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
  addComponents: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxtui",
    configKey: "ui",
  },
  defaults: {
    addPlugin: true,
    addComponents: true,
  },
  setup(options, nuxt) {
    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
      nuxt.options.build.transpile.push(runtimeDir);
      addPlugin(resolve(runtimeDir, "plugin"));
    }

    if (options.addComponents) {
      const componentsDir = fileURLToPath(
        new URL("./components", import.meta.url)
      );
      nuxt.options.build.transpile.push(componentsDir);
      addComponentsDir({ watch: true, path: componentsDir, prefix: "pbs" });
    }
  },
});
