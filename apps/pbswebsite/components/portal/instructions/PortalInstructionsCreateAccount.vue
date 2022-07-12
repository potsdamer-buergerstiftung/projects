<template>
    <div class="grid grid-cols-3 gap-10">
        <div class="col-span-1">
            <div class="bg-white rounded-lg p-8">
                <img src="~/assets/img/welcome.svg" />
            </div>
        </div>
        <div class="col-span-2">
            <h1 class="font-header font-bold text-3xl">
                Einen Account erstellen
            </h1>
            <hr class="mt-1 mb-8" />
            <p class="mt-2">Mit Deinem Account kannst Du bestimmen, <b>wie und worüber Du</b> von uns über Neuigkeiten
                von der
                Bürgerstiftung <b>informiert werden möchtest</b>. Das Erstellen ist kostenlos, ist in einer Minute
                erledigt und Deine Daten bleiben in
                Sicheren Händen.
            </p>
            <PortalRegistrationForm class="mt-8" />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>