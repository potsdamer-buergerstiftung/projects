<template>
    <button class="flex flex-row items-center opacity-100 space-x-4 transition duration-500" @click="scrollToTop"
        :class="{ 'opacity-0': progress < 20 }">
        <div class="w-14 h-[2px] bg-gray-200 relative rotate-180">
            <div class="absolute h-full bg-gray-900" v-bind:style="{
                'width': progress + '%'
            }" />
        </div>
        <p class="text-sm font-bold">Nach oben scrollen</p>
    </button>
</template>

<script setup>
const progress = useScrollProgress()

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>