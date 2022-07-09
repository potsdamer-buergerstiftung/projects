<template>
  <div>
    <Title>Projekte</Title>
    <div class="relative h-screen w-full">
      <ProjectSlider />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  isDark: true,
  hideSideActions: true,
});
</script>
