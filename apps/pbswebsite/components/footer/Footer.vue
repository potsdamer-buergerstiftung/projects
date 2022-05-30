<template>
    <footer class="bg-slate-100">
        <FooterBanner />
        <section>
            <div
                class="container mx-auto grid grid-cols-1 gap-16 px-4 pt-24 pb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-4"
            >
                <div class="order-1">
                    <FooterBrand />
                    <div class="mt-6">
                        <SocialMediaLinks size="compact" />
                    </div>
                </div>
                <div class="order-2 md:order-3 lg:order-2">
                    <h4 class="font-header text-xl font-bold md:text-lg">Komm uns besuchen</h4>
                    <p class="mt-6 font-bold">MAZ-Pyramide</p>
                    <p class="">Friedrich-Engels-Straße 24</p>
                    <p class="">14473, Potsdam</p>
                    <p class="mt-4 font-bold">Inselbühne</p>
                    <p class="">Burgstraße</p>
                    <p class="">14467 Potsdam</p>
                </div>
                <div class="order-3 md:order-4 lg:order-3">
                    <h4 class="font-header text-xl font-bold md:text-lg">Allgemeine Fragen</h4>
                    <p class="mt-6">E-Mail</p>
                    <p class="font-bold">info@potsdamer-buergerstiftung.org</p>
                    <h4 class="font-header mt-6 text-xl font-bold md:text-lg">Ehrenamt</h4>
                    <p class="mt-6">E-Mail</p>
                    <p class="font-bold">ehrenamt@potsdamer-buergerstiftung.org</p>
                </div>
                <div class="order-4 md:order-2 lg:order-4">
                    <h4 class="font-header text-xl font-bold md:text-lg">
                        Für Newsletter anmelden
                    </h4>
                    <form>
                        <input
                            type="email"
                            class="mt-6 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Deine E-Mail"
                        />
                        <div class="mt-6 flex items-start">
                            <div class="flex h-5 items-center">
                                <input
                                    id="accept-newsletter"
                                    type="checkbox"
                                    class="focus:ring-3 h-4 w-4 rounded-sm border border-slate-300 bg-slate-100 accent-emerald-500 focus:ring-emerald-300"
                                    required
                                />
                            </div>
                            <label for="accept-newsletter" class="ml-2 max-w-xl text-sm font-medium"
                                >Ich erkläre mich einverstanden, dass die eingegebenen Daten für den
                                Versand des Newsletters weiterverarbeitet werden.</label
                            >
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <FooterCopyright />
    </footer>
</template>
