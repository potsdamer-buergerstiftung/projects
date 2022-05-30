<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-slate-900 overflow-y-hidden">
        <div class="h-screen flex flex-col items-start gap-10 px-4 py-6 overflow-y-scroll">
            <HeaderMobileMenuButton variant="close" />
            <HeaderNav class="-ml-4" />
            <HeaderActions />
            <SocialMediaLinks size="default" class="text-white" />
        </div>
    </div>
</template>

<script setup lang="ts">
const headerState = useHeaderState();
</script>
