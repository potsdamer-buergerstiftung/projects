<template>
    <section class="bg-gray-100">
        <div class="container mx-auto px-4 pt-40 pb-12">
            <div class="overflow-hidden md:rounded-tl-xl md:rounded-br-xl md:bg-white md:shadow-xl">
                <div class="grid grid-cols-6">
                    <div
                        class="relative col-span-6 h-64 overflow-hidden rounded-tl-lg rounded-br-lg bg-green-500 bg-cover md:rounded-none lg:col-span-3 lg:h-full"
                    >
                        <img
                            :src="`https://cms.potsdamer-buergerstiftung.org/assets/${image}?key=low-1000`"
                            alt="test"
                            class="absolute h-full w-full object-cover"
                        />
                    </div>
                    <div class="col-span-6 mt-8 md:px-8 lg:col-span-3 lg:mt-0 lg:pt-8">
                        <p class="text-sm font-bold uppercase tracking-widest text-green-500">
                            {{ longStart }}
                        </p>
                        <h1 class="mt-8 mb-8 font-serif text-4xl lg:mb-24">{{ name }}</h1>
                        <ClientOnly>
                            <button
                                v-if="isShareSupported"
                                @click="startShare()"
                                class="inline-flex items-center rounded-tl-lg rounded-br-lg bg-gray-50 px-3 py-2 text-sm font-medium shadow-md transition hover:bg-gray-100"
                            >
                                Veranstaltung teilen
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="ml-1 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                    />
                                </svg>
                            </button>
                            <button
                                v-if="isClipboardSupported && !isShareSupported"
                                @click="startCopy()"
                                class="inline-flex items-center rounded-tl-lg rounded-br-lg bg-gray-50 px-3 py-2 text-sm font-medium shadow-md transition hover:bg-gray-100"
                            >
                                {{ copied ? "Link kopiert" : "Veranstaltungslink kopieren" }}
                                <svg
                                    v-if="!copied"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="ml-1 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                </svg>
                                <svg
                                    v-if="copied"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="ml-1 h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </button>
                            <button
                                v-if="registration_needed"
                                class="text-md mt-4 w-full rounded-tl-lg rounded-br-lg bg-green-500 px-4 py-2.5 text-center font-medium text-white shadow-md transition hover:bg-green-400"
                            >
                                Tickets
                            </button>
                        </ClientOnly>
                    </div>
                </div>
                <div
                    class="mt-8 grid grid-cols-3 gap-4 md:mt-0 md:px-8 md:py-16 lg:gap-16 lg:px-16"
                >
                    <div class="order-2 col-span-3 md:order-1 md:col-span-2">
                        <p class="mt-4 text-sm font-bold uppercase tracking-widest text-green-500">
                            Beschreibung
                        </p>
                        <ClientOnly>
                            <p
                                class="text-md prose prose-headings:font-serif prose-headings:font-normal lg:prose-lg mt-4 leading-relaxed"
                                v-html="description"
                            />
                        </ClientOnly>
                    </div>
                    <div class="order-1 col-span-3 md:order-2 md:col-span-1">
                        <div>
                            <p
                                class="text-sm font-bold uppercase tracking-widest text-green-500 md:mt-4"
                            >
                                Datum und Uhrzeit
                            </p>
                            <p class="mt-4">
                                {{ longStart }}
                            </p>
                            <p>{{ timeStart }} - {{ timeEnd }}</p>
                        </div>
                        <div class="mt-8 md:mt-12 lg:mt-16">
                            <p
                                class="mt-4 text-sm font-bold uppercase tracking-widest text-green-500"
                            >
                                Veranstaltungsort
                            </p>
                            <p class="mt-4">Inselbühne Potsdam</p>
                            <p>Burgstraße, 14476 Potsdam</p>
                        </div>
                        <div class="mt-8 md:mt-12 lg:mt-16">
                            <p
                                class="mt-4 text-sm font-bold uppercase tracking-widest text-green-500"
                            >
                                Hinweise vom Veranstalter
                            </p>
                            <p class="mt-4">Keine</p>
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
    title: "Wir gehen in die zweite Runde",
});

const route = useRoute();

const { getItemById } = useDirectusItems();

const props = (await getItemById({
    collection: "events",
    id: route.params.id as string,
})) as any;

const longStart = new Date(props.start).toLocaleDateString("de", {
    month: "long",
    day: "numeric",
    year: "numeric",
    weekday: "long",
});

const timeStart = new Date(props.start).toLocaleTimeString("de", {
    hour: "2-digit",
    minute: "2-digit",
});

const timeEnd = new Date(props.end).toLocaleTimeString("de", {
    hour: "2-digit",
    minute: "2-digit",
});

const { name, description, image, registration_needed, summary } = props;

const { share, isSupported: isShareSupported } = useShare();

const shareButton = ref("");

const { copy, copied, isSupported: isClipboardSupported } = useClipboard({ source: shareButton });

function startCopy() {
    copy(location.href);
}

function startShare() {
    share({
        title: name,
        text: summary,
        url: location.href,
    });
}
</script>
