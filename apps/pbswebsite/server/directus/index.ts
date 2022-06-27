import { Directus } from "@directus/sdk";

export default new Directus("https://portal.potsdamer-buergerstiftung.org", {
  auth: {
    staticToken: useRuntimeConfig().directusAccessToken,
  },
});
