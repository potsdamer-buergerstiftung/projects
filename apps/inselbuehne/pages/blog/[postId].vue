<template>
  <div>
    <section class="bg-green-100">
      <div
        class="container px-4 mx-auto grid grid-cols-2 pt-44 pb-12 items-center gap-16"
      >
        <div class="col-span-2 lg:col-span-1">
          <p class="text-green-500 font-bold mb-4">
            {{
              new Date(post.date).toLocaleDateString("de", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }}
          </p>
          <h1 class="font-serif text-5xl mb-8">
            {{ post.title }}
          </h1>
          <div class="text-lg leading-relaxed" v-html="post.excerpt" />
        </div>
        <div class="col-span-2 lg:col-span-1">
          <img
            :src="`https://cms.potsdamer-buergerstiftung.org/assets/${post.image}?width=700&quality=60&height=600`"
            alt="test"
            class="w-full -mb-24"
          />
        </div>
      </div>
    </section>
    <section>
      <ClientOnly>
        <div
          v-html="post.content"
          class="container pt-32 pb-16 px-4 mx-auto prose lg:prose-xl md:max-w-4xl"
        />
      </ClientOnly>
    </section>
    <section>
      <div
        class="container mx-auto px-4 pb-24 md:max-w-4xl flex flex-row items-center"
      >
        <div class="w-12 h-12 bg-green-500 rounded-full mr-4" />
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
