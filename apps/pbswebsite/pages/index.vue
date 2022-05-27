<template>
    <div>
        <div class="container px-4 pt-20 mx-auto">
            <h1 class="font-bold font-header text-7xl text-navy-900">Brücken bauen,<br /> Menschen verbinden</h1>
            <p class="mt-8 text-navy-900">Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung
                ehrenamtliches
                Engagement.</p>
            <p class="pt-1 font-bold text-green-500">Lass uns gemeinsam unsere schöne Stadt noch l(i)ebenswerter machen.
            </p>
        </div>
        <div class="container px-4 pt-20 mx-auto pb-16">
            <div class="grid grid-cols-6 gap-8">
                <div v-for="(project, i) in projects" class="col-span-6 lg:col-span-3"
                    :class="{ 'xl:col-span-2': indexToColSpan(i) * 2 == 2, 'xl:col-span-4': indexToColSpan(i) * 2 == 4 }">
                    <ProjectCard :title="project.title" :sub-title="project.sub_title" :project-id="project.id"
                        :image-id="project.image" :image-size="indexToColSpan(i) * 2 == 2 ? 'small' : 'large'" />
                </div>
            </div>
            <button
                class="mt-8 bg-green-100 text-navy-900 py-1.5 px-4 font-header font-bold text-md rounded-md transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                Alle Projekte
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
    title: "Brücken bauen, Menschen verbinden"
})

const { getItems } = useDirectusItems();

const projects = await getItems<any>({
    collection: "projects", params: {
        sort: "sort",
        limit: 7
    }
})

const indexToColSpan = useGridSpanLayout()
</script>