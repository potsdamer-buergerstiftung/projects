<script setup>
const route = useRoute();
</script>

<template>
  <div class="antialiased">
    <Script
      async
      defer
      data-website-id="54874799-7dc4-407f-8ee6-ea2d08dc4cf1"
      src="https://analytics.potsdamer-buergerstiftung.org/umami.js"
    ></Script>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
