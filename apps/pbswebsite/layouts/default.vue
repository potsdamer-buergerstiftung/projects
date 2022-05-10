<script setup>
const route = useRoute()

useHead({
    title: `${route.meta.title} - Potsdamer Bürgerstiftung`,
    meta: [{ name: 'og:title', content: `Potsdamer Bürgerstiftung - ${route.meta.title}` }, { name: 'description', content: 'Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung ehrenamtliches Engagement.' }],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    charset: 'utf-8',
})
</script>

<template>
    <div class="antialiased">
        <Header />
        <slot />
    </div>
</template>