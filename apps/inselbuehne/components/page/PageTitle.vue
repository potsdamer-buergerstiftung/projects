<template>
  <section class="bg-gray-50">
    <div class="px-4 lg:px-0 max-w-3xl pt-48 pb-24 mx-auto text-center">
      <h4 class="text-sm font-bold tracking-widest text-green-500 uppercase">
        {{ heading }}
      </h4>
      <h1 class="mt-6 font-serif text-5xl md:text-6xl">{{ title }}</h1>
      <p class="pt-5 text-lg text-gray-600" v-if="$slots.description">
        <slot name="description" />
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; heading: string }>();
</script>
