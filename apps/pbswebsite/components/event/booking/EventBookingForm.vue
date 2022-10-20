<template>
  <div>
    <Title>{{store.event.name}}</Title>
    <div v-if="store.event" class="grid grid-cols-3">
      <div class="col-span-2 bg-white">
        <EventBookingFormEventInfo />
        <div v-if="store.hasTickets">
          <EventBookingFormTicketSelection v-if="store.checkFormProgress('TICKET_SELECTION')" />
          <EventBookingFormContactInfo v-if="store.checkFormProgress('CONTACT_INFO')" />
          <EventBookingFormPayment v-if="store.checkFormProgress('PAYMENT')" />
          <EventBookingFormDonate v-if="store.checkFormProgress('DONATE')" />
          <EventBookingFormFinished v-if="store.checkFormProgress('FINISHED')" />
        </div>
        <p v-else class="px-8 py-12">
          Für diese Veranstaltung ist keine Registrierung (Tickets) notwendig.
        </p>
        <p class="px-8 py-12 text-sm">
          Unterstützt durch
          <a href="https://eventbikezero.de/" target="_blank" class="font-bold text-emerald-500">eventbike_zero</a>
        </p>
      </div>
      <div class="col-span-1">
        <img :src="`https://cdn.potsdamer-buergerstiftung.org/${store.event.image}?width=700&quality=30`" alt="Event"
          class="h-64 w-full object-cover" />
        <!-- <div class="p-4">
          <NuxtLink to="/stiftung/aktuelles"
            class="text-md font-header mb-4 w-full inline-flex items-center justify-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Registrieren
          </NuxtLink>
        </div> -->
        <EventBookingFormOrderOverview v-if="store.hasTickets" />
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "./state";
const store = useStore();

const { eventId } = defineProps<{
  eventId: string;
}>();

const { getItemById } = useDirectusItems();

const event = await getItemById<any>({
  collection: "events",
  id: eventId,
  params: { fields: ["*", "tickets.*", "location.name"] },
});

store.event = event;

onMounted(() => {
  store.selectDefaultTicket();
});
</script>
