<template>
    <div>
        <section class="bg-green-100">
            <div
                class="container mx-auto grid grid-cols-6 items-center gap-16 px-4 pt-48 pb-12 md:pb-24"
            >
                <div class="col-span-6 max-w-xl md:col-span-3">
                    <h1 class="font-serif text-5xl lg:text-6xl">
                        Wir gehen in die <span class="text-green-500">zweite Runde</span>.
                    </h1>
                    <p class="mt-6 text-lg leading-relaxed">
                        Wir stellen Künstlerinnen und Künstlern ein weiteres Jahr den Ort zur
                        Verfügung, der letztes Jahr tausende Zuschauerinnen und Zuschauer begeistern
                        konnte.
                    </p>
                    <NuxtLink
                        to="/veranstaltungen"
                        class="mt-6 inline-flex rounded-tl-lg rounded-br-lg bg-green-500 px-5 py-3 text-lg font-medium text-white shadow-md transition hover:bg-green-400"
                    >
                        Zu den Veranstaltungen
                    </NuxtLink>
                </div>
                <div class="col-span-6 md:col-span-3">
                    <img
                        :src="`https://cms.potsdamer-buergerstiftung.org/assets/9fbafc25-4d32-4964-9f05-a4ac15234fa1?width=700&quality=60&height=450`"
                        alt="test"
                        class="w-full"
                    />
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container mx-auto px-4 pt-12 pb-8 md:pt-16">
                <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <hr class="h-1 w-16 bg-green-500" />
                        <h1 class="pt-5 font-serif text-3xl md:text-4xl">
                            Was es Neues bei uns gibt
                        </h1>
                        <h4 class="mt-2 text-lg text-gray-500">Und was alles passiert ist</h4>
                    </div>
                    <div>
                        <NuxtLink
                            to="/blog"
                            class="text-md rounded-tl-lg rounded-br-lg bg-green-500 px-4 py-2.5 font-medium text-white shadow-md transition hover:bg-green-400"
                        >
                            Alle Beiträge
                        </NuxtLink>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-6 gap-8">
                    <div v-for="post in posts" class="col-span-6 md:col-span-3 xl:col-span-2">
                        <ArticleCard
                            :post-id="post.id.toString()"
                            :image-url="post.image"
                            :title="post.title"
                            :summary="post.excerpt"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container mx-auto grid grid-cols-2 items-center gap-16 px-4 pt-16">
                <div class="order-2 col-span-2 lg:order-1 lg:col-span-1">
                    <img
                        :src="`https://cms.potsdamer-buergerstiftung.org/assets/bca18d03-b2f2-4d7b-b277-c296899cb06f?width=700&quality=60&height=500`"
                        alt="test"
                        class="w-full"
                    />
                </div>
                <div class="order-1 col-span-2 lg:order-2 lg:col-span-1">
                    <h1 class="font-serif text-4xl" v-motion-fade-visible-once>
                        Was ist die Inselbühne?
                    </h1>
                    <p
                        class="mt-4 text-lg leading-relaxed text-gray-600"
                        v-motion-fade-visible-once
                    >
                        Inselbühne haben wir die 1973 errichtete Freilichtbühne auf der
                        Freundschaftsinsel neu benannt. Seit 2012 wurde sie nicht mehr genutzt und
                        es gab Pläne, sie abzureißen. Das wollten wir verhindern, denn es gibt keine
                        geeignetere Open-Air-Bühne in der Stadt. Sie ist für viele Potsdamerinnen
                        und Potsdamer ein Traditionsort.
                    </p>
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="mx-auto max-w-3xl px-4 pt-24 pb-24 text-center md:pt-32 md:pb-32">
                <h4 class="text-sm font-bold uppercase tracking-widest text-green-500">
                    Los geht's
                </h4>
                <h1 class="mt-3 font-serif text-4xl">Hol' dir dein Ticket</h1>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                    Um die Teilnehmerzahl verwalten zu können, sind
                    <span class="font-bold">für das Besuchen</span> aller Veranstaltungen ab dem 15.
                    Juni <span class="font-bold">Tickets notwendig</span>. Wir arbeiten zurzeit an
                    einer Implementierung unseres neuen Ticket-Systems und werden dieses
                    <span class="font-bold">zum 1. Juni</span> bereitstellen. Bis dahin können die
                    Veranstaltungen auch ohne Registrierung besucht werden.
                </p>
                <NuxtLink
                    to="/veranstaltungen"
                    class="text-md mt-4 inline-flex rounded-tl-lg rounded-br-lg bg-green-500 px-4 py-2.5 font-medium text-white shadow-md transition hover:bg-green-400"
                >
                    Zu den Veranstaltungen
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "default",
    title: "Es geht weiter",
});

const { getItems } = useDirectusItems();

const { data: posts } = await useAsyncData("posts", () =>
    getItems({
        collection: "posts",
        params: {
            filter: {
                project: {
                    id: "inselbuehne"
                }
            },
            limit: 3,
        },
    })
);
</script>
