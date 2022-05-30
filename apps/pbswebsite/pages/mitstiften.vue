<template>
    <div>
        <Title>Mitstiften</Title>
        <PageTitle title="Unterstützen & engagieren">
            <template #description>
                Erfahre, wie du uns mit Geld oder mit deiner Zeit unterstützen kannst.
            </template>
            <template #breadcrumb>
                <PageTitleBreadcrumb :items="[{ text: 'Mitstiften' }]" />
            </template>
        </PageTitle>
        <section class="bg-slate-100">
            <div class="container mx-auto grid grid-cols-4 gap-8 px-4 py-20">
                <div class="col-span-4 lg:col-span-1">
                    <h1 class="font-header text-3xl font-bold">Unsere Standorte</h1>
                    <p class="mt-3">Komm einfach vorbei</p>
                </div>
                <div class="col-span-4 md:col-span-2 lg:col-span-1">
                    <h2 class="font-header text-xl font-bold">MAZ-Pyramide</h2>
                    <p class="mt-4">Friedrich-Engels-Straße 24</p>
                    <p>14472 Potsdam</p>
                    <p class="mt-1 font-bold">+49 331 23180300</p>
                    <p class="mt-4">Arbeitszeiten: Montag - Freitag</p>
                    <p>9 Uhr - 15 Uhr</p>
                </div>
                <div class="col-span-4 md:col-span-2 lg:col-span-1">
                    <h2 class="font-header text-xl font-bold">Inselbühne</h2>
                    <p class="mt-4">Burgstraße</p>
                    <p>14467 Potsdam</p>
                    <p class="mt-1 font-bold">+49 331 23180309</p>
                    <p class="mt-4">Besuchszeiten: Freitag - Samstag</p>
                    <p>18 Uhr - 20 Uhr</p>
                </div>
            </div>
        </section>
    </div>
</template>
