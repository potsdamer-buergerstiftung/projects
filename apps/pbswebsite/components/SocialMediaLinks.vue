<script setup lang="ts">
interface Props {
    showFollowUsLabel?: boolean;
}

const { showFollowUsLabel } = defineProps<Props>()
</script>

<template>
    <div class="flex flex-row space-x-4">
        <p class="font-bold">Folg' uns</p>
        <span class="font-bold">-</span>
        <ul class="flex flex-row space-x-4">
            <li>
                <NuxtLink to="/" class="font-bold hover:text-green-500 transition">Facebook</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/" class="font-bold hover:text-green-500 transition">Instagram</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/" class="font-bold hover:text-green-500 transition">YouTube</NuxtLink>
            </li>
        </ul>
    </div>
</template>