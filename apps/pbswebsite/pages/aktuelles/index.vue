<template>
  <div>
    <Title>Aktuelles</Title>
    <PageTitle title="Neues von uns">
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Aktuelles' }]" />
      </template>
      <template #description>
        <p>Hier hast du einen Überblick über die News all unserer Projekte.</p>
      </template>
    </PageTitle>
    <section>
      <div class="container mx-auto px-4 pb-20">
        <MasonryGrid :items="posts" :ssr-columns="1" :column-width="400" :gap="16">
          <template #default="{ item: post }: any">
            <ArticleCard :post-id="post.id.toString()" :title="post.title" :date="new Date(post.date)"
              :imageId="post.image" :project-title="post.project.title"
              :author="`${post.user_created.first_name} ${post.user_created.last_name}`" :tags="post.tags" />
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

const posts = await getItems<any>({
  collection: "posts",
  params: {
    fields: [
      "*",
      "project.*.title",
      "user_created.first_name",
      "user_created.last_name",
    ],
    filter: {},
    sort: "-date",
  },
});
</script>
