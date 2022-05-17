<script setup>
definePageMeta({
    layout: "default",
    title: "Brücken bauen, Menschen verbinden"
})
</script>

<template>
    <div>
        <section class="bg-green-100">
            <div class="container mx-auto px-4 pt-24 pb-12 grid grid-cols-2 gap-16 items-center">
                <div>
                    <h1 class="font-serif text-6xl">Wir gehen in die <span class="text-green-500">zweite
                            Runde</span>.
                    </h1>
                    <p class="text-lg mt-4 leading-relaxed">
                        Wir haben den Winter genutzt, um Künstlerinnen und Künstlern ein weiteres Jahr den Ort zur
                        Verfügung zu stellen, der letztes Jahr tausende Zuschauerinnen und Zuschauer begeistern konnte.
                    </p>
                    <button
                        class="mt-5 px-5 py-3 shadow-md rounded-tl-lg rounded-br-lg bg-green-500 text-white text-lg font-medium transition hover:bg-green-400">
                        Zu den Veranstaltungen
                    </button>
                </div>
                <div>
                    <div class="aspect-[4/3]">

                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container mx-auto px-4 pt-16 pb-8">
                <div class="flex flex-row justify-between items-center">
                    <div>
                        <hr class="h-1 w-16 bg-green-500" />
                        <h1 class="pt-5 font-serif text-4xl">
                            Was es Neues bei uns gibt
                        </h1>
                        <h4 class="mt-2 text-lg text-gray-500">Und was alles passiert ist</h4>
                    </div>
                    <div>
                        <button
                            class="mt-4 px-4 py-2.5 rounded-tl-lg shadow-md transition hover:bg-green-400 rounded-br-lg bg-green-500 text-white text-md font-medium">
                            Alle Beiträge
                        </button>
                    </div>
                </div>
                <div class="mt-12 grid grid-cols-3 gap-8">
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container mx-auto px-4 pt-16 grid grid-cols-2 gap-16 items-center">
                <div>
                    <div class="aspect-[3/2] bg-green-500 bg-cover">

                    </div>
                </div>
                <div>
                    <h1 class="font-serif text-4xl" v-motion-fade-visible-once>Was ist die
                        Inselbühne?</h1>
                    <p class="text-lg mt-4 leading-relaxed text-gray-600" v-motion-fade-visible-once>
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
            <div class="max-w-3xl mx-auto px-4 pt-32 pb-32 text-center">
                <h4 class="uppercase text-green-500 font-bold tracking-widest text-sm">Los geht's</h4>
                <h1 class="mt-3 font-serif text-4xl">Hol' dir dein Ticket</h1>
                <p class="mt-4 text-lg text-gray-600 leading-relaxed">
                    Wegen aktueller Verordnungen dürfen wir nur 140 Personen mit entsprechendem Abstand zulassen. Um
                    eine
                    Veranstaltung zu besuchen, sind trotz der überwiegenden Mehrheit kostenloser Veranstaltungen Tickets
                    notwendig, die Du entweder über unsere Website oder über unser Ticket-Telefon bestellen kannst.
                </p>
                <button
                    class="mt-4 shadow-md px-4 py-2.5 rounded-tl-lg rounded-br-lg bg-green-500 text-white text-md font-medium transition hover:bg-green-400">
                    Zu den Veranstaltungen
                </button>
            </div>
        </section>
    </div>
</template>