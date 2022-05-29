<template>
  <NuxtLink
    :to="`/blog/${postId}`"
    class="block w-full overflow-hidden bg-white shadow-lg cursor-pointer rounded-tl-xl rounded-br-xl transition hover:shadow-xl hover:-translate-y-2 duration-300"
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
      <p class="mt-4 leading-relaxed text-md line-clamp-4">
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
