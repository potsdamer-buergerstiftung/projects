<template>
    <div>
        <PageTitle :title="project.title">
            <template #breadcrumb>
                <PageTitleBreadcrumb
                    :items="[{ text: 'Projekte', to: '/projekte' }, { text: project.title }]"
                />
            </template>
            <template #description>
                <p>{{ project.sub_title }}</p>
            </template>
        </PageTitle>
        <Title>{{ project.title }}</Title>
    </div>
</template>

<script setup lang="ts">
const { getItemById } = useDirectusItems();

const route = useRoute();

const project = await getItemById<any>({
    collection: "projects",
    id: route.params.projectSlug as string,
});
</script>
