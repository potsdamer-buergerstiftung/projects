<template>
  <div>
    <Title>Die Stiftung</Title>
    <PageTitle title="Wer wir sind">
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Die Stiftung' }]"/>
      </template>
    </PageTitle>
    <section class="mb-32">
      <div class="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        <div>
          <h1 class="font-header mt-2 text-4xl font-bold">
            Ehrenamtlich, engagiert, miteinander
          </h1>
        </div>
        <div>
          <p>
            Wir, die Potsdamer Bürgerstiftung, vernetzen
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
    <section class="mb-32">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-3 gap-16">
          <div
              class="container mx-auto flex h-full flex-col"
              v-for="priority in priorities"
          >
            <div>
              <h1 class="text-sm font-semibold uppercase text-gray-600 mb-2">
                {{ priority.subTitle }}
              </h1>
              <h2 class="font-header text-2xl font-bold mb-4">
                {{ priority.title }}
              </h2>
            </div>
            <p class="">{{ priority.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-16">
      <div class="container mx-auto px-4">
        <h2 class="font-header text-4xl font-bold -mb-10 max-w-xl">
          Gemeinsam Gutes tun und stiften
        </h2>
      </div>
      <div class="grid grid-cols-5">
        <div class="col-span-3">
          <DirectusImage
              asset-id="7d0a648b-c484-4e4e-9d69-f0230f7278bd"
              format="webp"
              :quality="50"
              :width="1800"
              :height="800"
              class="w-full h-[20rem] object-cover mt-24"
          />
        </div>
        <div class="bg-slate-50 p-16 col-span-2">
          <h2 class="font-header text-3xl font-bold mb-8 max-w-md">
            Wie unsere Stiftung aufgebaut ist und arbeitet
          </h2>
          <Disclosure v-slot="{ open }" v-for="disclosure in disclosures" as="div" class="mt-8">
            <DisclosureButton class="flex flex-row w-full text-left mb-4 items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2" v-if="!open">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="2" v-else>
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"/>
              </svg>
              <h4 class="text-lg font-bold">{{ disclosure.title }}</h4>
            </DisclosureButton>
            <DisclosurePanel>
              {{ disclosure.content }}
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </section>
    <section class="mt-16 pb-16">
      <div class="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        <div>
          <h4 class="text-sm font-semibold uppercase text-gray-600">
            Förderer und Partner
          </h4>
          <h1 class="font-header mt-2 text-4xl font-bold max-w-xl">
            Wer uns und wen wir unterstützen
          </h1>
        </div>
        <div>
          <p>

          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

definePageMeta({
  layout: "default",
});

const priorities = [
  {
    subTitle: "Nachhaltigkeit",
    title: "Nachhaltig engagieren und handeln",
    assetId: "0e823ed4-1409-4827-b9c3-14a442a1db52",
    description: `Wir verschaffen Nachhaltigkeit und Müllvermeidung in Potsdam ein größeres Gehör und unterstützen lokale Unternehmen dabei, sich nachhaltig entwickeln zu können.`,
  },
  {
    subTitle: "Kultur",
    title: "Chancengleichheit und Zugang für Kultur schaffen",
    assetId: "72baf604-4397-4f22-9ac7-195df8b1a591",
    description: `Finanzierbarer Zugang zu Kultur und Unterhaltung ist wichtiger denn je. Wir ermöglichen Kunstschaffenen sich in Potsdam zu präsentieren und allen, Teil des Publikums zu sein.`,
  },
  {
    subTitle: "Begegnung & Toleranz",
    title: "Menschen aus der Welt zusammenbringen",
    assetId: "db74ab6f-0e47-415d-8686-a3a6afa2b6a1",
    description: `Menschen in Potsdam kennenlernen, zusammen leben und Spaß haben. Wir organisieren Zusammentreffen aller Art und vereinfachen Begegnung durch gemeinsame Interessen.`,
  },
];

const disclosures = [
  {
    title: "Das Konzept",
    content: `Wir sind eine institutionell und finanziell unabhängige
              gemeinnützige Stiftung von und für Bürgerinnen und Bürger mit
              möglichst breitem Stiftungszweck. Wir engagieren uns
              nachhaltig und dauerhaft für das Gemeinwesen vor Ort. Sie
              unterstützt mit ihrer Arbeit bürgerschaftliches Engagement.`,
  },
  {
    title: "Die Satzung",
    content: `Unsere Satzung ist der Maßstab unseres Handelns. In ihr haben
              wir Struktur und Förderziele dauerhaft festgelegt. Unser
                  Förderzweck ist bewusst weit gefasst, damit wir möglichst
                  viele Anliegen der Potsdamer Stadtgesellschaft, heute und
                  morgen, angehen können.`
  },
  {
    title: "Die Organisation",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    title: "Die Prinzipien",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    title: "Unser Auftrag",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.`
  }
]
</script>
