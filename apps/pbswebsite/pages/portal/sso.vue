<template>
    <h1>Weiterleitung erfolgt...</h1>
</template>

<script setup lang="ts">
const { refreshToken } = useDirectusAuth();
const router = useRouter();
refreshToken().then(() => {
    router.replace("/portal");
});
</script>