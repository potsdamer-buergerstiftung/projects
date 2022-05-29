<template>
    <div class="py-32">
        {{ project.title }}
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
