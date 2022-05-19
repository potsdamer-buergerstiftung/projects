<script setup>
definePageMeta({
    title: "Veranstaltungen"
})

const { getItems } = useDirectusItems();

const posts = await getItems({ collection: "events" })

</script>

<template>
    <div>
        <section class="bg-gray-50">
            <div class="max-w-3xl mx-auto pt-40 pb-24 text-center">
                <h4 class="uppercase text-green-500 font-bold tracking-widest text-sm">Veranstaltungen</h4>
                <h1 class="font-serif text-6xl mt-6">Bühne frei</h1>
                <p class="text-lg text-gray-600 pt-5">
                    Hier könnt ihr euch für unsere Veranstaltungen Tickets reservieren. Die Veranstaltungen sind
                    kostenlos,
                    wir möchten euch während der Bestellung dennoch um eine Spende bitten, um die Inselbühne sowohl als
                    auch die Künstlerinnen und Künstler
                    unterstützen zu können.
                </p>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container mx-auto pb-32 text-center space-y-10 flex flex-col">
                <EventCard v-for="event in posts" :title="event.title" :eventId="event.id" :summary="event.summary"
                    :start="event.start" />
            </div>
        </section>
    </div>
</template>