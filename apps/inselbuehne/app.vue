<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <Title>{{ route.meta.title }}</Title>
</template>

<script setup>
const route = useRoute();

useHead({
    titleTemplate: (title) => `${title} - Inselbühne Potsdam`,
    meta: [
        { name: "og:title", content: `Inselbühne Potsdam - ${route.meta.title}` },
        {
            name: "description",
            content:
                "Die Inselbühne geht in die zweite Runde und kommt mit vielen tollen Veranstaltungen.",
        },
    ],
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    charset: "utf-8",
});
</script>
