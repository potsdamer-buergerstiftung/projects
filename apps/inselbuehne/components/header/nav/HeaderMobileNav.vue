<template>
    <div v-if="mdAndSmaller"
        class="fixed top-0 bottom-0 left-0 right-0 z-30 overflow-hidden transition duration-500 ease-in-out -translate-x-full bg-white overscroll-contain lg:hidden"
        :class="{ 'translate-x-0': headerState.isMobileMenuOpen }">
        <div class="container flex flex-col px-2 mx-auto pt-44">
            <HeaderNavItem title="Veranstaltungen" link="/veranstaltungen" />
            <HeaderNavItem title="Blog" link="/blog" />
            <HeaderNavItem title="Über uns" link="/ueber-uns" />
            <HeaderNavItem title="Presse" link="/presse" />
            <HeaderNavItem title="Unterstützen" link="/Unterstützen" />
            <HeaderNavItem title="Kontakt" link="/kontakt" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHeaderState } from "../state"
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndSmaller = breakpoints.smaller("lg")

const headerState = useHeaderState()
</script>