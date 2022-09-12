<template>
    <div class="fixed top-0 right-0 bottom-0 bg-slate-50 z-50 shadow-lg w-2/3 transition duration-500 overflow-y-auto"
        :class="[!store.isQuickDonateDrawerOpen ? 'translate-x-full' : 'translate-x-0']">
        <div class="w-full p-8">
            <button @click="store.closeQuickDonateDrawer()"
                class="block rounded-full p-4 ring-emerald-500 transition hover:ring-1 bg-slate-100 float-right">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div>
            <DonationForm />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "./state";

const store = useStore();
</script>