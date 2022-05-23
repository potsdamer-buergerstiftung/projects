<script setup>
definePageMeta({
    layout: "default",
    title: "Es geht weiter"
})

const { getItems } = useDirectusItems();

const posts = await getItems({ collection: "posts" })

</script>

<template>
    <div>
        <section class="bg-green-100">
            <div class="container items-center px-4 pt-48 pb-24 mx-auto grid grid-cols-6 gap-16">
                <div class="max-w-xl col-span-6 md:col-span-3">
                    <h1 class="font-serif text-5xl lg:text-6xl">Wir gehen in die <span class="text-green-500">zweite
                            Runde</span>.
                    </h1>
                    <p class="mt-6 text-lg leading-relaxed">
                        Wir haben den Winter genutzt, um Künstlerinnen und Künstlern ein weiteres Jahr den Ort zur
                        Verfügung zu stellen, der letztes Jahr tausende Zuschauerinnen und Zuschauer begeistern konnte.
                    </p>
                    <NuxtLink to="/veranstaltungen"
                        class="inline-flex px-5 py-3 mt-6 text-lg font-medium text-white bg-green-500 rounded-tl-lg rounded-br-lg shadow-md transition hover:bg-green-400">
                        Zu den Veranstaltungen
                    </NuxtLink>
                </div>
                <div class="col-span-6 md:col-span-3">
                    <div class="aspect-[5/3]">
                        <img :src="`https://cms.potsdamer-buergerstiftung.org/assets/a5ff92e4-a012-45b6-bc5d-352b219dcdf6?key=low-1000`"
                            alt="test" class="object-cover w-full h-full">
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container px-4 pt-16 pb-8 mx-auto">
                <div class="flex flex-col justify-between md:flex-row md:items-center gap-4">
                    <div>
                        <hr class="w-16 h-1 bg-green-500" />
                        <h1 class="pt-5 font-serif text-3xl md:text-4xl">
                            Was es Neues bei uns gibt
                        </h1>
                        <h4 class="mt-2 text-lg text-gray-500">Und was alles passiert ist</h4>
                    </div>
                    <div>
                        <button
                            class="px-4 py-2.5 rounded-tl-lg shadow-md transition hover:bg-green-400 rounded-br-lg bg-green-500 text-white text-md font-medium">
                            Alle Beiträge
                        </button>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-6 gap-8">
                    <div class="col-span-6 md:col-span-3 lg:col-span-2">
                        <ArticleCard v-for="post in posts" :post-id="post.id" :image-url="post.image"
                            :title="post.title" :summary="post.excerpt" />
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container items-center px-4 pt-16 mx-auto grid grid-cols-2 gap-16">
                <div class="order-2 col-span-2 lg:col-span-1 lg:order-1">
                    <div class="aspect-[3/2] bg-green-500 bg-cover">

                    </div>
                </div>
                <div class="order-1 col-span-2 lg:col-span-1 lg:order-2">
                    <h1 class="font-serif text-4xl" v-motion-fade-visible-once>Was ist die
                        Inselbühne?</h1>
                    <p class="mt-4 text-lg leading-relaxed text-gray-600" v-motion-fade-visible-once>
                        Inselbühne haben wir die 1974 errichtete Freilichtbühne auf der Freundschaftsinsel neu benannt.
                        Seit
                        2012 wurde sie nicht mehr genutzt und es gab Pläne, sie abzureißen. Das wollten wir verhindern,
                        denn
                        es gibt keine geeignetere Open-Air-Bühne in der Stadt. Wir meinen, Potsdam braucht eine
                        Freilichtbühne, vor allem in Zeiten einer Pandemie.
                    </p>
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="max-w-3xl px-4 pt-32 pb-32 mx-auto text-center">
                <h4 class="text-sm font-bold tracking-widest text-green-500 uppercase">Los geht's</h4>
                <h1 class="mt-3 font-serif text-4xl">Hol' dir dein Ticket</h1>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                    Wegen aktueller Verordnungen dürfen wir nur 140 Personen mit entsprechendem Abstand zulassen. Um
                    eine
                    Veranstaltung zu besuchen, sind trotz der überwiegenden Mehrheit kostenloser Veranstaltungen Tickets
                    notwendig, die Du entweder über unsere Website oder über unser Ticket-Telefon bestellen kannst.
                </p>
                <NuxtLink to="/veranstaltungen"
                    class="inline-flex mt-4 shadow-md px-4 py-2.5 rounded-tl-lg rounded-br-lg bg-green-500 text-white text-md font-medium transition hover:bg-green-400">
                    Zu den Veranstaltungen
                </NuxtLink>
            </div>
        </section>
    </div>
</template>