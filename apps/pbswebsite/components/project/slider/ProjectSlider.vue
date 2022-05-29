<template>
    <swiper :loop="true" :preload-images="true" :speed="900" class="h-full w-full" direction="vertical"
        :modules="modules" :lazy="{ loadOnTransitionStart: true, preloaderClass: 'lazy-preloader' } as any"
        :mousewheel="{ sensitivity: 80 } as any">
        <swiper-slide v-for="project in projects">
            <section class="relative h-screen w-full snap-start bg-red-200">
                <div class="absolute h-full w-full">
                    <img :data-src="`https://cms.potsdamer-buergerstiftung.org/assets/${project.image}?width=2000&quality=80`"
                        class="swiper-lazy h-full w-full object-cover" />
                </div>
                <div class="absolute top-0 left-0 bottom-0 right-0 bg-slate-900 opacity-80" />
                <div class="lazy-preloader absolute top-0 left-0 bottom-0 right-0 bg-black" />
                <div class="absolute top-1/2 w-full -translate-y-1/2">
                    <div class="container mx-auto px-4">
                        <ul class="flex flex-row space-x-4 mb-4" v-if="project.categories">
                            <li class="text-white font-medium text-md"
                                v-for="{ project_categories_id: category } in project.categories">{{
                                        category.name
                                }}</li>
                        </ul>
                        <h1 class="font-header text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                            {{ project.title }}
                        </h1>
                        <ClientOnly>
                            <div class="mt-4 text-slate-300 max-w-2xl" v-html="project.summary" v-if="project.summary" />
                            <h4 v-else class="mt-4 text-lg text-slate-300">{{ project.sub_title }}</h4>
                        </ClientOnly>
                        <NuxtLink :to="`/projekte/${project.id}`"
                            class="group mt-16 inline-flex items-center font-bold text-white transition hover:text-slate-400">
                            Mehr über das Projekt
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="transition-color ml-1 h-5 w-5 transition-transform group-hover:translate-x-1"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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

const modules = [Mousewheel, Lazy];

const { getItems } = useDirectusItems();

const projects = await getItems<any>({
    collection: "projects",
    params: {
        fields: ["title", "sub_title", "image", "id", "categories.project_categories_id.name", "summary"],
        sort: "sort",
    },
});
</script>
