<template>
    <div>
        <PageTitle title="Kontakt">
            <template #description>
                <p>Erzähl uns etwas über dich und wir melden uns anschließend bei dir.</p>
            </template>
            <template #actions>
                <button
                    class="text-md font-header rounded-md bg-emerald-500 py-1.5 px-4 font-bold text-white transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
                >
                    info@potsdamer-buergerstiftung.org
                </button>
            </template>
            <template #breadcrumb>
                <PageTitleBreadcrumb :items="[{ text: 'Kontakt', to: '/kontakt' }]" />
            </template>
        </PageTitle>
        <section class="bg-slate-100">
            <div class="container mx-auto grid grid-cols-4 gap-8 px-4 py-20">
                <div>
                    <h1 class="font-header text-3xl font-bold">Unsere Standorte</h1>
                    <p class="mt-3">Komm einfach vorbei</p>
                </div>
                <div>
                    <h2 class="font-header text-xl font-bold">MAZ-Pyramide</h2>
                    <p class="mt-4">Friedrich-Engels-Straße 24</p>
                    <p>14472 Potsdam</p>
                    <p class="mt-1 font-bold">+49 331 23180300</p>
                    <p class="mt-4">Arbeitszeiten: Montag - Freitag</p>
                    <p>9 Uhr - 15 Uhr</p>
                </div>
                <div>
                    <h2 class="font-header text-xl font-bold">Inselbühne</h2>
                    <p class="mt-4">Burgstraße</p>
                    <p>14467 Potsdam</p>
                    <p class="mt-1 font-bold">+49 331 23180309</p>
                    <p class="mt-4">Besuchszeiten: Freitag - Samstag</p>
                    <p>18 Uhr - 20 Uhr</p>
                </div>
            </div>
        </section>
        <section class="bg-slate-100">
            <div class="container mx-auto grid grid-cols-4 gap-8 px-4 py-16">
                <div>
                    <h1 class="font-header text-3xl font-bold">Allgemeine Fragen</h1>
                    <p class="mt-4">
                        Füll' einfach das Formular aus oder <b>sende uns eine E-Mail</b>
                    </p>
                </div>
                <div>
                    <h2 class="font-header text-xl font-bold">MAZ-Pyramide</h2>
                    <p class="mt-4">Friedrich-Engels-Straße 24, 14472 Potsdam</p>
                    <p class="mt-1 font-bold">+49 331 23180300</p>
                    <p class="mt-4">Arbeitszeiten: Montag - Freitag</p>
                    <p>9 Uhr - 15 Uhr</p>
                </div>
                <div>
                    <h2 class="font-header text-xl font-bold">Inselbühne</h2>
                    <p class="mt-4">Burgstraße, 14467 Potsdam</p>
                    <p class="mt-1 font-bold">+49 331 23180309</p>
                    <p class="mt-4">Besuchszeiten: Freitag - Samstag</p>
                    <p>18 Uhr - 20 Uhr</p>
                    <NuxtLink to="https://www.inselbuehne-potsdam.de" class="font-bold"
                        >inselbuehne-potsdam.de
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Kontakt",
});
</script>
