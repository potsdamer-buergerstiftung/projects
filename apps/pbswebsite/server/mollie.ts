import { createMollieClient } from "@mollie/api-client";

const client = createMollieClient({
  apiKey: useRuntimeConfig().mollieApiKey,
});

export default client;
