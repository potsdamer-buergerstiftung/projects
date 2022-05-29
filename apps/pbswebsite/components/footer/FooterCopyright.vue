<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <div class="container mx-auto flex flex-row justify-between px-4 py-6">
        <p>© {{ year }} Potsdamer Bürgerstiftung und Mitwirkende</p>
        <ul class="flex flex-row space-x-4">
            <li>
                <NuxtLink to="/impressum" class="text-navy-900 transition hover:text-green-500"
                    >Impressum</NuxtLink
                >
            </li>
            <li>
                <NuxtLink to="/datenschutz" class="text-navy-900 transition hover:text-green-500"
                    >Datenschutz</NuxtLink
                >
            </li>
        </ul>
    </div>
</template>
