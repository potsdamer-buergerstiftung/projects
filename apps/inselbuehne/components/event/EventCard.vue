<template>
    <NuxtLink
        class="w-full overflow-hidden rounded-tl-xl rounded-br-xl bg-white shadow-lg transition hover:shadow-xl hover:-translate-y-2 duration-300 cursor-pointer grid grid-cols-5">
        <div class="col-span-2 w-full bg-green-500 bg-cover h-full relative">
            <div class="absolute right-6 top-1/2 bg-white shadow-md p-4 -translate-y-1/2 rounded-tl-md rounded-br-md">
                <p>Juni</p>
                <h1 class="font-serif text-4xl">4</h1>
                <p>Do.</p>
            </div>
        </div>
        <div class="col-span-3 p-10 flex flex-row items-center space-x-10">
            <div class="text-left">
                <h1 class="font-serif text-3xl leading-tight">
                    Das ist der Titel der Veranstaltung
                </h1>
                <p class="mt-4 text-md leading-relaxed">
                    Das ist die Beschreibung eines Beitrages, die nicht gerade lang sein sollte. Das ist die
                    Beschreibung
                    eines Beitrages, die nicht gerade lang sein sollte.
                </p>
            </div>
            <div class="shrink-0">
                <button
                    class="mt-4 shadow-md px-4 py-2.5 rounded-tl-lg rounded-br-lg bg-green-500 text-white text-md font-medium transition hover:bg-green-600">
                    Tickets
                </button>
            </div>
        </div>
    </NuxtLink>
</template>