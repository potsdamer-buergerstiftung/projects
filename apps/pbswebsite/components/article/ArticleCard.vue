<template>
    <NuxtLink :to="`/aktuelles/${postId}`" class="group block w-full overflow-hidden rounded-md">
        <div class="relative aspect-[9/10] overflow-hidden">
            <img class="h-full w-full object-cover"
                :src="`https://cms.potsdamer-buergerstiftung.org/assets/${imageId}?$width=700&quality=40`" />
            <div
                class="opacity-0 translate-y-2 group-hover:translate-y-0 p-6 absolute left-0 right-0 bottom-0 group-hover:opacity-100 bg-gradient-to-t from-slate-900 to-transparent transition duration-500">
                <div class="items-center inline-flex font-bold text-white">Beitrag aufrufen <svg xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg></div>
            </div>
        </div>
        <div class="bg-slate-100 px-6 py-8">
            <ul class="flex">
                <li class="text-md font-medium text-slate-500">{{ formattedDate }}</li>
                <li class="text-md font-medium text-slate-500 before:px-1.5 before:text-emerald-500 before:content-['•']"
                    v-if="projectTitle">
                    {{ projectTitle }}
                </li>
            </ul>
            <h2 class="font-header mt-3 text-3xl font-bold">{{ title }}</h2>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
// Article Card Props
const { date } = defineProps<{
    postId: string;
    title: string;
    date: Date;
    imageId: string;
    projectTitle?: string;
    author?: string;
}>();

const formattedDate = date.toLocaleDateString("de", {
    year: "numeric",
    day: "numeric",
    month: "long",
});
</script>
