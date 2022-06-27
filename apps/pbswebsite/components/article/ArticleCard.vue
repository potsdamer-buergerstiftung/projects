<template>
  <NuxtLink
    :to="`/aktuelles/${postId}`"
    class="group block w-full overflow-hidden rounded-md"
  >
    <div class="relative aspect-[1/1] overflow-hidden">
      <img
        class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        :src="`https://cdn.potsdamer-buergerstiftung.org/${imageId}?width=700&height=700&quality=40`"
      />
      <div
        class="absolute left-0 right-0 bottom-0 translate-y-3 bg-gradient-to-t from-slate-900 to-transparent p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <div class="relative flex flex-row items-center font-bold">
          <span class="text-white">Beitrag aufrufen</span>
          <div class="ml-2 h-0.5 w-12 bg-white" />
        </div>
      </div>
    </div>
    <div class="bg-slate-100 px-6 py-8">
      <ul class="flex">
        <li class="text-md font-medium text-slate-500">{{ formattedDate }}</li>
        <li
          class="text-md text-slate-500 before:px-1.5 before:text-emerald-500 before:content-['•']"
          v-if="projectTitle"
        >
          {{ projectTitle }}
        </li>
      </ul>
      <h2 class="font-header mt-3 text-3xl font-bold">{{ title }}</h2>
      <ul v-if="tags" class="mt-4 flex flex-wrap gap-2">
        <li v-for="tag in tags">
          <NuxtLink
            to="/aktuelles"
            class="rounded-md bg-slate-200 py-1 px-2 text-sm font-medium transition hover:bg-slate-300"
          >
            {{ tag }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
// Article Card Props
const { date } = defineProps<{
  postId: string;
  title: string;
  date: Date;
  imageId: string;
  projectTitle?: string;
  author?: string;
  tags?: string[];
}>();

const formattedDate = date.toLocaleDateString("de", {
  year: "numeric",
  day: "numeric",
  month: "long",
});
</script>
