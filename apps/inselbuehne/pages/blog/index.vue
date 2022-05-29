<template>
  <div>
    <PageTitle title="Was es Neues bei uns gibt" heading="Blog">
      <template #description>
        Hier berichten wir euch über neueste Entwicklungen und Neuigkeiten.
      </template>
    </PageTitle>
    <section class="bg-gray-50">
      <div class="container grid grid-cols-6 gap-8 px-4 pb-32 mx-auto">
        <div
          v-for="post in posts"
          class="col-span-6 md:col-span-3 xl:col-span-2"
        >
          <ArticleCard
            :post-id="post.id.toString()"
            :image-url="post.image"
            :title="post.title"
            :summary="post.excerpt"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  title: "Blog",
});

const { getItems } = useDirectusItems();

const { data: posts } = await useAsyncData("posts", () =>
  getItems({
    collection: "posts",
    params: {
      filter: {},
    },
  })
);
</script>
