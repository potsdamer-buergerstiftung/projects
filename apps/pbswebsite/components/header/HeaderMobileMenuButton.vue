<template>
  <button class="rounded-full p-4" :class="[buttonBackground]">
    <div class="flex flex-col items-start justify-center space-y-1.5 h-6 w-6">
      <div class="w-6 h-0.5" :class="[buttonContentsColor]" />
      <div class="w-5 h-0.5" :class="[buttonContentsColor]" />
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
