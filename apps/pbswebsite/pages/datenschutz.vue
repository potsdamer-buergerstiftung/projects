<template>
  <div>
    <Title>Datenschutz</Title>
    <PageTitle title="Datenschutz" class="max-w-4xl mx-auto -mt-24" is-compact>
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Datenschutz', link: '/datenschutz' }]" />
      </template>
    </PageTitle>
    <section class="pb-20 max-w-4xl mx-auto px-4">
      <BlockRenderer :data="policy.content" />
    </section>
  </div>
</template>

<script setup lang="ts">
const { getSingletonItem } = useDirectusItems()
const policy = await getSingletonItem<any>({ collection: "privacy_policy" })
</script>
