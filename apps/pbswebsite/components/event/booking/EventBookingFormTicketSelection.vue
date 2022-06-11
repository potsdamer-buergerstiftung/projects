<template>
  <div class="p-8">
    <ul class="flex flex-col divide-y-2">
      <li
        class="flex flex-row flex-wrap justify-between items-center py-4"
        v-for="(ticket, index) in store.event.tickets"
      >
        <div>
          <h4 class="font-bold text-lg">{{ ticket.name }}</h4>
          <p v-if="ticket.pricing === 'paid'">{{ ticket.price }} €</p>
          <p v-if="ticket.pricing === 'donation'">Gegen Spende</p>
          <p v-if="ticket.pricing === 'free'">Kostenlos</p>
          <p class="pt-4 text-sm">Der Verkauf endet am 17. Juli 2022</p>
        </div>
        <div>
          <FormKit
            @change="store.selectTicket(ticket.id, parseInt(($event.target as HTMLInputElement).value))"
            :value="store.getSelectedQuantity(ticket.id)"
            type="select"
            name="small_country"
            :options="[
              0,
              ...range(ticket.minimum_quantity, ticket.maximum_quantity),
            ]"
            input-class="block rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2
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
