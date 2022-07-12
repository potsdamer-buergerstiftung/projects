<template>
  <div
    class="container mx-auto flex flex-col items-center justify-between px-4 py-16 text-center lg:flex-row lg:text-left"
  >
    <p class="text-gray-500">
      &copy; 2022 Potsdamer Bürgerstiftung &amp; Mitwirkende
    </p>
    <ul class="mt-4 flex flex-row space-x-4 lg:mt-0">
      <li>
        <NuxtLink
          to="https://www.potsdamer-buergerstiftung.org/impressum"
          class="text-gray-500 transition hover:text-green-300"
          >Impressum</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="https://www.potsdamer-buergerstiftung.org/datenschutz"
          class="text-gray-500 transition hover:text-green-300"
          >Datenschutz</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
