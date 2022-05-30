<template>
    <header class="absolute z-40 w-full">
        <div
            class="z-50 flex w-full flex-row items-center justify-between gap-4 px-4 py-6 lg:px-10"
        >
            <HeaderBrand />
            <HeaderNav class="hidden lg:flex" />
            <div class="flex flex-row items-center gap-4">
                <HeaderActions class="hidden md:inline-flex" />
                <HeaderMobileMenuButton class="block lg:hidden" />
            </div>
        </div>
        <ClientOnly>
            <Transition>
                <HeaderMobileMenu v-if="headerState.isMobileMenuOpen && mdAndSmaller" />
            </Transition>
        </ClientOnly>
    </header>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind, {});
const mdAndSmaller = breakpoints.smaller("lg");

const headerState = useHeaderState();
</script>

<style lang="postcss">
.v-enter-active,
.v-leave-active {
    @apply transition;
    @apply duration-500;
}

.v-enter-from,
.v-leave-to {
    @apply -translate-x-full;
}
</style>
