<script setup>
definePageMeta({
    title: "Veranstaltungen"
})

const { getItems } = useDirectusItems();

const posts = await getItems({
    collection: "events", params: {
        sort: "start"
    }
})

</script>

<template>
    <div>
        <section class="bg-gray-50">
            <div class="max-w-3xl pt-48 pb-24 mx-auto text-center">
                <h4 class="text-sm font-bold tracking-widest text-green-500 uppercase">Veranstaltungen</h4>
                <h1 class="mt-6 font-serif text-5xl md:text-6xl">Bühne frei</h1>
                <p class="pt-5 text-lg text-gray-600">
                    Hier könnt ihr euch für unsere Veranstaltungen Tickets reservieren. Die Veranstaltungen sind
                    kostenlos,
                    wir möchten euch während der Bestellung dennoch um eine Spende bitten, um die Inselbühne sowohl als
                    auch die Künstlerinnen und Künstler
                    unterstützen zu können.
                </p>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container flex flex-col px-4 pb-32 mx-auto text-center space-y-10">
                <EventCard v-for="event in posts" :title="event.title" :eventId="event.id" :summary="event.summary"
                    :start="event.start" :image="event.image" :registration_needed="event.registration_needed" />
            </div>
        </section>
    </div>
</template>