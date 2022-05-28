<script setup>
const route = useRoute()

definePageMeta({
    hideSideActions: false,
})

useHead({
    title: `${route.meta.title} - Potsdamer Bürgerstiftung`,
    meta: [{ name: 'og:title', content: `Potsdamer Bürgerstiftung - ${route.meta.title}` }, { name: 'description', content: 'Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung ehrenamtliches Engagement.' }],
    viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
    charset: 'utf-8',
})
</script>

<template>
    <div class="antialiased">
        <ClientOnly>
            <div class="sp">
                <ScrollProgressIndicator />
            </div>
        </ClientOnly>
        <Transition>
            <div class="sl" v-if="!route.meta.hideSideActions">
                <SocialMediaLinks size="large" />
            </div>
        </Transition>
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<style lang="postcss">
.sp {
    @apply origin-top-left;
    transform: rotate(-90deg) translate(-50%, 0);
    @apply left-[4vh];
    @apply fixed;
    @apply top-[50%];
    @apply z-50;
    @apply inline-flex;
    @apply align-middle;
    @apply items-center;
}

.sl {
    @apply origin-top-right;
    transform: rotate(-90deg) translate(50%, -100%);
    @apply right-[4vh];
    @apply fixed;
    @apply top-[50%];
    @apply z-50;
    @apply inline-flex;
    @apply align-middle;
    @apply items-center;
    @apply float-right;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.75s ease;
}

.v-enter-from,
.v-leave-to {
    transform: rotate(-90deg) translate(40%, -100%);
    opacity: 0;
}
</style>