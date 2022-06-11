<template>
  <div class="px-8 py-8">
    <p class="text-medium text-slate-600">
      {{ formattedDate
      }}<span v-if="store.event.location">
        - {{ store.event.location.name }}</span
      >
    </p>
    <h1 class="mt-2 font-header text-4xl font-bold">{{ store.event.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "./state";

const store = useStore();

const formattedDate = new Date(store.event.start).toLocaleDateString("de-DE", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
});
</script>
