<template>
  <nav class="flex flex-col lg:flex-row">
    <HeaderNavItem
      title="Die Stiftung"
      index="1"
      link="/ueber-uns"
      tabindex="2"
    />
    <HeaderNavItem title="Projekte & Programme" index="2" link="/projekte" tabindex="3" />
    <HeaderNavItem title="Unterstützen & engagieren" index="3" link="/aktuelles" tabindex="4" />
    <HeaderNavItem title="Shop" index="4" link="/kontakt" tabindex="5" />
    <ClientOnly>
      <HeaderNavItem
        title="Spenden"
        index="6"
        link="/mitstiften"
        v-if="mdAndSmaller"
      />
      <HeaderNavItem
        title="Ehrenamt"
        index="7"
        link="/mitstiften/ehrenamt"
        v-if="mdAndSmaller"
      />
    </ClientOnly>
  </nav>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind, {});
const mdAndSmaller = breakpoints.smaller("lg");
</script>
