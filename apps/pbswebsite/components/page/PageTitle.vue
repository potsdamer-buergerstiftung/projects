<template>
  <section class="bg-white">
    <div class="container mx-auto px-4 pt-44 pb-8">
      <h1 class="font-header font-bold text-7xl">Kontakt</h1>
      <p class="mt-4">
        Erzähl uns etwas über dich und wir melden uns anschließend bei dir.
      </p>
      <button
        class="mt-4 bg-emerald-500 text-white py-1.5 px-4 font-header font-bold text-md rounded-md transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
      >
        info@potsdamer-buergerstiftung.org
      </button>
      <div class="mt-24" v-if="$slots.breadcrumb">
        <slot name="breadcrumb" />
      </div>
    </div>
  </section>
</template>
