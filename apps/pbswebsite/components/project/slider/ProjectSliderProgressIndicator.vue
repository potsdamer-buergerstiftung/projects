<template>
  <div
    class="absolute right-0 bottom-0 left-0 z-50 flex flex-row justify-between"
  >
    <div
      class="flex flex-1 items-center justify-center bg-slate-900 px-4 text-white"
      :class="{
        'bg-opacity-100': index === activeIndex,
        'bg-opacity-20': index !== activeIndex,
      }"
      v-for="(project, index) in projects"
    >
      <span>{{ project.title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSwiper } from "swiper/vue";

const props = defineProps<{ projects: any[] }>();

const activeIndex = ref(0);

const swiper = useSwiper();

watch(swiper, (newSwiper) => {
  console.log("testchen");
  activeIndex.value = newSwiper.realIndex;
});
</script>
