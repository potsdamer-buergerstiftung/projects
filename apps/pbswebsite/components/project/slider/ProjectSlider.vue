<template>
    <swiper :loop="true" :preload-images="true" :speed="900" class="w-full h-full" direction="vertical"
        :modules="modules" :lazy="{ loadOnTransitionStart: true } as any" :mousewheel="{ sensitivity: 80 } as any">
        <swiper-slide v-for="project in projects">
            <section class="relative w-full h-screen bg-red-200 snap-start">
                <div class="absolute w-full h-full">
                    <img :data-src="`https://cms.potsdamer-buergerstiftung.org/assets/${project.image}?width=2000&quality=80`"
                        class="swiper-lazy w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="absolute top-0 left-0 bottom-0 right-0 bg-slate-900 opacity-60" />
                <div class="absolute w-full top-1/2 -translate-y-1/2">
                    <div class="container mx-auto">
                        <h1 class="text-white font-header text-6xl font-bold">{{ project.title }}</h1>
                        <h4 class="text-slate-300 text-lg mt-2">{{ project.sub_title }}</h4>
                        <NuxtLink to="/" class="group inline-flex items-center text-white mt-8 font-bold">
                            Projekt
                            anzeigen
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="transition group-hover:translate-x-1 ml-1 h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </section>
        </swiper-slide>
        <ProjectSliderActionButtons />
        <!-- <ProjectSliderProgressIndicator :projects="projects" /> -->
    </swiper>
</template>

<script setup lang="ts">

import { Swiper, SwiperSlide } from "swiper/vue";

import { Mousewheel, Lazy } from "swiper";

import "swiper/css";

import "swiper/css/lazy";

const modules = [Mousewheel, Lazy];

const { getItems } = useDirectusItems();

const projects = await getItems<any>({
    collection: "projects", params: {
        sort: "sort"
    }
})
</script>