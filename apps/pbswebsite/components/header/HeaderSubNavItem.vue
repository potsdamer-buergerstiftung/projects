<template>
    <NuxtLink :to="link"
        class="text-xl text-slate-400 lg:text-slate-900 transition hover:text-emerald-500 py-2 lg:py-1 lg:text-lg font-medium"
        @click="onClick()">
        {{ title }}
    </NuxtLink>
</template>

<script setup lang="ts">
import { useStore } from "./state";
const store = useStore();

function onClick() {
    store.closeSubMenu();
    store.closeMobileMenu();
    navItemState.value = false;
}

const navItemState = ref(null);

onMounted(() => {
    navItemState.value = inject<any>("itemSubMenuOpen");
})

defineProps<{ title: string, link: string }>();
</script>