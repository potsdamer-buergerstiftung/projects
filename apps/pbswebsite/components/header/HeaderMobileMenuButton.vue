<template>
    <button @click="setMobileMenu()" class="rounded-full p-4 hover:ring-1 ring-emerald-500 transition"
        :class="[buttonBackground]">
        <div class="flex h-6 w-6 flex-col items-start justify-center space-y-1.5" v-if="variant === 'open'">
            <div class="h-0.5 w-6" :class="[buttonContentsColor]" />
            <div class="h-0.5 w-5" :class="[buttonContentsColor]" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2" v-else>
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</template>

<script setup lang="ts">
const route = useRoute();

const { setMobileMenu } = useHeaderState();

const { variant = "open" } = defineProps<{ variant?: "open" | "close" }>();

const buttonBackground = computed(() =>
    variant === "open" ? route.meta.headerColor === "white" ? "bg-slate-900" : "bg-slate-100" : "bg-slate-800"
);
const buttonContentsColor = computed(() =>
    route.meta.headerColor === "white" ? "bg-white" : "bg-slate-800"
);
</script>
