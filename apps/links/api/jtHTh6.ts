import type { VercelRequest, VercelResponse } from "@vercel/node";

// Link für die Spenden-Seite der Bürgerstiftungs-Website

export default function (req: VercelRequest, res: VercelResponse) {
  res.redirect(301, "https://www.potsdamer-buergerstiftung.org/mitstiften");
}
