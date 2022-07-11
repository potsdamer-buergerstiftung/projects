<template>
  <NuxtLink :to="link" class="py-2 text-xl font-medium transition hover:text-emerald-500 lg:py-1 lg:text-lg"
    :class="[isActive ? 'text-emerald-500' : 'text-slate-400 lg:text-slate-900']">
    {{ title }}
  </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();

const isActive = computed(() => route.fullPath === link);

const { link } = defineProps<{ title: string; link: string }>();
</script>
