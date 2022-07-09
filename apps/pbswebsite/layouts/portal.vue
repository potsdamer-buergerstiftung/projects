<template>
    <div class="antialiased">
        <Header :is-dark="(route.meta.isDark as boolean)">
            <template #brand>
                <div class="flex flex-col md:flex-row justify-center divide-y-2 md:divide-y-0 md:items-center md:divide-x-2">
                    <HeaderBrand class="pb-2 md:pb-0 md:pr-4 lg:pr-2 xl:pr-4" />
                    <h1 class="font-bold font-header md:pl-4 lg:pl-2 xl:pl-4">Freiwilligenportal</h1>
                </div>
            </template>
            <template #navigation>
                <HeaderNavItem title="Engagieren">
                    <HeaderSubNavItem title="Wer sind wir?" link="/ueber-uns" />
                    <HeaderSubNavItem title="Unsere Gremien" link="/gremien" />
                    <HeaderSubNavItem title="Aktuelles & Veranstaltungen" link="/aktuelles" />
                    <HeaderSubNavItem title="Presse & Dokumente" link="/presse" />
                </HeaderNavItem>
                <HeaderNavItem title="Hilfe">
                    <HeaderSubNavItem title="Unsere Projekte" link="/projekte" />
                    <HeaderSubNavItem title="Ein Projekt mit uns starten" link="/projekte" />
                </HeaderNavItem>
                <HeaderNavItem title="Log-in" link="/portal/login" />
                <HeaderNavItem title="Admin-Bereich" link="/kontakt" />
                <HeaderNavItem title="Mein Profil" link="/kontakt" />
            </template>
            <template #actions>
                <NuxtLink to="/"
                    class="bg-emerald-100 text-slate-800 hover:bg-emerald-200 text-md font-header inline-flex rounded-md py-1.5 px-4 font-bold transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75">
                    Zurück zur Website
                </NuxtLink>
            </template>
        </Header>
        <slot />
        <ClientOnly>
            <div class="fixed left-[4vh] top-[50%] z-50 inline-flex origin-top-left items-center align-middle"
                v-if="lgAndUp" style="transform: rotate(-90deg) translate(-50%, 0)">
                <ScrollProgressIndicator />
            </div>
        </ClientOnly>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const route = useRoute();

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
