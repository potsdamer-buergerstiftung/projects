<template>
  <div
    class="absolute right-0 bottom-0 left-0 z-50 flex flex-row justify-between"
  >
    <button
      class="flex flex-1 items-center justify-center bg-slate-900 px-4 py-2 text-white"
      :class="{
        'bg-opacity-100': index === activeIndex,
        'bg-opacity-20': index !== activeIndex,
      }"
      v-for="(project, index) in projects"
    >
      <span
        class="truncate text-sm"
        :class="{
          'text-white': index === activeIndex,
          'text-slate-400': index !== activeIndex,
        }"
        >{{ project.title }}</span
      >
    </button>
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
