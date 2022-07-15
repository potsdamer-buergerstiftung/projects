<template>
  <div>
    <Title>Aktuelles & Veranstaltungen</Title>
    <PageTitle title="Aktuelles & Veranstaltungen">
      <template #breadcrumb>
        <PageTitleBreadcrumb
          :items="[
            { text: 'Die Stiftung', link: '/stiftung' },
            { text: 'Aktuelles & Veranstaltungen' },
          ]"
        />
      </template>
      <template #description>
        <p>
          Verfolgen Sie die Entwicklung unserer Projekte, die dank Ihrer
          großzügigen Beiträge und ihrer Unterstützung möglich wurden.
        </p>
      </template>
    </PageTitle>
    <section>
      <div class="container mx-auto px-4 pb-20">
        <MasonryGrid
          :items="posts"
          :ssr-columns="1"
          :column-width="400"
          :gap="16"
        >
          <template #default="{ item: post }: any">
            <ArticleCard
              :title="post.title"
              :date="new Date(post.date)"
              :imageId="post.image"
              :project-title="post.project.title"
              :author="`${post.user_created.first_name} ${post.user_created.last_name}`"
              :tags="post.tags"
              :link="`/stiftung/aktuelles/${post.slug}`"
            />
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
