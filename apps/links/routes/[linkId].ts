// CMS Dynamic Links

import { Directus } from "@directus/sdk";
import Hashids from "hashids";

const hashids = new Hashids();

const db = new Directus<any>("https://cms.potsdamer-buergerstiftung.org");

export default eventHandler((event) => {
  const linkId = event.context.params.linkId;
  console.log(linkId)
  db.items("public_links")
    .readOne(linkId)
    .then((link) => {
      return sendRedirect(event, link.destination, 307);
    })
    .catch((e) => console.log("Error"));
});
