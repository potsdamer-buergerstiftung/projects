export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useDirectusUser();
  const directusUrl = useDirectusUrl();
  const { setToken, fetchUser } = useDirectusAuth();

  const refreshAuth = (server: boolean) =>
    useLazyFetch<any>(new URL("/auth/refresh", directusUrl).toString(), {
      method: "POST",
      credentials: "include",
      headers: useRequestHeaders(["cookie"]),
      server,
    });

  if (!to.path.startsWith("/portal")) return;

  if (to.path.includes("login") && user.value) {
    return navigateTo("/portal");
  }

  if (user.value) return;

  if (to.path.includes("sso")) {
    return;
  }

  const { data: res } = await refreshAuth(false);
  if (!res.value?.data) {
    if (to.path.includes("login")) return;
    if (to.fullPath === "/portal") return;
    return navigateTo("/portal");
  }

  setToken(res.value.data.access_token);
  await fetchUser();

  if (from.fullPath !== "/portal") return navigateTo("/portal");

  return;
});
