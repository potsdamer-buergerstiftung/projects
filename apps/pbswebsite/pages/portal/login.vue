<template>
    <div>
        <PageTitle title="Log-in">
            <template #description>
                <p class="max-w-2xl">
                    Unser Freilligenportal vernetzt Dich und bietet Dir einen Überblick über alles, was in der
                    Bürgerstiftung passiert und über die Sachen, für die Du Dich engagieren kannst.
                </p>
            </template>
        </PageTitle>
        <section class="py-16">
            <div class="container mx-auto px-4">
                <PortalLoginForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "portal"
})
</script>