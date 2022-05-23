<template>
    <nav
        class="container mx-auto flex px-4 lg:px-0 flex-row items-center justify-between lg:justify-center w-full h-full">
        <div class="hidden lg:flex flex-row items-center justify-end w-full gap-x-3 xl:gap-x-5 h-full">
            <HeaderNavItem title="Veranstaltungen" link="/veranstaltungen" />
            <HeaderNavItem title="Blog" link="/blog" />
            <HeaderNavItem title="Über uns" link="/ueber-uns" />
        </div>
        <HeaderNavBrand />
        <div class="lg:hidden flex flex-row items-center">
            <span class="font-bold">Menü</span>
            <div class="flex flex-col space-y-1.5 ml-2">
                <div class="h-[1px] w-6 bg-black" />
                <div class="h-[1px] w-6 bg-black" />
                <div class="h-[1px] w-6 bg-black" />
            </div>
        </div>
        <div class="hidden lg:flex flex-row items-center justify-start w-full gap-x-5 h-full">
            <HeaderNavItem title="Presse" link="/presse" />
            <HeaderNavItem title="Unterstützen" link="/Unterstützen" />
            <HeaderNavItem title="Kontakt" link="/kontakt" />
        </div>
    </nav>
</template>