<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 z-50 h-screen overflow-y-hidden bg-slate-900">
        <div
            class="container mx-auto flex h-screen flex-col items-start gap-10 overflow-y-scroll px-4 py-6"
        >
            <HeaderMobileMenuButton variant="close" />
            <HeaderNav class="-ml-4" />
            <HeaderActions />
            <SocialMediaLinks size="default" class="text-white" direction="vertical" />
        </div>
    </div>
</template>
