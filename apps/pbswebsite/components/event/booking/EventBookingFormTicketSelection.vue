<template>
  <div class="p-8">
    <h1 class="font-header text-2xl font-bold mt-4">Tickets</h1>
    <p class="mt-2">
      Bitte wählen Sie ein Ticket und dessen gewünschte Anzahl aus der Auswahl.
    </p>
    <ul class="grid grid-cols-2 gap-4 mt-8 relative">
      <li
        class="bg-slate-100 p-8 rounded-lg flex flex-col justify-between"
        v-for="(ticket, index) in store.event.tickets"
      >
        <div>
          <div class="inline-flex items-center mb-1">
            <h4 class="font-bold text-lg">{{ ticket.name }}</h4>
          </div>
          <p v-if="ticket.pricing === 'paid'" class="text-slate-700">
            Kostenpflichtig
          </p>
          <p v-if="ticket.pricing === 'paid'" class="font-bold text-4xl mt-8">
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
      class="text-white text-md font-header mt-12 inline-flex items-center rounded-md bg-emerald-500 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 disabled:opacity-20"
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
