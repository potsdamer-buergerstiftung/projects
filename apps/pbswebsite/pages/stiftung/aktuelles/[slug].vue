<template>
  <div>
    <Title>{{ post.title }}</Title>
    <section class="relative">
      <div class="absolute h-full w-full">
        <DirectusImage :asset-id="post.image" :width="1920" :height="1080" :quality="40"
          class="h-full w-full object-cover" />
      </div>
      <div class="absolute top-0 left-0 bottom-0 right-0 bg-slate-900 opacity-70" />
      <div class="relative mx-auto max-w-5xl px-4 pt-40">
        <h1 class="font-header text-3xl font-bold text-white md:text-7xl">
          {{ post.title }}
        </h1>
        <div class="mt-8 flex flex-row flex-wrap gap-8">
          <div>
            <p class="text-slate-300">Autor</p>
            <p class="font-bold text-white">
              {{ post.user_created.first_name }}
              {{ post.user_created.last_name }}
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
        <PageTitleBreadcrumb :items="[
          { text: 'Die Stiftung', link: '/stiftung' },
          { text: 'Aktuelles', link: '/stiftung/aktuelles' },
          { text: post.title },
        ]" class="mt-20 pb-12 text-white" />
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
const { getItems } = useDirectusItems();

const route = useRoute();

const posts = await getItems<any>({
  collection: "posts",
  params: {
    fields: ["*", "user_created.*"],
    filter: {
      slug: route.params.slug,
    }
  },
});

if (!posts) throw ({ statusCode: 404 })

const { date, ...post } = posts[0];

const formattedDate = computed(() =>
  new Date(date).toLocaleDateString("de", {
    year: "numeric",
    day: "numeric",
    month: "long",
  })
);

definePageMeta({
  isDark: true,
});
</script>
