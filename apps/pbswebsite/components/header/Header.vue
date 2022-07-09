<template>
    <header class="absolute z-40 w-full">
        <div class="z-50 flex w-full flex-row items-center justify-between gap-4 px-4 md:px-8 lg:px-4 py-6 xl:px-10">
            <NuxtLink to="/" class="group -ml-2 block p-2 outline-none" tabindex="1" v-if="$slots.brand">
                <slot name="brand" />
            </NuxtLink>
            <nav class="overflow-y-auto lg:overflow-y-visible absolute top-0 bottom-0 left-0 right-0 md:right-1/4 bg-slate-900 min-h-screen h-screen lg:h-auto lg:min-h-0 lg:bg-transparent flex flex-col lg:flex-row lg:relative lg:translate-x-0 transition-transform duration-500 lg:transition-none"
                :class="[store.isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full']" v-if="$slots.navigation">
                <div class="block lg:hidden px-4 py-8 mb-8">
                    <HeaderMobileMenuButton variant="close" />
                </div>
                <slot name="navigation" />
                <div class="flex flex-col items-start lg:hidden px-4 py-8 mb-8">
                    <slot name="actions" />
                </div>
            </nav>
            <div class="flex flex-row gap-4 items-center py-3" v-if="$slots.actions">
                <div class="hidden md:flex flex-row">
                    <slot name="actions" />
                </div>
                <div class="block lg:hidden">
                    <HeaderMobileMenuButton />
                </div>
            </div>
        </div>
        <div class="invisible lg:visible fixed top-0 right-0 left-0 bottom-0 bg-black transition duration-500 -z-[1] pointer-events-none"
            :class="[store.isSubMenuOpen ? 'opacity-30' : 'opacity-0']" />
        <div class="invisible lg:visible h-80 bg-white absolute top-0 left-0 w-full transition duration-300 -z-[1]"
            :class="[store.isSubMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0']" />
    </header>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { useStore } from "./state";

const store = useStore();

const isDark = computed(() => propsIsDark && !store.isSubMenuOpen);

const { isDark: propsIsDark = false } = defineProps<{ isDark?: boolean }>();

provide("isDark", isDark);

const breakpoints = useBreakpoints(breakpointsTailwind, {});
</script>