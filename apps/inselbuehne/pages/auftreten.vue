<template>
  <div>
    <section class="bg-gray-50">
      <div class="mx-auto max-w-3xl px-4 pt-48 pb-24 text-center lg:px-0">
        <h4 class="text-sm font-bold uppercase tracking-widest text-green-500">
          Auftreten
        </h4>
        <h1 class="mt-6 font-serif text-5xl md:text-6xl">
          Du möchtest bei uns auftreten?
        </h1>
        <p class="pt-5 text-lg text-gray-600">
          Damit dein Auftritt auf der Inselbühne von uns und Dir einfach geplant
          werden kann, müssen einige Sachen beachtet werden.
        </p>
      </div>
    </section>
    <section class="bg-gray-50">
      <div class="mx-auto max-w-3xl px-4 pb-24 text-center lg:pb-32">
        <div class="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8">
          <div>
            <svg
              class="inline-block h-14 w-14 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 2h12a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm1.5 3a.5.5 0 000 1h6a.5.5 0 100-1h-6zm0 2a.5.5 0 000 1h3a.5.5 0 100-1h-3z"
                fill="currentColor"
                opacity=".3"
              ></path>
              <path
                d="M3.793 6.573L12 12.5l8.207-5.927a.5.5 0 01.793.405V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.978a.5.5 0 01.793-.405z"
                fill="currentColor"
              ></path>
            </svg>
            <h4 class="pt-3 font-bold uppercase tracking-widest">E-Mail</h4>
            <p class="text-gray-600">hallo@inselbuehne-potsdam.de</p>
          </div>
          <div>
            <svg
              class="inline-block h-14 w-14 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M0 0h24v24H0z"></path>
                <path
                  d="M13.08 14.784l2.204-2.204a2 2 0 00.375-2.309l-.125-.25a2 2 0 01.374-2.308l2.733-2.733a.5.5 0 01.801.13l1.104 2.208a4.387 4.387 0 01-.822 5.065l-5.999 5.998a5.427 5.427 0 01-5.553 1.311l-2.415-.804a.5.5 0 01-.195-.828l2.65-2.652a2 2 0 012.31-.374l.25.125a2 2 0 002.308-.375z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14.148 6.007l-.191 1.991a4.987 4.987 0 00-4.018 1.441 4.987 4.987 0 00-1.442 4.004l-1.992.185a6.986 6.986 0 012.02-5.603 6.987 6.987 0 015.623-2.018zm.35-3.985l-.185 1.992A8.978 8.978 0 007.111 6.61a8.978 8.978 0 00-2.598 7.191l-1.992.183a10.977 10.977 0 013.176-8.788 10.977 10.977 0 018.801-3.175z"
                  fill="currentColor"
                  opacity=".3"
                ></path>
              </g>
            </svg>
            <h4 class="pt-3 font-bold uppercase tracking-widest">Telefon</h4>
            <p class="text-gray-600">+49 331 23180309</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-4"></div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Auftreten",
});
</script>
