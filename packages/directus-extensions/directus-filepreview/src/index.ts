import { defineInterface } from "@directus/extensions-sdk";
import Interface from "./interface.vue";

export default defineInterface({
  id: "file-preview",
  name: "File Preview",
  description: "Preview single file.",
  icon: "text_fields",
  component: Interface,
  types: ["string"],
  group: "standard",
  options: () => {
    return [
      {
        field: "fileField",
        name: "File Field",
        type: "string",
        meta: {
          width: "full",
          interface: "input",
          options: {
            placeholder: "Please enter table height",
          },
        },
      },
    ];
  },
});
