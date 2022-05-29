<template>
    <NuxtLink
        :to="`/veranstaltungen/${eventId}`"
        class="grid min-h-max w-full cursor-pointer grid-cols-5 overflow-hidden rounded-tl-2xl rounded-br-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl lg:h-56"
    >
        <div class="relative col-span-5 h-64 w-full lg:col-span-2 lg:h-full">
            <img
                :src="`https://cms.potsdamer-buergerstiftung.org/assets/${image}?width=1000&height=600&quality=40`"
                alt="test"
                class="absolute h-full w-full object-cover"
            />
            <div
                class="absolute left-6 top-1/2 -translate-y-1/2 rounded-tl-lg rounded-br-lg bg-white p-4 shadow-md md:left-8 lg:left-auto lg:right-6"
            >
                <p>
                    {{ new Date(start).toLocaleDateString("de", { month: "short" }) }}
                </p>
                <h1 class="font-serif text-4xl">{{ new Date(start).getUTCDate() }}</h1>
                <p>
                    {{ new Date(start).toLocaleDateString("de", { weekday: "short" }) }}
                </p>
            </div>
        </div>
        <div
            class="col-span-5 flex flex-col items-start justify-between p-6 md:p-8 lg:col-span-3 lg:flex-row lg:items-center lg:space-x-10 lg:p-10"
        >
            <div class="text-left">
                <h1
                    class="line-clamp-4 lg:line-clamp-2 font-serif text-2xl leading-tight md:text-3xl"
                >
                    {{ title }}
                </h1>
                <p class="text-md line-clamp-6 lg:line-clamp-3 mt-4 leading-relaxed">
                    {{ summary }}
                </p>
            </div>
            <div class="w-full lg:w-auto lg:shrink-0" v-if="registration_needed">
                <button
                    class="text-md mt-4 w-full rounded-tl-lg rounded-br-lg bg-green-500 px-4 py-2.5 text-center font-medium text-white shadow-md transition hover:bg-green-600 lg:inline-flex lg:w-auto"
                >
                    Tickets
                </button>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const {
    title,
    eventId,
    start,
    summary,
    image,
    registration_needed = false,
} = defineProps<{
    eventId: string;
    title: string;
    summary: string;
    start: string;
    image: string;
    registration_needed?: boolean;
}>();
</script>
