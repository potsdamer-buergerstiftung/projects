<template>
    <NuxtLink :to="`/projekte/${projectId}`"
        class="block relative w-full overflow-hidden rounded-lg cursor-pointer group h-96">
        <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/${imageId}?width=600&height=600&quality=40`"
            class="object-cover transition duration-500 group-hover:scale-110" />
        <div
            class="absolute top-0 bottom-0 left-0 right-0 pointer-events-none bg-gradient-to-t from-black opacity-60" />
        <div class="absolute top-0 bottom-0 left-0 right-0 flex items-end p-8 flex-column">
            <div class="relative w-full">
                <h1 class="text-2xl font-bold text-white">{{ title }}</h1>
                <div class="relative w-full mt-2 overflow-hidden">
                    <p
                        class="block text-white opacity-100 transition duration-500 translate-y-0 group-hover:-translate-y-3 group-hover:opacity-0">
                        {{ subTitle }}</p>
                    <div
                        class="absolute text-white opacity-0 transition duration-500 translate-y-0 group-hover:-translate-y-full group-hover:opacity-100">
                        <NuxtLink to="/" class="relative font-bold">
                            Projekt anzeigen
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string, imageId: string, subTitle: string, projectId: string }>()
</script>