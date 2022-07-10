<template>
  <div>
    <Title>Brücken bauen, Menschen verbinden</Title>
    <div class="container mx-auto px-4 pt-36 md:pt-44">
      <h1 class="font-header text-5xl font-bold text-slate-800 md:text-6xl lg:text-7xl">
        Brücken bauen,<br />
        Menschen verbinden
      </h1>
      <p class="mt-8 text-slate-800">
        Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung
        ehrenamtliches Engagement.
      </p>
      <p class="pt-1 font-bold text-emerald-500">
        Lass uns gemeinsam unsere schöne Stadt noch l(i)ebenswerter machen.
      </p>
    </div>
    <div class="container mx-auto px-4 pt-16 pb-16 md:pt-20">
      <div class="grid grid-cols-6 gap-8">
        <div v-for="(project, i) in projects" class="col-span-6 lg:col-span-3" :class="{
          'xl:col-span-2': indexToColSpan(i) * 2 == 2,
          'xl:col-span-4': indexToColSpan(i) * 2 == 4,
        }">
          <ProjectCard :title="project.title" :sub-title="project.sub_title" :project-id="project.id"
            :image-id="project.image" :image-size="indexToColSpan(i) * 2 == 2 ? 'small' : 'large'" />
        </div>
      </div>
      <NuxtLink to="/projekte"
        class="text-md font-header mt-12 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Alle Projekte
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NuxtLink>
    </div>
    <section class="bg-slate-100 py-16 lg:py-24">
      <div class="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        <div>
          <h4 class="text-sm font-semibold uppercase text-gray-600">
            Lebe deine Stadt
          </h4>
          <h1 class="font-header mt-2 text-4xl font-bold">
            Ehrenamtlich, engagiert, miteinander
          </h1>
        </div>
        <div>
          <p>
            Alle sind eingeladen, sich mit Ideen, Zeit und Geld für eine
            <b>positive Entwicklung Potsdams einzubringen</b>. Wir vernetzen
            Gleichgesinnte, versammeln engagierte Menschen, bieten Unterstützung
            als Plattform für Ehrenamt und möchten es den Menschen in Potsdam
            leichter machen, das <b>Gemeinwohl zu stärken</b>,
            Gemeinschaftsgefühl zu erleben, ein
            <b>herzliches Miteinander</b> und eine starke Zukunft für Potsdam zu
            stiften.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-6 overflow-hidden">
        <div class="relative col-span-6 md:col-span-3 lg:col-span-2" v-for="priority in priorities">
          <div class="z-[-1] absolute h-full w-full">
            <div class="absolute bottom-0 top-0 left-0 right-0 bg-slate-900 opacity-60" />
            <DirectusImage :asset-id="priority.assetId" class="object-cover w-full h-full" :width="700" :height="500"
              :quality="30" v-if="priority.assetId" />
          </div>
          <div class="container mx-auto px-4 lg:max-w-none py-16 md:p-8 xl:p-10 flex flex-col justify-between h-full">
            <div class="mb-36">
              <h1 class="text-sm font-semibold uppercase text-slate-200 mb-1">{{ priority.subTitle }}</h1>
              <h2 class="text-white font-header font-bold text-3xl">{{ priority.title }}</h2>
            </div>
            <div>
              <p class="text-white">{{ priority.description }}</p>
            </div>
          </div>
        </div>
        <div class="relative col-span-6 md:col-span-3 lg:col-span-6">
          <div class="z-[-1] absolute h-full w-full">
            <div class="absolute bottom-0 top-0 left-0 right-0 bg-slate-900" />
          </div>
          <div class="container mx-auto px-4 py-16 md:px-8 lg:px-4 md:py-8 lg:py-16 flex flex-col justify-end h-full">
            <div>
              <NuxtLink to="/mitstiften"
                class="mb-6 text-md font-header inline-flex items-center rounded-md text-emerald-500 font-bold transition ease-in-out hover:text-emerald-200">
                Unterstütze uns
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
              <p class="text-white max-w-2xl">
                Mit Deiner Spende und einem von Dir bestimmten Spendenzweck kannst Du bestimmen, welche unserer
                Projekte und Projektkategorien Du unterstützen möchtest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24">
      <div class="container mx-auto grid gap-8 px-4 grid-cols-6">
        <div class="col-span-6 lg:col-span-4">
          <h4 class="text-sm font-semibold uppercase text-gray-600">
            Von unserem Blog
          </h4>
          <h1 class="font-header mt-2 text-4xl font-bold">
            Aktuelles & Neuigkeiten
          </h1>
          <p class="mt-4 max-w-2xl">Verfolge die Entwicklung unserer Projekte, die dank Deiner großzügigen Beiträge
            und Deiner Unterstützung möglich wurden.</p>
          <NuxtLink to="/stiftung/aktuelles"
            class="text-md font-header mt-12 mb-4 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Alle Beiträge
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
        <div v-for="post in posts" class="min-h-max col-span-6 lg:col-span-3 xl:col-span-2">
          <ArticleCard :title="post.title" :date="new Date(post.date)" :post-id="post.id.toString()"
            :image-id="post.image" :project-title="post.project.title" :tags="post.tags" compact
            :link="`/stiftung/aktuelles/${post.id}`" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const priorities = [{
  subTitle: 'Nachhaltigkeit',
  title: 'Nachhaltig engagieren und handeln',
  assetId: '0e823ed4-1409-4827-b9c3-14a442a1db52',
  description: `Wir verschaffen Nachhaltigkeit und Müllvermeidung in Potsdam ein größeres Gehör und unterstützen lokale Unternehmen dabei, sich nachhaltig entwickeln zu können.`,
},
{
  subTitle: 'Kultur',
  title: 'Chancengleichheit und Zugang für Kultur schaffen',
  assetId: '72baf604-4397-4f22-9ac7-195df8b1a591',
  description: `Finanzierbarer Zugang zu Kultur und Unterhaltung ist wichtiger denn je. Wir ermöglichen Kunstschaffenen sich in Potsdam zu präsentieren und jedem, Teil des Publikums zu sein.`,
},
{
  subTitle: 'Begegnung & Toleranz',
  title: 'Menschen aus der Welt zusammenbringen',
  assetId: 'db74ab6f-0e47-415d-8686-a3a6afa2b6a1',
  description: `Menschen in Potsdam kennenlernen, zusammen leben und Spaß haben. Wir organisieren Zusammentreffen aller Art und vereinfachen Begegnung durch gemeinsame Interessen.`,
},
];

const { getItems } = useDirectusItems();

const projects = await getItems<any>({
  collection: "projects",
  params: {
    sort: "sort",
    limit: 7,
    fields: ["title", "sub_title", "image", "id"],
  },
});

const posts = await getItems<any>({
  collection: "posts",
  params: {
    fields: [
      "title",
      "date",
      "id",
      "image",
      "tags",
      "project.title",
    ],
    limit: 4,
    sort: "-date",
  }
})

const indexToColSpan = useGridSpanLayout();
</script>
