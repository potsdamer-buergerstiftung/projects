<template>
    <div class="overflow-hidden overscroll-contain lg:hidden fixed top-0 right-0 left-0 bottom-0 -translate-x-full bg-white z-40 transition duration-500"
        :class="{ 'translate-x-0': headerState.isMobileMenuOpen }">

        <div class="container mx-auto py-2 mt-8 flex flex-row justify-between px-4">
            <HeaderNavBrand />
            <button class="font-bold" @click="headerState.setMobileMenu()">
                Menü schließen
            </button>
        </div>
        <div class="container mx-auto px-2 mt-12 flex flex-col">
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

const headerState = useHeaderState()
</script>