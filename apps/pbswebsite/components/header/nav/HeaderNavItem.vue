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
    <NuxtLink :to="link"
        class="px-4 py-2 text-lg flex flex-col items-end group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75 text-slate-800"
        active-class="text-emerald-500">
        <span class="text-xs font-bold leading-4 text-slate-500 transition group-hover:text-emerald-500">{{
                addZero(index)
        }}</span>
        <span class="transition leading-4 text-[16px] font-medium text-inherit group-hover:text-emerald-500">{{ title
        }}</span>
    </NuxtLink>
</template>