<script setup>
const route = useRoute();
</script>

<template>
  <div class="antialiased">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
