<template>
    <NuxtLink :to="link" class="transition hover:text-emerald-500 py-1 text-lg font-medium" @click="onClick()">
        {{ title }}
    </NuxtLink>
</template>

<script setup lang="ts">
import { useStore } from "./state";
const store = useStore();

function onClick() {
    store.closeSubMenu();
    navItemState.value = false;
}

const navItemState = ref(null);

onMounted(() => {
    navItemState.value = inject<any>("itemSubMenuOpen");
})

defineProps<{ title: string, link: string }>();
</script>