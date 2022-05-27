<template>
    <NuxtLink :to="`/projekte/${projectId}`"
        class="block relative w-full overflow-hidden rounded-lg cursor-pointer group h-96">
        <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/${imageId}?${imageProps}&quality=40`"
            class="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        <div
            class="absolute top-0 bottom-0 left-0 right-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div class="absolute top-0 bottom-0 left-0 right-0 flex items-end p-8 flex-column">
            <div class="relative w-full">
                <h1 class="text-2xl font-bold text-white font-header">{{ title }}</h1>
                <div class="relative w-full mt-2 overflow-hidden">
                    <p
                        class="block text-white opacity-100 transition duration-500 translate-y-0 group-hover:-translate-y-3 group-hover:opacity-0">
                        {{ subTitle }}</p>
                    <div
                        class="absolute text-white opacity-0 transition duration-500 translate-y-0 group-hover:-translate-y-full group-hover:opacity-100">
                        <div class="relative font-bold flex flex-row items-center">
                            <span>Projekt anzeigen</span>
                            <div class="w-12 h-0.5 bg-white ml-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const { imageSize = "small" } = defineProps<{ title: string, imageId: string, subTitle: string, projectId: string, imageSize?: "small" | "large" }>()

const imageProps = imageSize == "small" ? "width=500&height=500" : "width=1100&height=900";
</script>