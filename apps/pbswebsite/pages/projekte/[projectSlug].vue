<template>
    <div>
        <Title>{{ project.title }}</Title>
        <PageTitle :title="project.title">
            <template #breadcrumb>
                <PageTitleBreadcrumb :items="[{ text: 'Projekte', to: '/projekte' }, { text: project.title }]" />
            </template>
            <template #description>
                <p>{{ project.sub_title }}</p>
            </template>
        </PageTitle>
        <section class="bg-white pb-16">
            <div class="container mx-auto px-4 grid grid-cols-1 gap-16 lg:grid-cols-2">
                <StickySidebar containerSelector=".container" :top-spacing="40">
                    <img :src="`https://cdn.cms.potsdamer-buergerstiftung.org/${project.image}?quality=50&width=800`" class="w-full" />
                </StickySidebar>
                <BlockRenderer :data="project.content" class="mt-16"/>
            </div>
        </section>
        <section class="bg-white">
            <div class="container mx-auto px-4 pt-8 pb-16">
                <h1 class="font-header mb-12 text-5xl font-bold">Aktuelles zum Projekt</h1>
                <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <div v-for="post in posts">
                        <ArticleCard :title="post.title" :image-id="post.image" :date="new Date(post.date)"
                            :post-id="post.id.toString()" />
                    </div>
                </div>
                <NuxtLink to="/projekte"
                    class="text-md font-header mt-12 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                    Alle Beiträge des Projektes
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { getItemById, getItems } = useDirectusItems();

const route = useRoute();

const project = await getItemById<any>({
    collection: "projects",
    id: route.params.projectSlug as string,
    params: {
        fields: [
            "title",
            "sub_title",
            "image",
            "content"
        ],
    }
});

const posts = await getItems<any>({
    collection: "posts",
    params: {
        fields: ["*", "user_created.first_name", "user_created.last_name"],
        filter: {
            project: route.params.projectSlug,
        },
        sort: "-date",
    },
});
</script>
