<template>
  <div class="p-8">
    <h1 class="font-bold font-header text-2xl">Bestellübersicht</h1>
    <ul class="divide-y-2">
      <li
        v-for="item in store.getSelectedTickets"
        class="flex flex-row flex-wrap py-4 justify-between"
      >
        <div>{{ item.quantity }}x {{ item.ticket.name }}</div>
        <div v-if="item.ticket.pricing === 'paid'">
          {{ item.ticket.price * item.quantity }} €
        </div>
      </li>
    </ul>
    <div class="flex flex-row justify-between" v-if="store.hasSelectedTickets">
      <p class="font-bold">Gesamt</p>
      <p>{{ store.getTotalPrice }} €</p>
    </div>
    <p v-else class="mt-8">
      Bitte wählen Sie ein Ticket, um mit dem Bestellvorgang fortzufahren.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "./state";

const store = useStore();
</script>
