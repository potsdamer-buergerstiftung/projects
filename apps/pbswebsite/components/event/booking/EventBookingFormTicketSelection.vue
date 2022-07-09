<template>
  <div class="p-8">
    <h1 class="font-header mt-4 text-2xl font-bold">Tickets</h1>
    <p class="mt-2">
      Bitte wählen Sie ein Ticket und dessen gewünschte Anzahl aus der Auswahl.
    </p>
    <ul class="relative mt-8 grid grid-cols-2 gap-4">
      <li
        class="flex flex-col justify-between rounded-lg bg-slate-100 p-8"
        v-for="(ticket, index) in store.event.tickets"
      >
        <div>
          <div class="mb-1 inline-flex items-center">
            <h4 class="text-lg font-bold">{{ ticket.name }}</h4>
          </div>
          <p v-if="ticket.pricing === 'paid'" class="text-slate-700">
            Kostenpflichtig
          </p>
          <p v-if="ticket.pricing === 'paid'" class="mt-8 text-4xl font-bold">
            {{ ticket.price }} €
          </p>
          <p v-if="ticket.pricing === 'donation'" class="text-slate-700">
            Erhalten Sie dieses Ticket gegen eine freiwillige Spende
          </p>
          <p v-if="ticket.pricing === 'free'" class="text-slate-700">
            Kostenlos
          </p>
        </div>
        <div>
          <FormKit
            @change="
              store.selectTicket(
                ticket.id,
                parseInt(($event.target as HTMLInputElement).value)
              )
            "
            :value="store.getSelectedQuantity(ticket.id)"
            type="select"
            name="small_country"
            :options="[
              0,
              ...range(ticket.minimum_quantity, ticket.maximum_quantity),
            ]"
            input-class="w-20 mt-8 block rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2
          focus:ring-emerald-500"
          >
          </FormKit>
        </div>
      </li>
    </ul>
    <button
      @click="store.goToContactInfo()"
      :disabled="!store.hasSelectedTickets"
      class="text-md font-header mt-12 inline-flex items-center rounded-md bg-emerald-500 py-1.5 px-4 font-bold text-white transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 disabled:opacity-20"
    >
      Zur Kasse
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "./state";

const store = useStore();

const range = (start: number, end: number) =>
  [...Array(end - start + 1).keys()].map((x) => x + start);
</script>
