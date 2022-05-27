<template>
    <NuxtLink :to="`/veranstaltungen/${eventId}`"
        class="grid w-full grid-cols-5 overflow-hidden transition duration-300 bg-white shadow-lg cursor-pointer rounded-tl-2xl rounded-br-2xl hover:shadow-xl hover:-translate-y-2 min-h-max lg:h-56">
        <div class="relative w-full h-64 col-span-5 lg:col-span-2 lg:h-full">
            <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/${image}?key=low-1000`" alt="test"
                class="absolute object-cover w-full h-full">
            <div
                class="absolute p-4 -translate-y-1/2 bg-white rounded-tl-lg rounded-br-lg shadow-md left-6 md:left-8 lg:left-auto lg:right-6 top-1/2">
                <p>{{ new Date(start).toLocaleDateString("de", { month: "short" }) }}</p>
                <h1 class="font-serif text-4xl">{{ new Date(start).getUTCDate() }}</h1>
                <p>{{ new Date(start).toLocaleDateString("de", { weekday: "short" }) }}</p>
            </div>
        </div>
        <div
            class="flex flex-col items-start justify-between col-span-5 p-6 md:p-8 lg:col-span-3 lg:p-10 lg:flex-row lg:items-center lg:space-x-10">
            <div class="text-left">
                <h1 class="font-serif text-2xl leading-tight md:text-3xl line-clamp-4 lg:line-clamp-2">
                    {{ title }}
                </h1>
                <p class="mt-4 leading-relaxed text-md line-clamp-6 lg:line-clamp-3">
                    {{ summary }}
                </p>
            </div>
            <div class="w-full lg:w-auto lg:shrink-0" v-if="registration_needed">
                <button
                    class="w-full lg:w-auto text-center lg:inline-flex mt-4 shadow-md px-4 py-2.5 rounded-tl-lg rounded-br-lg bg-green-500 text-white text-md font-medium transition hover:bg-green-600">
                    Tickets
                </button>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const { title, eventId, start, summary, image, registration_needed = false } = defineProps<{
    eventId: string;
    title: string
    summary: string;
    start: string;
    image: string;
    registration_needed?: boolean;
}>()
</script>