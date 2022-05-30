<template>
    <div>
        <Title>{{ post.title }}</Title>
        <section class="relative">
            <div class="absolute h-full w-full">
                <img
                    class="h-full w-full object-cover"
                    :src="`https://cdn.cms.potsdamer-buergerstiftung.org/${post.image}?width=1920&height=1080&quality=40`"
                />
            </div>
            <div class="absolute top-0 left-0 bottom-0 right-0 bg-slate-900 opacity-70" />
            <div class="relative mx-auto max-w-5xl px-4 pt-40">
                <h1 class="font-header text-7xl font-bold text-white">{{ post.title }}</h1>
                <div class="mt-8 flex flex-row gap-8">
                    <div>
                        <p class="text-slate-300">Autor</p>
                        <p class="font-bold text-white">
                            {{ post.user_created.first_name }} {{ post.user_created.last_name }}
                        </p>
                    </div>
                    <div>
                        <p class="text-slate-300">Veröffentlicht</p>
                        <p class="font-bold text-white">{{ formattedDate }}</p>
                    </div>
                    <div>
                        <p class="text-slate-300">Diskussion</p>
                        <p class="font-bold text-white">Keine Kommentare</p>
                    </div>
                </div>
                <PageTitleBreadcrumb
                    :items="[{ text: 'Aktuelles', to: '/aktuelles' }, { text: post.title }]"
                    class="mt-20 pb-12 text-white"
                />
            </div>
        </section>
        <section>
            <div class="mx-auto max-w-5xl px-4 pt-12 pb-20">
                <div class="prose lg:prose-lg max-w-full" v-html="post.content" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { getItemById } = useDirectusItems();

const route = useRoute();

const { date, ...post } = await getItemById<any>({
    collection: "posts",
    id: route.params.postId as string,
    params: {
        fields: ["*", "user_created.*"],
    },
});

const formattedDate = computed(() =>
    new Date(date).toLocaleDateString("de", {
        year: "numeric",
        day: "numeric",
        month: "long",
    })
);

definePageMeta({
    headerColor: "white",
});
</script>
