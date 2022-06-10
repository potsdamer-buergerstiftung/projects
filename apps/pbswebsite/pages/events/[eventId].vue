<template>
  <div class="container mx-auto px-4 mt-8">
    <EventBookingForm :event-id="route.params.eventId" />
  </div>
</template>

<script setup>
const route = useRoute();

definePageMeta({
  layout: "checkout",
});
</script>
