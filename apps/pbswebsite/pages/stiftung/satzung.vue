<template>
    <div>
        <Title>Satzung</Title>
        <PageTitle title="Satzung der Bürgerstiftung Potsdam" is-compact>
            <template #breadcrumb>
                <PageTitleBreadcrumb :items="[{ text: 'Die Stiftung', link: '/stiftung' }, { text: 'Satzung' }]" />
            </template>
        </PageTitle>
        <section class="pb-20 max-w-4xl mx-auto px-4">
            <BlockRenderer :data="charter.content" />
        </section>
    </div>
</template>

<script setup lang="ts">
const { getSingletonItem } = useDirectusItems()
const charter = await getSingletonItem<any>({ collection: "charter" })
console.log(charter)
</script>