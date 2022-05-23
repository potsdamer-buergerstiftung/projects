<template>
    <NuxtLink :to="link"
        class="relative hover:after:opacity-100 px-2 py-3 lg:p-2 text-xl lg:text-lg lg:after:bg-black lg:after:absolute lg:after:bottom-0 lg:after:block lg:after:h-[1.5px] lg:after:right-6 lg:after:left-6 lg:after:opacity-0 lg:after:transition"
        active-class="text-green-500 lg:after:opacity-100 lg:text-inherit" @click="setMobileMenu()">
        {{ title }}
    </NuxtLink>
</template>

<script setup lang="ts">
import { useHeaderState } from "../state"

interface Props {
    title: string;
    link: string;
    isExternal?: boolean;
}

const { title, link, isExternal = false } = defineProps<Props>()

const { setMobileMenu } = useHeaderState()
</script>