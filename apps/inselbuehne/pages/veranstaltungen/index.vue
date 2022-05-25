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
            <div class="px-4 lg:px-0 max-w-3xl pt-48 pb-24 mx-auto text-center">
                <h4 class="text-sm font-bold tracking-widest text-green-500 uppercase">Veranstaltungen</h4>
                <h1 class="mt-6 font-serif text-5xl md:text-6xl">Bühne frei</h1>
                <p class="pt-5 text-lg text-gray-600">
                    Um die Teilnehmerzahl verwalten zu können, sind <span class="font-bold">für das Besuchen</span>
                    aller Veranstaltungen ab dem 15.
                    Juni <span class="font-bold">Tickets notwendig</span>. Wir arbeiten zurzeit an einer Implementierung
                    unseres neuen Ticket-Systems
                    und werden dieses <span class="font-bold">zum 1. Juni</span> bereitstellen. Bis dahin können die
                    Veranstaltungen auch ohne
                    Registrierung besucht werden.
                </p>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container flex flex-col px-4 pb-32 mx-auto space-y-10 text-center">
                <EventCard v-for="event in posts" :title="event.name" :eventId="event.id.toString()" :summary="event.summary"
                    :start="event.start" :image="event.image" :registration_needed="event.registration_needed" />
            </div>
        </section>
    </div>
</template>