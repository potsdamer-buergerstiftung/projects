import { Directus } from "@directus/sdk";

export default new Directus("https://cms.potsdamer-buergerstiftung.org", {
  auth: {
    staticToken: useRuntimeConfig().directusAccessToken,
  },
});
