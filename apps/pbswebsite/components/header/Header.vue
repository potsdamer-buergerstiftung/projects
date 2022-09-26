<template>
  <header class="absolute z-40 w-full">
    <div
      class="z-50 flex w-full flex-row items-center justify-between gap-4 px-4 py-2 md:px-8 md:py-4 lg:px-4 lg:py-6 xl:px-10">
      <div to="/" class="group -ml-2 block p-2 outline-none" v-if="$slots.brand">
        <slot name="brand" />
      </div>
      <nav
        class="absolute top-0 bottom-0 left-0 right-0 flex h-screen min-h-screen flex-col overflow-y-auto bg-slate-900 transition-transform duration-500 md:right-1/4 lg:relative lg:h-auto lg:min-h-0 lg:translate-x-0 lg:flex-row lg:overflow-y-visible lg:bg-transparent lg:transition-none"
        :class="[
          store.isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
        ]" v-if="$slots.navigation">
        <div class="mb-8 block px-4 py-8 lg:hidden">
          <HeaderMobileMenuButton variant="close" is-dark />
        </div>
        <slot name="navigation" />
        <div class="mb-8 flex flex-col items-start px-4 pt-8 pb-20 lg:hidden">
          <slot name="actions" />
        </div>
      </nav>
      <div class="flex flex-row items-center gap-4 py-3" v-if="$slots.actions">
        <div class="hidden flex-row md:flex">
          <slot name="actions" />
        </div>
        <div class="block lg:hidden">
          <HeaderMobileMenuButton :is-dark="isDark" />
        </div>
      </div>
    </div>
    <div class="invisible fixed top-0 right-0 left-0 bottom-0 bg-slate-900 transition duration-500 lg:visible"
      :class="[store.isSubMenuOpen || store.isQuickDonateDrawerOpen ? 'opacity-70' : 'opacity-0', { '-z-[1] pointer-events-none': !store.isQuickDonateDrawerOpen }]"
      @click="store.isQuickDonateDrawerOpen ? store.closeQuickDonateDrawer() : undefined" />
    <div class="transition-[height, opacity] invisible absolute top-0 left-0 w-full bg-white duration-500 lg:visible"
      :class="[
        store.isSubMenuOpen
          ? 'translate-y-0 opacity-100'
          : '-translate-y-24 opacity-0',
        { '-z-[1]': !store.isQuickDonateDrawerOpen }
      ]" :style="{ height: store.headerOverlayHight + 'rem' }" />
  </header>
</template>

<script setup lang="ts">
import { useStore } from "./state";

const store = useStore();

const isDark = computed(() => propsIsDark && !store.isSubMenuOpen);

const { isDark: propsIsDark = false } = defineProps<{ isDark?: boolean }>();

provide("isDark", isDark);
</script>
