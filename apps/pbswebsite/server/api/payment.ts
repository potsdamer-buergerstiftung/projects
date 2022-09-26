import { Locale, PaymentMethod } from "@mollie/api-client";
import mollieClient from "../mollie";

export default defineEventHandler(async (event) => {
  const { amount, provider } = useQuery(event);
  const value = (Math.round(parseInt(amount as string) * 100) / 100).toFixed(2);
  const payment = await mollieClient.payments.create({
    amount: {
      currency: "EUR",
      value,
    },
    description: "Spende von " + amount + "€",
    redirectUrl: "https://webshop.example.org/order/12345/",
    webhookUrl: "https://webshop.example.org/payments/webhook/",
    metadata: {
      order_id: "12345",
    },
    locale: Locale.de_DE,
    method: provider as PaymentMethod,
  });
  return sendRedirect(event, payment._links.checkout.href, 303);
});
