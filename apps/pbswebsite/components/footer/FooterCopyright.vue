<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <div class="container mx-auto grid grid-cols-1 justify-between gap-4 px-4 py-6 md:grid-cols-2">
        <p>© {{ year }} Potsdamer Bürgerstiftung - By Nöl & Lotte</p>
        <ul class="flex flex-row justify-start space-x-4 md:justify-end">
            <li>
                <NuxtLink to="/impressum" class="text-navy-900 transition hover:text-green-500">Impressum</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/datenschutz" class="text-navy-900 transition hover:text-green-500">Datenschutz</NuxtLink>
            </li>
        </ul>
    </div>
</template>
