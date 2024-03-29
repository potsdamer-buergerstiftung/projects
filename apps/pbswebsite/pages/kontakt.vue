<template>
  <div>
    <Title>Kontakt</Title>
    <PageTitle title="Sie haben Fragen?">
      <template #description>
        <p>
          Erzählen Sie uns kurz, worum es geht und wir melden uns bei Ihnen.
        </p>
      </template>
      <template #actions>
        <a
            href="mailto:info@potsdamer-buergerstiftung.org"
            class="text-md font-header rounded-md bg-emerald-500 py-1.5 px-4 font-bold text-white transition ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75">
          info@potsdamer-buergerstiftung.org
        </a>
      </template>
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Kontakt', link: '/kontakt' }]"/>
      </template>
    </PageTitle>
    <section class="bg-white">
      <div class="container mx-auto grid grid-cols-4 gap-8 px-4 pb-20 pt-8">
        <div class="col-span-4 lg:col-span-1">
          <h1 class="font-header text-3xl font-bold">Unsere Standorte</h1>
          <p class="mt-3">Komm einfach vorbei</p>
        </div>
        <div class="col-span-4 md:col-span-2 lg:col-span-1">
          <h2 class="font-header text-xl font-bold">MAZ-Pyramide</h2>
          <p class="mt-4">Friedrich-Engels-Straße 24</p>
          <p>14473 Potsdam</p>
          <p class="mt-1 font-bold">+49 331 23180300</p>
          <p class="mt-4">Arbeitszeiten: Montag - Freitag</p>
          <p>9 Uhr - 15 Uhr</p>
        </div>
        <div class="col-span-4 md:col-span-2 lg:col-span-1">
          <h2 class="font-header text-xl font-bold">Inselbühne</h2>
          <p class="mt-4">Burgstraße</p>
          <p>14467 Potsdam</p>
          <p class="mt-1 font-bold">+49 331 23180309</p>
          <p class="mt-4">Besuchszeiten: Freitag - Samstag</p>
          <p>18 Uhr - 20 Uhr</p>
        </div>
        <div class="col-span-4 md:col-span-2 lg:col-span-1">
          <h2 class="font-header text-xl font-bold">Staudenhof</h2>
          <p class="mt-4">Am Alten Markt 10</p>
          <p>14467 Potsdam</p>
          <p class="mt-4">Öffnungszeiten: Freitag - Samstag</p>
          <p>18 Uhr - 23 Uhr</p>
        </div>
      </div>
    </section>
    <section class="bg-slate-100">
      <div class="container mx-auto grid grid-cols-4 gap-8 px-4 py-16">
        <div class="col-span-4 lg:col-span-1">
          <h1 class="font-header text-3xl font-bold">Allgemeine Fragen</h1>
          <p class="mt-4">
            Füllen Sie gerne das Formular aus oder
            <b>senden Sie uns eine E-Mail</b>
          </p>
        </div>
        <div class="col-span-4 lg:col-span-3">
          <form @submit.prevent="onSubmit" v-if="state !== 'SUBMITTED'">
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-3 md:col-span-1">
                <label class="text-sm font-medium">Vorname (Erforderlich)</label>
                <input v-model="firstName" type="text"
                       class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                       placeholder="Dein Vorname" required/>
              </div>
              <div class="col-span-3 md:col-span-1">
                <label class="text-sm font-medium">Nachname (Erforderlich)</label>
                <input v-model="lastName" type="text"
                       class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                       placeholder="Dein Nachname" required/>
              </div>
              <div class="col-span-3 md:col-span-1">
                <label class="text-sm font-medium">Organisation</label>
                <input v-model="organisation" type="text"
                       class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                       placeholder="Deine Organisation"/>
              </div>
              <div class="col-span-3 md:col-span-1">
                <label class="text-sm font-medium">E-Mail (Erforderlich)</label>
                <input v-model="email" type="email"
                       class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                       placeholder="Deine E-Mail" required/>
              </div>
              <div class="col-span-3 md:col-span-1">
                <label class="text-sm font-medium">Telefon</label>
                <input v-model="phone" type="text"
                       class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                       placeholder="Deine Telefonnummer"/>
              </div>
              <div class="col-span-3 md:col-span-1">
                <label class="text-sm font-medium">Projektbezug</label>
                <select v-model="projectId"
                        class="mt-2 w-full appearance-none rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="none">Keine Angabe</option>
                  <option v-for="project in projects" :value="project.id">
                    {{ project.title }}
                  </option>
                </select>
              </div>
              <div class="col-span-3">
                <label class="text-sm font-medium">Betreff (Erforderlich)</label>
                <input v-model="subject" type="text" required
                       class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                       placeholder="Dein Betreff"/>
              </div>
              <div class="col-span-3">
                <label class="text-sm font-medium">Nachricht (Erforderlich)</label>
                <textarea v-model="message"
                          class="mt-2 h-40 min-h-max w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          placeholder="Deine Nachricht"/>
              </div>
              <div class="col-span-3">
                <div class="mb-6 flex items-start">
                  <div class="flex h-5 items-center">
                    <input id="remember" type="checkbox"
                           class="focus:ring-3 h-4 w-4 rounded-sm border border-slate-300 bg-slate-100 accent-emerald-500 focus:ring-emerald-300"
                           required/>
                  </div>
                  <label for="remember" class="ml-2 max-w-xl text-sm font-medium">Ich erkläre mich einverstanden, dass
                    die eingegebenen Daten
                    für die Bearbeitung meines Anliegens weiterverarbeitet
                    werden.</label>
                </div>
              </div>
              <div class="col-span-3">
                <button type="submit"
                        class="text-md font-header inline-flex items-center rounded-md bg-slate-800 py-3 px-5 font-bold text-white transition ease-in-out hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75">
                  {{
                    state === "SUBMITTING"
                        ? "Nachricht wird gesendet"
                        : "Nachricht senden"
                  }}
                </button>
              </div>
            </div>
          </form>
          <div v-else class="rounded-md bg-emerald-100 p-8 md:p-16">
            <p>
              <b class="font-bold">Deine Nachricht wurde an uns übermittelt.</b>
              Wir bearbeiten sie so schnell wie möglich und kontaktieren Dich im
              Anschluss.
            </p>
            <button type="submit" @click="resetForm"
                    class="text-md font-header mt-8 inline-flex items-center rounded-md bg-slate-800 py-3 px-5 font-bold text-white transition ease-in-out hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75">
              Neue Nachricht
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const {getItems, createItems} = useDirectusItems();

const firstName = ref("");
const lastName = ref("");
const subject = ref("");
const organisation = ref("");
const email = ref("");
const phone = ref("");
const projectId = ref("none");
const message = ref("");
const error = ref(null);
const state = ref<"SUBMITTING" | "SUBMITTED" | "ERROR" | "INITIAL">("INITIAL");

async function onSubmit() {
  state.value = "SUBMITTING";
  error.value = null;

  const messages = [
    {
      message: message.value,
      first_name: firstName.value,
      last_name: lastName.value,
      subject: subject.value,
      phone: phone.value,
      project: projectId.value === "none" ? null : projectId.value,
      organisation: organisation.value,
      email: email.value,
    },
  ];
  const messagesRes = await createItems<any>({
    collection: "contact_requests",
    items: messages,
  });
  state.value = "SUBMITTED";
}

function resetForm() {
  state.value = "INITIAL";
  firstName.value = "";
  lastName.value = "";
  organisation.value = "";
  email.value = "";
  phone.value = "";
  projectId.value = "none";
  message.value = "";
  error.value = null;
}

const projects = await getItems<any>({
  collection: "projects",
  params: {
    fields: ["title", "id"],
    sort: "sort",
  },
});
</script>
