<template>
  <section>
    <div class="container mx-auto px-4 pt-20 pb-4">
      <div class="flex flex-row flex-wrap items-center justify-between gap-8">
        <div>
          <p class="mb-2 text-sm font-medium uppercase">
            Unterstützen & engagieren
          </p>
          <h1 class="font-header text-5xl font-bold">Mach mit!</h1>
        </div>
        <div>
          <NuxtLink
            to="/portal"
            class="text-md font-header inline-flex items-center rounded-md bg-slate-800 py-3 px-5 font-bold text-white transition ease-in-out hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
          >
            Zum Freiwilligenportal
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
      </div>
      <hr class="mt-8 h-1 w-full border-slate-800" />
    </div>
    <div class="container mx-auto flex flex-row items-center px-4">
      <p class="max-w-xl">
        Du hattest schon immer Lust auf Ehrenamt? Wir unterstützen Dich dabei
        und zeigen Dir, wie Du Dich bei uns und unseren Projekten engagieren
        kannst.
      </p>
    </div>
  </section>
</template>
