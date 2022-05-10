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
    <NuxtLink :to="link" class="group py-2 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        <div class="items-end flex flex-col">
            <span class="transition leading-4 text-xs font-bold text-gray-500 group-hover:text-green-500">{{ addZero(index) }}</span>
            <span class="transition leading-4 text-[16px] font-medium text-navy-900 group-hover:text-green-500">{{ title }}</span>
        </div>
    </NuxtLink>
</template>