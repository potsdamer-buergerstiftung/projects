<template>
    <div>
        <Title>Veröffentlichungen</Title>
        <PageTitle title="Veröffentlichungen">
            <template #breadcrumb>
                <PageTitleBreadcrumb
                    :items="[{ text: 'Die Stiftung', link: '/stiftung' }, { text: 'Veröffentlichungen' }]" />
            </template>
            <template #description>
                <p>
                    Wir stellen Dir bald ein Pressekit zur Verfügung, das Du mit freier
                    Lizenz für Berichterstattung verwenden darfst.
                </p>
            </template>
        </PageTitle>
        <section v-for="category in categories">
            <div class="container mx-auto px-4 pb-20 grid grid-cols-3 gap-10">
                <div class="col-span-1">
                    <h1 class="font-header mt-2 text-4xl font-bold">
                        {{category.title}}
                    </h1>
                    <div class="mt-4 max-w-2xl" v-html="category.description">

                    </div>
                </div>
                <MasonryGrid :items="category.publications" :ssr-columns="1" :column-width="400" :gap="16"
                    class="col-span-2">
                    <template #default="{ item: publication }: any">
                        <ArticleCard :title="publication.title" :date="new Date(publication.date_created)" :project-title="publication.file.type.split('/')[1].toUpperCase()"
                            :link="`https://portal.potsdamer-buergerstiftung.org/assets/${publication.file.id}`" />
                    </template>
                </MasonryGrid>
            </div>
        </section>
    </div>
</template>
  
<script setup lang="ts">
definePageMeta({
    layout: "default",
});

const { getItems } = useDirectusItems();

const categories = await getItems<any>({
    collection: "publication_categories",
    params: {
        fields: ["*", "publications.*.title", "publications.*.description", "publications.file.*"],
    },
});
</script>
  