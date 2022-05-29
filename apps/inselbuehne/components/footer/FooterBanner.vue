<template>
    <div class="container mx-auto px-4 py-12">
        <div
            class="flex flex-col justify-between text-center md:text-left lg:flex-row lg:items-center lg:gap-4"
        >
            <div>
                <h1 class="font-serif text-2xl text-white lg:text-4xl">
                    Ein Projekt der
                    <NuxtLink to="https://www.potsdamer-buergerstiftung.com" class="text-green-300">
                        Potsdamer Bürgerstiftung</NuxtLink
                    >.
                </h1>
                <p class="mt-2 text-gray-300">
                    Wir fördern ehrenamtliches Engagement und gestalten als Mitmach-Stiftung
                    gemeinsam unsere schöne Stadt noch l(i)ebenswerter.
                </p>
            </div>
            <div class="lg:shrink-0">
                <a
                    href="https://www.potsdamer-buergerstiftung.org"
                    target="_blank"
                    class="text-md mt-4 block w-full rounded-tl-lg rounded-br-lg bg-green-300 px-4 py-2.5 text-center font-medium text-teal-900 shadow-md transition hover:bg-green-200 lg:inline-flex lg:w-auto"
                >
                    Mehr über uns
                </a>
            </div>
        </div>
    </div>
</template>
