<template>
  <button
    :class="{
      'bg-emerald-500 text-white hover:bg-emerald-600':
        route.meta.headerColor === 'white',
      'bg-emerald-100 text-slate-800 hover:bg-emerald-200':
        route.meta.headerColor !== 'white',
    }"
    class="py-1.5 px-4 font-header font-bold text-md rounded-md transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
  >
    Unterstützen & engagieren
  </button>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
