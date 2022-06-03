import { defineNuxtConfig } from "nuxt";
import Ui from "../src/module";

export default defineNuxtConfig({
    modules: [Ui],
    ui: {
        addPlugin: true,
        addComponents: true,
    },
});
