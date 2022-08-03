<template>
  <NuxtLink
    :to="link"
    class="group relative block h-full w-full overflow-hidden rounded-md"
  >
    <div
      class="overflow-hidden"
      v-if="imageId"
      :class="[
        compact
          ? 'absolute bottom-0 top-0 left-0 right-0'
          : 'relative aspect-[5/4] ',
      ]"
    >
      <DirectusImage
        :asset-id="imageId"
        :width="700"
        :height="700"
        :quality="40"
        class="h-full w-full object-cover transition duration-500"
        :class="{ 'group-hover:scale-110': !compact }"
      />
      <div
        class="absolute left-0 right-0 bottom-0 transition duration-500"
        :class="[
          compact
            ? 'top-0 bg-slate-900 bg-opacity-60'
            : 'translate-y-3 bg-gradient-to-t from-slate-900 to-transparent p-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100',
        ]"
      >
        <div
          class="relative flex flex-row items-center font-bold"
          v-if="!compact"
        >
          <span class="text-white">Beitrag aufrufen</span>
          <div class="ml-2 h-0.5 w-12 bg-white" />
        </div>
      </div>
    </div>
    <div
      class="relative bg-slate-100 px-6 py-8 transition"
      :class="[ compact ? 'h-full hover:bg-transparent' : 'hover:bg-slate-200' ]"
    >
      <ul class="flex">
        <li
          class="text-md font-medium text-slate-500 transition"
          :class="{ 'group-hover:text-white': compact }"
        >
          {{ formattedDate }}
        </li>
        <li
          class="text-md text-slate-500 before:px-1.5 before:text-emerald-500 before:content-['•']"
          v-if="projectTitle"
          :class="{ 'group-hover:text-white': compact }"
        >
          {{ projectTitle }}
        </li>
      </ul>
      <h2
        class="font-header mt-3 text-3xl font-bold"
        :class="{ 'group-hover:text-white': compact }"
      >
        {{ title }}
      </h2>
      <ClientOnly>
        <ul v-if="tags" class="mt-4 flex flex-wrap gap-2">
          <li v-for="tag in tags">
            <NuxtLink
              to="/aktuelles"
              class="rounded-md bg-slate-200 py-1 px-2 text-sm font-medium transition hover:bg-slate-300"
              :class="{
                'group-hover:bg-opacity-10 group-hover:text-white': compact,
              }"
            >
              {{ tag }}
            </NuxtLink>
          </li>
        </ul>
      </ClientOnly>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
// Article Card Props
const { date, compact = false } = defineProps<{
  title: string;
  date: Date;
  imageId?: string;
  projectTitle?: string;
  author?: string;
  tags?: string[];
  compact?: boolean;
  link?: string;
}>();

const formattedDate = date.toLocaleDateString("de", {
  year: "numeric",
  day: "numeric",
  month: "long",
});
</script>
