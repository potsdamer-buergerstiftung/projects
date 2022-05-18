import { Stripe } from "stripe";

const STRIPE_API_SECRET = process.env.STRIPE_API_SECRET;

const stripe = new Stripe(
  "sk_test_51KidP4EeGmsn4BAsRzvKr7ADisiKhLVsMrCG5cRIWEuU0czRfueWTIk1bpynYK0vvZ1abtBpIBTGLZRHSkolQ6Qk00c9RGwfpX",
  { apiVersion: "2020-08-27" }
);

export default eventHandler(async (event) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          unit_amount: 2000,
          currency: "eur",
          product_data: {
            name: "Ticket",
            description: "2020-04-21",
          },
        },
        quantity: 1,
      },
    ],
    locale: "de",
    payment_method_types: ["card", "klarna", "sofort"],
    mode: "payment",
    cancel_url: "https://zahlungen.potsdamer-buergerstiftung.org/erfolg",
    success_url: "https://zahlungen.potsdamer-buergerstiftung.org/erfolg",
  });

  return sendRedirect(event, session.url, 307);
});
