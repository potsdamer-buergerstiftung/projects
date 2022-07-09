<template>
  <div class="container mx-auto px-4 py-40">
    <h1>Du wirst weitergeleitet...</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "portal",
});
const { setToken, fetchUser } = useDirectusAuth();
const directusUrl = useDirectusUrl();
const router = useRouter();
const { data: res } = await useLazyFetch<any>(
  new URL("/auth/refresh", directusUrl).toString(),
  {
    method: "POST",
    credentials: "include",
    headers: useRequestHeaders(["cookie"]),
    server: false,
  }
);
watch(res, async (newRes) => {
  if (newRes) {
    setToken(newRes.data.access_token);
    await fetchUser();
    router.replace("/portal");
  }
});
</script>
