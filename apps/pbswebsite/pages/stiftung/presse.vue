<template>
  <div>
    <Title>Presse</Title>
    <PageTitle title="Presse">
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Die Stiftung', link: '/stiftung' }, { text: 'Presse' }]" />
      </template>
      <template #description>
        <p>
          Was andere über uns berichten.
        </p>
      </template>
    </PageTitle>
    <section>
      <div class="container mx-auto px-4 pb-20">
        <MasonryGrid :items="posts" :ssr-columns="1" :column-width="400" :gap="16">
          <template #default="{ item: post }: any">
            <ArticleCard :title="post.title" :date="new Date(post.date)"
              :project-title="post.project.title" :tags="[post.publisher]" :link="post.url"/>
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
  collection: "media_reports",
  params: {
    fields: ["*", "project.*.title"],
    filter: {},
    sort: "-date",
  },
});
</script>
