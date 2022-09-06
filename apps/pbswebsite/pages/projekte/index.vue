<template>
  <div>
    <Title>Projekte</Title>
    <PageTitle title="Unsere Projekte">
      <template #description>
        <p class="max-w-3xl">
          Mit unserer Projektarbeit setzen wir bei akuten Bedarfen an und schauen gleichzeitig auf langfristige
          Herausforderungen für unsere Stadtgesellschaft. Wir fördern überall in Potsdam, wo Initiativen Unterstützung
          für ihre Arbeit brauchen. Wo wir Lücken sehen, werden wir auch mit eigenen Projekten aktiv.
        </p>
      </template>
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Projekte' }]" />
      </template>
    </PageTitle>
    <section class="pb-16">
      <div class="container mx-auto px-4 flex flex-col gap-10">
        <div v-for="(project, index) in projects"
          class="grid grid-cols-6 md:gap-10 relative overflow-hidden rounded-md">
          <div class="col-span-6 md:col-span-3 lg:col-span-4 relative group"
            :class="[index % 2 == 0 ? 'md:order-1' : 'md:order-2']">
            <NuxtLink :href="`/projekte/${project.id}`">
              <div class="overflow-hidden md:aspect-square w-full md:rounded-md">
                <DirectusImage :asset-id="project.image" :width="800" :height="800"
                  class="w-full group-hover:scale-105 transition overflow-hidden duration-500" />
              </div>
            </NuxtLink>
            <div class="absolute bottom-0 top-0 p-8 pointer-events-none">
              <div class="rounded-full bg-slate-900 p-4 transition shadow-md bg-opacity-30 group-hover:bg-opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 text-white group-hover:text-emerald-500 transition">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3 lg:col-span-2 h-full md:bg-slate-100 md:rounded-md"
            :class="[index % 2 == 0 ? 'md:order-2' : 'md:order-1']">
            <StickySidebar>
              <div class="py-6 md:p-6 lg:p-8">
                <h1 class="font-header font-bold text-3xl mb-2">{{  project.title  }}</h1>
                <ul class="flex flex-row" v-if="project.categories">
                  <li class="text-md font-medium" v-for="({
                    project_categories_id: category,
                  }, index) in project.categories">
                    {{  category.name  }}<span v-if="index < project.categories.length - 1">,&nbsp;</span>
                  </li>
                </ul>
                <div v-html="project.summary" class="my-8 prose" />
                <NuxtLink class="flex flex-row items-center group" :href="`/projekte/${project.id}`">
                  <span class="font-bold group-hover:text-emerald-500 transition">Mehr zum Projekt</span>
                  <div class="ml-2 h-0.5 w-12 bg-slate-800 group-hover:bg-emerald-500 transition" />
                </NuxtLink>
              </div>
            </StickySidebar>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
    sort: "sort",
  },
});
</script>
