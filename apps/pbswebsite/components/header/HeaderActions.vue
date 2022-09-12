<template>
  <button @click="store.openQuickDonateDrawer()" :class="{
    'bg-emerald-500 text-white hover:bg-emerald-600':
      route.meta.headerColor === 'white',
    'bg-emerald-100 text-slate-800 hover:bg-emerald-200':
      route.meta.headerColor !== 'white',
  }"
    class="text-md font-header inline-flex rounded-md py-1.5 px-4 font-bold transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75">
    Jetzt spenden
  </button>
</template>

<script setup lang="ts">
import { useStore } from "./state";
const route = useRoute();

const store = useStore();
</script>
