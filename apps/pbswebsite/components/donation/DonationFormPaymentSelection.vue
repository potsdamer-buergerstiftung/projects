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
                        'ring-2 ring-slate-900': provider.key as any === store.paymentProvider
                    }" @click="store.setPaymentProvider(provider.key as any)">
                    <Component :is="provider.icon" class="h-5 w-auto mx-auto text-slate-900" />
                </button>
            </ul>
            <div class="flex flex-col gap-2 mt-8">
                <button class="px-4 bg-emerald-100 rounded-lg relative font-bold py-3 w-full text-center">
                    Andere Bezahlmethoden
                </button>
                <ul class="flex flex-row gap-4 flex-wrap items-center">
                    <li class="inline-flex text-slate-500 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Karte
                    </li>
                    <li class="inline-flex text-slate-500 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                        (Direkt-)Überweisung
                    </li>
                    <li class="inline-flex text-slate-500 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        SEPA-Lastschrift
                    </li>
                </ul>
            </div>
            <Button class="mt-16">Weiter</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore from './state';
const store = useStore();

const PayPalIcon = resolveComponent("IconsPayPal");
const GooglePayIcon = resolveComponent("IconsGooglePay");
const ApplePayIcon = resolveComponent("IconsApplePay");

const useDirectPaymentOption = ref(true);

const paymentOptions = [
    {
        key: "PAYPAL",
        icon: PayPalIcon,
    },
    {
        key: "GOOGLE_PAY",
        icon: GooglePayIcon,
    },
    {
        key: "APPLE_PAY",
        icon: ApplePayIcon,
    }
]
</script>