<template>
  <div>
    <Title>Mein Profil</Title>
    <PageTitle title="Mein Profil">
      <template #actions>
        <button
          @click="logout()"
          class="text-md font-header rounded-md bg-emerald-500 py-1.5 px-4 font-bold text-white transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
        >
          Log-out
        </button>
      </template>
    </PageTitle>
  </div>
</template>

<script setup lang="ts">
const { logout } = useDirectusAuth();
definePageMeta({
  layout: "portal",
});
</script>
