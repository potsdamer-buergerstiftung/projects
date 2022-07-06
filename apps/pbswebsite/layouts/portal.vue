<template>
    <div class="antialiased">
        <PortalHeader />
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
