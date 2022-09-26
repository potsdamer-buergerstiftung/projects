<template>
    <div class="grid grid-cols-3 gap-10">
        <div class="col-span-1">
            <div class="bg-white rounded-lg p-8">
                <img src="~/assets/img/payment.svg" />
            </div>
        </div>
        <div class="col-span-2">
            <h1 class="font-header font-bold text-3xl">
                Bezahlmethode wählen
            </h1>
            <p class="mt-2">Wir unterstützen neuerdings auch die Zahlung durch elektronische
                SEPA-Lastschrift, sodass Du das Mandat nicht mehr schriftlich erteilen musst.</p>
            <ul class="flex flex-row gap-4 mt-8 flex-wrap">
                <button v-for="provider in paymentOptions"
                    class="flex-grow px-4 bg-emerald-100 rounded-lg relative font-bold py-3" :class="{
                        'ring-2 ring-slate-900': provider.id as any === store.paymentProvider
                    }" @click="store.setPaymentProvider(provider.id as any)">

                    <Component :is="getIcon(provider.id)" class="h-5 w-auto mx-auto text-slate-900"
                        v-if="getIcon(provider.id)" />
                    <span class="text-slate-900" v-else>{{ provider.description }}</span>
                </button>
            </ul>
            <Button class="mt-16" @click="redirectToPayment()">Weiter</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore from './state';
const store = useStore();

const PayPalIcon = resolveComponent("IconsPayPal");

const { data: paymentOptions } = await useFetch<any[]>("/api/methods") as any;

const redirectToPayment = () => {

    const params = new URLSearchParams();
    params.append("amount", store.amount.toString());
    params.append("projectId", store.projectId ?? "");
    params.append("method", store.paymentProvider);
    window.location.replace("/api/donate?" + params.toString());
}

const getIcon = (id: string) => {
    switch (id) {
        case "paypal":
            return PayPalIcon;
        default:
            return null;
    }
} 
</script>