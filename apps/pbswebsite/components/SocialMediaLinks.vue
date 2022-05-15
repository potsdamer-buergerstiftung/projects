<script setup lang="ts">
interface Props {
    showFollowUsLabel?: boolean;
}

const { showFollowUsLabel = true } = defineProps<Props>()
</script>

<template>
    <div class="flex flex-row space-x-4">
        <p class="text-green-500 font-bold" v-if="showFollowUsLabel">Folg' uns</p>
        <span class="text-navy-900 font-bold" v-if="showFollowUsLabel">-</span>
        <ul class="flex flex-row space-x-4">
            <li>
                <NuxtLink to="/" class="text-navy-900 font-bold hover:text-green-500 transition text-sm">Facebook</NuxtLink>
            </li>
            <li>
                <p class="font-bold text-sm">/</p>
            </li>
            <li>
                <NuxtLink to="/" class="text-navy-900 font-bold hover:text-green-500 transition text-sm">Instagram</NuxtLink>
            </li>
            <li>
                <p class="font-bold text-sm">/</p>
            </li>
            <li>
                <NuxtLink to="/" class="text-navy-900 font-bold hover:text-green-500 transition text-sm">YouTube</NuxtLink>
            </li>
        </ul>
    </div>
</template>