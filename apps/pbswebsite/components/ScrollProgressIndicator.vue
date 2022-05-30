<template>
    <button
        class="group flex flex-row items-center space-x-4 opacity-100 transition duration-500"
        @click="scrollToTop"
        :class="{ 'opacity-0': progress < 20 }"
    >
        <div class="relative h-[2px] w-14 rotate-180 bg-gray-200">
            <div
                class="absolute h-full bg-slate-900 transition group-hover:bg-emerald-500"
                v-bind:style="{
                    width: progress + '%',
                }"
            />
        </div>
        <p class="text-sm font-bold transition group-hover:text-green-500">Zurück nach oben</p>
    </button>
</template>

<script setup>
const progress = useScrollProgress();

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
</script>
