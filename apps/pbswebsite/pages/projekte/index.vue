<template>
    <div>
        <Title>Projekte</Title>
        <div class="relative h-screen w-full">
            <ProjectSlider />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    headerColor: "white",
    hideSideActions: true,
});
</script>
