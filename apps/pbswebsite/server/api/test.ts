import directus from "../directus";

export default defineEventHandler(async (event) => {
  const users = await directus.items("cost_centers").readByQuery();

  return {
    users,
  };
});
