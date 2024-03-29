<template>
  <div>
    <Title>Mitstiften</Title>
    <PageTitle title="Mitstiften & spenden">
      <template #description>
        Erfahre, wie Du uns mit Geld oder mit Deiner Zeit unterstützen
        kannst.
      </template>
      <template #breadcrumb>
        <PageTitleBreadcrumb :items="[{ text: 'Mitstiften' }]" />
      </template>
    </PageTitle>
    <section class="bg-white">
      <div class="container mx-auto grid grid-cols-8 gap-x-8 gap-y-12 px-4 pt-8 pb-16">
        <div class="col-span-8 lg:col-span-2">
          <h1 class="font-header text-3xl font-bold">Spende</h1>
          <p class="mt-3">Mit Deiner Spende die Zukunft Deiner Stadt formen</p>
        </div>
        <div class="col-span-8 md:col-span-4 lg:col-span-3">
          <p>
            Komme zu uns <b>an Bord der Bürgerstiftung</b>. Setze Dich
            <b>mit Deiner Spende</b> gemeinsam mit uns für
            <b>soziale Themen und Initiativen</b> in unserer Stadt ein!
          </p>
          <p class="mt-3">
            Spende mit einem <b>von Dir bestimmten Spendenzweck</b> oder
            unterstütze die allgemeine Arbeit der Bürgerstiftung.
          </p>
          <NuxtLink to="/mitstiften/freundeskreis"
            class="group mt-6 inline-flex items-center rounded-md text-base font-bold text-slate-900 transition hover:text-emerald-500">
            Mehr erfahren
            <svg xmlns="http://www.w3.org/2000/svg"
              class="ml-1 h-5 w-5 transition group-hover:translate-x-1 group-hover:text-emerald-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
        <div class="col-span-8 md:col-span-4 lg:col-span-3">
          <h4 class="font-header text-xl font-bold md:text-lg">
            Spendenkonto Bürgerstiftung
          </h4>
          <p class="mt-4">IBAN: <b>DE93 1207 0000 0010 6633 00</b></p>
          <p>BIC: <b>DEUTDEBB160</b></p>
          <p>Deutsche Bank Potsdam</p>
          <h4 class="font-header mt-8 text-xl font-bold md:text-lg">
            Kreditkarte / PayPal / Klarna
          </h4>
          <div class="mt-4 flex flex-col gap-y-4 gap-x-2 md:flex-row">
            <a href="https://donorbox.org/potsdamer-buergerstiftung"
              class="text-md font-header inline-flex items-center justify-center rounded-md bg-emerald-500 py-1.5 px-4 text-center font-bold text-white transition ease-in-out hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75">
              Jetzt spenden
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-slate-100">
      <div class="container mx-auto grid grid-cols-8 gap-x-8 gap-y-12 px-4 py-16">
        <div class="col-span-8 lg:col-span-2">
          <h1 class="font-header text-3xl font-bold">Freundeskreis</h1>
          <p class="mt-3">
            Regelmäßig spenden und vom Freundeskreis der Stiftung profitieren
          </p>
        </div>
        <div class="col-span-8 md:col-span-4 lg:col-span-3">
          <p>
            Wir legen bei unseren Projekten großen Wert darauf, dass sie
            nachhaltig wirken. Das ist jedoch nur möglich, wenn wir
            <b>langfristig planen und fördern</b> können. Mit Deiner
            <b>regelmäßigen und verlässlichen Unterstützung</b> können wir diese
            wichtigen Voraussetzungen schaffen.
          </p>
          <NuxtLink to="/mitstiften/freundeskreis"
            class="group mt-6 inline-flex items-center rounded-md text-base font-bold text-slate-900 transition hover:text-emerald-500">
            Mehr erfahren
            <svg xmlns="http://www.w3.org/2000/svg"
              class="ml-1 h-5 w-5 transition group-hover:translate-x-1 group-hover:text-emerald-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
        <div class="col-span-8 md:col-span-4 lg:col-span-3">
          <h4 class="font-header text-xl font-bold md:text-lg">
            Lastschriftmandat (IBAN)
          </h4>
          <p class="mt-4">
            Mit unserem elektronisch generierten Lastschriftmandat kannst Du
            die Bürgerstiftung ohne nervigen Papierkram langfristig
            unterstützen.
          </p>
          <h4 class="font-header mt-8 text-xl font-bold md:text-lg">
            Kreditkarte / PayPal / Klarna
          </h4>
          <div class="mt-4 flex flex-col gap-y-4 gap-x-2 md:flex-row">
            <div class="flex flex-col gap-y-4 gap-x-2 md:flex-row">
              <a href="https://donorbox.org/freundeskreis-burgerstiftung"
                class="text-md font-header inline-flex items-center justify-center rounded-md bg-emerald-500 py-1.5 px-4 text-center font-bold text-white transition ease-in-out hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75">
                Jetzt spenden
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="container mx-auto grid grid-cols-8 gap-x-8 gap-y-12 px-4 py-16">
        <div class="col-span-8 lg:col-span-2">
          <h1 class="font-header text-3xl font-bold">Firmenspende</h1>
          <p class="mt-3">
            Sie wünschen sich ein Förderprojekt mit Bezug zu Ihrer Branche oder
            Ihrem Unternehmen?
          </p>
        </div>
        <div class="col-span-8 md:col-span-4 lg:col-span-3">
          <p>
            Gesellschaftliche <b>Verantwortung übernehmen</b>, die Verbundenheit
            mit dem Firmenstandort zum Ausdruck bringen, jungen Menschen durch
            wichtige Impulse den Weg in eine freie und lebenswerte Stadt ebnen -
            es gibt viele gute Gründe, als <b>Potsdamer Unternehmen</b> die
            Arbeit der Bürgerstiftung zu fördern.
          </p>
          <NuxtLink to="/mitstiften/freundeskreis"
            class="group mt-6 inline-flex items-center rounded-md text-base font-bold text-slate-900 transition hover:text-emerald-500">
            Mehr erfahren
            <svg xmlns="http://www.w3.org/2000/svg"
              class="ml-1 h-5 w-5 transition group-hover:translate-x-1 group-hover:text-emerald-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
        <div class="col-span-8 md:col-span-4 lg:col-span-3">
          <p>
            Gern schlagen wir Ihnen <b>passende Förderbereiche</b> oder Projekte
            für zweckgebundene Spenden vor.
            <b>Unterstützen Sie mit uns Ihre Projektidee</b> oder finden Sie mit
            unseren Projekten ein <b>passendes Engagement</b> für Ihr
            Unternehmen.
          </p>
          <NuxtLink to="/mitstiften"
            class="text-md font-header mt-6 inline-flex items-center rounded-md bg-slate-900 py-1.5 px-4 font-bold text-white transition ease-in-out hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75">
            Sprechen Sie uns an
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
