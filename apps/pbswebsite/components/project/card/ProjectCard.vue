<script lang="ts" setup>
const isHovered = ref(false);

function setHovered(value: boolean) {
    isHovered.value = value;
}
</script>

<template>
    <div class="group w-full h-96 relative overflow-hidden rounded-lg cursor-pointer" @mouseenter="setHovered(true)"
        @mouseleave="setHovered(false)">
        <img src="~/assets/img/img.jpg" class="object-cover transition duration-500 group-hover:scale-110" />
        <div
            class="absolute top-0 right-0 left-0 bottom-0 pointer-events-none bg-gradient-to-t from-black opacity-60" />
        <div class="absolute flex flex-column items-end top-0 right-0 left-0 bottom-0 p-8">
            <div class="relative w-full">
                <h1 class="text-white text-2xl font-bold">Projekt</h1>
                <div class="relative overflow-hidden w-full mt-2">
                    <p
                        class="text-white block transition duration-500 translate-y-0 opacity-100 group-hover:-translate-y-3 group-hover:opacity-0">
                        Projektbeschreibung</p>
                    <div
                        class="text-white absolute transition duration-500 translate-y-0 opacity-0 group-hover:-translate-y-full group-hover:opacity-100">
                        <NuxtLink to="/" class="relative font-bold">
                            Projekt anzeigen
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
