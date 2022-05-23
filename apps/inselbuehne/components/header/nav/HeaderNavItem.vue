<script setup lang="ts">
interface Props {
    title: string;
    link: string;
    isExternal?: boolean;
}

const { title, link, isExternal = false } = defineProps<Props>()
</script>

<template>
    <NuxtLink :to="link"
        class="relative hover:after:opacity-100 p-2 text-lg after:bg-black after:absolute after:bottom-0 after:block after:h-[1.5px] after:right-6 after:left-6 after:opacity-0 after:transition"
        active-class="after:opacity-100">
        {{ title }}
    </NuxtLink>
</template>