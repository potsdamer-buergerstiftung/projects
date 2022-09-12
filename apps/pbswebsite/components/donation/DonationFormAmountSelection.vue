<template>
    <div class="grid grid-cols-3 gap-10">
        <div class="col-span-1">
            <div class="bg-white rounded-lg p-8">
                <img src="~/assets/img/choose.svg" />
            </div>
        </div>
        <div class="col-span-2">
            <h1 class="font-header font-bold text-3xl">
                Betrag wählen
            </h1>
            <p class="mt-2">Wir engagieren uns in vielen Bereichen. <b>Informiere Dich über unsere
                    Veranstaltungen</b> und
                Einsatzgebiete, damit Du etwas Passendes für Dich findest.</p>
            <ul class="flex flex-row gap-6 mt-8">
                <li v-for="duration in planDurations"
                    class="relative font-bold py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500"
                    :class="duration.key as any === store.planDuration ? 'after:opacity-100' : 'after:opacity-0'">
                    <button @click="store.setPlanDuration(duration.key as any)">{{ duration.text }}</button>
                </li>
            </ul>
            <ul class="flex flex-row gap-6 mt-8">
                <li v-for="amount in defaultAmounts"
                    class="relative font-bold py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500"
                    :class="amount === store.amount && customAmount === -1 ? 'after:opacity-100' : 'after:opacity-0'">
                    <button @click="onAmountSelection(amount)">{{ amount }}€</button>
                </li>
                <li class="relative font-bold py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500"
                    :class="customAmount > -1 ? 'after:opacity-100' : 'after:opacity-0'">
                    <button @click="activateCustomAmount()">Eigener Betrag</button>
                </li>
            </ul>
            <div v-if="customAmount > -1" class="mt-4">
                <label class="text-sm font-medium">Eigener Betrag</label>
                <input type="number" v-model="customAmount"
                    class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Dein eigener betrag" />
            </div>
            <Button class="mt-16" @click="store.setProgress('PAYMENT_SELECTION')">Weiter</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore from './state';

const store = useStore();
const customAmount = ref(-1);
const defaultAmounts = [10, 50, 100];
const planDurations = [
    {
        key: "MONTHLY",
        text: "Monatlich"
    },
    {
        key: "ONE_TIME",
        text: "Einmalig"
    }
]

watch(customAmount, (newVal) => {
    if (customAmount.value === -1) return;
    store.setAmount(newVal);
})

function activateCustomAmount() {
    customAmount.value = store.amount;
}

function onAmountSelection(amount: number) {
    customAmount.value = -1;
    store.setAmount(amount);
}
</script>