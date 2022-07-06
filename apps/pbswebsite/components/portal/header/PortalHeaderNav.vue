<template>
    <nav class="flex flex-col lg:flex-row">
        <HeaderNavItem title="Events" index="1" link="/ueber-uns" tabindex="2" />
        <HeaderNavItem title="Hilfe" index="2" link="/aktuelles" tabindex="4" />
        <HeaderNavItem title="Admin-Bereich" index="3" :link="redirectUrl.toString()" tabindex="3" />
        <HeaderNavItem title="Mein Profil" index="4" link="/portal/profil" tabindex="3" />
    </nav>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind, {});
const mdAndSmaller = breakpoints.smaller("lg");
const directusUrl = useDirectusUrl();
const redirectUrl = new URL("/admin/login?continue", directusUrl);
</script>
