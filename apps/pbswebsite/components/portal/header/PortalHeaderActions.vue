<template>
  <NuxtLink
    to="/"
    class="text-md font-header inline-flex rounded-md bg-emerald-100 py-1.5 px-4 font-bold text-slate-800 transition ease-in-out hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
  >
    Zurück zur Website
  </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
