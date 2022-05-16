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
        <p class="text-green-500 font-bold text-sm" v-if="size === 'large'">Folg' uns</p>
        <span class="text-navy-900 font-bold text-sm" v-if="size === 'large'">-</span>
        <ul class="flex flex-row space-x-4">
            <li v-for="link in links">
                <NuxtLink to="/" class="text-navy-900 font-bold hover:text-green-500 transition text-sm">{{ size ===
                        'compact' ? link.short + "." : link.text
                }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>