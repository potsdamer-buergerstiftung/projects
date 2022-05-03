import type { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_CLIENT_SECRET);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "eur",
    automatic_payment_methods: { enabled: true },
  });

  res.send(paymentIntent.client_secret);
}
