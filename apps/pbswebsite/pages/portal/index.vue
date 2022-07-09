<template>
  <div>
    <PageTitle
      :title="
        user
          ? `${greetingMessage()}, ${user.first_name}.`
          : 'Freiwilligenportal'
      "
    >
      <template #description>
        <p class="max-w-2xl">
          Unser Freilligenportal vernetzt Dich und bietet Dir einen Überblick
          über alles, was in der Bürgerstiftung passiert und über die Sachen,
          für die Du Dich engagieren kannst.
        </p>
      </template>
      <template #actions>
        <NuxtLink
          v-if="!user"
          to="/portal/login"
          class="text-md font-header rounded-md bg-emerald-500 py-1.5 px-4 font-bold text-white transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
        >
          Log-in
        </NuxtLink>
        <button
          @click="logout()"
          v-else
          class="text-md font-header rounded-md bg-emerald-500 py-1.5 px-4 font-bold text-white transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
        >
          Log-out
        </button>
      </template>
    </PageTitle>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "portal",
});
const { logout } = useDirectusAuth();
const user = useDirectusUser() as any;

const greetingMessage = () => {
  const dayTime = new Date().getHours();

  if (dayTime > 18) {
    return "Guten Abend";
  }
  if (dayTime > 10) {
    return "Guten Tag";
  }
  if (dayTime > 6) {
    return "Guten Morgen";
  }
  return "Hallo";
};
</script>
