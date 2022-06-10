<template>
  <section class="bg-gray-50">
    <div class="mx-auto max-w-3xl px-4 pt-48 pb-24 text-center lg:px-0">
      <h4 class="text-sm font-bold uppercase tracking-widest text-green-500">
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
