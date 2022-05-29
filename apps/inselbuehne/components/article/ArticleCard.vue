<template>
    <NuxtLink
        :to="`/blog/${postId}`"
        class="block w-full cursor-pointer overflow-hidden rounded-tl-xl rounded-br-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
        <img
            :src="`https://cms.potsdamer-buergerstiftung.org/assets/${imageUrl}?width=800&height=450&quality=40`"
            alt="test"
            class="w-full object-cover"
        />
        <div class="p-6 sm:p-8 md:p-6 lg:p-8">
            <h1 class="font-serif text-3xl leading-tight">
                {{ title }}
            </h1>
            <p class="text-md line-clamp-4 mt-4 leading-relaxed">
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
}>();
</script>
