<template>
  <div class="container mx-auto mt-8 px-4">
    <EventBookingForm :event-id="route.params.eventId" />
  </div>
</template>

<script setup>
const route = useRoute();

definePageMeta({
  layout: "checkout",
});
</script>
