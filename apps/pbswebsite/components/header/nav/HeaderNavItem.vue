<template>
    <NuxtLink
        @click="headerState.setMobileMenu()"
        :to="link"
        class="group flex flex-row justify-start gap-2 px-4 py-4 outline-none lg:flex-col lg:gap-0 lg:py-2"
    >
        <span
            class="text-xs font-bold leading-4 transition group-hover:text-emerald-500 group-focus:text-emerald-500"
            :class="{
                'text-slate-500': route.meta.headerColor !== 'white',
                'text-slate-300': route.meta.headerColor === 'white',
            }"
            >{{ addZero(index) }}</span
        >
        <span
            class="text-4xl font-bold text-white transition group-hover:text-emerald-500 group-focus:text-emerald-500 lg:text-[1rem] lg:font-medium lg:leading-6"
            :class="{
                'lg:text-white': route.meta.headerColor === 'white',
                'lg:text-slate-900': route.meta.headerColor !== 'white',
            }"
            >{{ title }}</span
        >
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    index: string;
    title: string;
    link: string;
    isExternal?: boolean;
}

const { title, link, index, isExternal = false } = defineProps<Props>();

function addZero(index: string): string {
    const number = Number(index);
    return number < 10 ? `0${index}` : index.toString();
}

const route = useRoute();
const headerState = useHeaderState();
</script>
