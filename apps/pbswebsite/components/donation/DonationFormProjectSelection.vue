<template>
    <div class="grid grid-cols-3 gap-10">
        <div class="col-span-3">
            <h1 class="font-header font-bold text-3xl">
                Verwendungszweck wählen
            </h1>
            <p class="mt-2">Du kannst mit Deiner Spende ein <b>bestimmtes Projekt</b> oder die <b>allgemeine Arbeit</b>
                der Stiftung
                <b>unterstützen</b>.
            </p>
            <button class="flex-grow px-4 my-8 bg-emerald-100 rounded-lg relative font-bold py-3" :class="{
                'ring-2 ring-slate-900': store.projectId === null
            }" @click="store.setProject(null)">
                <span class="text-slate-900">Allgemeine Arbeit unterstützen</span>
            </button>
            <div class="mt-8 grid grid-cols-3 items-start justify-start gap-4">
                <!-- <button class="group relative block h-28 w-full cursor-pointer overflow-hidden rounded-lg"
                    @click="store.setProject(null)">
                    <div class="pointer-events-none absolute top-0 bottom-0 left-0 right-0 transition"
                        :class="[store.projectId === null? 'opacity-100 bg-emerald-200' : 'opacity-100 bg-slate-900']" />
                    <div class="flex-column absolute top-0 bottom-0 left-0 right-0 flex items-end p-4 justify-start ">
                        <div class="relative w-full">
                            <h1 class="font-header text-xl font-bold transition"
                                :class="[store.projectId === null ? 'text-slate-900' : 'text-white']">Allgemeine Arbeit
                            </h1>
                        </div>
                    </div>
                </button> -->
                <button class="group relative block h-28 w-full cursor-pointer overflow-hidden rounded-lg"
                    v-for="project in projects" @click="store.setProject(project.id)">
                    <DirectusImage :asset-id="project.image" :height="300" :width="300" :quality="40"
                        class="h-full w-full object-cover" :alt="`Bild von ${project.title}`" />
                    <div class="pointer-events-none absolute top-0 bottom-0 left-0 right-0 transition"
                        :class="[project.id === store.projectId ? 'opacity-100 bg-emerald-200' : 'opacity-40 bg-black']" />
                    <div class="flex-column absolute top-0 bottom-0 left-0 right-0 flex items-end p-4 justify-start ">
                        <div class="relative w-full">
                            <h1 class="font-header text-xl font-bold transition"
                                :class="[project.id === store.projectId ? 'text-slate-900' : 'text-white']">{{
                                project.title }}</h1>
                        </div>
                    </div>
                </button>
            </div>
            <Button class="mt-16" @click="store.setProgress('AMOUNT_SELECTION')">Weiter</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore from './state';
const { getItems } = useDirectusItems();

const projects = await getItems<any>({
    collection: "projects",
    params: {
        fields: [
            "title",
            "sub_title",
            "image",
            "id",
            "categories.project_categories_id.name",
            "summary",
        ],
        filter: {
            allow_donations: {
                _eq: true,
            },
        },
        sort: "sort",
    },
});

const store = useStore();

</script>