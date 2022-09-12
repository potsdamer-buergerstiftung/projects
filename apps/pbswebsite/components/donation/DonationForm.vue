<template>
    <div class="bg-emerald-50 rounded-lg p-8 lg:p-16">
        <h4 class="text-sm font-semibold uppercase text-gray-600 text-center mb-3">
            Mitstiften & Unterstützen
        </h4>
        <h1 class="text-center font-header text-4xl font-bold" v-if="project">
            Für {{ project.title }} spenden
        </h1>
        <h1 class="text-center font-header text-4xl font-bold" v-else>
            Spenden
        </h1>
        <p class="text-center max-w-xl mx-auto mt-4">
            Wir legen bei unseren Projekten großen Wert darauf, dass sie nachhaltig wirken. Das ist jedoch nur möglich,
            wenn wir langfristig planen und fördern können. Mit Deiner regelmäßigen und verlässlichen Unterstützung
            können wir diese wichtigen Voraussetzungen schaffen.
        </p>
        <div class="flex flex-row mt-16 gap-10">
            <ul class="flex flex-col items-end shrink-0">
                <button class="group font-bold font-header py-2 relative" v-for="item in navItems"
                    @click="store.setProgress(item.key as any)">{{ item.text }}
                    <span class="absolute top-0 -right-5 bottom-0 w-0.5 bg-emerald-500 transition"
                        :class="[item.key === store.progress ? 'opacity-100' : 'opacity-0 group-hover:opacity-100']" />
                </button>
            </ul>
            <div class="w-full">
                <DonationFormAmountSelection v-if="store.progress === 'AMOUNT_SELECTION'" />
                <DonationFormPaymentSelection v-if="store.progress === 'PAYMENT_SELECTION'" />
                <DonationFormContactDetails v-if="store.progress === 'CONTACT_DETAILS'" />
                <DonationFormPayment v-if="store.progress === 'PAYMENT'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore from "./state";
const store = useStore();
const { getItemById } = useDirectusItems()
const { projectId } = defineProps<{ projectId?: string, projectTitle?: string }>();

const project = projectId ? await getItemById<any>({ collection: "projects", id: projectId }) : null;
provide("project", project);

const navItems = [
    {
        key: "AMOUNT_SELECTION",
        text: "Betrag wählen"
    },
    {
        key: "PAYMENT_SELECTION",
        text: "Bezahlmethode wählen"
    },
    {
        key: "CONTACT_DETAILS",
        text: "Kontaktdaten angeben"
    },
    {
        key: "PAYMENT",
        text: "Spenden"
    },
]
</script>
