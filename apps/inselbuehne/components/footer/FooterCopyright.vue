<template>
  <div
    class="container flex flex-col items-center justify-between px-4 py-16 mx-auto text-center lg:text-left lg:flex-row"
  >
    <p class="text-gray-500">
      &copy; 2022 Potsdamer Bürgerstiftung &amp; Mitwirkende
    </p>
    <ul class="flex flex-row mt-4 lg:mt-0 space-x-4">
      <li>
        <NuxtLink
          to="/impressum"
          class="text-gray-500 hover:text-green-300 transition"
          >Impressum</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/datenschutz"
          class="text-gray-500 hover:text-green-300 transition"
          >Datenschutz</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
