<template>
    <nav
        class="container flex flex-row items-center justify-between w-full h-full px-4 mx-auto lg:px-0 lg:justify-center">
        <div class="flex-row items-center justify-end hidden w-full h-full lg:flex gap-x-3 xl:gap-x-5">
            <HeaderNavItem title="Veranstaltungen" link="/veranstaltungen" />
            <HeaderNavItem title="Blog" link="/blog" />
            <HeaderNavItem title="Über uns" link="/ueber-uns" />
        </div>
        <HeaderNavBrand />
        <button class="flex flex-row items-center lg:hidden" @click="setMobileMenu()">
            <span class="font-bold">Menü</span>
            <div class="flex flex-col space-y-1.5 ml-2">
                <div class="h-[1px] w-6 bg-black" />
                <div class="h-[1px] w-6 bg-black" />
                <div class="h-[1px] w-6 bg-black" />
            </div>
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

const { setMobileMenu } = useHeaderState()
</script>