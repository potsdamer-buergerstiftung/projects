import type { VercelRequest, VercelResponse } from "@vercel/node";

// Drachenboot-Link-Spenden

export default function (req: VercelRequest, res: VercelResponse) {
  res.redirect(301, "https://www.potsdam-crowd.de/drachenboot");
}
