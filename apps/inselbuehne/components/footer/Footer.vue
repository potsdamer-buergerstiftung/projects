<template>
    <footer class="bg-teal-900">
        <FooterBanner />
        <div class="container mx-auto px-4 pb-12">
            <hr class="mb-12 h-[1px] w-full border-gray-400 lg:mb-24" />
            <div class="grid grid-cols-6 gap-10 text-center md:gap-16 md:text-left">
                <div class="col-span-6 lg:col-span-3">
                    <h1 class="font-serif text-3xl text-white">Inselbühne Potsdam</h1>
                    <p class="mt-2 text-gray-300">Burgstraße, 14471 Potsdam</p>
                </div>
                <div class="col-span-6 md:col-span-2 lg:col-span-1">
                    <h4 class="text-sm font-bold uppercase tracking-widest text-white">
                        Folg' uns
                    </h4>
                    <ul class="mt-4 flex flex-col space-y-4">
                        <li>
                            <a
                                target="_blank"
                                href="https://instagram.com/inselbuehne"
                                class="text-gray-300 transition hover:text-green-300"
                                >Instagram</a
                            >
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://facebook.com/inselbuehne"
                                class="text-gray-300 transition hover:text-green-300"
                                >Facebook</a
                            >
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://github.com/potsdamer-buergerstiftung"
                                class="text-gray-300 transition hover:text-green-300"
                                >GitHub</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="col-span-6 md:col-span-2 lg:col-span-1">
                    <h4 class="text-sm font-bold uppercase tracking-widest text-white">Über uns</h4>
                    <ul class="mt-4 flex flex-col space-y-4">
                        <li>
                            <NuxtLink
                                to="/ueber/uns"
                                class="text-gray-300 transition hover:text-green-300"
                                >Team
                            </NuxtLink>
                        </li>
                        <li>
                            <a
                                href="https://www.potsdamer-buergerstiftung.org"
                                target="_blank"
                                class="text-gray-300 transition hover:text-green-300"
                                >Bürgerstiftung</a
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/presse"
                                class="text-gray-300 transition hover:text-green-300"
                                >Presse
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="col-span-6 md:col-span-2 lg:col-span-1">
                    <h4 class="text-sm font-bold uppercase tracking-widest text-white">Förderer</h4>
                    <ul class="mt-4 flex flex-col space-y-4">
                        <li>
                            <a
                                href="https://www.potsdam.de"
                                target="_blank"
                                class="text-gray-300 transition hover:text-green-300"
                                >Stadt Potsdam</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.potsdam.de"
                                target="_blank"
                                class="text-gray-300 transition hover:text-green-300"
                                >Land Brandenburg</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <FooterCopyright />
    </footer>
</template>
