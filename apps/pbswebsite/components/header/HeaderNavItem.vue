<template>
  <div @mouseenter="onHover()" @mouseleave="onLeave()" ref="node" @click="onClick()"
    class="group flex justify-start flex-col relative">
    <NuxtLink
      class="group flex flex-row justify-start gap-1 px-4 lg:px-3 xl:px-4 py-4 outline-none lg:flex-col lg:gap-0 lg:py-2"
      :to="link">
      <span
        class="text-xs font-bold leading-4 transition group-hover:text-emerald-500 group-focus:text-emerald-500 text-slate-500">{{
            addZero(index.toString())
        }}</span>
      <span
        class="text-2xl font-bold text-white transition group-hover:text-emerald-500 group-focus:text-emerald-500 lg:text-[1rem] lg:font-medium lg:leading-6"
        :class="[isDark ? 'lg:text-white' : 'lg:text-slate-900']">{{
            title
        }}</span>
    </NuxtLink>
    <ul class="relative lg:absolute px-9 lg:px-4 mb-4 lg:mb-0 lg:py-20 flex-col w-auto whitespace-nowrap"
      :class="[store.isSubMenuOpen && itemSubMenuOpen ? 'flex' : 'hidden', itemSubMenuOpen ? 'block' : 'hidden']">
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "./state";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind, {});
const lgAndGreater = breakpoints.greater("md");

interface Props {
  title: string;
  link?: string;
  isExternal?: boolean;
}

const { title, link, isExternal = false } = defineProps<Props>();

function addZero(index: string): string {
  const number = Number(index);
  return number < 10 ? `0${index}` : index.toString();
}

const store = useStore();
const node = ref(null);
const index = ref(0);
const slots = useSlots();
const itemSubMenuOpen = ref(false);
const isDark = inject<boolean>("isDark");

function toggleItemSubMenuOpen() {
  itemSubMenuOpen.value = !itemSubMenuOpen.value;
}

function onHover() {
  if (slots.default && lgAndGreater.value) {
    store.openSubMenu();
    itemSubMenuOpen.value = true;
  }
}

function onLeave() {
  if (slots.default && lgAndGreater.value) {
    store.closeSubMenu();
    itemSubMenuOpen.value = false;
  }
}

function onClick() {
  if (slots.default) {
    store.openSubMenu();
    toggleItemSubMenuOpen();
  }
}

onMounted(() => {
  provide(index.value, itemSubMenuOpen);
  const el = node.value;
  index.value = Array.prototype.indexOf.call(el.parentNode.childNodes, el);
})
</script>
