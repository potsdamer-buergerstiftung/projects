<template>
  <div>
    <Title>Brücken bauen, Menschen verbinden</Title>
    <div class="container mx-auto px-4 pt-32 md:pt-44">
      <h1 class="font-header text-5xl font-bold text-slate-800 md:text-6xl lg:text-7xl">
        Brücken bauen,<br />
        Menschen verbinden Johann
      </h1>
      <p class="mt-8 text-slate-800 md:text-lg">
        Wir sind die Potsdamer Bürgerstiftung und fördern als Mitmach-Stiftung
        ehrenamtliches Engagement.
      </p>
      <p class="pt-1 font-bold text-emerald-500 md:text-lg">
        Lass uns gemeinsam unsere schöne Stadt noch l(i)ebenswerter machen.
      </p>
    </div>
    <div class="container mx-auto px-4 pt-10 pb-16 md:pt-20">
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
            stiften. Mit unserer Arbeit konnten wir seit unserer Gründung <b>erste Schwerpunkte setzen</b>.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-6 overflow-hidden">
        <div class="relative col-span-6 md:col-span-3 lg:col-span-2" v-for="priority in priorities">
          <div class="absolute z-[-1] h-full w-full">
            <div class="absolute bottom-0 top-0 left-0 right-0 bg-slate-900 opacity-60" />
            <DirectusImage :asset-id="priority.assetId" class="h-full w-full object-cover" :width="700" :height="500"
              :quality="30" v-if="priority.assetId" />
          </div>
          <div class="container mx-auto flex h-full flex-col justify-between px-4 py-16 md:p-8 lg:max-w-none xl:p-10">
            <div class="mb-20 md:mb-36">
              <h1 :class="`mb-1 text-sm font-semibold uppercase ${priority.color}`">
                {{ priority.subTitle }}
              </h1>
              <h2 class="font-header text-3xl font-bold text-white">
                {{ priority.title }}
              </h2>
            </div>
            <div>
              <p class="text-white">{{ priority.description }}</p>
            </div>
          </div>
        </div>
        <div class="relative col-span-6 md:col-span-3 lg:col-span-6 bg-slate-100">
          <div class="absolute z-[-1] h-full w-full">
            <div class="absolute bottom-0 top-0 left-0 right-0" />
          </div>
          <!-- <div class="container mx-auto  px-4 py-16 md:px-8 md:py-8 lg:px-4 lg:py-16">
            <h4 class="text-sm font-semibold uppercase text-gray-600">
              Von unserem Blog
            </h4>
            <h1 class="font-header mt-2 text-4xl font-bold">
              Aktuelles & Neuigkeiten
            </h1>
          </div> -->
          <div
            class="container mx-auto grid grid-cols-6 gap-8 px-4 flex h-full flex-col justify-end px-4 py-16 md:px-8 md:py-8 lg:px-4 lg:py-16">
            <div class="col-span-6">
              <h4 class="text-sm font-semibold uppercase text-gray-600">
                Nimm teil
              </h4>
              <h1 class="font-header mt-2 text-4xl font-bold">
                Kommende Veranstaltungen
              </h1>
            </div>
            <div v-for="event in events" class="col-span-6 min-h-max lg:col-span-3 xl:col-span-2">
              <NuxtLink :to="event.registration_needed && event.external_ticket_url ? event.external_ticket_url : `/events/${event.id}`"
                class="group relative block h-60 w-full cursor-pointer overflow-hidden rounded-lg" :target="event.external_ticket_url ? '_blank' : null">
                <DirectusImage :asset-id="event.image" :height="600" :width="400" :quality="40"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  :alt="`Bild von ${event.name}`" />
                <div
                  class="pointer-events-none absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div class="flex-column absolute top-0 bottom-0 left-0 right-0 flex items-end p-8">
                  <div class="relative w-full">
                    <h1 class="font-header text-2xl font-bold text-white">{{ event.name }}</h1>
                    <div class="relative mt-2 w-full overflow-hidden">
                      <p
                        class="block translate-y-0 text-white opacity-100 transition duration-500 group-hover:-translate-y-3 group-hover:opacity-0">
                        {{ formattedDate(new Date(event.start)) }}
                      </p>
                      <div
                        class="absolute translate-y-0 text-white opacity-0 transition duration-500 group-hover:-translate-y-full group-hover:opacity-100">
                        <div class="relative flex flex-row items-center font-bold">
                          <span>Event anzeigen</span>
                          <div class="ml-2 h-0.5 w-12 bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
            <!-- <div class="col-span-6">
              <NuxtLink to="/mitstiften"
                class="text-md font-header mb-6 inline-flex items-center rounded-md font-bold transition ease-in-out hover:text-emerald-500">
                Unterstütze uns
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
              <p class="max-w-2xl ">
                Komm' an Bord der Bürgerstiftung. Setz' Dich mit <b>Deiner Spende</b> gemeinsam mit uns für
                <b>Themen</b> ein, <b>
                  die Dir und uns wichtig sind</b>!
                <br />
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="py-16 md:py-24">
      <div class="container mx-auto grid grid-cols-6 gap-8 px-4">
        <div class="col-span-6 lg:col-span-4">
          <h4 class="text-sm font-semibold uppercase text-gray-600">
            Von unserem Blog
          </h4>
          <h1 class="font-header mt-2 text-4xl font-bold">
            Kommende Events
          </h1>
          <p class="mt-4 max-w-2xl">
            Verfolge die Entwicklung unserer Projekte, die dank Deiner
            großzügigen Beiträge und Deiner Unterstützung möglich wurden.
          </p>
          <NuxtLink to="/stiftung/aktuelles"
            class="text-md font-header mt-12 mb-4 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Alle Events
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
        <div v-for="post in events" class="col-span-6 min-h-max lg:col-span-3 xl:col-span-2">
          <ArticleCard :title="post.name" :date="new Date(post.start)" :post-id="post.id" :image-id="post.image"
            project-title="post.project.title" compact :link="`/stiftung/aktuelles/${post.slug}`" />
        </div>
      </div>
    </section> -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto grid grid-cols-6 gap-8 px-4">
        <div class="col-span-6 lg:col-span-4">
          <h4 class="text-sm font-semibold uppercase text-gray-600">
            Von unserem Blog
          </h4>
          <h1 class="font-header mt-2 text-4xl font-bold">
            Aktuelles & Neues von uns
          </h1>
          <p class="mt-4 max-w-2xl">
            Verfolge die Entwicklung unserer Projekte, die dank Deiner
            großzügigen Beiträge und Deiner Unterstützung möglich wurden.
          </p>
          <NuxtLink to="/stiftung/aktuelles"
            class="text-md font-header mt-12 mb-4 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Alle Beiträge
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
        <div v-for="post in posts" class="col-span-6 min-h-max lg:col-span-3 xl:col-span-2">
          <ArticleCard :title="post.title" :date="new Date(post.date)" :post-id="post.id.toString()"
            :image-id="post.image" :project-title="post.project.title" :tags="post.tags" compact
            :link="`/stiftung/aktuelles/${post.slug}`" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const priorities = [
  {
    subTitle: "Nachhaltigkeit",
    title: "Nachhaltig engagieren und handeln",
    assetId: "0e823ed4-1409-4827-b9c3-14a442a1db52",
    description: `Wir verschaffen Nachhaltigkeit und Müllvermeidung in Potsdam mehr Aufmerksamkeit und leisten unseren Beitrag zu Umweltschutz, Stadtgrün und Klima.`,
    color: "text-emerald-200",
  },
  {
    subTitle: "Kultur",
    title: "Kultur und Teilhabe fördern",
    assetId: "72baf604-4397-4f22-9ac7-195df8b1a591",
    description: `Freier Zugang zu Kultur und Unterhaltung ist wichtiger denn je. Wir ermöglichen Kunstschaffenen sich in Potsdam zu präsentieren und allen Menschen, Teil des Publikums zu sein.`,
    color: "text-red-200",
  },
  {
    subTitle: "Begegnung & Toleranz",
    title: "Menschen zusammenbringen",
    assetId: "db74ab6f-0e47-415d-8686-a3a6afa2b6a1",
    description: `Zusammenhalt, Solidarität und Toleranz entsteht durch Begegnung. Wir organisieren Zusammentreffen aller Art und vereinfachen Begegnung durch gemeinsame Interessen. Wir alle sind Potsdam.`,
    color: "text-blue-200",
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

const events = await getItems<any>({
  collection: "events",
  params: {
    fields: ["name", "start", "id", "image", "external_ticket_url", "registration_needed"],
    limit: 4,
    sort: "start",
    filter: {
      start: {
        _gte: new Date().toISOString(),
      },
    },
  },
});

const posts = await getItems<any>({
  collection: "posts",
  params: {
    fields: ["title", "date", "id", "image", "tags", "project.title", "slug"],
    limit: 4,
    sort: "-date",
  },
});

const indexToColSpan = useGridSpanLayout();

const formattedDate = (date: Date) => date.toLocaleDateString("de", {
  year: "numeric",
  day: "numeric",
  month: "long",
});
</script>
