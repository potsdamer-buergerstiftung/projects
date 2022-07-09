<template>
  <NuxtLink
    to="/"
    class="bg-emerald-100 text-slate-800 hover:bg-emerald-200 text-md font-header inline-flex rounded-md py-1.5 px-4 font-bold transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
  >
    Zurück zur Website
  </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
