export default function () {
  const dayTime = new Date().getHours();

  if (dayTime > 18) {
    return "Guten Abend";
  } else if (dayTime > 10) {
    return "Guten Tag";
  } else if (dayTime > 6) {
    return "Guten Morgen";
  } else {
    return "Hallo";
  }
}
