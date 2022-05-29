<template>
    <div class="block w-full">
        <div class="aspect-[9/10] overflow-hidden rounded-md">
            <img
                class="h-full w-full object-cover"
                :src="`https://cms.potsdamer-buergerstiftung.org/assets/${imageId}?$width=700&quality=40`"
            />
        </div>
        <ul class="flex">
            <li class="text-md mt-5 font-medium text-slate-500">{{ formattedDate }}</li>
            <li
                class="text-md mt-5 font-medium text-slate-500 before:px-1.5 before:text-emerald-500 before:content-['•']"
                v-if="projectTitle"
            >
                {{ projectTitle }}
            </li>
        </ul>
        <h2 class="font-header mt-3 text-3xl font-bold">{{ title }}</h2>
    </div>
</template>

<script setup lang="ts">
// Article Card Props
const { date } = defineProps<{
    title: string;
    date: Date;
    imageId: string;
    projectTitle?: string;
}>();

const formattedDate = date.toLocaleDateString("de", {
    year: "numeric",
    day: "numeric",
    month: "long",
});
</script>
