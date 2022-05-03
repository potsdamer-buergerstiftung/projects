import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_CLIENT_SECRET);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          unit_amount: 2000,
          currency: "eur",
          product_data: {
            name: "Freundeskreis der Bürgerstiftung",
          },
          recurring: {
            interval: "month",
          },
        },
        quantity: 1,
      },
    ],
    payment_method_types: ["card", "sepa_debit"],
    mode: "subscription",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.redirect(303, session.url);
}
