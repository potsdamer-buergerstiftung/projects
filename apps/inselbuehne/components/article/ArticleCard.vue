<template>
    <NuxtLink
        class="w-full overflow-hidden rounded-tl-xl rounded-br-xl bg-white shadow-lg transition hover:shadow-xl hover:-translate-y-2 duration-300 cursor-pointer">
        <div class="aspect-[16/9] bg-green-500 bg-cover">
            <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/${imageUrl}?key=low-1000`" alt="test">
        </div>
        <div class="p-10">
            <h1 class="font-serif text-3xl leading-tight">
                {{ title }}
            </h1>
            <p class="mt-4 text-md leading-relaxed">
                {{ summary }}
            </p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const { title, summary, imageUrl, postId } = defineProps<{
    title: string;
    summary: string;
    imageUrl: string;
    postId: string;
}>() 
</script>