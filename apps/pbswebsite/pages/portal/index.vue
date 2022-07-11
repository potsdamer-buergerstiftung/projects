<template>
  <div>
    <PageTitle :title="
      user
        ? `${greetingMessage}, ${user.first_name}.`
        : 'Freiwilligenportal'
    " v-if="user">
      <template #description>
        <p class="max-w-2xl">
          Unser Freilligenportal vernetzt Dich und bietet Dir einen Überblick
          über alles, was in der Bürgerstiftung passiert und über die Sachen,
          für die Du Dich engagieren kannst.
        </p>
      </template>
      <template #actions>
        <button
          @click="logout()"
          class="text-md font-header rounded-md bg-emerald-500 py-1.5 px-4 font-bold text-white transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75">
          Log-out
        </button>
      </template>
    </PageTitle>
    <section class="py-28 md:py-32" v-else>
      <div class="container px-4 mx-auto">
        <PortalInstructions />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "portal",
});
const greetingMessage = useGreetingMessage();
const user = useDirectusUser() as any;

const { logout } = useDirectusAuth();
</script>
