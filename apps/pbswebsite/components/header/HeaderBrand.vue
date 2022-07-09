<template>
  <PbsLogo class="w-44 xl:w-52" :colorMode="isDark ? 'light' : 'dark'" />
</template>

<script setup lang="ts">
const isDark = inject<any>("isDark");
</script>
