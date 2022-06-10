<template>
  <div class="px-8 py-8">
    <h1 class="font-header text-3xl font-bold">{{ store.event.name }}</h1>
    <p class="mt-2">
      {{ formattedDate
      }}<span v-if="store.event.location">
        - {{ store.event.location.name }}</span
      >
    </p>
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
