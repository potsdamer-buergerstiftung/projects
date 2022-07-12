<template>
  <div>
    <Title>Impressum</Title>
    <PageTitle title="Impressum" class="max-w-4xl mx-auto -mt-24">
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Impressum' }]" />
      </template>
    </PageTitle>
    <section class="pb-20 max-w-4xl mx-auto px-4">
      <BlockRenderer :data="imprint.content" />
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "text"
})
const { getSingletonItem } = useDirectusItems()
const imprint = await getSingletonItem<any>({ collection: "imprint" })
</script>
