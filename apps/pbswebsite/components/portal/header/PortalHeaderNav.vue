<template>
    <nav class="flex flex-col lg:flex-row">
        <HeaderNavItem title="Engagieren" index="1" link="/portal/engagieren" tabindex="2" />
        <HeaderNavItem title="Hilfe" index="2" link="/aktuelles" tabindex="4" />
        <HeaderNavItem title="Log-in" index="2" link="/portal/login" tabindex="4" v-if="!user" />
        <HeaderNavItem title="Admin-Bereich" index="3" :link="redirectUrl.toString()" tabindex="3" v-if="user" />
        <HeaderNavItem title="Mein Profil" index="4" link="/portal/profil" tabindex="3" v-if="user" />
    </nav>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind, {});
const user = useDirectusUser() as any;
const directusUrl = useDirectusUrl();
const redirectUrl = new URL("/admin/login?continue", directusUrl);
</script>
