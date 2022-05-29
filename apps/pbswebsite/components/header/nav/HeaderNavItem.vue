<script setup lang="ts">
interface Props {
  index: string;
  title: string;
  link: string;
  isExternal?: boolean;
}

const { title, link, index, isExternal = false } = defineProps<Props>();

function addZero(index: string): string {
  const number = Number(index);
  return number < 10 ? `0${index}` : index.toString();
}

const route = useRoute();
</script>

<template>
  <NuxtLink :to="link" class="px-4 py-2 text-lg flex flex-col items-end group">
    <span
      class="text-xs font-bold leading-4 transition group-hover:text-emerald-500"
      :class="{
        'text-slate-500': route.meta.headerColor !== 'white',
        'text-slate-300': route.meta.headerColor === 'white',
      }"
      >{{ addZero(index) }}</span
    >
    <span
      class="transition leading-4 text-[16px] font-medium group-hover:text-emerald-500"
      :class="{ 'text-white': route.meta.headerColor === 'white' }"
      >{{ title }}</span
    >
  </NuxtLink>
</template>
