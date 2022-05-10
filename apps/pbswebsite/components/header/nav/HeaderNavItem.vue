<script setup lang="ts">
interface Props {
    index: string;
    title: string;
    link: string;
    isExternal?: boolean;
}

const { title, link, index, isExternal = false } = defineProps<Props>()
</script>

<script lang="ts">
function addZero(index: string): string {
    const number = Number(index);
    return number < 10 ? `0${index}` : index.toString();
}
</script>

<template>
    <NuxtLink :to="link" class="p-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        target="_blank">
        <div class="items-end flex flex-col">
            <span class="leading-4 text-xs font-bold text-gray-600">{{ addZero(index) }}</span>
            <span class="leading-4 text-[16px] font-medium text-navy-900">{{ title }}</span>
        </div>
    </NuxtLink>
</template>