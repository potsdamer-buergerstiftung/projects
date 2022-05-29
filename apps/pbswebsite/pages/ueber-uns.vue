<script setup>
definePageMeta({
    layout: "default",
    title: "Über uns",
});
</script>

<template>
    <div>
        <PageTitle title="Wir sind die Bürgerstiftung">
            <template #breadcrumb>
                <PageTitleBreadcrumb :items="[{ text: 'Über uns' }]" />
            </template>
        </PageTitle>
    </div>
</template>
