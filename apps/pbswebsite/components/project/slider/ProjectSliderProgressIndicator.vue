<template>
    <div class="z-50 absolute right-0 top-0 bottom-0 flex flex-col justify-between">
        <div class="bg-slate-900 flex-1 px-4 text-white flex justify-center items-center"
            :class="{ 'bg-opacity-100': index === swiper.realIndex, 'bg-opacity-20': index !== swiper.realIndex }"
            v-for="(project, index) in projects">
            <span>{{ index + 1 }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useSwiper } from "swiper/vue";

const props = defineProps<{ projects: any[] }>()

const swiper = useSwiper()
</script>