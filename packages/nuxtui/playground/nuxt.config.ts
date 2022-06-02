import { defineNuxtConfig } from "nuxt";
import PPBSUI from "../src/module";

export default defineNuxtConfig({
    modules: [PPBSUI],
    PBSUI: {
        addPlugin: true,
    },
});
