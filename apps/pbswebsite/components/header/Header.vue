<template>
    <header
        class="absolute z-50 flex w-full flex-row items-center justify-between gap-4 px-4 py-6 lg:px-10"
    >
        <div>
            <HeaderBrand />
        </div>
        <div class="hidden lg:block">
            <HeaderNav />
        </div>
        <div class="hidden md:block">
            <HeaderActions />
        </div>
        <div class="block lg:hidden">
            <HeaderMobileMenuButton />
        </div>
    </header>
</template>
