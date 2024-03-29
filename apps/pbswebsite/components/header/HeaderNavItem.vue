<template>
  <div @mouseenter="onHover()" @mouseleave="onLeave()" ref="node" @click="onClick()"
    class="group relative flex flex-col justify-start">
    <NuxtLink
      class="group flex flex-row justify-start gap-1 px-4 py-4 outline-none lg:flex-col lg:gap-0 lg:px-3 lg:py-2"
      :to="$slots.default ? undefined : link">
      <span class="text-xs font-bold leading-4 transition group-hover:text-emerald-500 group-focus:text-emerald-500"
        :class="[isActive ? 'text-emerald-500 lg:text-slate-400' : isDark ? 'text-slate-400' : 'text-slate-500']">{{
            addZero(index.toString())
        }}</span>
      <span
        class="text-2xl font-bold text-white transition group-hover:text-emerald-500 group-focus:text-emerald-500 lg:text-[1rem] lg:font-medium lg:leading-6"
        :class="[isDark ? 'lg:text-white' : 'lg:text-slate-900']">{{ title }}</span>
    </NuxtLink>
    <ul class="relative mb-4 w-auto flex-col whitespace-nowrap px-9 lg:absolute lg:mb-0 lg:px-3 lg:py-20" ref="subMenu"
      :class="[store.isSubMenuOpen && itemSubMenuOpen ? 'flex' : 'hidden']" v-if="$slots.default">
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "./state";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind, {});
const lgAndGreater = breakpoints.greater("lg");

const route = useRoute();
const isActive = computed(() => route.matched.some(route => route.path.includes(link)));

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
const subMenu = ref(null);

function toggleItemSubMenuOpen() {
  itemSubMenuOpen.value = !itemSubMenuOpen.value;
}

function onHover() {
  if (slots.default && lgAndGreater.value) {
    store.setHeaderOverlayHight(subMenu.value.childElementCount * 2.2 + 10);
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
  if (slots.default && !lgAndGreater.value) {
    store.openSubMenu();
    toggleItemSubMenuOpen();
  }
}

watch(node, (newVal) => {
  index.value =
    Array.prototype.indexOf.call(newVal.parentNode.childNodes, newVal) - 1;
});

provide("itemSubMenuOpen", itemSubMenuOpen);
</script>
