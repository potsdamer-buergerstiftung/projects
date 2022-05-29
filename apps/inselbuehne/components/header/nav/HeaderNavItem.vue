<template>
  <NuxtLink
    :to="link"
    class="relative px-2 py-3 text-xl transition hover:text-green-500 lg:p-2 lg:text-lg"
    activeClass="text-green-500"
    @click="setMobileMenu()"
  >
    {{ title }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { useHeaderState } from "../state";

interface Props {
  title: string;
  link: string;
}

const { title, link } = defineProps<Props>();

const { setMobileMenu } = useHeaderState();
</script>
