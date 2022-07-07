<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <Title>Die Stiftung</Title>
    <PageTitle title="Wir sind die Bürgerstiftung">
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Die Stiftung' }]" />
      </template>
    </PageTitle>
    <section class="py-8">
      <div></div>
      <div>
        <h1>Wir sind die Bürgerstiftung</h1>
        <DirectusImage asset-id="7d0a648b-c484-4e4e-9d69-f0230f7278bd" format="webp" quality="40" width="200" height="100"/>
      </div>
    </section>
  </div>
</template>
