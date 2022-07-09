<template>
  <div class="p-8">
    <button
      class="text-sm font-bold text-emerald-500"
      @click="store.goToTicketSelection()"
    >
      Zurück zur Ticketauswahl
    </button>
    <h1 class="font-header mt-4 text-2xl font-bold">Kontaktinformationen</h1>
    <p class="mt-2">
      Die angegebenen Informationen werden zur Rechnungsstellung und zur
      bereitstellung der Tickets benötigt.
    </p>
    <div>
      <div class="mt-8 grid grid-cols-2 gap-4">
        <div>
          <FormKit
            v-model="store.contactInfo.firstName"
            type="text"
            label="Vorname"
            label-class="text-sm font-medium"
            message-class="text-sm text-red-500"
            validation="required"
            placeholder="Dein Vorname"
            input-class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2
          focus:ring-emerald-500"
          />
        </div>
        <div>
          <FormKit
            v-model="store.contactInfo.lastName"
            type="text"
            label="Nachname"
            label-class="text-sm font-medium"
            message-class="text-sm text-red-500"
            validation="required"
            placeholder="Dein Nachname"
            input-class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2
          focus:ring-emerald-500"
          />
        </div>
        <div>
          <FormKit
            v-model="store.contactInfo.email"
            type="email"
            label="E-Mail-Adresse"
            label-class="text-sm font-medium"
            message-class="text-sm text-red-500"
            validation="required"
            placeholder="Deine E-Mail"
            input-class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2
          focus:ring-emerald-500"
          />
        </div>
        <div>
          <FormKit
            type="email"
            label="E-Mail bestätigen"
            label-class="text-sm font-medium"
            message-class="text-sm text-red-500"
            validation="required"
            placeholder="Deine E-Mail"
            input-class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2
          focus:ring-emerald-500"
          />
        </div>
      </div>
    </div>
    <p class="mt-4 text-sm text-emerald-500">
      Unterstützt durch <span class="font-bold">Eventbike zero</span>
    </p>
    <button
      @click="store.goToCheckout()"
      class="text-md font-header mt-12 inline-flex items-center rounded-md bg-emerald-500 py-1.5 px-4 font-bold text-white transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
    >
      Weiter zur Zahlung
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "./state";
const store = useStore();
</script>
