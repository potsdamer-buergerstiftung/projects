<template>
    <div class="flex gap-4" :class="[directionClass]">
        <p class="text-sm font-bold text-emerald-500" v-if="size === 'large'">Folg' uns</p>
        <span class="text-sm font-bold" :class="[textColor]" v-if="size === 'large'">-</span>
        <ul class="flex gap-4" :class="[directionClass]">
            <li v-for="link in links">
                <NuxtLink :to="link.url" class="text-sm font-bold transition hover:text-emerald-500"
                    :class="[textColor]">{{ size === "compact" ? link.short + "." : link.text }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
interface Props {
    size: "compact" | "default" | "large";
    direction?: "horizontal" | "vertical";
}

const links = [
    {
        text: "Facebook",
        short: "Fb",
        url: "https://www.facebook.com/PotsdamerBuergerstiftung/",
    },
    {
        text: "Instagram",
        short: "Ig",
        url: "https://www.instagram.com/potsdamerbuergerstiftung/",
    },
    {
        text: "YouTube",
        short: "Yt",
        url: "https://youtube.com",
    },
];

const { size = "default", direction = "horizontal" } = defineProps<Props>();

const directionClass = computed((): string => {
    return direction === "horizontal" ? "flex-row" : "flex-col";
});

const route = useRoute();

const textColor = computed(() =>
    route.meta.headerColor === "white" && size === "large" ? "text-white" : "inherit"
);
</script>
