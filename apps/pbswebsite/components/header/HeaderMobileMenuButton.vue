<template>
  <button class="rounded-full p-4" :class="[buttonBackground]">
    <div class="flex h-6 w-6 flex-col items-start justify-center space-y-1.5">
      <div class="h-0.5 w-6" :class="[buttonContentsColor]" />
      <div class="h-0.5 w-5" :class="[buttonContentsColor]" />
    </div>
  </button>
</template>

<script setup lang="ts">
const route = useRoute();

const buttonBackground = computed(() =>
  route.meta.headerColor === "white" ? "bg-slate-900" : "bg-slate-100"
);
const buttonContentsColor = computed(() =>
  route.meta.headerColor === "white" ? "bg-white" : "bg-slate-800"
);
</script>
