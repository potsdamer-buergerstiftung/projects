<template>
  <div>
    <Title>Unsere Gremien</Title>
    <PageTitle title="Unsere Gremien">
      <template #breadcrumb>
        <PageTitleBreadcrumb
          :items="[
            { text: 'Die Stiftung', link: '/stiftung' },
            { text: 'Unsere Gremien' },
          ]"
        />
      </template>
      <template #description>
        <p class="max-w-3xl">
          Die Bürgerstiftung Potsdam wird durch den Vorstand vertreten.
          Insgesamt untersteht die Bürgerstiftung Potsdam der Stiftungsaufsicht
          des Landes Brandenburg im Innenministerium, die über die Einhaltung
          des Satzungszwecks wachen. Außerdem wird die Stiftung jährlich vom
          Finanzamt Potsdam geprüft.
        </p>
      </template>
    </PageTitle>
    <section class="pb-16 pt-8">
      <div class="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        <div>
          <h4 class="text-sm font-semibold uppercase text-gray-600">
            Unser Team
          </h4>
          <h1 class="font-header mt-2 text-4xl font-bold">Der Vorstand</h1>
        </div>
        <div>
          <p>
            Der ehrenamtlich tätige Vorstand führt die Stiftung nach Maßgabe der
            Satzung in eigener Verantwortung. Er hat dabei den Stiftungszweck so
            wirksam und nachhaltig wie möglich zu erfüllen.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-4 overflow-hidden">
        <div
          class="col-span-4 md:col-span-2 lg:col-span-1"
          v-for="member in boardMembers"
        >
          <TeamMemberCard v-bind="member" />
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        <div>
          <h4 class="text-sm font-semibold uppercase text-gray-600">
            Unser Team
          </h4>
          <h1 class="font-header mt-2 text-4xl font-bold">Der Stiftungsrat</h1>
        </div>
        <div>
          <p>
            Der Stiftungsrat kontrolliert den Vorstand. Die Stiftungssatzung ist
            dabei Maßstab der Dinge.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-4 overflow-hidden">
        <div
          class="col-span-4 md:col-span-2 lg:col-span-1"
          v-for="member in boardOfTrustees"
        >
          <TeamMemberCard v-bind="member" />
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        <div>
          <h4 class="text-sm font-semibold uppercase text-gray-600">
            Unser Team
          </h4>
          <h1 class="font-header mt-2 text-4xl font-bold">Das Kuratorium</h1>
        </div>
        <div>
          <p>
            Das Kuratorium berät den Vorstand zu Schwerpunkten der
            Stiftungsarbeit, zum Jahresprogramm und zur Zusammenarbeit mit
            anderen Institutionen in Potsdam.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-4 overflow-hidden">
        <div
          class="col-span-4 md:col-span-2 lg:col-span-1"
          v-for="member in boardOfCurators"
        >
          <TeamMemberCard v-bind="member" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const boardMembers = [
  {
    title: "Vorsitzende",
    name: "Marie-Luise Glahr",
    image: "b4071f42-e17c-46a3-8513-57e8bab20c77",
  },
  {
    title: "Stellv. Vorsitzender",
    name: "Felix Müller-Stüler",
    image: "886a54e6-0b48-485c-a8f1-b627c92fc0f6",
  },
  {
    title: "Vorstandsmitglied",
    name: "Elisabeth Diemer",
    image: "aac8177f-6fad-4643-b438-45b95340d2e0",
  },
  {
    title: "Vorstandsmitglied",
    name: "Rosa Toledano",
    image: "b36be811-2bda-4ef0-88a7-5f773658c23a",
  },
];

const boardOfTrustees = [
  {
    title: "Vorsitzende",
    name: "Beatrix Raeithel",
    image: "526b8a7c-9786-4336-a31d-d3f8080bdcc0",
  },
  {
    title: "Stellv. Vorsitzender",
    name: "Dr. Gerd Harms",
    image: "8e5e97f8-cf14-49f5-ab88-5eb30a21b7c1",
  },
  {
    title: "Stiftungsratmitglied",
    name: "Andrea Buttenberg",
    image: "2171fd38-df59-4756-8960-6d8da7da2ebd",
  },
  {
    title: "Stiftungsratmitglied",
    name: "Johannes Baron von der Osten-Sacken",
    image: "6e906a64-da74-4a0e-9f32-92430d6b9dcd",
  },
  /* {
        title: "Stiftungsratmitglied",
        name: "Christian Miethe",
    } */
];

const boardOfCurators = [
  {
    title: "Vorsitzender",
    name: "Jann Jakobs",
  },
  {
    title: "Stellv. Vorsitzende",
    name: "Dr. Angela Hoffmann",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Katja Dietrich-Kröck",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Prof. Dr. Sabine Hering",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Daniel Beermann",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Prof. Dr. Oliver Günther",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Prof. Dr. Christoph Martin Vogtherr",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Bettina Jahnke",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Jala Al Jazeiri",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Heiko Sill",
  },
  {
    title: "Kuratoriumsmitglied",
    name: "Ingrid Howes",
  },
];
</script>
