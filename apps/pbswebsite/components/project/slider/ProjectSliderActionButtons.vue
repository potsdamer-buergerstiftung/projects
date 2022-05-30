<template>
    <div class="absolute bottom-0 right-0 z-50 flex flex-row gap-4 px-4 py-8 lg:px-10 lg:py-16">
        <button
            @click="swiper.slidePrev()"
            class="rounded-full border border-emerald-500 border-opacity-0 bg-slate-800 p-4 text-white ring-emerald-500 transition hover:ring-1"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
        </button>
        <button
            @click="swiper.slideNext()"
            class="rounded-full border border-emerald-500 border-opacity-0 bg-slate-800 p-4 text-white ring-emerald-500 transition hover:ring-1"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useSwiper } from "swiper/vue";

const swiper = useSwiper();
</script>
