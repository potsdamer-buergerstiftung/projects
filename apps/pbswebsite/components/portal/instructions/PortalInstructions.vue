<template>
    <div class="bg-emerald-50 rounded-lg p-8 lg:p-16">
        <h4 class="text-sm font-semibold uppercase text-gray-600 text-center mb-3">
            Freiwilligenportal
        </h4>
        <h1 class="text-center font-header text-4xl font-bold">Du möchtest Dich engagieren? <br /> Es ist enfacher als
            Du denkst.</h1>
        <p class="text-center max-w-xl mx-auto mt-4">
            Unser Freilligenportal vernetzt Dich und bietet Dir einen Überblick über alles, was in der Bürgerstiftung
            passiert und über die Sachen, für die Du Dich engagieren kannst.
        </p>
        <div class="flex flex-row mt-16 gap-10">
            <ul class="flex flex-col items-end shrink-0">
                <button class="group font-bold font-header py-2 relative" v-for="item in navItems"
                    @click="store.setActiveTab(item.key as any)">{{ item.text }}
                    <span class="absolute top-0 -right-5 bottom-0 w-0.5 bg-emerald-500 transition"
                        :class="[item.key === store.activeTab ? 'opacity-100' : 'opacity-0 group-hover:opacity-100']" />
                </button>
            </ul>
            <PortalInstructionsGettingStarted v-if="store.activeTab === 'GETTING_STARTED'" />
            <PortalInstructionsCreateAccount v-if="store.activeTab === 'CREATE_ACCOUNT'" />
            <PortalInstructionsInstallApp v-if="store.activeTab === 'INSTALL_APP'" />
            <PortalInstructionsEngage v-if="store.activeTab === 'ENGAGE'" />
        </div>
    </div>
</template>

<script setup lang="ts">
import useStore from "./state";
const store = useStore()
const navItems = [
    {
        key: "GETTING_STARTED",
        text: "Wie Du anfangen kannst"
    },
    {
        key: "CREATE_ACCOUNT",
        text: "Einen Account erstellen"
    },
    {
        key: "INSTALL_APP",
        text: "Die App installieren"
    },
    {
        key: "ENGAGE",
        text: "Anfangen, Dich einzubringen"
    }
]
</script>