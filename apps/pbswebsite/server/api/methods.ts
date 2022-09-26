import { Locale } from "@mollie/api-client";
import mollieClient from "../mollie";

export default defineEventHandler(async (event) => {
  const providers = mollieClient.methods.list({ locale: Locale.de_DE });
  return providers;
});
