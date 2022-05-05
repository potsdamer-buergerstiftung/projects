<script setup lang="ts">
interface Props {
    title: string;
    link: string;
    isExternal?: boolean;
}

const { title, link, isExternal = false } = defineProps<Props>()
</script>

<template>
    <NuxtLink :to="link" class="p-2 text-lg">
        {{ title }}
    </NuxtLink>
</template>