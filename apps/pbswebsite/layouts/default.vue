<template>
  <div class="antialiased">
    <PageLoadingBar />
    <Header :is-dark="(route.meta.isDark as boolean)">
      <template #brand>
        <HeaderBrand />
      </template>
      <template #navigation>
        <HeaderNavItem title="Die Stiftung">
          <HeaderSubNavItem title="Wer wir sind" link="/stiftung" />
          <HeaderSubNavItem title="Unsere Gremien" link="/stiftung/gremien" />
          <HeaderSubNavItem
            title="Aktuelles & Veranstaltungen"
            link="/stiftung/aktuelles"
          />
          <HeaderSubNavItem title="Presse & Dokumente" link="/presse" />
        </HeaderNavItem>
        <HeaderNavItem title="Projekte & Programme">
          <HeaderSubNavItem title="Unsere Projekte" link="/projekte" />
          <HeaderSubNavItem
            title="Ein Projekt mit uns starten"
            link="/projekte"
          />
        </HeaderNavItem>
        <HeaderNavItem title="Unterstützen & engagieren">
          <HeaderSubNavItem title="Ehrenamt" link="/mitstiften" />
          <HeaderSubNavItem title="Spenden" link="/mitstiften" />
          <HeaderSubNavItem title="Unsere Förderer und Partner" link="/mitstiften" />
          <HeaderSubNavItem title="Partner werden" link="/mitstiften" />
        </HeaderNavItem>
        <HeaderNavItem title="Kontakt" link="/kontakt" />
      </template>
      <template #actions>
        <HeaderActions />
      </template>
    </Header>
    <slot />
    <Footer />
    <ClientOnly>
      <div
        class="fixed left-[4vh] top-[50%] z-50 inline-flex origin-top-left items-center align-middle"
        v-if="lgAndUp"
        style="transform: rotate(-90deg) translate(-50%, 0)"
      >
        <ScrollProgressIndicator />
      </div>
    </ClientOnly>
    <div
      class="fixed right-[4vh] top-[50%] z-50 hidden origin-top-right items-center align-middle lg:inline-flex"
      style="transform: rotate(-90deg) translate(50%, -100%)"
    >
      <SocialMediaLinks size="large" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const route = useRoute();

definePageMeta({
  hideSideActions: false,
});

useHead({
  titleTemplate: "%s - Potsdamer Bürgerstiftung",
  meta: [
    {
      name: "og:title",
      content: `Potsdamer Bürgerstiftung - ${route.meta.title}`,
    },
    {
      name: "description",
      content:
        "Wir vernetzen Gleichgesinnte, versammeln engagierte Menschen, bieten Unterstützung als Plattform für Ehrenamt und möchten es den Menschen in Potsdam leichter machen, das Gemeinwohl zu stärken, Gemeinschaftsgefühl zu erleben, ein herzliches Miteinander und eine starke Zukunft für Potsdam zu stiften.",
    },
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  charset: "utf-8",
});

const breakpoints = useBreakpoints(breakpointsTailwind, {});
const lgAndUp = breakpoints.greater("lg");
</script>
