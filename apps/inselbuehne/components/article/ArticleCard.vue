<template>
    <NuxtLink :to="`/blog/${postId}`"
        class="block w-full overflow-hidden bg-white shadow-lg cursor-pointer rounded-tl-xl rounded-br-xl transition hover:shadow-xl hover:-translate-y-2 duration-300">
        <div class="aspect-[16/9] bg-green-500 bg-cover overflow-hidden">
            <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/${imageUrl}?key=low-1000`" alt="test" class="w-full object-cover">
        </div>
        <div class="p-10">
            <h1 class="font-serif text-3xl leading-tight">
                {{ title }}
            </h1>
            <p class="mt-4 leading-relaxed text-md">
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