<template>
  <div class="antialiased bg-slate-50 min-h-screen">
    <header class="container mx-auto px-4 p-4">
      <HeaderBrand />
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
  titleTemplate: "%s - Potsdamer Bürgerstiftung",
  meta: [
    {
      name: "og:title",
      content: `Potsdamer Bürgerstiftung - ${route.meta.title}`,
    },
    {
      name: "description",
      content:
        "Wir vernetzen Gleichgesinnte, versammeln engagierte Menschen, bieten Unterstützung als Plattform für Ehrenamt und möchten es den Menschen in Potsdam leichter machen, das Gemeinwohl zu stärken, Gemeinschaftsgefühl zu erleben, ein herzliches Miteinander und eine starke Zukunft für Potsdam zu stiften.",
    },
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  charset: "utf-8",
});
</script>
