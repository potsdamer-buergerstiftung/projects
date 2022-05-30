<template>
    <div>
        <PageTitle title="Sie haben Fragen?">
            <template #description>
                <p>Erzählen Sie uns kurz, worum es geht und wir melden uns bei Ihnen.</p>
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
            <div class="container mx-auto grid grid-cols-4 gap-8 px-4 pb-16">
                <div class="col-span-1">
                    <h1 class="font-header text-3xl font-bold">Allgemeine Fragen</h1>
                    <p class="mt-4">
                        Füllen Sie gerne das Formular aus oder <b>senden Sie uns eine E-Mail</b>
                    </p>
                </div>
                <div class="col-span-3">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-1">
                            <label class="text-sm font-medium">Vorname (Erforderlich)</label>
                            <input
                                type="email"
                                class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Dein Name"
                            />
                        </div>
                        <div class="col-span-1">
                            <label class="text-sm font-medium">Nachname (Erforderlich)</label>
                            <input
                                type="email"
                                class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Dein Name"
                            />
                        </div>
                        <div class="col-span-1">
                            <label class="text-sm font-medium">Organisation</label>
                            <input
                                type="email"
                                class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Dein Name"
                            />
                        </div>
                        <div class="col-span-1">
                            <label class="text-sm font-medium">E-Mail (Erforderlich)</label>
                            <input
                                type="email"
                                class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Dein Name"
                            />
                        </div>
                        <div class="col-span-1">
                            <label class="text-sm font-medium">Telefon</label>
                            <input
                                type="email"
                                class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Dein Name"
                            />
                        </div>
                        <div class="col-span-1">
                            <label class="text-sm font-medium">Projektbezug</label>
                            <select
                                class="mt-2 w-full appearance-none rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="none">Keine Angabe</option>
                                <option v-for="project in projects" :value="project.id">
                                    {{ project.title }}
                                </option>
                            </select>
                        </div>
                        <div class="col-span-3">
                            <label class="text-sm font-medium">Nachricht (Erforderlich)</label>
                            <textarea
                                class="mt-2 h-40 min-h-max w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                placeholder="Dein Name"
                            />
                        </div>
                        <div class="col-span-3">
                            <div class="mb-6 flex items-start">
                                <div class="flex h-5 items-center">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        class="focus:ring-3 h-4 w-4 rounded-sm border border-slate-300 bg-slate-100 accent-emerald-500 focus:ring-emerald-300"
                                        required
                                    />
                                </div>
                                <label for="remember" class="ml-2 max-w-xl text-sm font-medium"
                                    >Ich erkläre mich einverstanden, dass die eingegebenen Daten zu
                                    Zwecken des Beantwortens meines Anliegens weiterverarbeitet
                                    werden.</label
                                >
                            </div>
                        </div>
                        <div class="col-span-3">
                            <button
                                class="text-md font-header inline-flex items-center rounded-md bg-slate-800 py-3 px-5 font-bold text-white transition ease-in-out hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
                            >
                                Nachricht senden
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Kontakt",
});

const { getItems } = useDirectusItems();

const projects = await getItems<any>({
    collection: "projects",
    params: {
        fields: ["title", "id"],
        sort: "sort",
    },
});
</script>
