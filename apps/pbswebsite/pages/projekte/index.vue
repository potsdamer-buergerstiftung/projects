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
    <section>
      <div class="container mx-auto px-4 flex flex-col gap-10">
        <div v-for="(project, index) in projects" class="grid grid-cols-6 gap-10 relative">
          <div class="col-span-6 md:col-span-3 lg:col-span-4" :class="[index % 2 == 0 ? 'lg:order-1' : 'order-2']">
            <DirectusImage :asset-id="project.image" :width="800" :height="800" class="w-full rounded-md" />
          </div>
          <div class="col-span-6 md:col-span-3 lg:col-span-2 h-full bg-slate-100 rounded-md" :class="[index % 2 == 0 ? 'lg:order-2' : 'order-1']">
            <StickySidebar>
              <div class="p-8">
                <h1 class="font-header font-bold text-3xl mb-2">{{  project.title  }}</h1>
                <NuxtLink class="font-bold" :href="`/projekte/${project.id}`">Mehr zum Projekt</NuxtLink>
                <div v-html="project.summary" class="mt-8" />
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
