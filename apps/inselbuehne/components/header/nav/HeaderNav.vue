<template>
    <nav
        class="container flex flex-row items-center justify-between w-full h-full px-4 mx-auto lg:px-0 lg:justify-center">
        <div class="flex-row items-center justify-end hidden w-full h-full lg:flex gap-x-3 xl:gap-x-5">
            <HeaderNavItem title="Veranstaltungen" link="/veranstaltungen" />
            <HeaderNavItem title="Blog" link="/blog" />
            <HeaderNavItem title="Über uns" link="/ueber-uns" />
        </div>
        <HeaderNavBrand />
        <button class="flex flex-row items-center lg:hidden" @click="headerState.setMobileMenu()">
            <span class="font-bold">Menü</span>
            <svg v-if="!headerState.isMobileMenuOpen" xmlns=" http://www.w3.org/2000/svg" class="w-6 h-6 ml-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-if="headerState.isMobileMenuOpen" xmlns=" http://www.w3.org/2000/svg" class="w-6 h-6 ml-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="flex-row items-center justify-start hidden w-full h-full lg:flex gap-x-5">
            <HeaderNavItem title="Presse" link="/presse" />
            <HeaderNavItem title="Unterstützen" link="/Unterstützen" />
            <HeaderNavItem title="Kontakt" link="/kontakt" />
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useHeaderState } from "../state"

const headerState = useHeaderState()
</script>