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
            <p class="mt-2">Du kannst uns gerne über PayPal, Google Pay oder Apple Pay schnell spenden oder regulär mit
                deiner Kredit- oder Debitkarte zahlen. Wir unterstützen neuerdings auch die Zahlung durch elektronische
                SEPA-Lastschrift, sodass das Mandat nicht mehr schriftlich erteilen musst.</p>
            <ul class="flex flex-row gap-6 mt-8">
                <li v-for="duration in planDurations"
                    class="relative font-bold py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-slate-900"
                    :class="duration.key as any === store.planDuration ? 'after:opacity-100' : 'after:opacity-0'">
                    <button @click="store.setPlanDuration(duration.key as any)">{{ duration.text }}</button>
                </li>
            </ul>
            <ul class="flex flex-row gap-6 mt-8">
                <li v-for="amount in defaultAmounts"
                    class="relative font-bold py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-slate-900"
                    :class="amount === store.amount && !customAmount ? 'after:opacity-100' : 'after:opacity-0'">
                    <button @click="onAmountSelection(amount)">{{ amount }}€</button>
                </li>
                <li class="relative font-bold py-2 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-slate-900"
                    :class="customAmount ? 'after:opacity-100' : 'after:opacity-0'">
                    <button @click="activateCustomAmount">Eigener Betrag</button>
                </li>
            </ul>
            <Button class="mt-16">Weiter</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore from './state';

const store = useStore();
const customAmount = ref(false);
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

function activateCustomAmount() {
    customAmount.value = true;
}

function onAmountSelection(amount: number) {
    customAmount.value = false;
    store.setAmount(amount);
}

onMounted(() => {
    store.setAmount(defaultAmounts[0]);
    store.setPlanDuration("MONTHLY");
})
</script>