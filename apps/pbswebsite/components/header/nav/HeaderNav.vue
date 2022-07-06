<template>
  <nav class="flex flex-col lg:flex-row">
    <HeaderNavItem
      title="Die Stiftung"
      index="1"
      link="/ueber-uns"
      tabindex="2"
    />
    <HeaderNavItem title="Projekte" index="2" link="/projekte" tabindex="3" />
    <HeaderNavItem title="Aktuelles" index="3" link="/aktuelles" tabindex="4" />
    <HeaderNavItem title="Unterstützen" index="5" link="/mitstiften" tabindex="6" />
    <HeaderNavItem title="Kontakt" index="4" link="/kontakt" tabindex="5" />
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
