<script setup>
const route = useRoute();

definePageMeta({
    hideSideActions: false,
});

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
                "Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung ehrenamtliches Engagement.",
        },
    ],
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    charset: "utf-8",
});
</script>

<template>
    <div class="antialiased">
        <ClientOnly>
            <div
                class="fixed left-[4vh] top-[50%] z-50 inline-flex origin-top-left items-center align-middle"
                style="transform: rotate(-90deg) translate(-50%, 0)"
            >
                <ScrollProgressIndicator />
            </div>
        </ClientOnly>
        <div
            class="fixed right-[4vh] top-[50%] z-50 inline-flex origin-top-right items-center align-middle"
            style="transform: rotate(-90deg) translate(50%, -100%)"
        >
            <SocialMediaLinks size="large" />
        </div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>
