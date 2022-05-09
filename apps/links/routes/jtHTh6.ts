// Link für die Spenden-Seite der Bürgerstiftungs-Website

export default eventHandler((event) => {
  sendRedirect(
    event,
    "https://www.potsdamer-buergerstiftung.org/mitstiften",
    301
  );
});
