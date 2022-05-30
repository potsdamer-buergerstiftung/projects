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
        <div class="container mx-auto px-4 pt-16 md:pt-20 pb-16">
            <div class="grid grid-cols-6 gap-8">
                <div
                    v-for="(project, i) in projects"
                    class="col-span-6 lg:col-span-3"
                    :class="{
                        'xl:col-span-2': indexToColSpan(i) * 2 == 2,
                        'xl:col-span-4': indexToColSpan(i) * 2 == 4,
                    }"
                >
                    <ProjectCard
                        :title="project.title"
                        :sub-title="project.sub_title"
                        :project-id="project.id"
                        :image-id="project.image"
                        :image-size="indexToColSpan(i) * 2 == 2 ? 'small' : 'large'"
                    />
                </div>
            </div>
            <NuxtLink
                to="/projekte"
                class="text-md font-header mt-12 inline-flex items-center rounded-md bg-green-100 py-1.5 px-4 font-bold transition ease-in-out hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
                Alle Projekte
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </NuxtLink>
        </div>
        <section>
            <div class="container mx-auto grid grid-cols-1 gap-8 px-4 pb-16 pt-8 lg:grid-cols-2">
                <div>
                    <h4 class="text-sm font-semibold uppercase text-gray-600">Lebe deine Stadt</h4>
                    <h1 class="font-header mt-2 text-4xl font-bold">
                        Ehrenamtlich, engagiert, miteinander
                    </h1>
                </div>
                <div>
                    <p>
                        Alle sind eingeladen, sich mit Ideen, Zeit und Geld für eine
                        <b>positive Entwicklung Potsdams einzubringen</b>. Wir vernetzen
                        Gleichgesinnte, versammeln engagierte Menschen, bieten Unterstützung als
                        Plattform für Ehrenamt und möchten es den Menschen in Potsdam leichter
                        machen, das <b>Gemeinwohl zu stärken</b>, Gemeinschaftsgefühl zu erleben,
                        ein <b>herzliches Miteinander</b> und eine starke Zukunft für Potsdam zu
                        stiften.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

const { getItems } = useDirectusItems();

const projects = await getItems<any>({
    collection: "projects",
    params: {
        sort: "sort",
        limit: 7,
    },
});

const indexToColSpan = useGridSpanLayout();
</script>
