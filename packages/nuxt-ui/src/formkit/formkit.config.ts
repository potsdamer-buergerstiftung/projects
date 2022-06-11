// formkit.config.ts
import { de } from "@formkit/i18n";
import { DefaultConfigOptions } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";

const config: DefaultConfigOptions = {
  locales: { de },
  locale: "de",
  config: {
    classes: generateClasses({
      text: {
        outer: "mb-5 formkit-disabled:opacity-40",
        label: "block mb-1 font-bold text-sm formkit-invalid:text-red-500",
        input:
          "w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400",
        help: "text-xs text-gray-500",
        messages: "list-none p-0 mt-1 mb-0",
        message: "text-red-500 mb-1 text-xs",
      },
    }),
  },
};

export default config;
