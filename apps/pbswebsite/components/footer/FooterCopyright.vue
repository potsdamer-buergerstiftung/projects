<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <div class="container flex flex-row justify-between px-4 py-6 mx-auto">
    <p>© {{ year }} Potsdamer Bürgerstiftung und Mitwirkende</p>
    <ul class="flex flex-row space-x-4">
      <li>
        <NuxtLink
          to="/impressum"
          class="text-navy-900 hover:text-green-500 transition"
          >Impressum</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/datenschutz"
          class="text-navy-900 hover:text-green-500 transition"
          >Datenschutz</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
