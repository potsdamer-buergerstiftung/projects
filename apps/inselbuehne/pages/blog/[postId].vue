<template>
    <div class="container px-4 mx-auto">
        <h1 class="font-serif text-5xl text-center pt-64 mb-16">{{ post.title }}</h1>
        <p>{{ post.date }}</p>
        <ClientOnly>
            <p v-html="post.content" class="prose lg:prose-xl text-center" />
        </ClientOnly>
        <p class="text-2xl font-bold">{{ post.user_created.email.split("@")[0] }}</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Einzelner Beitrag",
    layout: "default"
})

const route = useRoute()

const { getItemById } = useDirectusItems();

const post = await getItemById({ collection: "posts", id: route.params.postId as string, params: { fields: ["*.*"] } }) as any
</script>