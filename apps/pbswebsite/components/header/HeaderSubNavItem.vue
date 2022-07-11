<template>
  <NuxtLink
    :to="link"
    class="py-2 text-xl font-medium text-slate-400 transition hover:text-emerald-500 lg:py-1 lg:text-lg lg:text-slate-900"
  >
    {{ title }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { useStore } from "./state";
const store = useStore();

defineProps<{ title: string; link: string }>();
</script>
