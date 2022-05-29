<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-2">
      <li>
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="font-bold text-sm hover:text-emerald-500 transition"
          >
            Startseite
          </NuxtLink>
        </div>
      </li>
      <li v-for="(item, index) in items" :key="index">
        <div class="flex items-center">
          <svg
            class="h-2 w-auto"
            viewBox="0 0 9 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.5697L1.36504 16L9 8L1.36504 0L0 1.4303L6.26992 8L0 14.5697V14.5697Z"
            ></path>
          </svg>
          <div
            v-if="index + 1 === items.length"
            class="ml-2 text-sm cursor-default"
          >
            {{ item.text }}
          </div>
          <NuxtLink
            v-else
            :to="item.to"
            class="ml-2 font-bold text-sm hover:text-emerald-500 transition"
          >
            {{ item.text }}
          </NuxtLink>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface Item {
  text: string;
  to?: string;
  disabled?: boolean;
}

defineProps<{ items: Item[] }>();
</script>
