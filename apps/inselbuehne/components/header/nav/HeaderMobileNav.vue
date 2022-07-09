<template>
  <div
    v-if="mdAndSmaller"
    class="fixed top-0 bottom-0 left-0 right-0 z-30 -translate-x-full overflow-hidden overscroll-contain bg-white transition duration-500 ease-in-out lg:hidden"
    :class="{ 'translate-x-0': headerState.isMobileMenuOpen }"
  >
    <div class="container mx-auto flex flex-col px-2 pt-44">
      <HeaderNavItem title="Veranstaltungen" link="/veranstaltungen" />
      <HeaderNavItem title="Blog" link="/blog" />
      <HeaderNavItem
        title="Über uns"
        link="https://www.potsdamer-buergerstiftung.org"
      />
      <HeaderNavItem title="Presse" link="/presse" />
      <HeaderNavItem
        title="Spenden"
        link="https://donorbox.org/inselbuhne-potsdam"
      />
      <HeaderNavItem title="Kontakt" link="/kontakt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderState } from "../state";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const mdAndSmaller = breakpoints.smaller("lg");

const headerState = useHeaderState();
</script>
