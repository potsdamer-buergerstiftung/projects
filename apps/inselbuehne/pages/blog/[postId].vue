<template>
    <h1 class="pt-64">{{ post.title }}</h1>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Einzelner Beitrag",
    layout: "default"
})

const route = useRoute()

const { getItemById } = useDirectusItems();

const post = await getItemById({ collection: "posts", id: route.params.postId as string }) as any
</script>