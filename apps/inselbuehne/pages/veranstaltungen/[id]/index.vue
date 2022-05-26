<template>
    <section class="bg-gray-100">
        <div class="container px-4 pt-40 pb-12 mx-auto">
            <div class="overflow-hidden md:rounded-tl-xl md:rounded-br-xl md:shadow-xl md:bg-white">
                <div class="grid grid-cols-6">
                    <div
                        class="relative h-64 col-span-6 overflow-hidden bg-green-500 bg-cover rounded-tl-lg rounded-br-lg md:rounded-none lg:col-span-3 lg:h-full">
                        <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/${image}?key=low-1000`" alt="test"
                            class="absolute object-cover w-full h-full">
                    </div>
                    <div class="col-span-6 mt-8 lg:col-span-3 lg:mt-0 lg:pt-8 md:px-8">
                        <p class="text-sm font-bold tracking-widest text-green-500 uppercase">{{ longStart }}</p>
                        <h1 class="mt-8 mb-8 font-serif text-4xl lg:mb-24">{{ name }}</h1>
                        <ClientOnly>
                            <button v-if="isShareSupported" @click="startShare()"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium transition rounded-tl-lg rounded-br-lg shadow-md bg-gray-50 hover:bg-gray-100">
                                Veranstaltung teilen
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>
                            <button v-if="isClipboardSupported && !isShareSupported" @click="startCopy()"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium transition rounded-tl-lg rounded-br-lg shadow-md bg-gray-50 hover:bg-gray-100">
                                {{ copied ? "Link kopiert" : "Veranstaltungslink kopieren" }}
                                <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                            <button v-if="registration_needed"
                                class="mt-4 w-full text-center shadow-md px-4 py-2.5 rounded-tl-lg rounded-br-lg bg-green-500 text-white text-md font-medium transition hover:bg-green-400">
                                Tickets
                            </button>
                        </ClientOnly>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4 mt-8 lg:gap-16 md:px-8 lg:px-16 md:mt-0 md:py-16">
                    <div class="order-2 col-span-3 md:col-span-2 md:order-1">
                        <p class="mt-4 text-sm font-bold tracking-widest text-green-500 uppercase">
                            Beschreibung
                        </p>
                        <ClientOnly>
                            <p class="mt-4 leading-relaxed prose text-md lg:prose-lg" v-html="description" />
                        </ClientOnly>
                    </div>
                    <div class="order-1 col-span-3 md:col-span-1 md:order-2">
                        <div>
                            <p class="text-sm font-bold tracking-widest text-green-500 uppercase md:mt-4">
                                Datum und Uhrzeit
                            </p>
                            <p class="mt-4">
                                {{ longStart }}
                            </p>
                            <p>
                                {{ timeStart }} - {{ timeEnd }}
                            </p>
                        </div>
                        <div class="mt-8 md:mt-12 lg:mt-16">
                            <p class="mt-4 text-sm font-bold tracking-widest text-green-500 uppercase">
                                Veranstaltungsort
                            </p>
                            <p class="mt-4">
                                Inselbühne Potsdam
                            </p>
                            <p>
                                Burgstraße, 14476 Potsdam
                            </p>
                        </div>
                        <div class="mt-8 md:mt-12 lg:mt-16">
                            <p class="mt-4 text-sm font-bold tracking-widest text-green-500 uppercase">
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

const { name, description, image, registration_needed, summary } = props

const { share, isSupported: isShareSupported } = useShare()

const shareButton = ref("")

const { copy, copied, isSupported: isClipboardSupported } = useClipboard({ source: shareButton })

function startCopy() {
    copy(location.href)
}

function startShare() {
    share({
        title: name,
        text: summary,
        url: location.href,
    })
}
</script>