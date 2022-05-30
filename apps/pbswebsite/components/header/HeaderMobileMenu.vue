<template>
    <div class="absolute top-0 left-0 right-0 bottom-0 z-50 min-h-screen bg-slate-900">
        <div class="flex flex-col items-start gap-16 px-4 pt-12">
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
