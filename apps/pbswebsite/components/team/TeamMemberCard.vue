<template>
    <div class="h-full relative">
        <div class="z-[-1] absolute h-full w-full">
            <div class="absolute bottom-0 top-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent" />
            <DirectusImage :asset-id="image" class="object-cover w-full h-full" :width="500" :height="700" :quality="30"
                v-if="image" />
        </div>
        <div class="container mx-auto px-4 lg:max-w-none py-16 md:p-8 xl:p-10 flex flex-col justify-end h-full">
            <div class="mt-60">
                <h1 class="text-sm font-semibold uppercase text-slate-200 mb-1">{{ title }}</h1>
                <h2 class="text-white font-header font-bold text-3xl">{{ name }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    name: string;
    description?: string;
    image?: string;
}>()
</script>