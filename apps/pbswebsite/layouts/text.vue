<template>
    <div class="antialiased">
        <section class="pt-16 max-w-4xl mx-auto px-4">
            <NuxtLink class="inline-flex items-center text-md font-header rounded-md font-bold font-header" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>Zurück zur Website
            </NuxtLink>
        </section>
        <slot />
    </div>
</template>
