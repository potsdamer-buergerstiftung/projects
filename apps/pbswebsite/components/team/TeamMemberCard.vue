<template>
  <div class="relative h-full">
    <div class="absolute z-[-1] h-full w-full">
      <div
        class="absolute bottom-0 top-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-transparent"
      />
      <DirectusImage
        :asset-id="image"
        class="h-full w-full object-cover"
        :width="800"
        :height="900"
        :quality="30"
        v-if="image"
      />
      <div class="w-full h-full bg-emerald-100" v-else></div>
    </div>
    <div
      class="container mx-auto flex h-full flex-col justify-end px-4 py-16 md:p-8 lg:max-w-none xl:p-10"
    >
      <div class="mt-60">
        <h1 class="mb-1 text-sm font-semibold uppercase text-slate-200">
          {{ title }}
        </h1>
        <h2 class="font-header text-2xl font-bold text-white">{{ name }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  name: string;
  description?: string;
  image?: string;
}>();
</script>
