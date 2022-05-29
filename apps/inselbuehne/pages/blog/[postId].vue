<template>
    <div>
        <section class="bg-green-100">
            <div class="container mx-auto grid grid-cols-2 items-center gap-16 px-4 pt-44 pb-12">
                <div class="col-span-2 lg:col-span-1">
                    <p class="mb-4 font-bold text-green-500">
                        {{
                            new Date(post.date).toLocaleDateString("de", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })
                        }}
                    </p>
                    <h1 class="mb-8 font-serif text-5xl">
                        {{ post.title }}
                    </h1>
                    <div class="text-lg leading-relaxed" v-html="post.excerpt" />
                </div>
                <div class="col-span-2 lg:col-span-1">
                    <img
                        :src="`https://cms.potsdamer-buergerstiftung.org/assets/${post.image}?width=700&quality=60&height=600`"
                        alt="test"
                        class="-mb-24 w-full"
                    />
                </div>
            </div>
        </section>
        <section>
            <ClientOnly>
                <div
                    v-html="post.content"
                    class="prose lg:prose-xl container mx-auto px-4 pt-32 pb-16 md:max-w-4xl"
                />
            </ClientOnly>
        </section>
        <section>
            <div class="container mx-auto flex flex-row items-center px-4 pb-24 md:max-w-4xl">
                <div class="mr-4 h-12 w-12 rounded-full bg-green-500" />
                <div>
                    <p class="font-bold">{{ post.user_created.first_name }}</p>
                    <p class="text-gray-400">
                        Veröffentlicht am
                        {{
                            new Date(post.date).toLocaleDateString("de", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })
                        }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Einzelner Beitrag",
    layout: "default",
});

const route = useRoute();

const { getItemById } = useDirectusItems();

const post = await getItemById<any>({
    collection: "posts",
    id: route.params.postId as string,
    params: {
        fields: ["title", "date", "content", "image", "excerpt", "user_created.*"],
    },
});
</script>
