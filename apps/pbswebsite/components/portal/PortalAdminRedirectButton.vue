<template>
  <NuxtLink
    :to="redirectUrl.toString()"
    class="text-md font-header mt-12 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
  >
    Admin-Bereich
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 ml-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
    </svg>
  </NuxtLink>
</template>

<script setup lang="ts">
const directusUrl = useDirectusUrl();

const websiteUrl = useWebsiteUrl();

const redirectUrl = new URL("/admin/login?continue", directusUrl);
</script>
