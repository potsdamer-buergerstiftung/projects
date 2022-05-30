<template>
    <nav class="flex flex-col lg:flex-row">
        <ClientOnly>
            <HeaderNavItem title="Startseite" index="0" link="/" v-if="mdAndSmaller" />
        </ClientOnly>
        <HeaderNavItem title="Die Stiftung" index="1" link="/ueber-uns" tabindex="2" />
        <HeaderNavItem title="Projekte" index="2" link="/projekte" tabindex="3" />
        <HeaderNavItem title="Aktuelles" index="3" link="/aktuelles" tabindex="4" />
        <HeaderNavItem title="Kontakt" index="4" link="/kontakt" tabindex="5" />
        <HeaderNavItem title="Shop" index="4" link="/shop" tabindex="6" />
    </nav>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind, {});
const mdAndSmaller = breakpoints.smaller("lg");
</script>
