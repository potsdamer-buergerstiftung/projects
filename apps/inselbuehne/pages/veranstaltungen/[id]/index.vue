<template>
    <section class="bg-gray-100">
        <div class="container mx-auto px-4 pb-32 pt-32">
            <div class="rounded-tl-xl rounded-br-xl shadow-xl bg-white overflow-hidden">
                <div class="grid grid-cols-6">
                    <div class="col-span-3 relative bg-cover bg-green-500">
                        <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/${image}?key=low-1000`" alt="test"
                            class="w-full h-full object-cover absolute">
                    </div>
                    <div class="col-span-3 pt-8 px-8">
                        <p class="uppercase text-green-500 font-bold tracking-widest text-sm">{{ longStart }}</p>
                        <h1 class="font-serif text-4xl mt-8 mb-24">{{ title }}</h1>
                        <button
                            class="inline-flex items-center shadow-md px-3 py-2 rounded-tl-lg rounded-br-lg bg-gray-50 text-sm font-medium transition hover:bg-gray-100">
                            Veranstaltung teilen
                            <ShareIcon class="h-4 w-4 ml-1" />
                        </button>
                        <button v-if="registration_needed"
                            class="mt-4 w-full text-center shadow-md px-4 py-2.5 rounded-tl-lg rounded-br-lg bg-green-500 text-white text-md font-medium transition hover:bg-green-400">
                            Tickets
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-16 px-16 py-8">
                    <div class="col-span-2">
                        <p class="mt-4 uppercase text-green-500 font-bold tracking-widest text-sm">
                            Beschreibung
                        </p>
                        <ClientOnly>
                            <p class="mt-4 text-md leading-relaxed prose lg:prose-lg" v-html="description" />
                        </ClientOnly>
                    </div>
                    <div class="col-span-1 py-8">
                        <div>
                            <p class="mt-4 uppercase text-green-500 font-bold tracking-widest text-sm">
                                Datum und Uhrzeit
                            </p>
                            <p class="mt-4">
                                {{ longStart }}
                            </p>
                            <p>
                                {{ timeStart }} - {{ timeEnd }}
                            </p>
                        </div>
                        <div class="mt-16">
                            <p class="mt-4 uppercase text-green-500 font-bold tracking-widest text-sm">
                                Veranstaltungsort
                            </p>
                            <p class="mt-4">
                                Inselbühne Potsdam
                            </p>
                            <p>
                                Burgstraße, 14476 Potsdam
                            </p>
                        </div>
                        <div class="mt-16">
                            <p class="mt-4 uppercase text-green-500 font-bold tracking-widest text-sm">
                                Hinweise vom Veranstalter
                            </p>
                            <p class="mt-4">
                                Keine
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { ShareIcon } from "@heroicons/vue/outline"
</script>

<script setup lang="ts">
definePageMeta({
    layout: "default",
    title: "Wir gehen in die zweite Runde"
})

const route = useRoute()

const { getItemById } = useDirectusItems();

const props = await getItemById({ collection: "events", id: route.params.id as string }) as any

const longStart = new
    Date(props.start).toLocaleDateString("de", {
        month: "long", day: "numeric", year:
            "numeric", weekday: "long"
    })

const timeStart = new
    Date(props.start).toLocaleTimeString("de", {
        hour: "2-digit", minute: "2-digit"
    })

const timeEnd = new
    Date(props.end).toLocaleTimeString("de", {
        hour: "2-digit", minute: "2-digit"
    })

const { title, description, image, registration_needed } = props
</script>