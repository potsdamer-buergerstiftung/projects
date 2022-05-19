<template>
    <NuxtLink :to="`/veranstaltungen/${eventId}`"
        class="w-full overflow-hidden rounded-tl-2xl rounded-br-2xl bg-white shadow-lg transition hover:shadow-xl hover:-translate-y-2 duration-300 cursor-pointer grid grid-cols-5 min-h-max h-56">
        <div class="col-span-2 w-full h-full relative">
            <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/${image}?key=low-1000`" alt="test"
                class="object-cover absolute w-full h-full">
            <div class="absolute right-6 top-1/2 bg-white shadow-md p-4 -translate-y-1/2 rounded-tl-lg rounded-br-lg">
                <p>{{ new Date(start).toLocaleDateString("de", { month: "short" }) }}</p>
                <h1 class="font-serif text-4xl">{{ new Date(start).getUTCDate() }}</h1>
                <p>{{ new Date(start).toLocaleDateString("de", { weekday: "short" }) }}</p>
            </div>
        </div>
        <div class="col-span-3 p-10 flex flex-row items-center space-x-10 justify-between">
            <div class="text-left">
                <h1 class="font-serif text-3xl leading-tight">
                    {{ title }}
                </h1>
                <p class="mt-4 text-md leading-relaxed">
                    {{ summary }}
                </p>
            </div>
            <div class="shrink-0" v-if="registration_needed">
                <button
                    class="mt-4 shadow-md px-4 py-2.5 rounded-tl-lg rounded-br-lg bg-green-500 text-white text-md font-medium transition hover:bg-green-600">
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