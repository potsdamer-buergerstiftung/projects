<template>
    <nav class="flex flex-row items-center justify-center w-full h-full">
        <div class="flex flex-row items-center justify-end w-full gap-x-5 h-full">
            <HeaderNavItem title="Veranstaltungen" link="/veranstaltungen" />
            <HeaderNavItem title="Blog" link="/blog" />
            <HeaderNavItem title="Über uns" link="/ueber-uns" />
        </div>
        <HeaderNavBrand />
        <div class="flex flex-row items-center justify-start w-full gap-x-5 h-full">
            <HeaderNavItem title="Presse" link="/presse" />
            <HeaderNavItem title="Unterstützen" link="/Unterstützen" />
            <HeaderNavItem title="Kontakt" link="/kontakt" />
        </div>
    </nav>
</template>