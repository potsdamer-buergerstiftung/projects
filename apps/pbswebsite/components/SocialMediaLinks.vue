<script setup lang="ts">
interface Props {
    size: "compact" | "default" | "large";
}

const links = [{
    text: 'Facebook',
    short: "Fb",
    url: 'https://www.facebook.com/PotsdamerBuergerstiftung/',
},
{
    text: 'Instagram',
    short: "Ig",
    url: 'https://www.instagram.com/potsdamerbuergerstiftung/',
},
{
    text: 'YouTube',
    short: "Yt",
    url: 'https://youtube.com',
}];

const { size = "default" } = defineProps<Props>()
</script>

<template>
    <div class="flex flex-row space-x-4">
        <p class="text-sm font-bold text-emerald-500" v-if="size === 'large'">Folg' uns</p>
        <span class="text-sm font-bold text-navy-900" v-if="size === 'large'">-</span>
        <ul class="flex flex-row space-x-4">
            <li v-for="link in links">
                <NuxtLink to="/" class="text-sm font-bold text-navy-900 hover:text-emerald-500 transition">{{ size ===
                        'compact' ? link.short + "." : link.text
                }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>