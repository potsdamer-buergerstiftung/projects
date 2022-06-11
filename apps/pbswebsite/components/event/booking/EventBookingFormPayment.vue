<template>
  <h1>Zahlung</h1>
  <div></div>
</template>

<script setup lang="ts">
import { StripeElementCard } from "@vue-stripe/vue-stripe";
const pk = useRuntimeConfig().public.stripePublicKey;
</script>
