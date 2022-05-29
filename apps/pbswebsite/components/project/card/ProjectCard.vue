<template>
    <NuxtLink
        :to="`/projekte/${projectId}`"
        class="group relative block h-96 w-full cursor-pointer overflow-hidden rounded-lg"
    >
        <img
            :src="`https://cms.potsdamer-buergerstiftung.org/assets/${imageId}?${imageProps}&quality=40`"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div
            class="pointer-events-none absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"
        />
        <div class="flex-column absolute top-0 bottom-0 left-0 right-0 flex items-end p-8">
            <div class="relative w-full">
                <h1 class="font-header text-2xl font-bold text-white">{{ title }}</h1>
                <div class="relative mt-2 w-full overflow-hidden">
                    <p
                        class="block translate-y-0 text-white opacity-100 transition duration-500 group-hover:-translate-y-3 group-hover:opacity-0"
                    >
                        {{ subTitle }}
                    </p>
                    <div
                        class="absolute translate-y-0 text-white opacity-0 transition duration-500 group-hover:-translate-y-full group-hover:opacity-100"
                    >
                        <div class="relative flex flex-row items-center font-bold">
                            <span>Projekt anzeigen</span>
                            <div class="ml-2 h-0.5 w-12 bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const { imageSize = "small" } = defineProps<{
    title: string;
    imageId: string;
    subTitle: string;
    projectId: string;
    imageSize?: "small" | "large";
}>();

const imageProps = imageSize == "small" ? "width=500&height=500" : "width=1100&height=900";
</script>
