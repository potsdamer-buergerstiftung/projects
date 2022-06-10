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
  </div>
</template>
