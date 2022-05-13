<script setup>
definePageMeta({
    layout: "default",
    title: "Brücken bauen, Menschen verbinden"
})
</script>

<template>
    <div class="container mx-auto px-4 pt-20">
        <h1 class="font-header font-bold text-7xl text-navy-900">Brücken bauen,<br /> Menschen verbinden</h1>
        <p class="mt-8 text-navy-900">Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung
            ehrenamtliches
            Engagement.</p>
        <p class="text-green-500 pt-1 font-bold">Lass uns gemeinsam unsere schöne Stadt noch l(i)ebenswerter machen.
        </p>
    </div>
    <div class="container mx-auto px-4 pt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
</template>