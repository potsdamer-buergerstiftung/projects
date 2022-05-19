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
                        <p class="uppercase text-green-500 font-bold tracking-widest text-sm">{{ new
                                Date(start).toLocaleDateString("de", {
                                    month: "long", day: "numeric", year:
                                        "numeric", weekday: "long"
                                })
                        }}</p>
                        <h1 class="font-serif text-4xl mt-8">{{ title }}</h1>
                        <button
                            class="mt-32 w-full text-center shadow-md px-4 py-2.5 rounded-tl-lg rounded-br-lg bg-green-500 text-white text-md font-medium transition hover:bg-green-400">
                            Tickets
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-3">
                    <div class="col-span-2 px-16 py-8">
                        <ClientOnly>
                            <p class="mt-4 text-md leading-relaxed prose lg:prose-lg" v-html="description" />
                        </ClientOnly>
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

const { start, title, image, description } = await getItemById({ collection: "events", id: route.params.id as string }) as any
</script>