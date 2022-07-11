<template>
  <div class="flex flex-col gap-4">
    <ul class="mb-8 flex flex-row gap-6">
      <li class="relative">
        <button
          class="font-header font-bold after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-slate-900">
          Log-in
        </button>
      </li>
      <li class="relative">
        <button
          class="font-header font-bold after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-slate-900 after:opacity-0">
          Registrieren
        </button>
      </li>
      <li class="relative" v-for="provider in providers.data">
        <a :href="loginUrl(provider.name).toString()"
          class="font-header font-bold after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-slate-900 after:opacity-0">Log-in
          mit {{ capitalizeFirstLetter(provider.name) }}</a>
      </li>
    </ul>
    <div class="col-span-3 md:col-span-1">
      <label class="text-sm font-medium">E-Mail-Adresse</label>
      <input type="email"
        class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
    </div>
    <div class="col-span-3 md:col-span-1">
      <label class="text-sm font-medium">Passwort</label>
      <input type="email"
        class="mt-2 w-full rounded-md border-none bg-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
    </div>
    <div class="col-span-3">
      <div class="mb-6 flex items-start">
        <div class="flex h-5 items-center">
          <input id="remember" type="checkbox"
            class="focus:ring-3 h-4 w-4 rounded-sm border border-slate-300 bg-slate-100 accent-emerald-500 focus:ring-emerald-300"
            required />
        </div>
        <label for="remember" class="ml-2 max-w-xl text-sm font-medium">Ich erkläre mich einverstanden, dass die
          eingegebenen Daten zu
          Zwecken des Beantwortens meines Anliegens weiterverarbeitet
          werden.</label>
      </div>
    </div>
    <div class="col-span-3">
      <button
        class="text-md font-header inline-flex items-center rounded-md bg-slate-800 py-3 px-5 font-bold text-white transition ease-in-out hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75">
        Nachricht senden
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const directusUrl = useDirectusUrl();
const { logout, listAuthProviders, fetchUser } = useDirectusAuth();
const websiteUrl = useWebsiteUrl();
const capitalizeFirstLetter = useCapitalizeFirstLetter();

const providers = await listAuthProviders();

const redirectUrl = new URL("/portal/sso", websiteUrl);
const loginUrl = (provider: string) => {
  let url = new URL(`/auth/login/${provider}`, directusUrl);
  url.searchParams.append("redirect", redirectUrl.toString());
  return url;
};
</script>
