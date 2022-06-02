<template>
    <NuxtLink to="/" class="group -ml-2 block p-2 outline-none" tabindex="1">
        <PbsLogo class="w-52" :colorMode="route.meta.headerColor === 'white' ? 'light' : 'dark'" />
    </NuxtLink>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
