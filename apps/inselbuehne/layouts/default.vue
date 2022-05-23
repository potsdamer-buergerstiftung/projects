<script setup>
const route = useRoute()

useHead({
    titleTemplate: (title) => `${title} - Inselbühne Potsdam`,
    meta: [{ name: 'og:title', content: `Inselbühne Potsdam - ${route.meta.title}` }, { name: 'description', content: 'Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung ehrenamtliches Engagement.' }],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    charset: 'utf-8',
})
</script>

<template>
    <div class="antialiased">
        <Title>{{ route.meta.title }}</Title>
        <Header />
        <slot />
        <Footer />
    </div>
</template>