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
        <Script async defer data-website-id="54874799-7dc4-407f-8ee6-ea2d08dc4cf1"
            src="https://analytics.potsdamer-buergerstiftung.org/umami.js"></Script>
        <Title>{{ route.meta.title }}</Title>
        <Header />
        <slot />
        <Footer />
    </div>
</template>