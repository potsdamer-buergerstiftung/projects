<template>
    <NuxtLink :to="redirectUrl"
        class="text-md font-header mt-12 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Alle Projekte
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        {{ websiteUrl }}
    </NuxtLink>
</template>

<script setup lang="ts">
const directusUrl = useDirectusUrl();

const websiteUrl = useWebsiteUrl()

const redirectUrl = directusUrl + "/admin/login?continue"
</script>