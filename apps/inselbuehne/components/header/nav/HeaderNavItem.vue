<template>
    <NuxtLink :to="link" class="relative px-2 py-3 text-xl transition lg:p-2 lg:text-lg hover:text-green-500"
        active-class="text-green-500" @click="setMobileMenu()">
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