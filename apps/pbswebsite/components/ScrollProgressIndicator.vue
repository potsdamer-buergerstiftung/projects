<template>
    <button class="flex flex-row items-center space-x-4" @click="scrollToTop">
        <div class="w-14 h-[2px] bg-gray-200 relative rotate-180">
            <div class="absolute h-full bg-gray-900" v-bind:style="{
                'width': progress + '%'
            }" />
        </div>
        <p class="font-bold">Nach oben scrollen</p>
    </button>
</template>

<script setup>
const progress = ref(0)

onMounted(() => {
    window.addEventListener("scroll", updateScrollProgress);
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateScrollProgress() {
    const { documentElement, body } = document;
    let windowScroll = body.scrollTop || documentElement.scrollTop;
    let height = documentElement.scrollHeight - documentElement.clientHeight;
    progress.value = (windowScroll / height) * 100
}
</script>